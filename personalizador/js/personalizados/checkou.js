// ════════════════════════════════
// js/checkout.js — Detalhe e Checkout
// ════════════════════════════════

let currentProduct  = null;
let selectedSize    = null;
let qty             = 1;
let selectedPay     = 'pix';
let selectedDelivery = 'retirada';

// ── DETALHE DO PRODUTO ──
function openDetail(id) {
  currentProduct = products.find(x => x.id === id);
  selectedSize   = currentProduct.sizes[0];
  qty            = 1;

  document.getElementById('breadcrumbName').textContent     = currentProduct.name;
  document.getElementById('detailImg').src                  = currentProduct.img;
  document.getElementById('detailImg').alt                  = currentProduct.name;
  document.getElementById('detailTagNew').style.display     = currentProduct.isNew ? 'block' : 'none';
  document.getElementById('detailCategory').textContent     = currentProduct.category;
  document.getElementById('detailName').textContent         = currentProduct.name;
  document.getElementById('detailDesc').textContent         = currentProduct.fullDesc;
  document.getElementById('detailPrice').textContent        = `R$ ${currentProduct.price},00`;
  document.getElementById('qtyVal').textContent             = 1;

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

// ── CHECKOUT ──
function goToCheckout() {
  if (!currentProduct) return;
  populateCheckout();
  showPage('checkout');
}

function populateCheckout() {
  const p     = currentProduct;
  const total = p.price * qty;

  document.getElementById('checkoutImg').src         = p.img || 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&q=60';
  document.getElementById('checkoutName').textContent = p.name;
  document.getElementById('checkoutMeta').innerHTML  =
    `Tamanho: <strong>${selectedSize.label}</strong> (${selectedSize.cm}cm) &nbsp;·&nbsp; Quantidade: <strong>${qty}</strong>`;
  document.getElementById('checkoutPrice').textContent = `R$ ${total},00`;
  document.getElementById('summaryProduct').textContent = p.name;
  document.getElementById('summarySize').textContent    = `${selectedSize.label} (${selectedSize.cm}cm)`;
  document.getElementById('summaryQty').textContent     = qty;
  document.getElementById('summaryTotal').textContent   = `R$ ${total},00`;

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
  cart = [];
  saveCart();
  updateCartUI();
  showPage('confirm');
}