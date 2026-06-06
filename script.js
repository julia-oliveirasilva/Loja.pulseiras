// ════ DADOS ════
const products = [
  {id:1,name:"Aurora de Pérolas",category:"pérolas",audience:"adulta",img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",color:"#f5d5db",price:89,desc:"Trio de pérolas rosa e creme, delicadas e sofisticadas.",fullDesc:"Pulseira confeccionada à mão com pérolas naturais em tons rosa e creme. Fio de nylon resistente com fecho ajustável. Perfeita para presentear ou usar no dia a dia com elegância.",sizes:[{label:"P",cm:14},{label:"M",cm:16},{label:"G",cm:18}],isNew:true},
  {id:2,name:"Cascata Rosa",category:"pérolas",audience:"adulta",img:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",color:"#fce4ec",price:75,desc:"Pérolas rosadas em degradê, um toque de romantismo.",fullDesc:"Pérolas rosadas cuidadosamente selecionadas e dispostas em degradê suave. Cada peça é única e traz um toque especial de romantismo.",sizes:[{label:"P",cm:14},{label:"M",cm:16},{label:"G",cm:18}],isNew:false},
  {id:3,name:"Sereia Dourada",category:"cristais",audience:"adulta",img:"https://images.unsplash.com/photo-1630017624853-3e370c62c8bd?w=600&q=80",color:"#fff9e6",price:110,desc:"Cristais banhados a ouro com fio de seda trançado.",fullDesc:"Cristais lapidados banhados a ouro 18k, entrelaçados em fio de seda natural. Uma peça que remete à magia do fundo do mar, com brilho suave e sofisticado.",sizes:[{label:"P",cm:14},{label:"M",cm:16},{label:"G",cm:18}],isNew:true},
  {id:4,name:"Miçanga Boho",category:"miçangas",audience:"adulta",img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",color:"#f0faf0",price:55,desc:"Miçangas coloridas estilo boho, leve e alegre.",fullDesc:"Pulseira alegre e colorida com miçangas de vidro no estilo boho chic. Leve, vibrante e cheia de personalidade.",sizes:[{label:"P",cm:14},{label:"M",cm:16},{label:"G",cm:18}],isNew:false},
  {id:5,name:"Creme Luxe",category:"pérolas",audience:"adulta",img:"https://images.unsplash.com/photo-1573408301185-9519f94ae68b?w=600&q=80",color:"#fafafa",price:95,desc:"Pérolas creme puro com fecho dourado 18k.",fullDesc:"Pérolas em tom creme puro, harmoniosamente dispostas com fecho dourado banhado a ouro 18k. Minimalista, atemporal e elegante.",sizes:[{label:"P",cm:14},{label:"M",cm:16},{label:"G",cm:18}],isNew:false},
  {id:6,name:"Coral Reef",category:"cristais",audience:"adulta",img:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",color:"#ffe0d0",price:120,desc:"Cristais coral e âmbar, inspirado no fundo do mar.",fullDesc:"Inspirada nas cores dos recifes de coral, combina cristais em tons de coral e âmbar com fio de nylon transparente. Uma obra de arte para o pulso.",sizes:[{label:"P",cm:14},{label:"M",cm:16},{label:"G",cm:18}],isNew:true},
  {id:7,name:"Lilás Dream",category:"miçangas",audience:"adulta",img:"https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",color:"#f3e8ff",price:60,desc:"Miçangas lilás com pingente de lua crescente.",fullDesc:"Delicada pulseira com miçangas em tons de lilás suave, finalizada com um pingente de lua crescente banhado a prata.",sizes:[{label:"P",cm:14},{label:"M",cm:16},{label:"G",cm:18}],isNew:false},
  {id:8,name:"Nude Elegance",category:"pérolas",audience:"adulta",img:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",color:"#f9ece8",price:82,desc:"Pérolas tom nude, minimalista e atemporal.",fullDesc:"Pérolas em tom nude cuidadosamente selecionadas e dispostas em sequência perfeita. Design minimalista que combina com qualquer look.",sizes:[{label:"P",cm:14},{label:"M",cm:16},{label:"G",cm:18}],isNew:false},
  {id:9,name:"Arco-Íris Kids",category:"miçangas",audience:"infantil",img:"https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&q=80",color:"#fff0f5",price:35,desc:"Miçangas coloridas e divertidas para as pequenas.",fullDesc:"Pulseira colorida e resistente, feita especialmente para crianças. Miçangas seguras e aprovadas, com elástico confortável.",sizes:[{label:"P",cm:12},{label:"M",cm:13},{label:"G",cm:14}],isNew:true},
  {id:10,name:"Princesa Rosa",category:"pérolas",audience:"infantil",img:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",color:"#ffe4f0",price:42,desc:"Pérolas rosadas para a princesinha da casa.",fullDesc:"Delicada pulseira infantil com pérolas em tons de rosa bebê. Fecho seguro e fio resistente, ideal para uso diário das pequenas.",sizes:[{label:"P",cm:12},{label:"M",cm:13},{label:"G",cm:14}],isNew:false},
  {id:11,name:"Estrelinha Mágica",category:"cristais",audience:"infantil",img:"https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=600&q=80",color:"#fef9e7",price:48,desc:"Cristais e estrelinhas para sonhar acordada.",fullDesc:"Pulseira mágica com pequenos cristais coloridos e pingentes de estrela. Leve, delicada e encantadora para as pequenas.",sizes:[{label:"P",cm:12},{label:"M",cm:13},{label:"G",cm:14}],isNew:true},
  {id:12,name:"Borboleta Feliz",category:"miçangas",audience:"infantil",img:"https://images.unsplash.com/photo-1560343787-571e8e0a5f8e?w=600&q=80",color:"#e8f5e9",price:38,desc:"Miçangas verdes com borboletinhas encantadoras.",fullDesc:"Pulseira colorida com miçangas em tons de verde e pingentes de borboleta. Perfeita para a criança que ama a natureza.",sizes:[{label:"P",cm:12},{label:"M",cm:13},{label:"G",cm:14}],isNew:false},
];
const reviews=[
  {text:"Recebi minha pulseira em 2 dias e é ainda mais linda pessoalmente. Uso todos os dias!",name:"Camila S.",loc:"Recife, PE",stars:5,avatar:"👩🏻"},
  {text:"A qualidade é impecável. Comprei para presente e minha amiga adorou. Certamente volto!",name:"Ana Lima",loc:"São Paulo, SP",stars:5,avatar:"👩🏼"},
  {text:"Pérolas lindíssimas, combinam com tudo. Já é a terceira vez que compro nessa loja.",name:"Ju Ferreira",loc:"Fortaleza, CE",stars:5,avatar:"👩🏾"},
  {text:"Comprei a Arco-Íris Kids para minha filha e ela simplesmente não tira! Adoramos!",name:"Patrícia M.",loc:"Olinda, PE",stars:5,avatar:"👩🏽"},
];
const PERSONALIZER_PIECES={
  perolas:[
    {id:"p1",emoji:"⚪",label:"Pérola Branca",color:"#f8f8f0",price:8},
    {id:"p2",emoji:"🩷",label:"Pérola Rosa",color:"#fce4ec",price:8},
    {id:"p3",emoji:"🟡",label:"Pérola Dourada",color:"#fff8e1",price:10},
    {id:"p4",emoji:"🟣",label:"Pérola Lilás",color:"#f3e5f5",price:9},
    {id:"p5",emoji:"🟤",label:"Pérola Nude",color:"#fbe9e7",price:8},
    {id:"p6",emoji:"⚫",label:"Pérola Preta",color:"#37474f",price:12},
  ],
  cristais:[
    {id:"c1",emoji:"💎",label:"Cristal Azul",color:"#e3f2fd",price:12},
    {id:"c2",emoji:"🔴",label:"Cristal Vermelho",color:"#ffebee",price:12},
    {id:"c3",emoji:"🟢",label:"Cristal Verde",color:"#e8f5e9",price:12},
    {id:"c4",emoji:"🟠",label:"Cristal Âmbar",color:"#fff3e0",price:13},
    {id:"c5",emoji:"🌸",label:"Cristal Rosa",color:"#fce4ec",price:12},
    {id:"c6",emoji:"🤍",label:"Cristal Transparente",color:"#f5f5f5",price:11},
  ],
  micangas:[
    {id:"m1",emoji:"🔵",label:"Miçanga Azul",color:"#1565c0",price:4},
    {id:"m2",emoji:"🟡",label:"Miçanga Amarela",color:"#f9a825",price:4},
    {id:"m3",emoji:"🟤",label:"Miçanga Marrom",color:"#6d4c41",price:4},
    {id:"m4",emoji:"🩷",label:"Miçanga Rosa",color:"#e91e63",price:4},
    {id:"m5",emoji:"🟣",label:"Miçanga Roxa",color:"#7b1fa2",price:4},
    {id:"m6",emoji:"🟢",label:"Miçanga Verde",color:"#2e7d32",price:4},
    {id:"m7",emoji:"⚪",label:"Miçanga Branca",color:"#f5f5f5",price:4},
    {id:"m8",emoji:"🔴",label:"Miçanga Vermelha",color:"#c62828",price:4},
  ],
  pingentes:[
    {id:"pg1",emoji:"⭐",label:"Estrela",color:"#ffd700",price:15},
    {id:"pg2",emoji:"🌙",label:"Lua Crescente",color:"#c0c0c0",price:15},
    {id:"pg3",emoji:"❤️",label:"Coração",color:"#e91e63",price:15},
    {id:"pg4",emoji:"🦋",label:"Borboleta",color:"#7c4dff",price:18},
    {id:"pg5",emoji:"🌸",label:"Florzinha",color:"#ff80ab",price:15},
    {id:"pg6",emoji:"🌈",label:"Arco-Íris",color:"#ff6d00",price:20},
    {id:"pg7",emoji:"🍀",label:"Trevo",color:"#4caf50",price:15},
    {id:"pg8",emoji:"✨",label:"Faíscas",color:"#ffc107",price:18},
  ],
};
 
let cart = JSON.parse(sessionStorage.getItem('perola_cart')||'[]');
let currentProduct=null,selectedSize=null,qty=1,selectedPay='pix',selectedDelivery='retirada';
let activeFilter='todos',activeAudience='adulta';
const categories=['todos',...new Set(products.map(p=>p.category))];
 
//  UI 
function initCursor(){
  const c=document.getElementById('cursor');
  if(!c)return;
  document.addEventListener('mousemove',e=>{c.style.left=e.clientX-7+'px';c.style.top=e.clientY-7+'px'});
  document.addEventListener('mouseover',e=>{const t=e.target.tagName;c.classList.toggle('big',t==='BUTTON'||t==='A')});
}
function initScrollHeader(){
  window.addEventListener('scroll',()=>document.getElementById('header')?.classList.toggle('scrolled',scrollY>60));
}
function initMarquee(){
  const t=document.getElementById('marqueeTrack');
  if(!t)return;
  const w=["Artesanal","•","Pérolas Naturais","•","Feito com Amor","•","Entrega Rápida","•","Peças Únicas","•","Presente Perfeito","•","Infantil & Adulta","•","Personalizada","•"];
  [...w,...w].forEach(w=>{const s=document.createElement('span');s.textContent=w;if(w==="•")s.classList.add('dot');t.appendChild(s)});
}
function showPage(name){
  
  const comprasPages = ['detail','checkout','confirm'];

  const indexPages   = ['catalog','personalizar'];
 
  const onIndex   = window.location.pathname.endsWith('compras.html') === false;
  const onCompras = window.location.pathname.endsWith('compras.html');
 
  
  if(comprasPages.includes(name) && !onCompras){
    sessionStorage.setItem('pendingPage', name);
    window.location.href = 'compras.html';
    return;
  }
  if(indexPages.includes(name) && onCompras){
    window.location.href = 'index.html' + (name === 'catalog' ? '' : '#' + name);
    return;
  }
 
  
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name)?.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(name==='personalizar') renderPersonalizer();
}
function scrollToSection(sel){document.querySelector(sel)?.scrollIntoView({behavior:'smooth'})}
function showToast(msg){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2600);
}
function initReveal(){
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>obs.observe(el)),400);
}
 
//  CATÁLOGO 
function setAudience(audience,btn){
  activeAudience=audience;
  document.querySelectorAll('.audience-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}
function initFilters(){
  const bar=document.getElementById('filterBar');
  if(!bar)return;
  bar.innerHTML='';
  categories.forEach(cat=>{
    const btn=document.createElement('button');
    btn.className='filter-btn'+(cat===activeFilter?' active':'');
    btn.textContent=cat.charAt(0).toUpperCase()+cat.slice(1);
    btn.onclick=()=>{
      activeFilter=cat;
      bar.querySelectorAll('.filter-btn').forEach((b,i)=>b.classList.toggle('active',categories[i]===activeFilter));
      renderProducts();
    };
    bar.appendChild(btn);
  });
}
function renderProducts(){
  const grid=document.getElementById('productsGrid');
  if(!grid)return;
  let list=products.filter(p=>p.audience===activeAudience);
  if(activeFilter!=='todos')list=list.filter(p=>p.category===activeFilter);
  grid.innerHTML='';
  if(list.length===0){grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--gray);font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-style:italic">Nenhuma pulseira encontrada nessa combinação... ainda! 🌸</div>`;return;}
  list.forEach(p=>{
    const card=document.createElement('div');
    card.className='product-card';
    card.innerHTML=`<div class="product-img" style="background:${p.color}">${p.isNew?'<span class="product-tag-new">Novo</span>':''}${p.audience==='infantil'?'<span class="product-tag-audience">🧒 Infantil</span>':''}<img src="${p.img}" alt="${p.name}"></div><div class="product-info"><div class="product-category">${p.category}</div><div class="product-name">${p.name}</div><div class="product-desc">${p.desc}</div><div class="product-footer"><div class="product-price">R$ ${p.price},00</div><button class="view-btn" onclick="openDetail(${p.id})">Ver detalhes</button></div></div>`;
    grid.appendChild(card);
  });
}
function initReviews(){
  const g=document.getElementById('reviewsGrid');
  if(!g)return;
  reviews.forEach(r=>{g.innerHTML+=`<div class="review-card reveal"><div class="stars">${'★'.repeat(r.stars)}</div><p class="review-text">"${r.text}"</p><div class="review-author"><div class="review-avatar">${r.avatar}</div><div><div class="review-name">${r.name}</div><div class="review-loc">${r.loc}</div></div></div></div>`;});
}
 
//  DETALHE 
function openDetail(id){
  currentProduct=products.find(x=>x.id===id);
  selectedSize=currentProduct.sizes[0];qty=1;
 
  sessionStorage.setItem('pendingProductId', id);
  showPage('detail');
}
function populateDetailPage(){
  if(!currentProduct) return;
  const el=id=>document.getElementById(id);
  if(!el('detailName')) return; // not on compras.html yet
  el('breadcrumbName').textContent=currentProduct.name;
  el('detailImg').src=currentProduct.img;
  el('detailImg').alt=currentProduct.name;
  el('detailTagNew').style.display=currentProduct.isNew?'block':'none';
  el('detailCategory').textContent=currentProduct.category;
  el('detailName').textContent=currentProduct.name;
  el('detailDesc').textContent=currentProduct.fullDesc;
  el('detailPrice').textContent=`R$ ${currentProduct.price},00`;
  el('qtyVal').textContent=1;
  const so=el('sizeOptions');so.innerHTML='';
  currentProduct.sizes.forEach((s,i)=>{
    const btn=document.createElement('button');
    btn.className='size-btn'+(i===0?' selected':'');
    btn.innerHTML=`${s.label}<span class="cm">${s.cm}cm</span>`;
    btn.onclick=()=>{selectedSize=s;so.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected')};
    so.appendChild(btn);
  });
}
function changeQty(delta){qty=Math.max(1,qty+delta);document.getElementById('qtyVal').textContent=qty}
 
//  CHECKOUT 
function goToCheckout(){if(!currentProduct)return;populateCheckout();showPage('checkout')}
function populateCheckout(){
  const p=currentProduct,total=p.price*qty;
  document.getElementById('checkoutImg').src=p.img||'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&q=60';
  document.getElementById('checkoutName').textContent=p.name;
  document.getElementById('checkoutMeta').innerHTML=`Tamanho: <strong>${selectedSize.label}</strong> (${selectedSize.cm}cm) &nbsp;·&nbsp; Quantidade: <strong>${qty}</strong>`;
  document.getElementById('checkoutPrice').textContent=`R$ ${total},00`;
  document.getElementById('summaryProduct').textContent=p.name;
  document.getElementById('summarySize').textContent=`${selectedSize.label} (${selectedSize.cm}cm)`;
  document.getElementById('summaryQty').textContent=qty;
  document.getElementById('summaryTotal').textContent=`R$ ${total},00`;
  selectPay('pix');selectDelivery('retirada');
}
function selectPay(pay){
  selectedPay=pay;
  document.querySelectorAll('.pay-btn').forEach(b=>b.classList.toggle('selected',b.dataset.pay===pay));
  const labels={pix:'PIX',cartao:'Cartão de Crédito',debito:'Cartão de Débito',dinheiro:'Dinheiro'};
  document.getElementById('summaryPay').textContent=labels[pay]||pay;
}
function selectDelivery(d){
  selectedDelivery=d;
  document.querySelectorAll('.delivery-opt').forEach(b=>b.classList.toggle('selected',b.dataset.delivery===d));
  document.getElementById('deliveryFields').style.display=d==='entrega'?'block':'none';
  document.getElementById('summaryDelivery').textContent=d==='entrega'?'Entrega':'Retirada';
}
function finishOrder(){cart=[];saveCart();updateCartUI();showPage('confirm')}
 
// CARRINHO
function saveCart(){sessionStorage.setItem('perola_cart',JSON.stringify(cart))}
function addCurrentToCart(){
  if(!currentProduct)return;
  const key=`${currentProduct.id}-${selectedSize.label}`;
  const ex=cart.find(x=>x.key===key);
  if(ex)ex.qty+=qty;else cart.push({...currentProduct,key,selectedSize:selectedSize.label,qty});
  saveCart();updateCartUI();showToast(`🌸 ${currentProduct.name} (${selectedSize.label}) adicionada!`);
}
function addCustomToCart(item){
  cart.push({...item,key:`custom-${Date.now()}`,qty:1,isCustom:true});
  saveCart();updateCartUI();
}
function removeFromCart(key){cart=cart.filter(x=>x.key!==key);saveCart();updateCartUI()}
function updateCartUI(){
  const items=document.getElementById('cartItems'),empty=document.getElementById('cartEmpty'),badge=document.getElementById('cartBadge'),totalEl=document.getElementById('cartTotal');
  if(!items)return;
  const tQty=cart.reduce((a,c)=>a+c.qty,0),tVal=cart.reduce((a,c)=>a+c.price*c.qty,0);
  if(badge){badge.textContent=tQty;badge.style.display=tQty>0?'flex':'none'}
  if(totalEl)totalEl.textContent=`R$ ${tVal},00`;
  items.querySelectorAll('.cart-item').forEach(el=>el.remove());
  if(empty)empty.style.display=cart.length===0?'block':'none';
  cart.forEach(p=>{
    const el=document.createElement('div');el.className='cart-item';
    el.innerHTML=`<img class="cart-item-img" src="${p.img||'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&q=60'}" alt="${p.name}"><div class="cart-item-info"><div class="cart-item-name">${p.isCustom?'✨ ':''} ${p.name} — ${p.selectedSize}${p.qty>1?' ×'+p.qty:''}</div><div class="cart-item-price">R$ ${p.price*p.qty},00</div></div><button class="cart-item-remove" onclick="removeFromCart('${p.key}')">✕</button>`;
    items.appendChild(el);
  });
}
function toggleCart(){
  document.getElementById('cartOverlay')?.classList.toggle('open');
  document.getElementById('cartPanel')?.classList.toggle('open');
}
function cartToCheckout(){
  if(cart.length===0){showToast("Sua sacola está vazia 🌸");return}
  const first=cart[0];
  currentProduct=products.find(x=>x.id===first.id)||first;
  selectedSize={label:first.selectedSize,cm:currentProduct.sizes?.find(s=>s.label===first.selectedSize)?.cm||16};
  qty=cart.reduce((a,c)=>a+c.qty,0);
  toggleCart();populateCheckout();showPage('checkout');
}
 
// ════ INIT ════
document.addEventListener('DOMContentLoaded',()=>{
  initCursor();initScrollHeader();initMarquee();
 
  
  if(document.getElementById('productsGrid')){
    initFilters();renderProducts();initReviews();initReveal();
  }
  updateCartUI();
 
  
  const pendingProductId = sessionStorage.getItem('pendingProductId');
  if(pendingProductId){
    currentProduct = products.find(x=>x.id===parseInt(pendingProductId));
    if(currentProduct){ selectedSize=currentProduct.sizes[0]; qty=1; }
  }
  const pending = sessionStorage.getItem('pendingPage');
  if(pending){
    sessionStorage.removeItem('pendingPage');
    setTimeout(()=>{
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      document.getElementById('page-'+pending)?.classList.add('active');
      if(pending==='detail') populateDetailPage();
      if(pending==='checkout') populateCheckout();
      window.scrollTo({top:0,behavior:'smooth'});
    }, 50);
  } else {
    const first = document.querySelector('.page');
    if(first) first.classList.add('active');
  }
});