// ════════════════════════════════
// js/personalizer.jsx — Personalizador React
// ════════════════════════════════

const { useState, useCallback, useRef, useEffect } = React;

// ── Constantes ──
const SIZES_ADULTA   = [
  { label: "P", cm: 14, slots: 14 },
  { label: "M", cm: 16, slots: 16 },
  { label: "G", cm: 18, slots: 18 },
];
const SIZES_INFANTIL = [
  { label: "P", cm: 12, slots: 12 },
  { label: "M", cm: 13, slots: 13 },
  { label: "G", cm: 14, slots: 14 },
];

const CATEGORY_LABELS = {
  perolas:   { label: "Pérolas",   icon: "⚪" },
  cristais:  { label: "Cristais",  icon: "💎" },
  micangas:  { label: "Miçangas",  icon: "🔵" },
  pingentes: { label: "Pingentes", icon: "⭐" },
};

const BASE_PRICE = 25; // base de montagem

// ── Subcomponentes ──

function PeacePickerItem({ piece, onSelect, count }) {
  return (
    <button
      onClick={() => onSelect(piece)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        padding: '12px 10px',
        borderRadius: '16px',
        border: count > 0 ? '2px solid var(--mauve)' : '1.5px solid var(--blush)',
        background: count > 0 ? 'rgba(196,122,138,.08)' : 'var(--white)',
        cursor: 'pointer',
        transition: 'all .2s',
        position: 'relative',
        minWidth: '80px',
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      <span style={{ fontSize: '1.8rem' }}>{piece.emoji}</span>
      <span style={{ fontSize: '.68rem', color: 'var(--deep)', fontWeight: 500, textAlign: 'center', lineHeight: 1.3 }}>
        {piece.label}
      </span>
      <span style={{ fontSize: '.65rem', color: 'var(--mauve)' }}>+R${piece.price}</span>
      {count > 0 && (
        <span style={{
          position: 'absolute', top: -8, right: -8,
          background: 'var(--mauve)', color: '#fff',
          borderRadius: '50%', width: 22, height: 22,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '.72rem', fontWeight: 700
        }}>{count}</span>
      )}
    </button>
  );
}

function BraceletPreview({ slots, braceletSlots, onRemove, sizeLabel }) {
  const totalSlots = slots;
  const filled = braceletSlots.filter(Boolean);

  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--blush) 0%, #f0c8d2 100%)',
      borderRadius: '24px',
      padding: '40px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      minHeight: '280px',
      position: 'relative',
    }}>
      <div style={{ fontSize: '.72rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--mauve)', fontFamily: 'DM Sans' }}>
        Preview — Tamanho {sizeLabel}
      </div>

      {/* Pulseira circular */}
      <div style={{ position: 'relative', width: 200, height: 200 }}>
        {/* Fio */}
        <svg width="200" height="200" style={{ position: 'absolute', top: 0, left: 0 }}>
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(58,31,39,.15)" strokeWidth="3" strokeDasharray="6 4"/>
        </svg>

        {/* Slots das peças */}
        {Array.from({ length: totalSlots }).map((_, i) => {
          const angle = (i / totalSlots) * 2 * Math.PI - Math.PI / 2;
          const x = 100 + 80 * Math.cos(angle);
          const y = 100 + 80 * Math.sin(angle);
          const piece = braceletSlots[i];

          return (
            <div
              key={i}
              onClick={() => piece && onRemove(i)}
              style={{
                position: 'absolute',
                left: x - 14,
                top: y - 14,
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: piece ? piece.color : 'rgba(255,255,255,.5)',
                border: piece ? '2px solid rgba(255,255,255,.8)' : '2px dashed rgba(196,122,138,.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: piece ? '1rem' : '.55rem',
                cursor: piece ? 'pointer' : 'default',
                transition: 'transform .15s',
                boxShadow: piece ? '0 2px 8px rgba(58,31,39,.15)' : 'none',
                transform: piece ? 'scale(1.1)' : 'scale(1)',
              }}
              title={piece ? `Remover ${piece.label}` : `Slot ${i + 1}`}
            >
              {piece ? piece.emoji : ''}
            </div>
          );
        })}

        {/* Centro */}
        <div style={{
          position: 'absolute',
          left: '50%', top: '50%',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif",
          pointerEvents: 'none',
        }}>
          <div style={{ fontSize: '1.8rem' }}>🫧</div>
          <div style={{ fontSize: '.65rem', color: 'var(--mauve)', letterSpacing: '.08em' }}>
            {filled.length}/{totalSlots}
          </div>
        </div>
      </div>

      {filled.length === 0 && (
        <p style={{ fontSize: '.8rem', color: 'var(--gray)', fontStyle: 'italic', textAlign: 'center' }}>
          Selecione as peças à esquerda para montar sua pulseira ✨
        </p>
      )}

      {filled.length > 0 && filled.length < totalSlots && (
        <p style={{ fontSize: '.78rem', color: 'var(--gray)', textAlign: 'center' }}>
          {totalSlots - filled.length} espaço{totalSlots - filled.length !== 1 ? 's' : ''} sobrando — continue adicionando! 🌸
        </p>
      )}

      {filled.length === totalSlots && (
        <p style={{ fontSize: '.82rem', color: 'var(--mauve)', fontWeight: 600, textAlign: 'center' }}>
          🎉 Pulseira completa! Finalize o pedido abaixo.
        </p>
      )}
    </div>
  );
}

// ── COMPONENTE PRINCIPAL ──
function Personalizer() {
  const [audience,      setAudience]      = useState('adulta');
  const [selectedSize,  setSelectedSize]  = useState(SIZES_ADULTA[1]);
  const [braceletSlots, setBraceletSlots] = useState([]);
  const [activeCategory, setActiveCategory] = useState('perolas');
  const [selectedPiece,  setSelectedPiece]  = useState(null);
  const [step, setStep] = useState(1); // 1=config, 2=montar, 3=resumo
  const [customName, setCustomName] = useState('');

  const sizes = audience === 'adulta' ? SIZES_ADULTA : SIZES_INFANTIL;

  useEffect(() => {
    // Reset ao trocar audiência
    const newSizes = audience === 'adulta' ? SIZES_ADULTA : SIZES_INFANTIL;
    setSelectedSize(newSizes[1]);
    setBraceletSlots([]);
    setStep(1);
  }, [audience]);

  useEffect(() => {
    setBraceletSlots(Array(selectedSize.slots).fill(null));
  }, [selectedSize]);

  // Contar peças por id
  const pieceCounts = braceletSlots.reduce((acc, p) => {
    if (p) acc[p.id] = (acc[p.id] || 0) + 1;
    return acc;
  }, {});

  const handleSelectPiece = useCallback((piece) => {
    setSelectedPiece(piece);
    // Adiciona no próximo slot vazio
    setBraceletSlots(prev => {
      const idx = prev.findIndex(s => s === null);
      if (idx === -1) {
        showToast('Pulseira cheia! Remova uma peça para adicionar outra.');
        return prev;
      }
      const next = [...prev];
      next[idx] = piece;
      return next;
    });
  }, []);

  const handleRemoveSlot = useCallback((index) => {
    setBraceletSlots(prev => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  }, []);

  const handleClear = () => {
    setBraceletSlots(Array(selectedSize.slots).fill(null));
  };

  // Calcular preço
  const totalPrice = BASE_PRICE + braceletSlots
    .filter(Boolean)
    .reduce((sum, p) => sum + p.price, 0);

  const filledSlots = braceletSlots.filter(Boolean);
  const canFinish   = filledSlots.length >= 3;

  // ── Lista de peças selecionadas para o resumo ──
  const piecesSummary = Object.entries(pieceCounts).map(([id, count]) => {
    const allPieces = Object.values(PERSONALIZER_PIECES).flat();
    const piece = allPieces.find(p => p.id === id);
    return piece ? { ...piece, count } : null;
  }).filter(Boolean);

  // ── Finalizar e enviar ao carrinho ──
  const handleAddToCart = () => {
    const name = customName.trim() || 'Pulseira Personalizada';
    const customItem = {
      id: Date.now(),
      name,
      price: totalPrice,
      selectedSize: selectedSize.label,
      img: null,
      isCustom: true,
      pieces: piecesSummary,
      audience,
    };
    addCustomToCart(customItem);
    showPage('catalog');
    showToast(`✨ "${name}" adicionada à sacola!`);
  };

  // ── WhatsApp direto ──
  const handleWhatsApp = () => {
    const name = customName.trim() || 'Pulseira Personalizada';
    const piecesText = piecesSummary.map(p => `${p.emoji} ${p.label} (×${p.count})`).join(', ');
    const msg = `Olá! Quero encomendaruma pulseira personalizada:\n\n*Nome:* ${name}\n*Audiência:* ${audience === 'adulta' ? 'Adulta' : 'Infantil'}\n*Tamanho:* ${selectedSize.label} (${selectedSize.cm}cm)\n*Peças:* ${piecesText}\n*Total estimado:* R$ ${totalPrice},00\n\nPode me ajudar? 🌸`;
    window.open(`https://wa.me/5581973420530?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // ── Estilos inline reutilizáveis ──
  const stepBtnBase = (active) => ({
    padding: '10px 24px',
    borderRadius: '50px',
    border: active ? 'none' : '1.5px solid var(--blush)',
    background: active ? 'var(--deep)' : 'transparent',
    color: active ? '#fff' : 'var(--gray)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '.8rem',
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all .2s',
    fontWeight: active ? 600 : 400,
  });

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)', fontFamily: 'DM Sans, sans-serif' }}>

      {/* ── HEADER DA PÁGINA ── */}
      <div style={{
        background: 'var(--deep)',
        padding: '48px 60px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 80% 50%, rgba(232,164,176,.2) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}/>
        <button
          onClick={() => showPage('catalog')}
          style={{
            background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)',
            color: 'rgba(255,255,255,.7)', borderRadius: '50px', padding: '8px 18px',
            fontSize: '.75rem', letterSpacing: '.1em', textTransform: 'uppercase',
            cursor: 'pointer', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          ← Voltar para Coleção
        </button>

        <div style={{ fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
          ✦ Exclusivo
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2rem,4vw,3.2rem)',
          fontWeight: 300,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: 12,
        }}>
          Crie sua pulseira <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>única</em>
        </h1>
        <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.55)', maxWidth: 480, lineHeight: 1.7 }}>
          Monte do zero: escolha o público, o tamanho e cada peça que vai compor sua criação.
        </p>

        {/* Steps */}
        <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
          {[
            [1, '1. Configurar'],
            [2, '2. Montar'],
            [3, '3. Finalizar'],
          ].map(([s, label]) => (
            <button key={s} onClick={() => s <= step && setStep(s)} style={stepBtnBase(step === s)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ════════════════════ STEP 1 — CONFIGURAR ════════════════════ */}
      {step === 1 && (
        <div style={{ padding: '48px 60px', maxWidth: 800, margin: '0 auto' }}>

          {/* AUDIÊNCIA */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: '.72rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--mauve)', marginBottom: 16 }}>
              Para quem é a pulseira?
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { val: 'adulta',   icon: '👩', title: 'Pulseira Adulta', sub: 'Tamanhos 14–18cm' },
                { val: 'infantil', icon: '🧒', title: 'Pulseira Infantil', sub: 'Tamanhos 12–14cm' },
              ].map(opt => (
                <button
                  key={opt.val}
                  onClick={() => setAudience(opt.val)}
                  style={{
                    flex: 1,
                    padding: '24px 20px',
                    borderRadius: '20px',
                    border: audience === opt.val ? '2px solid var(--mauve)' : '1.5px solid var(--blush)',
                    background: audience === opt.val ? 'rgba(196,122,138,.08)' : 'var(--white)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all .2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: '2.2rem' }}>{opt.icon}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.2rem', color: 'var(--deep)' }}>{opt.title}</span>
                  <span style={{ fontSize: '.75rem', color: 'var(--gray)' }}>{opt.sub}</span>
                  {audience === opt.val && (
                    <span style={{ fontSize: '.7rem', color: 'var(--mauve)', fontWeight: 600 }}>✓ Selecionada</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* TAMANHO */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: '.72rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--mauve)', marginBottom: 16 }}>
              Qual o tamanho?
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {sizes.map(s => (
                <button
                  key={s.label}
                  onClick={() => setSelectedSize(s)}
                  style={{
                    flex: 1,
                    padding: '20px 16px',
                    borderRadius: '16px',
                    border: selectedSize.label === s.label ? '2px solid var(--mauve)' : '1.5px solid var(--blush)',
                    background: selectedSize.label === s.label ? 'var(--deep)' : 'var(--white)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'all .2s',
                  }}
                >
                  <span style={{
                    fontSize: '1.6rem',
                    fontFamily: "'Cormorant Garamond',serif",
                    color: selectedSize.label === s.label ? '#fff' : 'var(--deep)',
                    fontWeight: 600,
                  }}>{s.label}</span>
                  <span style={{ fontSize: '.75rem', color: selectedSize.label === s.label ? 'rgba(255,255,255,.7)' : 'var(--gray)' }}>
                    {s.cm}cm
                  </span>
                  <span style={{ fontSize: '.65rem', color: selectedSize.label === s.label ? 'rgba(255,255,255,.5)' : 'var(--gray)' }}>
                    {s.slots} peças
                  </span>
                </button>
              ))}
            </div>
            <p style={{ fontSize: '.78rem', color: 'var(--gray)', marginTop: 12, lineHeight: 1.6 }}>
              💡 Dica: meça seu pulso com uma fita e adicione 1-2cm de folga para o tamanho ideal.
            </p>
          </div>

          {/* NOME PERSONALIZADO */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: '.72rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--mauve)', marginBottom: 12 }}>
              Dê um nome para sua criação (opcional)
            </div>
            <input
              type="text"
              placeholder='Ex: "Pulseira da Lara" ou "Presente da Mãe"'
              value={customName}
              onChange={e => setCustomName(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '50px',
                border: '1.5px solid var(--blush)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '.9rem',
                color: 'var(--deep)',
                outline: 'none',
                transition: 'border-color .2s',
                background: 'var(--white)',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--mauve)'}
              onBlur={e => e.target.style.borderColor = 'var(--blush)'}
            />
          </div>

          <button
            onClick={() => setStep(2)}
            style={{
              background: 'var(--deep)',
              color: '#fff',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '.9rem',
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background .2s, transform .15s',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
            }}
            onMouseEnter={e => { e.target.style.background='var(--mauve)'; e.target.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background='var(--deep)'; e.target.style.transform='none'; }}
          >
            Próximo: Montar Pulseira →
          </button>
        </div>
      )}

      {/* ════════════════════ STEP 2 — MONTAR ════════════════════ */}
      {step === 2 && (
        <div style={{ padding: '40px 60px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '40px', alignItems: 'start', maxWidth: 1100, margin: '0 auto' }}>

            {/* ── PAINEL ESQUERDO — Peças ── */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: '.72rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--mauve)', marginBottom: 4 }}>
                    Selecione as peças
                  </div>
                  <p style={{ fontSize: '.82rem', color: 'var(--gray)' }}>
                    Clique nas peças para adicionar. Clique na pulseira para remover.
                  </p>
                </div>
                <button
                  onClick={handleClear}
                  style={{
                    background: 'transparent', border: '1.5px solid var(--blush)', color: 'var(--gray)',
                    padding: '8px 18px', borderRadius: '50px', fontSize: '.75rem', letterSpacing: '.08em',
                    cursor: 'pointer', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
                    transition: 'all .2s',
                  }}
                  onMouseEnter={e => e.target.style.borderColor='var(--rose)'}
                  onMouseLeave={e => e.target.style.borderColor='var(--blush)'}
                >
                  Limpar tudo
                </button>
              </div>

              {/* Tabs de categoria */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                {Object.entries(CATEGORY_LABELS).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    style={{
                      padding: '8px 18px', borderRadius: '50px',
                      border: activeCategory === key ? 'none' : '1.5px solid var(--blush)',
                      background: activeCategory === key ? 'var(--deep)' : 'transparent',
                      color: activeCategory === key ? '#fff' : 'var(--gray)',
                      fontSize: '.78rem', letterSpacing: '.08em', textTransform: 'uppercase',
                      cursor: 'pointer', transition: 'all .2s',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {val.icon} {val.label}
                  </button>
                ))}
              </div>

              {/* Grid de peças */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                gap: 12,
              }}>
                {PERSONALIZER_PIECES[activeCategory].map(piece => (
                  <PeacePickerItem
                    key={piece.id}
                    piece={piece}
                    onSelect={handleSelectPiece}
                    count={pieceCounts[piece.id] || 0}
                  />
                ))}
              </div>

              {/* Preço ao vivo */}
              <div style={{
                background: 'var(--white)',
                borderRadius: '20px',
                padding: '20px 24px',
                marginTop: 28,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 2px 16px rgba(58,31,39,.06)',
              }}>
                <div>
                  <div style={{ fontSize: '.7rem', color: 'var(--gray)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                    Valor estimado
                  </div>
                  <div style={{ fontSize: '.8rem', color: 'var(--gray)' }}>
                    Base R${BASE_PRICE} + {filledSlots.length} peça{filledSlots.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--deep)',
                }}>
                  R$ {totalPrice},00
                </div>
              </div>
            </div>

            {/* ── PAINEL DIREITO — Preview + ações ── */}
            <div style={{ position: 'sticky', top: 100 }}>

              <BraceletPreview
                slots={selectedSize.slots}
                braceletSlots={braceletSlots}
                onRemove={handleRemoveSlot}
                sizeLabel={`${selectedSize.label} · ${selectedSize.cm}cm`}
              />

              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button
                  onClick={() => canFinish ? setStep(3) : showToast('Adicione pelo menos 3 peças para continuar! 🌸')}
                  style={{
                    width: '100%', padding: '15px', borderRadius: '50px',
                    background: canFinish ? 'var(--deep)' : 'var(--blush)',
                    color: canFinish ? '#fff' : 'var(--gray)',
                    border: 'none', fontSize: '.85rem', letterSpacing: '.1em',
                    textTransform: 'uppercase', cursor: canFinish ? 'pointer' : 'default',
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
                    transition: 'background .2s',
                  }}
                  onMouseEnter={e => { if(canFinish) e.target.style.background='var(--mauve)'; }}
                  onMouseLeave={e => { if(canFinish) e.target.style.background='var(--deep)'; }}
                >
                  {canFinish ? 'Finalizar →' : `Adicione ${Math.max(0, 3 - filledSlots.length)} peça${3 - filledSlots.length !== 1 ? 's' : ''} para continuar`}
                </button>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    width: '100%', padding: '12px', borderRadius: '50px',
                    background: 'transparent', color: 'var(--gray)',
                    border: '1.5px solid var(--blush)', fontSize: '.78rem', letterSpacing: '.08em',
                    textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  ← Voltar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ════════════════════ STEP 3 — RESUMO ════════════════════ */}
      {step === 3 && (
        <div style={{ padding: '48px 60px', maxWidth: 680, margin: '0 auto' }}>

          {/* Card de resumo */}
          <div style={{
            background: 'var(--white)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 8px 40px rgba(58,31,39,.10)',
            marginBottom: 24,
          }}>
            {/* Ícone de sucesso */}
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>✨</div>
              <div style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'var(--deep)',
                marginBottom: 6,
              }}>
                {customName || 'Sua Pulseira Personalizada'}
              </div>
              <div style={{ fontSize: '.8rem', color: 'var(--gray)' }}>
                {audience === 'adulta' ? '👩 Adulta' : '🧒 Infantil'} · Tamanho {selectedSize.label} ({selectedSize.cm}cm)
              </div>
            </div>

            {/* Preview mini da pulseira */}
            <div style={{
              background: 'linear-gradient(135deg, var(--blush) 0%, #f0c8d2 100%)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: 28,
              display: 'flex',
              justifyContent: 'center',
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 6,
                justifyContent: 'center',
                maxWidth: 320,
              }}>
                {braceletSlots.filter(Boolean).map((piece, i) => (
                  <span key={i} style={{
                    fontSize: '1.4rem',
                    filter: 'drop-shadow(0 2px 4px rgba(58,31,39,.15))',
                  }}>{piece.emoji}</span>
                ))}
              </div>
            </div>

            {/* Lista de peças */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--mauve)', marginBottom: 14 }}>
                Peças selecionadas
              </div>
              {piecesSummary.length > 0 ? piecesSummary.map(p => (
                <div key={p.id} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 0', borderBottom: '1px solid var(--blush)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: '1.2rem' }}>{p.emoji}</span>
                    <span style={{ fontSize: '.85rem', color: 'var(--deep)' }}>{p.label} × {p.count}</span>
                  </div>
                  <span style={{ fontSize: '.82rem', color: 'var(--gray)' }}>R$ {p.price * p.count},00</span>
                </div>
              )) : (
                <p style={{ fontSize: '.85rem', color: 'var(--gray)', fontStyle: 'italic' }}>Nenhuma peça adicionada.</p>
              )}
            </div>

            {/* Total */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              padding: '18px 0 0',
              borderTop: '2px solid var(--blush)',
            }}>
              <span style={{ fontSize: '.75rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gray)' }}>
                Total Estimado
              </span>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2.2rem', fontWeight: 600, color: 'var(--deep)',
              }}>
                R$ {totalPrice},00
              </span>
            </div>

            <p style={{ fontSize: '.74rem', color: 'var(--gray)', marginTop: 8, lineHeight: 1.6 }}>
              * Valor pode variar conforme disponibilidade de peças. Confirmação via WhatsApp.
            </p>
          </div>

          {/* Botões de ação */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <button
              onClick={handleWhatsApp}
              style={{
                width: '100%', padding: '17px',
                background: '#25d366', color: '#fff',
                border: 'none', borderRadius: '50px',
                fontSize: '.9rem', letterSpacing: '.08em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
                transition: 'transform .15s, background .2s',
              }}
              onMouseEnter={e => { e.target.style.background='#1ebe5d'; e.target.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.background='#25d366'; e.target.style.transform='none'; }}
            >
              💬 Pedir via WhatsApp
            </button>

            <button
              onClick={handleAddToCart}
              style={{
                width: '100%', padding: '15px',
                background: 'var(--deep)', color: '#fff',
                border: 'none', borderRadius: '50px',
                fontSize: '.85rem', letterSpacing: '.1em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                transition: 'background .2s',
              }}
              onMouseEnter={e => e.target.style.background='var(--mauve)'}
              onMouseLeave={e => e.target.style.background='var(--deep)'}
            >
              🛍 Adicionar à Sacola
            </button>

            <button
              onClick={() => setStep(2)}
              style={{
                width: '100%', padding: '13px',
                background: 'transparent', color: 'var(--gray)',
                border: '1.5px solid var(--blush)', borderRadius: '50px',
                fontSize: '.78rem', letterSpacing: '.08em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              ← Editar Pulseira
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

// ── Função global para renderizar o React ──
function renderPersonalizer() {
  const root = document.getElementById('personalizador-root');
  if (!root) return;
  if (!root._reactRoot) {
    root._reactRoot = ReactDOM.createRoot(root);
  }
  root._reactRoot.render(React.createElement(Personalizer));
}