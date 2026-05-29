// ════════════════════════════════
// js/ui.js — Utilitários de interface
// ════════════════════════════════

// ── CURSOR PERSONALIZADO ──
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

// ── HEADER SCROLL ──
function initScrollHeader() {
  window.addEventListener('scroll', () => {
    document.getElementById('header')
      ?.classList.toggle('scrolled', scrollY > 60);
  });
}

// ── MARQUEE ──
function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const words = [
    "Artesanal", "•", "Pérolas Naturais", "•", "Feito com Amor",
    "•", "Entrega Rápida", "•", "Peças Únicas", "•", "Presente Perfeito", "•",
    "Infantil & Adulta", "•", "Personalizada", "•"
  ];
  [...words, ...words].forEach(w => {
    const s = document.createElement('span');
    s.textContent = w;
    if (w === "•") s.classList.add('dot');
    track.appendChild(s);
  });
}

// ── SISTEMA DE PÁGINAS ──
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Quando abre a página personalizar, renderiza o React
  if (name === 'personalizar') {
    renderPersonalizer();
  }
}

function scrollToSection(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2600);
}

// ── SCROLL REVEAL ──
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, 300);
}