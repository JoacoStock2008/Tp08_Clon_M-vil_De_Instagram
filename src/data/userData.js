// ===== DATOS DEL USUARIO EMULADO =====
// Acá guardamos la info del perfil que ya está "logueado"
// No hay login real, simplemente simulamos que el usuario ya entró

export const currentUser = {
  id: 1,
  username: "URITOGRINFELD",
  displayName: "URITO",
  bio: "📸 Amante de los gatos y el código · Argentina 🇦🇷",
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMADP0UOcaeNisOkoEaOmrJzMyxOCRsaDFLA&s",
  followers: 100000000,
  following: 843,
  posts: 47,
  verified: true,
}

// ===== USUARIOS FALSOS PARA LAS HISTORIAS Y POSTS =====
// Estos son los nombres de usuario que van a aparecer en las stories y posts
export const fakeUsers = [
  { username: "@gato_cosmo", avatar: "https://cataas.com/cat?width=80&height=80&_=u1" },
  { username: "@michi_lover", avatar: "https://cataas.com/cat?width=80&height=80&_=u2" },
  { username: "@whiskers99", avatar: "https://cataas.com/cat?width=80&height=80&_=u3" },
  { username: "@katze_welt", avatar: "https://cataas.com/cat?width=80&height=80&_=u4" },
  { username: "@felix_cat", avatar: "https://cataas.com/cat?width=80&height=80&_=u5" },
  { username: "@neko_chan", avatar: "https://cataas.com/cat?width=80&height=80&_=u6" },
  { username: "@gatito_arg", avatar: "https://cataas.com/cat?width=80&height=80&_=u7" },
]

// ===== CAPTIONS FALSOS PARA LOS POSTS =====
// Frases random que van a aparecer en cada publicación
export const fakeCaptions = [
  "Mirando el horizonte 🌅 #vibes",
  "Este momento es todo 🐾 #catsofinstagram",
  "Lunes de descanso 😴 #lazy",
  "El sol me llama ☀️ #sundayvibes",
  "Nada mejor que la siesta 🐱 #nap",
  "Explorando el mundo a mi manera 🌍",
  "El arte de no hacer nada 🎨 #relax",
  "Mi lugar favorito ❤️ #home",
  "Aventuras del día 🐾 #adventure",
  "Cuánta paz 🌿 #nature",
  "Solo tomando el sol ☀️",
  "Jueves de misterio 🔮 #mysterious",
]

// ===== COMENTARIOS FALSOS =====
// Lista de comentarios que van a aparecer en el modal de cada post
export const fakeComments = [
  { user: "@LaProfe", text: "Este gato esta hecho con axios?" },
  { user: "@feliplat", text: "Me encanta Uri 😍🔥" },
  { user: "@Chicha", text: "Adorable!! 🐱❤️" },
  { user: "@Cele", text: "Tremendo 👏👏" },
  { user: "@AugustoPR", text: "Extraño a cele 🩵" },
  { user: "@CamiLoveToto", text: "Hermosísimo 😻" },
  { user: "@Duolingo", text: "Me mata de ternura 💕" },
]

// ===== FUNCIÓN PARA FORMATEAR NÚMEROS =====
// Convierte 121000 → "121K", 1500000 → "1.5M", etc.
export function formatCount(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
  if (num >= 1000) return Math.round(num / 1000) + "K"
  return num.toString()
}