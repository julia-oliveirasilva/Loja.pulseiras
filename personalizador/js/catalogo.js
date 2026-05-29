// ════════════════════════════════
// js/catalog.js — Catálogo, filtros e tabs
// ════════════════════════════════

const categories   = ['todos', ...new Set(products.map(p => p.category))];
let   activeFilter  = 'todos';
let   activeAudience = 'adulta';

// ── TABS INFANTIL / ADULTA ──
function setAudience(audience, btn) {
  activeAudience = audience;
  document.querySelectorAll('.audience-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

// ── FILTROS DE CATEGORIA ──
function initFilters() {
  const filterBar = document.getElementById('filterBar');
  if (!filterBar) return;
  filterBar.innerHTML = '';

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === activeFilter ? ' active' : '');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.onclick = () => {
      activeFilter = cat;
      filterBar.querySelectorAll('.filter-btn').forEach((b, i) => {
        b.classList.toggle('active', categories[i] === activeFilter);
      });
      renderProducts();
    };
    filterBar.appendChild(btn);
  });
}

// ── GRID DE PRODUTOS ──
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let list = products.filter(p => p.audience === activeAudience);
  if (activeFilter !== 'todos') {
    list = list.filter(p => p.category === activeFilter);
  }

  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--gray);font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-style:italic">
        Nenhuma pulseira encontrada nessa combinação... ainda! 🌸
      </div>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    const audienceBadge = p.audience === 'infantil'
      ? `<span class="product-tag-audience">🧒 Infantil</span>`
      : '';
    card.innerHTML = `
      <div class="product-img" style="background:${p.color}">
        ${p.isNew ? '<span class="product-tag-new">Novo</span>' : ''}
        ${audienceBadge}
        <img src="${p.img}" alt="${p.name}">
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">R$ ${p.price},00</div>
          <button class="view-btn" onclick="openDetail(${p.id})">Ver detalhes</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ── DEPOIMENTOS ──
function initReviews() {
  const rGrid = document.getElementById('reviewsGrid');
  if (!rGrid) return;
  reviews.forEach(r => {
    rGrid.innerHTML += `
      <div class="review-card reveal">
        <div class="stars">${'★'.repeat(r.stars)}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-author">
          <div class="review-avatar">${r.avatar}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-loc">${r.loc}</div>
          </div>
        </div>
      </div>`;
  });
}