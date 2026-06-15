# 🌊 Marketplace Nautico

Homepage del marketplace nautico italiano. Barche da noleggiare, corsi di vela e motore, scuole per la patente nautica — tutto in un'unica piattaforma.

🌐 **Live:** (https://marioalfio.github.io/marketplace_gommone/)

---

## ✨ Funzionalità

- 🗂️ 3 categorie filtrabili: **Barche**, **Corsi**, **Scuole**
- 🃏 Card con foto, info e CTA (calendario o WhatsApp)
- ⛵ Link diretto al sito noleggio gommone (`sito_gommone/`)
- 💬 WhatsApp precompilato per corsi e scuole
- 📱 Responsive mobile-first
- 🎨 Dark design coerente con sito_gommone

## 📁 Struttura

```
marketplace-nautico/
├── index.html          # Homepage marketplace
├── css/
│   └── style.css       # Design system
├── js/
│   ├── data.js         # Dati (fake → Supabase in futuro)
│   └── homepage.js     # Logica render + filtri
├── images/             # Foto future
└── sito_gommone/       # Sito noleggio gommone (intatto)
```

## ⚙️ Aggiungere una nuova barca/corso/scuola

Modifica `js/data.js` — aggiungi un oggetto all'array corretto:

```js
// Nuova barca:
DATI.barche.push({
  id: 4, nome: 'La mia barca', foto: 'https://...', ...
});
```

## 🗄️ Migrazione a Supabase (quando sei pronto)

1. Crea un progetto su [supabase.com](https://supabase.com)
2. Crea le tabelle `barche`, `corsi`, `scuole` (stesso schema di `data.js`)
3. In `homepage.js` sostituisci `DATI[categoria]` con:
   ```js
   const res = await fetch(`${SUPABASE_URL}/rest/v1/${categoria}?select=*`,
     { headers: { apikey: SUPABASE_ANON_KEY } });
   const items = await res.json();
   ```

## 🧪 Test locale

```bash
npx serve .
# apri http://localhost:3000
```

## 🚀 Deploy GitHub Pages

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/marioalfio/marioalfio.github.io.git
git push -u origin main
# GitHub → Settings → Pages → Source: main / root
```
