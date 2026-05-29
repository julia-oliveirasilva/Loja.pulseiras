// ════════════════════════════════
// data/products.js — Dados dos produtos
// ════════════════════════════════

const products = [
  // ── ADULTA ──
  {
    id: 1,
    name: "Aurora de Pérolas",
    category: "pérolas",
    audience: "adulta",
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
    audience: "adulta",
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
    audience: "adulta",
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
    audience: "adulta",
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
    audience: "adulta",
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
    audience: "adulta",
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
    audience: "adulta",
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
    audience: "adulta",
    img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
    color: "#f9ece8",
    price: 82,
    desc: "Pérolas tom nude, minimalista e atemporal.",
    fullDesc: "Pérolas em tom nude cuidadosamente selecionadas e dispostas em sequência perfeita. Design minimalista que combina com qualquer look.",
    sizes: [{ label: "P", cm: 14 }, { label: "M", cm: 16 }, { label: "G", cm: 18 }],
    isNew: false
  },

  // ── INFANTIL ──
  {
    id: 9,
    name: "Arco-Íris Kids",
    category: "miçangas",
    audience: "infantil",
    img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&q=80",
    color: "#fff0f5",
    price: 35,
    desc: "Miçangas coloridas e divertidas para as pequenas.",
    fullDesc: "Pulseira colorida e resistente, feita especialmente para crianças. Miçangas seguras e aprovadas, com elástico confortável.",
    sizes: [{ label: "P", cm: 12 }, { label: "M", cm: 13 }, { label: "G", cm: 14 }],
    isNew: true
  },
  {
    id: 10,
    name: "Princesa Rosa",
    category: "pérolas",
    audience: "infantil",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    color: "#ffe4f0",
    price: 42,
    desc: "Pérolas rosadas para a princesinha da casa.",
    fullDesc: "Delicada pulseira infantil com pérolas em tons de rosa bebê. Fecho seguro e fio resistente, ideal para uso diário das pequenas.",
    sizes: [{ label: "P", cm: 12 }, { label: "M", cm: 13 }, { label: "G", cm: 14 }],
    isNew: false
  },
  {
    id: 11,
    name: "Estrelinha Mágica",
    category: "cristais",
    audience: "infantil",
    img: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=600&q=80",
    color: "#fef9e7",
    price: 48,
    desc: "Cristais e estrelinhas para sonhar acordada.",
    fullDesc: "Pulseira mágica com pequenos cristais coloridos e pingentes de estrela. Leve, delicada e encantadora para as pequenas.",
    sizes: [{ label: "P", cm: 12 }, { label: "M", cm: 13 }, { label: "G", cm: 14 }],
    isNew: true
  },
  {
    id: 12,
    name: "Borboleta Feliz",
    category: "miçangas",
    audience: "infantil",
    img: "https://images.unsplash.com/photo-1560343787-571e8e0a5f8e?w=600&q=80",
    color: "#e8f5e9",
    price: 38,
    desc: "Miçangas verdes com borboletinhas encantadoras.",
    fullDesc: "Pulseira colorida com miçangas em tons de verde e pingentes de borboleta. Perfeita para a criança que ama a natureza.",
    sizes: [{ label: "P", cm: 12 }, { label: "M", cm: 13 }, { label: "G", cm: 14 }],
    isNew: false
  },
];

const reviews = [
  { text: "Recebi minha pulseira em 2 dias e é ainda mais linda pessoalmente. Uso todos os dias!", name: "Camila S.", loc: "Recife, PE", stars: 5, avatar: "👩🏻" },
  { text: "A qualidade é impecável. Comprei para presente e minha amiga adorou. Certamente volto!", name: "Ana Lima", loc: "São Paulo, SP", stars: 5, avatar: "👩🏼" },
  { text: "Pérolas lindíssimas, combinam com tudo. Já é a terceira vez que compro nessa loja.", name: "Ju Ferreira", loc: "Fortaleza, CE", stars: 5, avatar: "👩🏾" },
  { text: "Comprei a Arco-Íris Kids para minha filha e ela simplesmente não tira! Adoramos!", name: "Patrícia M.", loc: "Olinda, PE", stars: 5, avatar: "👩🏽" },
];

// Peças disponíveis para personalização
const PERSONALIZER_PIECES = {
  perolas: [
    { id: "p1", emoji: "⚪", label: "Pérola Branca", color: "#f8f8f0", price: 8 },
    { id: "p2", emoji: "🩷", label: "Pérola Rosa", color: "#fce4ec", price: 8 },
    { id: "p3", emoji: "🟡", label: "Pérola Dourada", color: "#fff8e1", price: 10 },
    { id: "p4", emoji: "🟣", label: "Pérola Lilás", color: "#f3e5f5", price: 9 },
    { id: "p5", emoji: "🟤", label: "Pérola Nude", color: "#fbe9e7", price: 8 },
    { id: "p6", emoji: "⚫", label: "Pérola Preta", color: "#37474f", price: 12 },
  ],
  cristais: [
    { id: "c1", emoji: "💎", label: "Cristal Azul", color: "#e3f2fd", price: 12 },
    { id: "c2", emoji: "🔴", label: "Cristal Vermelho", color: "#ffebee", price: 12 },
    { id: "c3", emoji: "🟢", label: "Cristal Verde", color: "#e8f5e9", price: 12 },
    { id: "c4", emoji: "🟠", label: "Cristal Âmbar", color: "#fff3e0", price: 13 },
    { id: "c5", emoji: "🌸", label: "Cristal Rosa", color: "#fce4ec", price: 12 },
    { id: "c6", emoji: "🤍", label: "Cristal Transparente", color: "#f5f5f5", price: 11 },
  ],
  micangas: [
    { id: "m1", emoji: "🔵", label: "Miçanga Azul", color: "#1565c0", price: 4 },
    { id: "m2", emoji: "🟡", label: "Miçanga Amarela", color: "#f9a825", price: 4 },
    { id: "m3", emoji: "🟤", label: "Miçanga Marrom", color: "#6d4c41", price: 4 },
    { id: "m4", emoji: "🩷", label: "Miçanga Rosa", color: "#e91e63", price: 4 },
    { id: "m5", emoji: "🟣", label: "Miçanga Roxa", color: "#7b1fa2", price: 4 },
    { id: "m6", emoji: "🟢", label: "Miçanga Verde", color: "#2e7d32", price: 4 },
    { id: "m7", emoji: "⚪", label: "Miçanga Branca", color: "#f5f5f5", price: 4 },
    { id: "m8", emoji: "🔴", label: "Miçanga Vermelha", color: "#c62828", price: 4 },
  ],
  pingentes: [
    { id: "pg1", emoji: "⭐", label: "Estrela", color: "#ffd700", price: 15 },
    { id: "pg2", emoji: "🌙", label: "Lua Crescente", color: "#c0c0c0", price: 15 },
    { id: "pg3", emoji: "❤️", label: "Coração", color: "#e91e63", price: 15 },
    { id: "pg4", emoji: "🦋", label: "Borboleta", color: "#7c4dff", price: 18 },
    { id: "pg5", emoji: "🌸", label: "Florzinha", color: "#ff80ab", price: 15 },
    { id: "pg6", emoji: "🌈", label: "Arco-Íris", color: "#ff6d00", price: 20 },
    { id: "pg7", emoji: "🍀", label: "Trevo", color: "#4caf50", price: 15 },
    { id: "pg8", emoji: "✨", label: "Faíscas", color: "#ffc107", price: 18 },
  ],
};