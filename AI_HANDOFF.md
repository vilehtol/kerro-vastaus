# Älypää-Visa — AI Handoff & Development Guide

> Tämä dokumentti on tarkoitettu tekoälyassistentille, joka jatkaa projektin kehitystä.
> Lue tämä ensin ennen kuin teet mitään muutoksia.

## Yleiskuvaus

**Älypää-Visa** on suomenkielinen tietovisa-PWA (Progressive Web App).
- **Repo**: `https://github.com/vilehtol/kerro-vastaus.git` (public)
- **Live**: `https://vilehtol.github.io/kerro-vastaus/`
- **Hosting**: GitHub Pages, buildaa automaattisesti `master`-branchista
- **Tekniikka**: Puhdas HTML + CSS + JS, ei buildityökaluja, ei frameworkia

## Tiedostorakenne

| Tiedosto | Koko | Kuvaus |
|---|---|---|
| `index.html` | ~3 KB | Pääsivu: kategoriapicker (13 kategoriaa + "Kaikki"), 3 pelimuotoa (10/20/50), PWA-metatagit |
| `style.css` | ~13 KB | Glassmorphism-UI, CSS-muuttujat, animoidut mesh-gradientit, neon glow -napit |
| `app.js` | ~11 KB | Pelilogiikka: `startQuiz()`, `smartSelect()`, kategoriasuodatus, high score, Web Share API |
| `questions.js` | ~539 KB | Kysymyspankki: JS-tiedosto joka exporttaa `kaikkiKysymykset`-arrayn |
| `sw.js` | ~1.7 KB | Service Worker: network-first HTML/JS/CSS, cache-first kuvat |
| `manifest.json` | ~0.5 KB | PWA-manifesti, theme_color `#06080f` |

## Kysymysformaatti

```javascript
// questions.js - header:
// ÄLYPÄÄ VISA v3.0 — 843 kysymystä, kaikissa didYouKnow
const kaikkiKysymykset = [
  {
    "question": "Mikä on Suomen pisin joki?",
    "category": "Maantieto",
    "didYouKnow": "Kemijoki on 550 km pitkä ja se virtaa Lapin halki Perämereen.",
    "answerOptions": [
      { "text": "Kemijoki", "isCorrect": true },
      { "text": "Oulujoki", "isCorrect": false },
      { "text": "Tornionjoki", "isCorrect": false },
      { "text": "Kokemäenjoki", "isCorrect": false }
    ]
  },
  // ...
];
```

### Säännöt uusille kysymyksille

1. **Kieli**: Suomi
2. **Vastausvaihtoehdot**: Tasan 4 kappaletta, tasan 1 oikea (`isCorrect: true`)
3. **didYouKnow**: Pakollinen, 1–3 lausetta, mielenkiintoinen fakta liittyen kysymykseen, suomeksi
4. **category**: Pakollinen, TÄSMÄLLEEN yksi alla olevista kategorioista (case-sensitive)
5. **Ei duplikaatteja**: Tarkista ettei sama kysymys tai hyvin samankaltainen ole jo olemassa

### Sallitut kategoriat (13 kpl)

| Kategoria | Nykyinen määrä | Huomio |
|---|---|---|
| Maantieto | 206 | Suurin kategoria |
| Tiede | 140 | |
| Luonto | 89 | |
| Urheilu | 88 | |
| Historia | 84 | |
| Viihde | 69 | |
| Teknologia | 39 | Lisää tarvitaan |
| Kirjallisuus | 36 | |
| Taide | 25 | Lisää tarvitaan |
| Ruoka & Juoma | 21 | Lisää tarvitaan |
| Musiikki | 17 | Lisää tarvitaan |
| Yleistieto | 16 | Lisää tarvitaan |
| Kulttuuri | 13 | Pienin, lisää tarvitaan |

> **HUOM**: Kategoria "Ruoka & Juoma" sisältää &-merkin. Älä käytä "Ruoka" tai "Ruoka ja Juoma".
> index.html:n `<select>`-elementissä on emoji-ikonit jokaiselle kategorialle.

## Kysymysten lisääminen (step-by-step)

### 1. Generoi kysymykset

Generoi uudet kysymykset JSON-muodossa. Voit käyttää sub-agentteja erissä (~50/erä).

```python
# Tallenna erä väliaikaistiedostoon
import json

new_questions = [
    {
        "question": "...",
        "category": "...",
        "didYouKnow": "...",
        "answerOptions": [
            {"text": "...", "isCorrect": True},
            {"text": "...", "isCorrect": False},
            {"text": "...", "isCorrect": False},
            {"text": "...", "isCorrect": False}
        ]
    },
    # ...
]

with open('/tmp/new_batch.json', 'w') as f:
    json.dump(new_questions, f, ensure_ascii=False, indent=2)
```

### 2. Validoi ja yhdistä

```python
import json, re

# Lue nykyiset kysymykset
with open('questions.js', 'r') as f:
    text = f.read()
arr_match = re.search(r'const kaikkiKysymykset = (\[.*\]);', text, re.DOTALL)
existing = json.loads(arr_match.group(1))

# Lue uudet
with open('/tmp/new_batch.json', 'r') as f:
    new_qs = json.load(f)

# Validoi
VALID_CATS = ["Maantieto","Tiede","Luonto","Urheilu","Historia","Viihde",
              "Teknologia","Kirjallisuus","Taide","Ruoka & Juoma","Musiikki",
              "Yleistieto","Kulttuuri"]
existing_texts = {q['question'].lower().strip() for q in existing}

for q in new_qs:
    assert q['category'] in VALID_CATS, f"Virheellinen kategoria: {q['category']}"
    assert len(q['answerOptions']) == 4, "Pitää olla 4 vaihtoehtoa"
    assert sum(1 for a in q['answerOptions'] if a['isCorrect']) == 1, "Tasan 1 oikea"
    assert q.get('didYouKnow'), "didYouKnow puuttuu"
    assert q['question'].lower().strip() not in existing_texts, f"Duplikaatti: {q['question']}"

# Yhdistä
all_questions = existing + new_qs
total = len(all_questions)

# Kirjoita questions.js
header = f"// ÄLYPÄÄ VISA v3.x — {total} kysymystä, kaikissa didYouKnow\n"
with open('questions.js', 'w') as f:
    f.write(header)
    f.write("const kaikkiKysymykset = ")
    json.dump(all_questions, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Valmis: {total} kysymystä")
```

### 3. Päivitä Service Worker -versio

**KRIITTISTÄ**: Päivitä `sw.js`-tiedoston `CACHE_VERSION` jokaisessa deployssa!

```javascript
// sw.js — vaihda tämä rivi:
const CACHE_VERSION = '3.1.0-uusi-versio';  // <-- uusi versio joka kerta
```

Ilman tätä käyttäjät näkevät vanhan version, koska SW cachettaa kaiken.

### 4. Commit ja push

```bash
git add questions.js sw.js
git commit -m "feat: vX.Y - lisätty N uutta kysymystä, yhteensä TOTAL"
git push origin master
```

GitHub Pages buildaa automaattisesti ~1–2 min sisällä.

## ⚠️ Kriittiset varoitukset

### VS Code -tiedostotyökalut eivät toimi luotettavasti

**ONGELMA**: VS Code:n `read_file` / `replace_string_in_file` -työkalut saattavat näyttää/muokata eri tiedostoversiota kuin mitä WSL-tiedostojärjestelmässä oikeasti on. Tämä aiheuttaa ristiriitoja.

**RATKAISU**: Käytä AINA terminaalikomentoja tiedostojen kirjoittamiseen:
- Python-skripteillä: `python3 -c "..."` tai `python3 /tmp/script.py`
- Heredoc: `cat > tiedosto.js << 'EOF' ... EOF`
- ÄLKÄÄ käyttäkö `create_file` tai `replace_string_in_file` -työkaluja questions.js:ään

### Git-autentikointi

```bash
# Tarkista onko gh cli autentikoitu
gh auth status

# Jos ei, autentikoi:
gh auth login -h github.com -p https -w -s repo,read:org
git config --global credential.helper '!gh auth git-credential'
```

### Tipi (OpenClaw) -yhteys

EC2:lla on vanha kopio reposta, mutta master on totuuden lähde:
- EC2: `i-03da1f2f54d57181b` (eu-north-1)
- Polku: `/home/ec2-user/.openclaw/workspace/projects/kerro-vastaus/`
- **Älä synkkaa EC2:lta** — käytä aina git repoa

## UI-arkkitehtuuri (lyhyesti)

- **Design**: Glassmorphism + neon glow (2026 futuristic)
- **CSS-muuttujat**: `--bg-deep: #06080f`, `--accent-cyan: #00e5ff`, `--accent-magenta: #e040fb`, `--accent-purple: #7c4dff`
- **Fontti**: Inter (Google Fonts)
- **Tausta**: Animoitu mesh-gradientti 5 kelluvalla pallolla
- **Kortit**: `backdrop-filter: blur() + rgba-taustat`
- **Napit**: Neon glow hover-efektillä

## Hyödyllisiä komentoja

```bash
# Kysymysten lukumäärä
python3 -c "import json,re; f=open('questions.js').read(); q=json.loads(re.search(r'const kaikkiKysymykset = (\[.*\]);',f,re.DOTALL).group(1)); print(len(q))"

# Kategoriatilastot
python3 -c "
import json,re
f=open('questions.js').read()
q=json.loads(re.search(r'const kaikkiKysymykset = (\[.*\]);',f,re.DOTALL).group(1))
cats={}
for x in q: cats[x.get('category','?')]=cats.get(x.get('category','?'),0)+1
for c,n in sorted(cats.items(),key=lambda x:-x[1]): print(f'  {c}: {n}')
print(f'Yhteensä: {len(q)}')
"

# Duplikaattien tarkistus
python3 -c "
import json,re
f=open('questions.js').read()
q=json.loads(re.search(r'const kaikkiKysymykset = (\[.*\]);',f,re.DOTALL).group(1))
seen={}
for x in q:
    k=x['question'].lower().strip()
    seen[k]=seen.get(k,0)+1
dupes=[(k,v) for k,v in seen.items() if v>1]
print(f'Duplikaatteja: {len(dupes)}')
for k,v in dupes: print(f'  ({v}x) {k}')
"
```

## Versiohistoria

| Versio | Commit | Kuvaus |
|---|---|---|
| v3.0 | `a85f3d2` | 843 kysymystä, 100% didYouKnow + kategorisoitu |
| - | `69a8a82` | SW cache bust → v3.0.0-glassmorphism |
| - | `92b0919` | UI-uudistus: glassmorphism + neon glow |
