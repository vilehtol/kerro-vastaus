/* ========== APP.JS — Älypää-Visa game logic ========== */

// ---------- DOM references ----------
const startScreen       = document.getElementById('start-screen');
const quizBox           = document.getElementById('quiz-box');
const questionElement   = document.getElementById('question');
const optionsElement    = document.getElementById('options');
const explanationElement= document.getElementById('explanation');
const nextButton        = document.getElementById('next-btn');
const scoreElement      = document.getElementById('score');
const progressFill      = document.getElementById('progress-fill');
const highScoreElement  = document.getElementById('high-score');
const shareButton       = document.getElementById('share-btn');
const installBanner     = document.getElementById('install-banner');

// ---------- State ----------
let peliKysymykset       = [];
let currentQuestionIndex = 0;
let score                = 0;
let valittuMaara         = 0;

// ---------- PWA: Service Worker ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('SW registered:', reg.scope);

        // Check for updates every 60 seconds
        setInterval(() => reg.update(), 60 * 1000);

        // When a new SW is waiting, reload to get fresh version
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          if (!newSW) return;
          newSW.addEventListener('statechange', () => {
            if (newSW.state === 'activated') {
              // Only auto-reload if user is on start screen (not mid-quiz)
              if (startScreen && startScreen.style.display !== 'none') {
                window.location.reload();
              }
            }
          });
        });
      })
      .catch(err => console.warn('SW registration failed:', err));
  });
}

// ---------- PWA: Install prompt ----------
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (installBanner) {
    installBanner.style.display = 'block';
    installBanner.addEventListener('click', async () => {
      installBanner.style.display = 'none';
      deferredInstallPrompt.prompt();
      const result = await deferredInstallPrompt.userChoice;
      console.log('Install prompt result:', result.outcome);
      deferredInstallPrompt = null;
    });
  }
});

// ---------- Utility: Fisher-Yates shuffle ----------
function sekoita(array) {
  const kopio = [...array];
  for (let i = kopio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopio[i], kopio[j]] = [kopio[j], kopio[i]];
  }
  return kopio;
}

// ---------- localStorage high scores ----------
function getHighScore(count) {
  try {
    return parseInt(localStorage.getItem(`visa_high_${count}`)) || 0;
  } catch { return 0; }
}

function setHighScore(count, score) {
  try { localStorage.setItem(`visa_high_${count}`, score); } catch {}
}

// ---------- Smart question selection (avoid repeats across games) ----------
function getRecentlySeenIds() {
  try {
    return JSON.parse(localStorage.getItem('visa_seen') || '[]');
  } catch { return []; }
}

function markQuestionsAsSeen(questions) {
  try {
    let seen = getRecentlySeenIds();
    const newIds = questions.map(q => q.question);
    seen = [...seen, ...newIds];
    // Keep only the last N entries so old questions rotate back
    const keepCount = Math.floor(kaikkiKysymykset.length * 0.6);
    if (seen.length > keepCount) {
      seen = seen.slice(seen.length - keepCount);
    }
    localStorage.setItem('visa_seen', JSON.stringify(seen));
  } catch {}
}

function smartSelect(count) {
  const seen = new Set(getRecentlySeenIds());
  const unseen = kaikkiKysymykset.filter(q => !seen.has(q.question));
  const alreadySeen = kaikkiKysymykset.filter(q => seen.has(q.question));

  // Prioritize unseen, fill rest from seen (all shuffled)
  const pool = [...sekoita(unseen), ...sekoita(alreadySeen)];
  const selected = pool.slice(0, count);

  // Re-shuffle selected so order is random
  return sekoita(selected);
}

// ---------- Start game ----------
function startQuiz(maara) {
  valittuMaara = maara;

  // Switch view
  startScreen.style.display = 'none';
  quizBox.style.display = 'block';

  // Reset state
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  updateProgress();

  // Hide result elements
  if (shareButton)     shareButton.style.display = 'none';
  if (highScoreElement) highScoreElement.style.display = 'none';

  // Smart selection: prioritize questions you haven't seen recently
  const maksimi = Math.min(maara, kaikkiKysymykset.length);
  peliKysymykset = smartSelect(maksimi);

  // Mark these questions as seen for future games
  markQuestionsAsSeen(peliKysymykset);

  showQuestion();
}

// Expose startQuiz globally (called from HTML onclick)
window.startQuiz = startQuiz;

// ---------- Progress bar ----------
function updateProgress() {
  if (!progressFill) return;
  const total = peliKysymykset.length || 1;
  const pct = (currentQuestionIndex / total) * 100;
  progressFill.style.width = `${pct}%`;
}

// ---------- Show question ----------
function showQuestion() {
  resetState();
  updateProgress();

  const q = peliKysymykset[currentQuestionIndex];
  questionElement.innerText =
    `Kysymys ${currentQuestionIndex + 1}/${peliKysymykset.length}: ${q.question}`;

  // Shuffle answer options too!
  const shuffledOptions = sekoita(q.answerOptions);

  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option.text;
    button.classList.add('btn');
    if (option.isCorrect) button.dataset.correct = 'true';
    if (option.rationale) button.dataset.rationale = option.rationale;
    button.addEventListener('click', selectAnswer);
    optionsElement.appendChild(button);
  });
}

// ---------- Reset between questions ----------
function resetState() {
  nextButton.style.display = 'none';
  explanationElement.style.display = 'none';
  explanationElement.innerText = '';
  while (optionsElement.firstChild) {
    optionsElement.removeChild(optionsElement.firstChild);
  }
}

// ---------- Answer selection ----------
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';

  // Haptic feedback on mobile
  if (navigator.vibrate) {
    navigator.vibrate(isCorrect ? [30] : [50, 30, 50]);
  }

  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
    scoreElement.innerText = score;
    explanationElement.innerText = '✅ Oikein! ' + (selectedBtn.dataset.rationale || '');
  } else {
    selectedBtn.classList.add('wrong');
    // Highlight the correct answer
    Array.from(optionsElement.children).forEach(btn => {
      if (btn.dataset.correct === 'true') {
        btn.classList.add('correct');
        explanationElement.innerText =
          `❌ Väärin. Oikea vastaus: ${btn.innerText}. ${btn.dataset.rationale || ''}`;
      }
    });
  }

  explanationElement.style.display = 'block';

  // Disable all buttons
  Array.from(optionsElement.children).forEach(btn => { btn.disabled = true; });

  nextButton.innerText = 'Seuraava kysymys ➜';
  nextButton.style.display = 'block';
}

// ---------- Next question ----------
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < peliKysymykset.length) {
    showQuestion();
  } else {
    showScore();
  }
}
window.nextQuestion = nextQuestion;

// ---------- End screen ----------
function showScore() {
  resetState();
  updateProgress(); // fill to 100%
  if (progressFill) progressFill.style.width = '100%';

  const total = peliKysymykset.length;
  const pct = Math.round((score / total) * 100);

  // Emoji based on performance
  let emoji = '🤔';
  if (pct >= 90)      emoji = '🏆';
  else if (pct >= 70) emoji = '🎉';
  else if (pct >= 50) emoji = '👍';
  else if (pct >= 30) emoji = '😅';
  else                emoji = '💪';

  questionElement.innerHTML = `
    <div class="result-emoji">${emoji}</div>
    <div class="result-score">${score} / ${total} oikein</div>
    <div class="result-percent">${pct}%</div>
  `;

  // High score check
  const prev = getHighScore(valittuMaara);
  if (score > prev) {
    setHighScore(valittuMaara, score);
    if (highScoreElement) {
      highScoreElement.innerText = '🎖️ Uusi ennätys!';
      highScoreElement.className = 'high-score new-record';
      highScoreElement.style.display = 'block';
    }
  } else if (prev > 0 && highScoreElement) {
    highScoreElement.innerText = `Ennätys: ${prev}/${valittuMaara}`;
    highScoreElement.className = 'high-score';
    highScoreElement.style.display = 'block';
  }

  // Share button (Web Share API)
  if (navigator.share && shareButton) {
    shareButton.style.display = 'block';
    shareButton.onclick = async () => {
      try {
        await navigator.share({
          title: 'Älypää-Visa tulos',
          text: `Sain ${score}/${total} (${pct}%) Älypää-Visassa! Pystytkö parempaan? 🧠`,
          url: window.location.href
        });
      } catch (err) {
        // user cancelled or error — ignore
      }
    };
  }

  // "Play again" button
  nextButton.innerText = '🔄 Pelaa uudelleen';
  nextButton.style.display = 'block';
  nextButton.onclick = palaaAlkuvalikkoon;
}

// ---------- Return to menu ----------
function palaaAlkuvalikkoon() {
  quizBox.style.display = 'none';
  startScreen.style.display = 'block';
  if (shareButton) shareButton.style.display = 'none';
  if (highScoreElement) highScoreElement.style.display = 'none';
  // Restore next button's normal handler
  nextButton.onclick = nextQuestion;
}
