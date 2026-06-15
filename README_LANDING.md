# 📋 README - LANDING PAGE (SERVIZI)

## 📍 Cosa deve fare questa pagina

La landing page è una **sales page** che vende i tuoi servizi ai proprietari di barche, corsi e scuole.

**Obiettivi:**
- Convincere il proprietario che vale la pena pagarti
- Mostrare chiaramente i 4 servizi e i prezzi
- Guidare l'utente a cliccare il bottone WhatsApp
- Funzionare perfettamente su mobile (perché lo aprirà da WhatsApp)

**Non è un marketplace** (come homepage). È pura **vendita**.

---

## 🎯 User journey (Come funziona)

```
PROPRIETARIO BARCA RICEVE MESSAGGIO WHATSAPP:
"Ciao! Ho creato una piattaforma per mettere online la tua barca.
Guarda qui: [link landing page]"
    ↓
APRE IL LINK DA WHATSAPP (su mobile)
    ↓
VEDE HERO SECTION:
"Metti la tua barca online. Ricevi clienti ogni giorno."
    ↓
SCORRE DOWN
    ↓
VEDE I 4 SERVIZI CON PREZZI
    ↓
LEGGE DESCRIZIONI, CAPISCE IL VALORE
    ↓
CLICCA BOTTONE "Contattami via WhatsApp"
    ↓
SI APRE WHATSAPP CON MESSAGGIO PRE-COMPILATO
    ↓
SCRIVE RISPOSTA → TU CONCLUDE LA VENDITA
```

---

## 🗂️ Struttura dei file

```
marioalfio.github.io/
│
├── landing.html                  ← LANDING PAGE (il file principale)
│
├── css/
│   ├── style.css                 ← Styling condiviso (colori, fonts)
│   └── landing.css               ← Styling landing (opzionale, se personalizzato)
│
├── images/
│   ├── hero-image.jpg            ← Foto hero section (barca, tramonto, ecc)
│   └── service-icon.png          ← Icone per servizi (opzionale)
│
└── js/
    └── landing.js                ← Logica landing (opzionale, per MVP non serve)
```

---

## 📄 File 1: landing.html (LANDING PAGE)

### Cosa contiene

Un file HTML con questa struttura (sezioni in ordine verticale):

```
<html>
  <head>
    [TITLE, META, LINK CSS]
  </head>
  <body>
    <header>
      [LOGO / NAV MINI]
    </header>
    
    <section class="hero">
      [HEADLINE + SUBHEADLINE + IMMAGINE]
    </section>
    
    <section class="value-prop">
      [3 BULLET POINTS RAPIDI]
    </section>
    
    <section class="services">
      [4 CARD SERVIZI CON PREZZI]
    </section>
    
    <section class="how-it-works">
      [3 STEP PROCESS]
    </section>
    
    <section class="cta">
      [BOTTONE WHATSAPP GRANDE]
    </section>
    
    <footer>
      [LINK A HOMEPAGE]
    </footer>
  </body>
</html>
```

### Sezione per sezione

#### HEADER (Minimal)
- **Contenuto**: Logo "🌊 Marketplace" + link a homepage
- **Background**: Bianco o grigio chiaro
- **Padding**: 1rem
- **Posizione**: Sticky (rimane in alto mentre scorre)
- **Opzionale**: Nascondi su mobile per più spazio hero

#### HERO SECTION (Il pezzo più importante)
```
Layout:
- Full-width (non max-width container)
- Background: Gradiente blu oppure foto di sfondo (barca/tramonto)
- Min-height: 80-100vh (copre tutta la schermata)
- Flex center (titoli centrati)
- Text-align: center

Contenuto:
- H1: "Metti la tua barca/corso/scuola ONLINE"
  Font-size: 2.5-3rem (grande e impattante)
  Color: white
  Font-weight: bold
  Margin-bottom: 1rem

- Subheadline: "Raggiungi clienti in tutta Italia"
  Font-size: 1.2-1.5rem
  Color: white
  Opacity: 0.9
  Margin-bottom: 2rem

- Immagine (opzionale): Foto barca/corso/scuola
  Se usi, metti come background-image (non <img>)
  Usa un overlay semi-trasparente su testo (rgba nero, opacity 0.5)
  Così il testo resta leggibile

- Bottone CTA: "Scopri i servizi" (oppure "Contattami")
  Background: Giallo/gold (#fbbf24) oppure blu
  Text: Blu scuro oppure bianco (contrasto)
  Padding: 1rem 2rem
  Font-size: 1.1rem
  Hover: Cambio colore
```

#### VALUE PROPOSITION (3 bullet points)
```
Layout:
- Background: Bianco oppure grigio chiaro (#f5f5f5)
- Padding: 3rem (top/bottom), 1rem (laterale)
- Text-align: center

Contenuto (3 punti):
- "Pagina online in 48 ore"
- "Calendario live e automatico"
- "Lead generation + Instagram (opzionale)"

Styling:
- Display: Flex o Grid
- 3 colonne desktop, 1 colonna mobile
- Ogni punto ha icona (emoji oppure SVG) + testo
- Icona: 2-3rem size
- Testo: 1rem, colore scuro

Esempio visuale:
[ICON] Pagina in 48 ore
   ↓
Nessuna competenza richiesta
```

#### SERVICES SECTION (4 card servizi)
```
Layout:
- Background: Bianco
- Padding: 3rem
- Grid responsive:
  Desktop: 4 colonne (una per servizio)
  Tablet: 2 colonne
  Mobile: 1 colonna

Card structure:
- Background: Bianco con subtle shadow
- Border-radius: 8px
- Padding: 2rem
- Text-align: center
- Transition hover (scale, shadow)

Contenuto per ogni card:
1. EMOJI/ICONA
   Size: 3rem
   Margin-bottom: 1rem

2. H3: NOME SERVIZIO
   Font-size: 1.3rem
   Font-weight: bold
   Margin-bottom: 0.5rem

3. Breve descrizione (1-2 righe)
   Font-size: 0.95rem
   Color: #666
   Margin-bottom: 1rem

4. PREZZO (il numero più grande)
   Font-size: 2.5rem
   Font-weight: bold
   Color: #fbbf24 (giallo gold) oppure #0369a1 (blu)
   Margin: 1rem 0

5. Frequenza (al mese / per sessione / una volta)
   Font-size: 0.9rem
   Color: #999

6. Cosa è incluso (3-4 bullet points)
   Font-size: 0.85rem
   Color: #555
   List-style: none (togli bullet)
   Margine-bottom: 1.5rem

7. Bottone "Scegli questo" (opzionale)
   Uguale al CTA principale
   Link a WhatsApp con testo pre-compilato

Hover effect:
- Transform: translateY(-5px)
- Box-shadow: più pronunciata
- Transizione smooth 0.3s
```

#### HOW IT WORKS SECTION (3 step process)
```
Layout:
- Background: Grigio chiaro o gradiente blu leggero
- Padding: 3rem
- Text-align: center

Contenuto:
- H2: "Come funziona?"
  Font-size: 2rem
  Margin-bottom: 2rem

3 STEP (verticali su mobile, orizzontali su desktop):
- Display: Flex su desktop, block su mobile
- Justify-content: space-around
- Align-items: flex-start

Per ogni step:
1. NUMERO CIRCOLARE
   Background: #0369a1 oppure #fbbf24
   Color: white oppure #333
   Size: 3rem circle
   Font: 1.5rem bold
   Margin-bottom: 1rem

2. H3: TITOLO STEP
   Font-size: 1.2rem
   Margin-bottom: 0.5rem

3. Descrizione (1-2 righe)
   Font-size: 0.95rem
   Color: #666

Connector tra step (opzionale su desktop):
- Arrow oppure linea
- Color: #ccc
- Non visibile su mobile

Esempio visuale:
  [1]              [2]              [3]
  Mi contatti  →   Mi dai dati   →   Sei online
```

#### CTA SECTION (Call To Action principale)
```
Layout:
- Background: Blu gradiente (#1e3a8a → #0369a1)
- Padding: 3-4rem
- Text-align: center
- Standalone section prima del footer

Contenuto:
- H2: "Pronto a iniziare?"
  Color: white
  Font-size: 2rem
  Margin-bottom: 1.5rem

- Sottotesto (opzionale)
  Color: white
  Opacity: 0.9
  Margin-bottom: 2rem

- BOTTONE WHATSAPP (il bottone più importante)
  Background: #fbbf24 (giallo, contrasta con blu)
  Text: #333 (scuro su giallo)
  Text: "Contattami via WhatsApp"
  Padding: 1.2rem 3rem (grande e evidente)
  Font-size: 1.2rem
  Font-weight: bold
  Border-radius: 6px
  Hover:
    - Background: più scuro (#e5a712)
    - Transform: scale(1.05)
    - Box-shadow: pronunciata
  Cursor: pointer

- Link: https://wa.me/YOUR_NUMBER?text=Ciao%20Mario%20sono%20interessato

- Mobile: Sticky button in fondo (sempre visibile while scrolling)
```

#### FOOTER
```
Layout:
- Background: #333 (grigio scuro)
- Color: white
- Padding: 2rem
- Text-align: center

Contenuto:
- Copyright: "© 2026 Marketplace Nautico"
- Link: "Torna al marketplace" → /
- Link: "Privacy" (opzionale)

Styling:
- Font-size: 0.9rem
- Link color: #fbbf24 (giallo)
- Link hover: underline
```

---

## 🎨 Design & Colori

### Palette colori

```
Blu principale: #0369a1 (corpo, testo importante)
Blu scuro: #1e3a8a (hero, footer, hover dark)
Giallo/oro: #fbbf24 (CTA button, prezzi, accenti)
Bianco: #ffffff (background card, testo su blu)
Grigio chiaro: #f5f5f5 (background sezioni)
Grigio medio: #666 (testo secondario)
Grigio scuro: #333 (footer, testo principale)
```

### Font

```
Heading (H1, H2, H3): Segoe UI, Tahoma, sans-serif (bold)
Body text: Segoe UI, Tahoma, sans-serif (regular)
Size H1: 2.5-3rem
Size H2: 2rem
Size H3: 1.3rem
Size body: 1rem
Size small: 0.9rem
```

### Spacing

```
Sezioni: padding 3rem (top/bottom), 1rem (laterale)
Card: padding 2rem
Button: padding 0.7-1.2rem (dipende da grandezza)
Gap tra elementi: 1-2rem
Margin bottom H1: 1rem
Margin bottom H2: 2rem
Margin bottom H3: 1rem
```

---

## 📝 Testo dei servizi (Copy)

### Servizio 1: LEAD GENERATION

**Emoji**: 📍

**Titolo**: Lead Generation

**Descrizione breve**: Ti trovo i clienti. Tu chiudi il deal.

**Prezzo**: €100

**Frequenza**: Per contatto

**Cosa è incluso:**
- Ricerca contatti attivi nella tua zona
- Controllo qualità
- Passaparola personalizzato
- Nessun impegno a lungo termine

**Quando scegliere questo**: Se sai già gestire prenotazioni (Whatsapp, Octorate, Booking) e vuoi solo nuovi clienti.

---

### Servizio 2: SITO + CALENDAR

**Emoji**: 🌐

**Titolo**: Sito + Calendar

**Descrizione breve**: Pagina online + calendario live aggiornato

**Prezzo**: €100

**Frequenza**: Al mese

**Cosa è incluso:**
- Hosting gratuito sul mio marketplace
- Pagina dedicata con foto
- Calendario live (aggiornamenti via Telegram/WhatsApp)
- Link diretto ai tuoi contatti
- Visibilità nazionale

**Quando scegliere questo**: Se vuoi visibilità online ma non hai tempo per gestire tech.

---

### Servizio 3: FOTO PROFESSIONALI

**Emoji**: 📸

**Titolo**: Foto Professionali

**Descrizione breve**: Sessione fotografica con professionista

**Prezzo**: €100

**Frequenza**: Per sessione

**Cosa è incluso:**
- 2 ore di shooting con fotografo pro
- 50+ foto raw + edited
- Consegna in alta risoluzione
- Diritti di utilizzo (Instagram, sito, Booking)
- Stile: lifestyle + dettagli

**Quando scegliere questo**: Se non hai foto belle oppure le tue sono vecchie.

---

### Servizio 4: INSTAGRAM MANAGEMENT

**Emoji**: 📱

**Titolo**: Instagram Management

**Descrizione breve**: Gestione completa pagina social

**Prezzo**: €300

**Frequenza**: Al mese

**Cosa è incluso:**
- 4-5 post/settimana
- 3-4 stories al giorno
- 2-3 reel al mese (video brevi)
- Risposte ai DM
- Hashtag strategy
- Analytics mensile

**Quando scegliere questo**: Se vuoi social presence forte ma non hai tempo per Instagram.

---

## 🔗 Link WhatsApp per CTA

### Formato generale

```
https://wa.me/NUMERO?text=MESSAGGIO
```

**Dove:**
- `NUMERO`: Il tuo numero internazionale (es: 39333123456, NO +, NO spazi)
- `MESSAGGIO`: URL encoded (spazi = %20, / = %2F, ecc)

### Esempi

**Generico (Hero):**
```
https://wa.me/39333123456?text=Ciao%20Mario%20sono%20interessato
```

**Lead Gen:**
```
https://wa.me/39333123456?text=Ciao%20Mario%20sono%20proprietario%20di%20una%20barca%20e%20sono%20interessato%20al%20servizio%20di%20lead%20generation
```

**Sito + Calendar:**
```
https://wa.me/39333123456?text=Ciao%20Mario%20sono%20interessato%20al%20sito%20con%20calendario
```

**Foto:**
```
https://wa.me/39333123456?text=Ciao%20Mario%20voglio%20una%20sessione%20fotografica%20per%20la%20mia%20barca
```

**Instagram:**
```
https://wa.me/39333123456?text=Ciao%20Mario%20sono%20interessato%20alla%20gestione%20Instagram
```

---

## ✅ Checklist implementazione

### Fase 1: HTML skeleton
- [ ] Crea `landing.html` con tutte le sezioni (header, hero, value-prop, services, how-it-works, cta, footer)
- [ ] Aggiungi testo per ogni sezione
- [ ] Includi link CSS
- [ ] Nessuno styling ancora

### Fase 2: Styling base
- [ ] Crea `css/landing.css` (o aggiungi a `css/style.css`)
- [ ] Styling header (colori, padding)
- [ ] Styling hero (gradiente, text, button)
- [ ] Styling sections (padding, spacing)
- [ ] Font e colori OK?

### Fase 3: Card servizi
- [ ] Card styling (background, shadow, hover)
- [ ] Prezzo prominente
- [ ] Contenuto leggibile
- [ ] Layout responsive

### Fase 4: How It Works
- [ ] 3 step visibili
- [ ] Numeri cerchiati
- [ ] Connectors tra step (opzionale)
- [ ] Responsive

### Fase 5: CTA & Footer
- [ ] Bottone WhatsApp grande e evidente
- [ ] Link WhatsApp corretto (con tuo numero)
- [ ] Footer con link a homepage
- [ ] Colori contrastanti

### Fase 6: Testing
- [ ] Test su mobile (Chrome DevTools)
- [ ] Test su desktop
- [ ] Test bottone WhatsApp (apre WhatsApp)
- [ ] Test hero image (se la usi)
- [ ] Test link homepage

### Fase 7: Polish
- [ ] Hover effects smooth (0.3s transition)
- [ ] Spacing coerente
- [ ] Testo allineato e leggibile
- [ ] Immagini caricate (hero, product icons)

### Fase 8: Deploy
- [ ] Push su GitHub
- [ ] Testa su https://marioalfio.github.io/landing.html
- [ ] Condividi link con proprietari

---

## 📸 Immagini da usare

### Hero image
Opzioni:
1. **Stock photo**: Unsplash/Pexels - Cerca "sailing", "boat sunset", "sailboat"
2. **Tua foto**: Se hai foto bella di una barca/corso
3. **Gradiente solo**: Senza immagine, just background gradient (più semplice)

Se usi immagine:
- Dimensioni: Min 1920x1080px
- Formato: JPG (compresso)
- Carica su Imgur o GitHub `/images/`

### Service icons
Opzioni:
1. **Emoji**: 📍 📚 🎓 (semplicissimo)
2. **SVG**: Icone mini da flaticon.com oppure heroicons.com
3. **Font icons**: Font Awesome (ma richiede CDN)

**Per MVP: Usa emoji (0 fatica, funziona perfetto).**

---

## 🎯 Consigli design

1. **Hero impattante**: È il primo che vede. Fallo bello (foto + testo grande)

2. **Prezzo evidente**: Quando vede una card, il prezzo deve saltare all'occhio. Grande, bold, colore diverso

3. **CTA button**: Deve essere chiaro dove cliccare. Giallo su blu funziona bene (contrasto)

4. **Mobile first**: Su mobile il bottone WhatsApp deve essere sticky (visibile sempre in fondo)

5. **Copy semplice**: Non scrivere tanto. Frasi corte, linguaggio diretto

6. **Trust signals**: Quando avrai clienti veri, aggiungi testimonials

7. **Colore coerente**: Usa gli stessi colori della homepage (continuità brand)

---

## 📊 Psychological tricks (Vendita)

1. **Scarcity**: "Posti limitati" oppure "Promo entro giugno" (opzionale)

2. **Social proof**: Screenshot clienti contenti (quando ne avrai)

3. **Clear value**: Per ogni servizio, spiega il VALORE ("Ti trovo i clienti") non la feature ("Ricerca contatti")

4. **Price anchoring**: Se vendi foto pro a €100, gli service card da €300/mese sembrano poco costosi

5. **CTA urgency**: "Contattami adesso" vs "Contattami" (primo è più urgente)

6. **Limited info**: Non scrivere saggi. Punti rapidi, bullet lists

---

## 🔄 Conversione landing → Cliente

**Flusso ideale:**
1. Proprietario clicca WhatsApp
2. Apre chat
3. Ti scrive: "Ciao sono interessato"
4. Tu rispondi in 5 minuti (importante!)
5. Fai domande: Che barca? Dove? Quali servizi?
6. Gli presenti l'offerta
7. Lui paga, inizi a lavorare

**Tempo dal WhatsApp al pagamento: 24-72 ore max.**

---

## ✨ Elemento bonus (Nice to have per MVP+)

**Pricing comparison table** (opzionale, per MVP non necessario):

```
Tabella che confronta i 4 servizi:

| Servizio | Prezzo | Impegno | Tempo setup | Ideale per |
|---|---|---|---|---|
| Lead Gen | €100 | Una volta | 1 giorno | Chi sa gestire |
| Sito | €100/mese | Mensile | 48h | Chi vuole online |
| Foto | €100/sessione | Una volta | 1 giorno | Chi ha bruttezza |
| Instagram | €300/mese | Mensile | 5 giorni | Chi vuole visibilità |
```

Aiuta il cliente a scegliere. Non è obbligatorio.

---

## 📚 Riassunto workflow landing

1. Crea `landing.html` (solo HTML)
2. Crea `css/landing.css` (styling)
3. Aggiungi testi per ogni servizio
4. Carica immagini (hero)
5. Test responsive (mobile, tablet, desktop)
6. Verifica link WhatsApp
7. Deploy su GitHub
8. Condividi link con proprietari

**Tempo stimato: 3-4 giorni se lavori 2-3 ore al giorno.**

---

Fine README LANDING PAGE.
