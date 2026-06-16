'use strict';

let currentCategory = 'barche';

const CATEGORY_LABELS = {
  barche: 'Gommoni disponibili',
  corsi:  'Circoli vela e corsi',
  scuole: 'Scuole Patente',
};

// Fix 1: SVG WhatsApp estratto (non più duplicato)
const WA_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// Fix 3: Badge helper unico per tutti i render
function renderBadge(badge, labels) {
  const isVera = badge === 'vera';
  return `<span class="card-badge ${isVera ? 'vera' : 'template'}">${isVera ? labels[0] : labels[1]}</span>`;
}

// Fix 4: Prezzo flessibile (numero o stringa)
function formatPrezzo(prezzo, suffix = '') {
  if (prezzo == null || prezzo === '') return null;
  if (typeof prezzo === 'string') return prezzo;
  return `€${prezzo}${suffix}`;
}

function faviconUrl(sito) {
  try { return `https://www.google.com/s2/favicons?domain=${new URL(sito).hostname}&sz=16`; }
  catch { return ''; }
}

function cleanWA(num) {
  return String(num).replace(/[\s+\-]/g, '');
}

function waLink(numero, testo) {
  return `https://wa.me/${cleanWA(numero)}?text=${encodeURIComponent(testo)}`;
}

// Fix 2: null-check su tutti i campi opzionali
function renderCardBarca(b) {
  const iniziali = b.skipper
    ? b.skipper.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '⛵';
  const prezzoStr = formatPrezzo(b.prezzo, '/gg');

  return `
    <article class="card" role="listitem" aria-label="Barca: ${b.nome}">
      <div class="card-img-wrap">
        <img class="card-img" src="${b.foto}" alt="Foto di ${b.nome}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&h=400&fit=crop&auto=format'" />
        ${renderBadge(b.badge, ['✦ Disponibile', 'Presto disponibile'])}
        ${prezzoStr ? `<span class="card-price-badge">${prezzoStr}</span>` : ''}
      </div>
      <div class="card-body">
        <h2 class="card-title">${b.nome}</h2>
        <div class="card-meta">
          ${b.città  ? `<span class="card-meta-pill">📍 ${b.città}</span>`  : ''}
          ${b.tratta ? `<span class="card-meta-pill">🗺️ ${b.tratta}</span>` : ''}
        </div>
        <p class="card-desc">${b.descrizione || ''}</p>
        ${b.skipper ? `
        <div class="card-skipper">
          <div class="card-skipper-icon" aria-hidden="true">${iniziali}</div>
          <span>Skipper: <strong style="color:var(--white)">${b.skipper}</strong></span>
        </div>` : ''}
        <a class="card-cta cta-barca" href="${b.sito || '#'}" aria-label="Vedi disponibilità per ${b.nome}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
            stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Vedi disponibilità
        </a>
      </div>
    </article>
  `;
}

function renderCardCorso(c) {
  const tipoIcon = c.tipo === 'Vela' ? '⛵' : '🚤';
  const durataStr = c.durata != null
    ? (typeof c.durata === 'number' ? `${c.durata}h` : c.durata)
    : null;
  const prezzoStr = formatPrezzo(c.prezzo);
  const msg = `Ciao! Sono interessato al corso "${c.nome}" a ${c.città}. Potete darmi più informazioni?`;

  return `
    <article class="card" role="listitem" aria-label="Corso: ${c.nome}">
      <div class="card-img-wrap">
        <img class="card-img" src="${c.foto}" alt="Foto del corso ${c.nome}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop'" />
        ${renderBadge(c.badge, ['✦ Attivo', 'In arrivo'])}
        ${prezzoStr ? `<span class="card-price-badge">${prezzoStr}</span>` : ''}
      </div>
      <div class="card-body">
        <h2 class="card-title">${c.nome}</h2>
        <div class="card-meta">
          ${c.tipo    ? `<span class="card-meta-pill">${tipoIcon} ${c.tipo}</span>` : ''}
          ${c.città   ? `<span class="card-meta-pill">📍 ${c.città}</span>`         : ''}
          ${durataStr ? `<span class="card-meta-pill">⏱️ ${durataStr}</span>`       : ''}
        </div>
        <p class="card-desc">${c.descrizione || ''}</p>
        ${c.scuola ? `
        <div class="card-skipper">
          ${c.sito
            ? `<a href="${c.sito}" class="card-site-inline" target="_blank" rel="noopener noreferrer"><img src="${faviconUrl(c.sito)}" width="14" height="14" alt="" aria-hidden="true" /> ${c.scuola}</a>`
            : `<span>${c.scuola}</span>`}
        </div>` : ''}
        <a class="card-cta cta-wa" href="${waLink(c.whatsapp, msg)}" target="_blank" rel="noopener noreferrer"
          aria-label="Richiedi info via WhatsApp per ${c.nome}">
          ${WA_ICON} Info via WhatsApp
        </a>
      </div>
    </article>
  `;
}

function renderCardScuola(s) {
  const msg = `Ciao! Sono interessato alla patente "${s.tipoPatente}" con ${s.nome}. Potete darmi informazioni su costi e disponibilità?`;

  return `
    <article class="card" role="listitem" aria-label="Scuola: ${s.nome}">
      <div class="card-img-wrap">
        <img class="card-img" src="${s.foto}" alt="Foto di ${s.nome}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=400&fit=crop'" />
        ${renderBadge(s.badge, ['✦ Attiva', 'In arrivo'])}
      </div>
      <div class="card-body">
        <h2 class="card-title">${s.nome}</h2>
        <div class="card-meta">
          ${s.tipoPatente ? `<span class="card-meta-pill">🪪 ${s.tipoPatente}</span>` : ''}
          ${s.città       ? `<span class="card-meta-pill">📍 ${s.città}</span>`       : ''}
        </div>
        <p class="card-desc">${s.descrizione || ''}</p>
        ${s.email ? `
        <div class="card-skipper">
          <div class="card-skipper-icon" aria-hidden="true">✉️</div>
          <span>${s.email}</span>
        </div>` : ''}
        ${s.sito ? `
        <div class="card-skipper">
          <a href="${s.sito}" class="card-site-inline" target="_blank" rel="noopener noreferrer"><img src="${faviconUrl(s.sito)}" width="14" height="14" alt="" aria-hidden="true" /> ${s.nome}</a>
        </div>` : ''}
        <a class="card-cta cta-wa" href="${waLink(s.whatsapp, msg)}" target="_blank" rel="noopener noreferrer"
          aria-label="Contatta ${s.nome} via WhatsApp">
          ${WA_ICON} Contatta la scuola
        </a>
      </div>
    </article>
  `;
}

function renderSkeletons(n = 3) {
  return Array.from({ length: n }, () => `
    <div class="skeleton-card" aria-hidden="true">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line w-70"></div>
        <div class="skeleton-line w-50"></div>
        <div class="skeleton-line w-90"></div>
        <div class="skeleton-line w-70"></div>
      </div>
    </div>
  `).join('');
}

// Fix 5: Stats aggiornate dai dati reali
function updateStats() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('stat-barche', DATI.barche.length);
  set('stat-corsi',  DATI.corsi.length);
  set('stat-scuole', DATI.scuole.length);
}

function render() {
  const listino = document.getElementById('listino');
  const labelEl = document.getElementById('category-label');
  const countEl = document.getElementById('category-count');

  listino.innerHTML = renderSkeletons(3);
  labelEl.textContent = CATEGORY_LABELS[currentCategory] || '';

  setTimeout(() => {
    const items = DATI[currentCategory] || [];
    countEl.textContent = items.length > 0
      ? `${items.length} risultat${items.length === 1 ? 'o' : 'i'}`
      : '';

    if (items.length === 0) {
      listino.innerHTML = `
        <div class="empty-state" role="status">
          <span class="empty-state-icon">🔍</span>
          <p class="empty-state-text">Nessun risultato per questa categoria.</p>
        </div>
      `;
      return;
    }

    const renderFn = { barche: renderCardBarca, corsi: renderCardCorso, scuole: renderCardScuola }[currentCategory];

    // Fix 6: Reset switching prima di ri-aggiungere per retriggherare l'animazione
    listino.classList.remove('switching');
    listino.innerHTML = items.map(item => renderFn(item)).join('');
    void listino.offsetWidth;
    listino.classList.add('switching');

  }, 180);
}

function setupNavListeners() {
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      if (category === currentCategory) return;
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentCategory = category;
      render();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  render();
  setupNavListeners();
});
