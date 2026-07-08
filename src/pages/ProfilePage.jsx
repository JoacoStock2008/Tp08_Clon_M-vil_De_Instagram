import { useState, useEffect } from "react"
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx"
import { fetchCatPosts } from "../services/catService.js"
import { formatCount } from "../data/userData.js"
import "./ProfilePage.css"

// ===== PROFILEPAGE =====
// La página de perfil del usuario emulado.
// Muestra la info del usuario y una grilla con sus publicaciones.
// Props:
//   onOpenPost: función para abrir el modal al clickear una foto

function ProfilePage({ onOpenPost }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  // Estado para la tab activa (POSTS o GUARDADOS)
  const [activeTab, setActiveTab] = useState("posts")

  useEffect(() => {
    async function cargarPostsPerfil() {
      try {
        // Cargamos 9 posts para la grilla de perfil (3x3)
        const data = await fetchCatPosts(9)
        setPosts(data)
      } catch (err) {
        console.error("Error al cargar posts del perfil:", err)
      } finally {
        setLoading(false)
      }
    }
    cargarPostsPerfil()
  }, [])

  return (
    <div className="profile-page">
      {/* Tarjeta con info del usuario */}
      <ProfileCard />

      {/* Tabs de Posts / Guardados */}
      <div className="profile-tabs">
        <button
          className={`profile-tab ${activeTab === "posts" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("posts")}
        >
          ▣ POSTS
        </button>
        <button
          className={`profile-tab ${activeTab === "saved" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("saved")}
        >
          🔖 GUARDADOS
        </button>
      </div>

      {/* Grilla de publicaciones del perfil */}
      {loading ? (
        <div className="profile-grid">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="profile-post-skeleton" />
          ))}
        </div>
      ) : (
        <div className="profile-grid">
          {/* Solo mostramos los posts si la tab activa es "posts" */}
          {activeTab === "posts" &&
            posts.map((post) => (
              <div
                key={post.id}
                className="profile-post-item"
                onClick={() => onOpenPost(post)}
              >
                <img
                  src={post.imageUrl}
                  alt={post.username}
                  className="profile-post-img"
                  loading="lazy"
                />
                {/* Overlay con likes al hacer hover */}
                <div className="profile-post-overlay">
                  <span className="overlay-likes">♥ {formatCount(post.likes)}</span>
                </div>
              </div>
            ))
          }

          {/* Si está en la tab de guardados mostramos un mensaje */}
          {activeTab === "saved" && (
            <div className="profile-empty">
              <p>📌 No hay publicaciones guardadas aún.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProfilePage