// ════════════════════════════════
// js/cart.js — Carrinho de compras
// ════════════════════════════════

let cart = JSON.parse(sessionStorage.getItem('perola_cart') || '[]');

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
  const p   = products.find(x => x.id === id);
  const key = `${id}-M`;
  const ex  = cart.find(x => x.key === key);
  if (ex) ex.qty++;
  else cart.push({ ...p, key, selectedSize: 'M', qty: 1 });
  saveCart();
  updateCartUI();
  showToast(`🌸 ${p.name} adicionada!`);
}

function addCustomToCart(customItem) {
  const key = `custom-${Date.now()}`;
  cart.push({
    ...customItem,
    key,
    selectedSize: customItem.selectedSize,
    qty: 1,
    isCustom: true
  });
  saveCart();
  updateCartUI();
  showToast(`✨ Pulseira personalizada adicionada!`);
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

  if (badge) {
    badge.textContent   = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  }
  if (totalEl) totalEl.textContent = `R$ ${totalVal},00`;

  items.querySelectorAll('.cart-item').forEach(el => el.remove());
  if (empty) empty.style.display = cart.length === 0 ? 'block' : 'none';

  cart.forEach(p => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    const icon = p.isCustom ? '✨' : '';
    el.innerHTML = `
      <img class="cart-item-img" src="${p.img || 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&q=60'}" alt="${p.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${icon} ${p.name} — ${p.selectedSize}${p.qty > 1 ? ' ×' + p.qty : ''}</div>
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