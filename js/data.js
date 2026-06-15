/* ════════════════════════════════════════════════════════
   MARKETPLACE NAUTICO — js/data.js
   Dati fake per MVP. Struttura pronta per migrazione
   a Supabase: basta sostituire questo file con un fetch().
   ════════════════════════════════════════════════════════ */

'use strict';

/**
 * Oggetto globale DATI — unica fonte di verità per l'MVP.
 *
 * Quando integrerai Supabase, questo file diventa superfluo:
 * homepage.js farà un fetch() alle tabelle del DB e riceverà
 * lo stesso schema di oggetti definito qui sotto.
 */
const DATI = {

  /* ──────────────────────────────────────────
     BARCHE
     Campi: id, nome, foto, badge ('vera'|'template'),
             tratta, città, prezzo (€/giorno),
             skipper, whatsapp, sito
  ────────────────────────────────────────── */
  barche: [
    {
      id:          1,
      nome:        'Gommone Rosso',
      foto:        'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&h=400&fit=crop&auto=format',
      badge:       'vera',
      tratta:      'Terracina → Isole Pontine',
      città:       'Terracina',
      prezzo:      350,
      descrizione: 'Gommone 8m, motore 200cv, fino a 8 persone. Skipper incluso. Perfetto per esplorare le calette di Ponza e Zannone.',
      skipper:     'Marco Esposito',
      whatsapp:    '393331234567',
      sito:        'sito_gommone/',
    },
    {
      id:          2,
      nome:        'Barca Vela Lusso',
      foto:        'https://images.unsplash.com/photo-1595351298020-038700609878?w=600&h=400&fit=crop&auto=format',
      badge:       'template',
      tratta:      'Roma (Ostia) → Circeo',
      città:       'Roma',
      prezzo:      300,
      descrizione: 'Barca a vela 10m, 6 posti letto, attrezzatura completa. Ideale per weekend in crociera lungo la costa laziale.',
      skipper:     'Luigi Ferretti',
      whatsapp:    '393339876543',
      sito:        'sito_gommone/',
    },
    {
      id:          3,
      nome:        'Yacht Genova',
      foto:        'https://images.unsplash.com/photo-1567679243124-a9c7d7ce87e3?w=600&h=400&fit=crop&auto=format',
      badge:       'template',
      tratta:      'Genova → Portofino',
      città:       'Genova',
      prezzo:      500,
      descrizione: 'Yacht 14m, lusso completo, 8 posti. Rotta panoramica verso Portofino e le Cinque Terre. Equipaggio incluso.',
      skipper:     'Andrea Conti',
      whatsapp:    '393345678901',
      sito:        'sito_gommone/',
    },
  ],

  /* ──────────────────────────────────────────
     CORSI
     Campi: id, nome, foto, badge, tipo ('Vela'|'Motore'),
             città, durata (ore), prezzo, scuola,
             descrizione, whatsapp
  ────────────────────────────────────────── */
  corsi: [
    {
      id:          1,
      nome:        'Corso Vela Base',
      foto:        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&auto=format',
      badge:       'vera',
      tipo:        'Vela',
      città:       'Terracina',
      durata:      24,
      prezzo:      200,
      scuola:      'Circolo Vela Terracina',
      descrizione: 'Corso base 3 giorni. Teoria + pratica in mare. Include patentino di sicurezza e attestato finale riconosciuto.',
      whatsapp:    '393331234567',
    },
    {
      id:          2,
      nome:        'Corso Motore Avanzato',
      foto:        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&h=400&fit=crop&auto=format',
      badge:       'template',
      tipo:        'Motore',
      città:       'Roma',
      durata:      16,
      prezzo:      250,
      scuola:      'Marina di Roma Sailing',
      descrizione: 'Corso avanzato per chi ha già esperienza. Navigazione notturna, manovre in porto, meteorologia applicata.',
      whatsapp:    '393339876543',
    },
  ],

  /* ──────────────────────────────────────────
     SCUOLE
     Campi: id, nome, foto, badge, tipoPatente,
             città, descrizione, telefono?,
             email?, whatsapp
  ────────────────────────────────────────── */
  scuole: [
    {
      id:          1,
      nome:        'Scuola Patente Terracina',
      foto:        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=400&fit=crop&auto=format',
      badge:       'vera',
      tipoPatente: 'Entro 12 miglia',
      città:       'Terracina',
      descrizione: 'Scuola autorizzata MIMS. Corsi intensivi weekend o settimanali. Tasso di promozione 95%. Lezioni in aula e in mare.',
      telefono:    '+39 0773 123 456',
      email:       'info@scuolaterracina.it',
      whatsapp:    '393331234567',
    },
    {
      id:          2,
      nome:        'Patente Express Roma',
      foto:        'https://images.unsplash.com/photo-1527593897040-ff5c621c8ef6?w=600&h=400&fit=crop&auto=format',
      badge:       'template',
      tipoPatente: 'Senza limiti',
      città:       'Roma',
      descrizione: 'Preparazione rapida patente senza limiti. Corso intensivo 5 giorni. Materiale didattico incluso. Esame garantito.',
      telefono:    '+39 06 987 6543',
      email:       'info@patenteexpress.it',
      whatsapp:    '393339876543',
    },
  ],

};

/* ────────────────────────────────────────────────────────
   FUTURE SUPABASE INTEGRATION
   Quando sarà il momento, sostituisci il blocco "const DATI"
   con questa funzione asincrona in homepage.js:

   async function fetchDati(categoria) {
     const res = await fetch(
       `${SUPABASE_URL}/rest/v1/${categoria}?select=*`,
       { headers: { apikey: SUPABASE_ANON_KEY } }
     );
     return res.json();
   }

   Stesso schema, zero refactoring sulla UI.
──────────────────────────────────────────────────────── */
