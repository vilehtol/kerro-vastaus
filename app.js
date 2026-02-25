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
let valittuKategoria     = 'Kaikki'; // Oletus

// ---------- PWA: Service Worker ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('SW registered:', reg.scope);
        setInterval(() => reg.update(), 60 * 1000);
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          if (!newSW) return;
          newSW.addEventListener('statechange', () => {
            if (newSW.state === 'activated' && startScreen && startScreen.style.display !== 'none') {
              window.location.reload();
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

// ---------- Smart question selection ----------
function getRecentlySeenIds() {
  try { return JSON.parse(localStorage.getItem('visa_seen') || '[]'); } catch { return []; }
}

function markQuestionsAsSeen(questions) {
  try {
    let seen = getRecentlySeenIds();
    const newIds = questions.map(q => q.question);
    seen = [...seen, ...newIds];
    const keepCount = Math.floor(kaikkiKysymykset.length * 0.6);
    if (seen.length > keepCount) seen = seen.slice(seen.length - keepCount);
    localStorage.setItem('visa_seen', JSON.stringify(seen));
  } catch {}
}

function selectQuestionsByCategory(category) {
  if (!category || category === 'Kaikki') {
    return kaikkiKysymykset;
  }
  // Suodata kategorian mukaan. Jos kysymyksellä ei ole kategoriaa, se lasketaan 'Yleistieto'
  return kaikkiKysymykset.filter(q => (q.category || 'Yleistieto') === category);
}

function smartSelect(count, category) {
  // 1. Hae kaikki tähän kategoriaan kuuluvat kysymykset
  let candidates = selectQuestionsByCategory(category);
  
  // Jos kategoriassa on liian vähän kysymyksiä, täydennä muilla (Shuffle fill)
  if (candidates.length < count) {
    const others = kaikkiKysymykset.filter(q => !candidates.includes(q));
    candidates = [...candidates, ...sekoita(others).slice(0, count - candidates.length)];
  }

  // 2. Jaa nähtyihin ja ei-nähtyihin
  const seenIds = new Set(getRecentlySeenIds());
  const unseen = candidates.filter(q => !seenIds.has(q.question));
  const seen = candidates.filter(q => seenIds.has(q.question));

  // 3. Priorisoi uudet, täytä vanhoilla
  const pool = [...sekoita(unseen), ...sekoita(seen)];
  
  // 4. Palauta haluttu määrä
  return sekoita(pool.slice(0, count));
}

// ---------- Start game ----------
function startQuiz(maara) {
  valittuMaara = maara;
  
  // Hae valittu kategoria dropdownista
  const catSelect = document.getElementById('category-select');
  valittuKategoria = catSelect ? catSelect.value : 'Kaikki';

  // Switch view
  startScreen.style.display = 'none';
  quizBox.style.display = 'block';

  // Reset state
  currentQuestionIndex = 0;
  score = 0;
  if (scoreElement) scoreElement.innerText = score;
  updateProgress();

  if (shareButton) shareButton.style.display = 'none';
  if (highScoreElement) highScoreElement.style.display = 'none';

  // Select questions
  peliKysymykset = smartSelect(maara, valittuKategoria);
  
  // Mark as seen
  markQuestionsAsSeen(peliKysymykset);

  showQuestion();
}
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
  
  // Näytä kategoria jos se on olemassa
  let catText = q.category ? `[${q.category}] ` : '';
  if (valittuKategoria !== 'Kaikki') catText = ''; // Ei tarvi toistaa jos kaikki on samaa

  questionElement.innerText = 
    `Kysymys ${currentQuestionIndex + 1}/${peliKysymykset.length}: ${catText}${q.question}`;

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

// ---------- Reset & Answer & Next (Same as before) ----------
function resetState() {
  if (nextButton) nextButton.style.display = 'none';
  if (explanationElement) {
    explanationElement.style.display = 'none';
    explanationElement.innerText = '';
  }
  while (optionsElement.firstChild) optionsElement.removeChild(optionsElement.firstChild);
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (navigator.vibrate) navigator.vibrate(isCorrect ? [30] : [50, 30, 50]);

  const q = peliKysymykset[currentQuestionIndex];
  let explanationText = '';

  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
    if (scoreElement) scoreElement.innerText = score;
    explanationText = '✅ Oikein! ' + (selectedBtn.dataset.rationale || '');
  } else {
    selectedBtn.classList.add('wrong');
    Array.from(optionsElement.children).forEach(btn => {
      if (btn.dataset.correct === 'true') {
        explanationText = `❌ Väärin. Oikea vastaus: ${btn.innerText}. ${btn.dataset.rationale || ''}`;
        btn.classList.add('correct');
      }
    });
  }

  // Lisää "Tiesitkö että..." -fakta jos se on olemassa
  if (q.didYouKnow) {
    explanationText += `\n\n💡 <strong>Tiesitkö että...</strong>\n${q.didYouKnow}`;
  }

  if (explanationElement) {
    explanationElement.innerHTML = explanationText.replace(/\n/g, '<br>');
    explanationElement.style.display = 'block';
  }

  Array.from(optionsElement.children).forEach(btn => { btn.disabled = true; });
  if (nextButton) {
    nextButton.innerText = 'Seuraava kysymys ➜';
    nextButton.style.display = 'block';
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < peliKysymykset.length) showQuestion();
  else showScore();
}
window.nextQuestion = nextQuestion;

// ---------- End screen ----------
function showScore() {
  resetState();
  updateProgress();
  if (progressFill) progressFill.style.width = '100%';

  const total = peliKysymykset.length;
  const pct = Math.round((score / total) * 100);
  
  let emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '👍' : pct >= 30 ? '😅' : '💪';
  
  questionElement.innerHTML = `
    <div class="result-emoji">${emoji}</div>
    <div class="result-score">${score} / ${total} oikein</div>
    <div class="result-percent">${pct}%</div>
    <div class="subtitle" style="margin-top:10px">${valittuKategoria}-visa</div>
  `;

  if (shareButton) shareButton.style.display = 'block';
  if (nextButton) {
    nextButton.innerText = '🔄 Pelaa uudelleen';
    nextButton.style.display = 'block';
    nextButton.onclick = palaaAlkuvalikkoon;
  }
}

function palaaAlkuvalikkoon() {
  quizBox.style.display = 'none';
  startScreen.style.display = 'block';
  if (shareButton) shareButton.style.display = 'none';
  if (nextButton) nextButton.onclick = nextQuestion;
}
