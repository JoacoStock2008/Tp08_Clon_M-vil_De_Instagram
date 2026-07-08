import { useState, useEffect } from "react"
import Post from "../Post/Post.jsx"
import { fetchCatPosts } from "../../services/catService.js"
import "./Feed.css"

// ===== FEED =====
// La sección principal con el grid de publicaciones.
// Carga las fotos desde la API y las muestra en formato grilla.
// Props:
//   onOpenPost: función - se llama cuando el usuario hace click en un post
//               para abrir el modal con el detalle

function Feed({ onOpenPost }) {
  // Estado para guardar los posts que vienen de la API
  const [posts, setPosts] = useState([])
  // Estado para saber si está cargando
  const [loading, setLoading] = useState(true)
  // Estado para mostrar si hubo un error
  const [error, setError] = useState(null)

  // Cargamos los posts cuando el componente se monta
  useEffect(() => {
    async function cargarPosts() {
      try {
        const data = await fetchCatPosts(12) // Pedimos 12 posts
        setPosts(data)
      } catch (err) {
        console.error("Error al cargar posts:", err)
        setError("No se pudieron cargar las publicaciones. Reintentá más tarde.")
      } finally {
        setLoading(false)
      }
    }

    cargarPosts()
  }, [])

  // Función para actualizar los likes de un post específico
  // Usamos map para no mutar el estado directamente
  function handleLike(postId) {
    setPosts((postsActuales) =>
      postsActuales.map((p) => {
        if (p.id === postId) {
          // Togglamos el like: si tenía like lo quitamos, si no lo ponemos
          return {
            ...p,
            liked: !p.liked,
            likes: p.liked ? p.likes - 1 : p.likes + 1,
          }
        }
        return p
      })
    )
  }

  if (loading) {
    return (
      <div className="feed-loading">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="post-skeleton" />
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="feed-error">{error}</div>
  }

  return (
    <section className="feed-section">
      <h2 className="feed-title">TRENDİNG</h2>
      {/* Grid de publicaciones - usamos map para renderizarlas dinámicamente */}
      <div className="feed-grid">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={handleLike}
            onOpenPost={onOpenPost}
          />
        ))}
      </div>
  
    </section>
  )
}

export default Feed

