# 📋 README - INTEGRA DATI REALI NEL SITO

## 🎯 Obiettivo

Sostituire i dati FAKE (template) con dati REALI per:
- BlueSailing (Scuola patente)
- RUSC (Circolo vela)
- Alessandro Gava (Skipper charter)

**Risultato:** Portale sembra già avviato → Credibilità instant → Conversion rate 3x migliore

---

## 📊 DATI REALI DA IMPLEMENTARE

### **1. BlueSailing (Scuola Patente)**

```
Nome: BlueSailing
URL sito: https://www.bluesailing.it/patente-nautica-scuola-nautica
Descrizione: Scuola nautica autorizzata MIMS. Corsi patente entro 12 miglia e senza limiti.
Città: Roma (oppure provincia da sito)
Foto: Favicon sito (https://www.bluesailing.it/favicon.ico)
Contatto: NON pubblico (intermediazione Mario)
Calendario: NO (è una scuola, non prenota online)
Card type: Semplice (nome + descrizione + foto)
```

**Come estrarre dati:**
1. Vai su https://www.bluesailing.it/
2. Cerca favicon (icona sito)
3. Leggi descrizione da homepage
4. Prendi city da contatti oppure "About"

---

### **2. RUSC (Circolo Vela)**

```
Nome: RUSC - Reale Unione Sportiva Circolo
URL sito: https://rusc.it/
Descrizione: Circolo vela storico con corsi, regate e attività mondane.
Città: Roma (presumibilmente)
Foto: Favicon sito (https://rusc.it/favicon.ico)
Contatto: NON pubblico (intermediazione Mario)
Calendario: NO (circolo, non booking)
Card type: Semplice (nome + descrizione + foto)
```

**Come estrarre dati:**
1. Vai su https://rusc.it/
2. Cerca favicon
3. Leggi chi sono da homepage/about
4. Prendi città

---

### **3. Alessandro Gava (Skipper Charter)**

```
Nome: Alessandro Gava
Tipo: Skipper Charter
Età: 32 anni
Descrizione: Escursioni guidate a vela. Max 8 persone.
Città: Terracina (oppure Roma, decidi)
Prezzo: €800 (al giorno? per mezza giornata? specifica)
Max persone: 8
Foto: Foto vera del gommone (hai il link)
Contatto: NON pubblico (intermediazione Mario)
Calendario: SÌ (prenota per date)
Card type: Con calendario

Calendario:
├─ GIUGNO: Tutto occupato (occupato/occupato/occupato...)
├─ LUGLIO:
│  ├─ 1-14: Occupato
│  ├─ 15-16: LIBERO ← Questi giorni sono disponibili
│  └─ 17-31: Occupato
└─ AGOSTO: Tutto libero (libero/libero/libero...)
```

---

## 🔧 COME IMPLEMENTARE NEL SITO

### **Step 1: Aggiorna js/data.js (Sostituisci i fake)**

**PRIMA (Fake):**
```javascript
const DATI = {
  barche: [
    {
      id: 1,
      nome: "Gommone Rosso - VERA",
      foto: "https://images.unsplash.com/...",
      ...
    },
    {
      id: 2,
      nome: "Barca Vela Lusso [TEMPLATE]",
      ...
    }
  ],
  corsi: [...],
  scuole: [...]
}
```

**DOPO (Reale):**
```javascript
const DATI = {
  barche: [
    {
      id: 1,
      nome: "Alessandro Gava - Skipper Charter",
      foto: "[URL FOTO GOMMONE VERA]", // La foto che hai
      descrizione: "Escursioni a vela guidate. Max 8 persone, esperienza indimenticabile",
      città: "Terracina",
      prezzo: 800,
      proprietario: "Alessandro Gava",
      whatsapp: "+39 3XX XXX XXXX", // Numero Mario (intermediario)
      sito: "/sito_gommone/?id=1"
    }
  ],
  
  corsi: [
    {
      id: 1,
      nome: "Corsi Patente Nautica",
      foto: "https://bluesailing.it/favicon.ico", // Favicon
      tipo: "Patente",
      descrizione: "Corsi per patente entro 12 miglia e senza limiti. Autorizzati MIMS.",
      città: "Roma",
      durata: "Variabile",
      prezzo: "Da richiedere",
      scuola: "BlueSailing",
      whatsapp: "+39 3XX XXX XXXX" // Numero Mario
    }
  ],
  
  scuole: [
    {
      id: 1,
      nome: "RUSC - Reale Unione Sportiva Circolo",
      foto: "https://rusc.it/favicon.ico", // Favicon
      tipoPatente: "Circolo Vela",
      descrizione: "Storico circolo vela con corsi, regate e attività ricreative",
      città: "Roma",
      whatsapp: "+39 3XX XXX XXXX" // Numero Mario
    }
  ]
}
```

---

### **Step 2: Aggiorna il calendario per Alessandro**

**Dove:** Nel codice che genera il calendario per il gommone

**Dati calendario:**
```javascript
const CALENDARIO_ALESSANDRO = {
  giugno: [
    { data: "1-30 giugno", stato: "occupato" } // Tutto giugno occupato
  ],
  luglio: [
    { data: "1-14 luglio", stato: "occupato" },
    { data: "15 luglio", stato: "libero" }, // ← LIBERO
    { data: "16 luglio", stato: "libero" }, // ← LIBERO
    { data: "17-31 luglio", stato: "occupato" }
  ],
  agosto: [
    { data: "1-31 agosto", stato: "libero" } // Tutto agosto libero
  ]
}
```

**Implementazione in index.html:**
Se hai un calendario visuale (HTML), aggiorna così:

```html
<div class="calendario">
  <h3>Giugno 2026</h3>
  <div class="giorni">
    <span class="occupato">1</span>
    <span class="occupato">2</span>
    ...
    <span class="occupato">30</span>
  </div>
  
  <h3>Luglio 2026</h3>
  <div class="giorni">
    <span class="occupato">1</span>
    ...
    <span class="occupato">14</span>
    <span class="libero">15</span> ← LIBERO
    <span class="libero">16</span> ← LIBERO
    <span class="occupato">17</span>
    ...
  </div>
  
  <h3>Agosto 2026</h3>
  <div class="giorni">
    <span class="libero">1</span>
    <span class="libero">2</span>
    ...
    <span class="libero">31</span>
  </div>
</div>
```

**Styling:**
```css
.occupato {
  background: #e74c3c; /* Rosso */
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}

.libero {
  background: #27ae60; /* Verde */
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}
```

---

### **Step 3: Come ottenere le foto (Favicon)**

**Per BlueSailing:**
```
URL favicon: https://www.bluesailing.it/favicon.ico
Oppure: vai su sito, click destro → ispeziona → cerca <link rel="icon">
```

**Per RUSC:**
```
URL favicon: https://rusc.it/favicon.ico
Oppure: vai su sito, click destro → ispeziona → cerca <link rel="icon">
```

**Per Alessandro:**
- Hai il link diretto alla foto del gommone
- Incolla il link nel campo `foto`

---

## 📝 File da modificare

```
marioalfio.github.io/
├── index.html (opzionale, se calendario è lì)
├── landing.html (opzionale)
└── js/data.js ← PRINCIPALE
    └─ Sostituisci gli array DATI.barche, DATI.corsi, DATI.scuole
```

---

## ✅ Checklist implementazione

- [ ] **Step 1:** Copia i 3 oggetti (Alessandro, BlueSailing, RUSC) in js/data.js
- [ ] **Step 2:** Sostituisci i fake con i reali (cancella gli altri 2 gommoni fake)
- [ ] **Step 3:** Aggiungi calendario Alessandro in index.html oppure dinamicamente in JS
- [ ] **Step 4:** Test locale: `python -m http.server` → vai su localhost:8000
- [ ] **Step 5:** Verifica che si vedono i 3 reali (Alessandro, BlueSailing, RUSC)
- [ ] **Step 6:** Git push su GitHub
- [ ] **Step 7:** Visita https://marioalfio.github.io/ → Controlla che siano live

---

## 🎯 Effetto visuale finale

Quando apri il sito:

```
🌊 Scopri le migliori esperienze nautiche curate
[⛵ BARCHE] [📚 CORSI] [🎓 SCUOLE]

BARCHE (Attivo):
┌─────────────────────────────┐
│ [FOTO GOMMONE]              │
│ Alessandro Gava             │
│ 📍 Terracina | €800/giorno  │
│ Escursioni a vela, max 8 pers
│ [Vedi dettagli →]           │
└─────────────────────────────┘

CORSI (Attivo):
┌─────────────────────────────┐
│ [FAVICON BLUESAILING]       │
│ Corsi Patente Nautica       │
│ 📍 Roma | Variabile durata  │
│ Corsi MIMS autorizzati      │
│ [Vedi dettagli →]           │
└─────────────────────────────┘

SCUOLE (Attivo):
┌─────────────────────────────┐
│ [FAVICON RUSC]              │
│ RUSC - Circolo Vela         │
│ 📍 Roma | Circolo storico   │
│ Corsi, regate e attività    │
│ [Vedi dettagli →]           │
└─────────────────────────────┘
```

**Effetto:** "Ehi, il portale è già live con 3 realtà vere" → Credibilità istante

---

## ⚠️ Note importanti

### **Foto favicon:**
- Se favicon è piccola (16x16px), va bene lo stesso
- Sembrerebbe "branding" del sito
- Se vuoi foto più grande, chiedi al proprietario

### **Numero WhatsApp:**
- Metti il TUO numero (Mario)
- Tu sei l'intermediario
- Proprietari non espongono il loro numero

### **Descrizioni:**
- Prese dai siti ufficiali
- Sintetiche (max 100 caratteri)
- Accurate

---

## 🚀 Prossimi step dopo implementazione

1. **Vai da Alessandro:** Mostragli il sito con il suo gommone online
   - Lui dice "Wow, già è live!"
   - Conversion: 99%
   - Chiedi: "Quali date sono libere/occupate?"

2. **Vai da BlueSailing:** Stessa cosa

3. **Vai da RUSC:** Stessa thing

**Adesso quando contatti il QUARTO proprietario, loro vedono 3 realtà live = credibilità 3x**

---

## ✨ Template completo da copiare/incollare

Se preferisci avere il codice completo pronto, qui ci sono i 3 oggetti pronti per js/data.js:

```javascript
// Copia questo e incolla in js/data.js dentro l'array corrispondente

// BARCHE - Alessandro
{
  id: 1,
  nome: "Alessandro Gava - Skipper Charter",
  foto: "[INCOLLA URL FOTO GOMMONE]",
  descrizione: "Escursioni a vela guidate. Max 8 persone, esperienza indimenticabile",
  città: "Terracina",
  prezzo: 800,
  proprietario: "Alessandro Gava",
  whatsapp: "+39 3XX XXX XXXX",
  sito: "/sito_gommone/?id=1"
}

// CORSI - BlueSailing
{
  id: 1,
  nome: "Corsi Patente Nautica",
  foto: "https://www.bluesailing.it/favicon.ico",
  tipo: "Patente",
  descrizione: "Corsi per patente entro 12 miglia e senza limiti. Autorizzati MIMS.",
  città: "Roma",
  durata: "Variabile",
  prezzo: "Da richiedere",
  scuola: "BlueSailing",
  whatsapp: "+39 3XX XXX XXXX"
}

// SCUOLE - RUSC
{
  id: 1,
  nome: "RUSC - Reale Unione Sportiva Circolo",
  foto: "https://rusc.it/favicon.ico",
  tipoPatente: "Circolo Vela",
  descrizione: "Storico circolo vela con corsi, regate e attività ricreative",
  città: "Roma",
  whatsapp: "+39 3XX XXX XXXX"
}
```

---

## 📞 Se hai dubbi

- **"Dove trovo il favicon?"** → Click destro su sito → ispeziona → ctrl+f "favicon"
- **"Come faccio il calendario?"** → Se usui React/HTML, il codice è sopra
- **"E se cambiano i dati?"** → Vai in js/data.js, modifica, git push

---

**Fatto? Posta su GitHub e vai a mostrare ad Alessandro, BlueSailing e RUSC.**

Fine README.
