import axios from "axios"
import { fakeUsers, fakeCaptions } from "../data/userData.js"

// ===== SERVICIO DE LA CAT API =====
// Acá está toda la lógica para pedir imágenes a la API externa
// Lo separamos de los componentes para mantener el código ordenado

const CAT_API_URL = "https://api.thecatapi.com/v1/images/search"

// Función que pide 'cantidad' fotos de gatos a la API
// y les agrega datos falsos (username, likes, caption, etc.)
export async function fetchCatPosts(cantidad = 12) {
  const response = await axios.get(CAT_API_URL, {
    params: {
      limit: cantidad,
      // mime_types: "jpg,png" filtra solo imágenes (no gifs)
      mime_types: "jpg,png",
    },
  })

  // Por cada imagen que devuelve la API, creamos un objeto "post"
  // con toda la info que necesitamos mostrar
  const posts = response.data.map((cat, index) => {
    // Elegimos un usuario falso de manera circular
    const user = fakeUsers[index % fakeUsers.length]
    // Elegimos un caption falso de manera circular
    const caption = fakeCaptions[index % fakeCaptions.length]
    // Generamos likes aleatorios entre 100 y 50000
    const likes = Math.floor(Math.random() * 49900) + 100
    // Generamos una fecha falsa en los últimos 30 días
    const daysAgo = Math.floor(Math.random() * 30) + 1
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    const dateStr = date.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
    })

    return {
      id: cat.id,
      imageUrl: cat.url,
      width: cat.width,
      height: cat.height,
      username: user.username,
      avatar: user.avatar,
      likes: likes,
      caption: caption,
      date: dateStr,
      // El campo 'liked' arranca en false (el usuario no le dio like aún)
      liked: false,
    }
  })

  return posts
}

// Función para pedir imágenes de stories (son más chicas, alcanza con 7)
export async function fetchStoryImages(cantidad = 7) {
  const response = await axios.get(CAT_API_URL, {
    params: {
      limit: cantidad,
      mime_types: "jpg,png",
    },
  })
  return response.data
}