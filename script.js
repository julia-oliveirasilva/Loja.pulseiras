/* ══════════════════════════════════════
   PÉROLA & CO — script.js
   Inclui: dados, cursor, marquee, catálogo,
   detalhe, checkout, carrinho, toast, reveal.
══════════════════════════════════════ */
 
// ════════════════════════════════
// DADOS
// ════════════════════════════════
const products = [
  {
    id: 1,
    name: "Aurora de Pérolas",
    category: "pérolas",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    color: "#f5d5db",
    price: 89,
    desc: "Trio de pérolas rosa e creme, delicadas e sofisticadas.",
    fullDesc: "Pulseira confeccionada à mão com pérolas naturais em tons rosa e creme. Fio de nylon resistente com fecho ajustável. Perfeita para presentear ou usar no dia a dia com elegância.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: true
  },
  {
    id: 2,
    name: "Cascata Rosa",
    category: "pérolas",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    color: "#fce4ec",
    price: 75,
    desc: "Pérolas rosadas em degradê, um toque de romantismo.",
    fullDesc: "Pérolas rosadas cuidadosamente selecionadas e dispostas em degradê suave. Cada peça é única e traz um toque especial de romantismo.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: false
  },
  {
    id: 3,
    name: "Sereia Dourada",
    category: "cristais",
    img: "https://images.unsplash.com/photo-1630017624853-3e370c62c8bd?w=600&q=80",
    color: "#fff9e6",
    price: 110,
    desc: "Cristais banhados a ouro com fio de seda trançado.",
    fullDesc: "Cristais lapidados banhados a ouro 18k, entrelaçados em fio de seda natural. Uma peça que remete à magia do fundo do mar, com brilho suave e sofisticado.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: true
  },
  {
    id: 4,
    name: "Miçanga Boho",
    category: "miçangas",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    color: "#f0faf0",
    price: 55,
    desc: "Miçangas coloridas estilo boho, leve e alegre.",
    fullDesc: "Pulseira alegre e colorida com miçangas de vidro no estilo boho chic. Leve, vibrante e cheia de personalidade.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: false
  },
  {
    id: 5,
    name: "Creme Luxe",
    category: "pérolas",
    img: "https://images.unsplash.com/photo-1573408301185-9519f94ae68b?w=600&q=80",
    color: "#fafafa",
    price: 95,
    desc: "Pérolas creme puro com fecho dourado 18k.",
    fullDesc: "Pérolas em tom creme puro, harmoniosamente dispostas com fecho dourado banhado a ouro 18k. Minimalista, atemporal e elegante.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: false
  },
  {
    id: 6,
    name: "Coral Reef",
    category: "cristais",
    img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
    color: "#ffe0d0",
    price: 120,
    desc: "Cristais coral e âmbar, inspirado no fundo do mar.",
    fullDesc: "Inspirada nas cores dos recifes de coral, combina cristais em tons de coral e âmbar com fio de nylon transparente. Uma obra de arte para o pulso.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: true
  },
  {
    id: 7,
    name: "Lilás Dream",
    category: "miçangas",
    img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",
    color: "#f3e8ff",
    price: 60,
    desc: "Miçangas lilás com pingente de lua crescente.",
    fullDesc: "Delicada pulseira com miçangas em tons de lilás suave, finalizada com um pingente de lua crescente banhado a prata.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: false
  },
  {
    id: 8,
    name: "Nude Elegance",
    category: "pérolas",
    img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
    color: "#f9ece8",
    price: 82,
    desc: "Pérolas tom nude, minimalista e atemporal.",
    fullDesc: "Pérolas em tom nude cuidadosamente selecionadas e dispostas em sequência perfeita. Design minimalista que combina com qualquer look.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: false
  },
];
 
const reviews = [
  { text: "Recebi minha pulseira em 2 dias e é ainda mais linda pessoalmente. Uso todos os dias!", name: "Camila S.",   loc: "Recife, PE",      stars: 5, avatar: "👩🏻" },
  { text: "A qualidade é impecável. Comprei para presente e minha amiga adorou. Certamente volto!",  name: "Ana Lima",    loc: "São Paulo, SP",   stars: 5, avatar: "👩🏼" },
  { text: "Pérolas lindíssimas, combinam com tudo. Já é a terceira vez que compro nessa loja.",      name: "Ju Ferreira", loc: "Fortaleza, CE",   stars: 5, avatar: "👩🏾" },
];
 
 
// ════════════════════════════════
// ESTADO GLOBAL
// ════════════════════════════════
let cart            = JSON.parse(sessionStorage.getItem('perola_cart') || '[]');
let currentProduct  = null;   // produto aberto no detalhe
let selectedSize    = null;   // tamanho selecionado
let qty             = 1;      // quantidade selecionada
let selectedPay     = 'pix';
let selectedDelivery = 'retirada';
 
 
// ════════════════════════════════
// CURSOR PERSONALIZADO
// ════════════════════════════════
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
 
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 7 + 'px';
    cursor.style.top  = e.clientY - 7 + 'px';
  });
 
  document.addEventListener('mouseover', e => {
    const tag = e.target.tagName;
    cursor.classList.toggle('big', tag === 'BUTTON' || tag === 'A');
  });
}
 
 
// ════════════════════════════════
// SCROLL — sombra no header
// ════════════════════════════════
function initScrollHeader() {
  window.addEventListener('scroll', () => {
    document.getElementById('header')
      ?.classList.toggle('scrolled', scrollY > 60);
  });
}
 
 
// ════════════════════════════════
// MARQUEE
// ════════════════════════════════
function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
 
  const words = [
    "Artesanal", "•", "Pérolas Naturais", "•", "Feito com Amor",
    "•", "Entrega Rápida", "•", "Peças Únicas", "•", "Presente Perfeito", "•"
  ];
 
  [...words, ...words].forEach(w => {
    const s = document.createElement('span');
    s.textContent = w;
    if (w === "•") s.classList.add('dot');
    track.appendChild(s);
  });
}
 
 
// ════════════════════════════════
// SISTEMA DE PÁGINAS
// ════════════════════════════════
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
 
function scrollToSection(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}
 
 
// ════════════════════════════════
// CATÁLOGO — filtros e grid
// ════════════════════════════════
const categories  = ['todos', ...new Set(products.map(p => p.category))];
let   activeFilter = 'todos';
 
function initFilters() {
  const filterBar = document.getElementById('filterBar');
  if (!filterBar) return;
 
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'todos' ? ' active' : '');
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
 
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
 
  const list = activeFilter === 'todos'
    ? products
    : products.filter(p => p.category === activeFilter);
 
  grid.innerHTML = '';
 
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img" style="background:${p.color}">
        ${p.isNew ? '<span class="product-tag-new">Novo</span>' : ''}
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
 
 
// ════════════════════════════════
// PÁGINA: DETALHE DO PRODUTO
// ════════════════════════════════
function openDetail(id) {
  currentProduct = products.find(x => x.id === id);
  selectedSize   = currentProduct.sizes[0];
  qty            = 1;
 
  // Preenche conteúdo
  document.getElementById('breadcrumbName').textContent     = currentProduct.name;
  document.getElementById('detailImg').src                  = currentProduct.img;
  document.getElementById('detailImg').alt                  = currentProduct.name;
  document.getElementById('detailTagNew').style.display     = currentProduct.isNew ? 'block' : 'none';
  document.getElementById('detailCategory').textContent     = currentProduct.category;
  document.getElementById('detailName').textContent         = currentProduct.name;
  document.getElementById('detailDesc').textContent         = currentProduct.fullDesc;
  document.getElementById('detailPrice').textContent        = `R$ ${currentProduct.price},00`;
  document.getElementById('qtyVal').textContent             = 1;
 
  // Botões de tamanho
  const so = document.getElementById('sizeOptions');
  so.innerHTML = '';
  currentProduct.sizes.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'size-btn' + (i === 0 ? ' selected' : '');
    btn.innerHTML = `${s.label}<span class="cm">${s.cm}cm</span>`;
    btn.onclick = () => {
      selectedSize = s;
      so.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    };
    so.appendChild(btn);
  });
 
  showPage('detail');
}
 
function changeQty(delta) {
  qty = Math.max(1, qty + delta);
  document.getElementById('qtyVal').textContent = qty;
}
 
 
// ════════════════════════════════
// PÁGINA: CHECKOUT
// ════════════════════════════════
function goToCheckout() {
  if (!currentProduct) return;
  populateCheckout();
  showPage('checkout');
}
 
function populateCheckout() {
  const p     = currentProduct;
  const total = p.price * qty;
 
  // Revisão
  document.getElementById('checkoutImg').src        = p.img;
  document.getElementById('checkoutName').textContent = p.name;
  document.getElementById('checkoutMeta').innerHTML  =
    `Tamanho: <strong>${selectedSize.label}</strong> (${selectedSize.cm}cm) &nbsp;·&nbsp; Quantidade: <strong>${qty}</strong>`;
  document.getElementById('checkoutPrice').textContent = `R$ ${total},00`;
 
  // Resumo lateral
  document.getElementById('summaryProduct').textContent = p.name;
  document.getElementById('summarySize').textContent    = `${selectedSize.label} (${selectedSize.cm}cm)`;
  document.getElementById('summaryQty').textContent     = qty;
  document.getElementById('summaryTotal').textContent   = `R$ ${total},00`;
 
  // Reset seleções
  selectPay('pix');
  selectDelivery('retirada');
}
 
function selectPay(pay) {
  selectedPay = pay;
  document.querySelectorAll('.pay-btn').forEach(b => {
    b.classList.toggle('selected', b.dataset.pay === pay);
  });
  const labels = { pix: 'PIX', cartao: 'Cartão de Crédito', debito: 'Cartão de Débito', dinheiro: 'Dinheiro' };
  document.getElementById('summaryPay').textContent = labels[pay] || pay;
}
 
function selectDelivery(d) {
  selectedDelivery = d;
  document.querySelectorAll('.delivery-opt').forEach(b => {
    b.classList.toggle('selected', b.dataset.delivery === d);
  });
  document.getElementById('deliveryFields').style.display = d === 'entrega' ? 'block' : 'none';
  document.getElementById('summaryDelivery').textContent  = d === 'entrega' ? 'Entrega' : 'Retirada';
}
 
function finishOrder() {
  // Aqui você pode enviar os dados para o WhatsApp ou backend
  // Exemplo rápido de link WhatsApp:
  // const msg = `Olá! Quero comprar: ${currentProduct.name}, Tamanho ${selectedSize.label}, Qtd ${qty}. Pagamento: ${selectedPay}. Entrega: ${selectedDelivery}.`;
  // window.open(`https://wa.me/5581973420530?text=${encodeURIComponent(msg)}`, '_blank');
 
  cart = [];
  saveCart();
  updateCartUI();
  showPage('confirm');
}
 
 
// ════════════════════════════════
// CARRINHO
// ════════════════════════════════
function saveCart() {
  sessionStorage.setItem('perola_cart', JSON.stringify(cart));
}
 
function addCurrentToCart() {
  if (!currentProduct) return;
 
  const key      = `${currentProduct.id}-${selectedSize.label}`;
  const existing = cart.find(x => x.key === key);
 
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...currentProduct, key, selectedSize: selectedSize.label, qty });
  }
 
  saveCart();
  updateCartUI();
  showToast(`🌸 ${currentProduct.name} (${selectedSize.label}) adicionada!`);
}
 
function addToCart(id) {
  // Atalho usado pelo catálogo (sem passar por detalhe)
  const p   = products.find(x => x.id === id);
  const key = `${id}-M`;
  const ex  = cart.find(x => x.key === key);
 
  if (ex) ex.qty++;
  else cart.push({ ...p, key, selectedSize: 'M', qty: 1 });
 
  saveCart();
  updateCartUI();
  showToast(`🌸 ${p.name} adicionada!`);
}
 
function removeFromCart(key) {
  cart = cart.filter(x => x.key !== key);
  saveCart();
  updateCartUI();
}
 
function updateCartUI() {
  const items    = document.getElementById('cartItems');
  const empty    = document.getElementById('cartEmpty');
  const badge    = document.getElementById('cartBadge');
  const totalEl  = document.getElementById('cartTotal');
  if (!items) return;
 
  const totalQty = cart.reduce((a, c) => a + c.qty, 0);
  const totalVal = cart.reduce((a, c) => a + c.price * c.qty, 0);
 
  // Badge
  if (badge) {
    badge.textContent   = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  }
 
  // Total
  if (totalEl) totalEl.textContent = `R$ ${totalVal},00`;
 
  // Itens
  items.querySelectorAll('.cart-item').forEach(el => el.remove());
  if (empty) empty.style.display = cart.length === 0 ? 'block' : 'none';
 
  cart.forEach(p => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img class="cart-item-img" src="${p.img}" alt="${p.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name} — ${p.selectedSize}${p.qty > 1 ? ' ×' + p.qty : ''}</div>
        <div class="cart-item-price">R$ ${p.price * p.qty},00</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${p.key}')">✕</button>`;
    items.appendChild(el);
  });
}
 
function toggleCart() {
  document.getElementById('cartOverlay')?.classList.toggle('open');
  document.getElementById('cartPanel')?.classList.toggle('open');
}
 
function cartToCheckout() {
  if (cart.length === 0) { showToast("Sua sacola está vazia 🌸"); return; }
 
  // Usa o primeiro item do carrinho como referência para o checkout
  const first    = cart[0];
  currentProduct = products.find(x => x.id === first.id) || first;
  selectedSize   = {
    label: first.selectedSize,
    cm: currentProduct.sizes?.find(s => s.label === first.selectedSize)?.cm || 16
  };
  qty = cart.reduce((a, c) => a + c.qty, 0);
 
  toggleCart();
  populateCheckout();
  showPage('checkout');
}
 
 
// ════════════════════════════════
// TOAST
// ════════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2600);
}
 
 
// ════════════════════════════════
// SCROLL REVEAL
// ════════════════════════════════
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
 
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 
  // Observa cards de review adicionados dinamicamente
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, 300);
}
 
 
// ════════════════════════════════
// INICIALIZAÇÃO
// ════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initScrollHeader();
  initMarquee();
  initFilters();
  renderProducts();
  initReviews();
  updateCartUI();
  initReveal();
});