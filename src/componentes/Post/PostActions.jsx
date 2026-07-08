import { formatCount } from "../../data/userData.js"
import "./Post.css"

// ===== POSTACTIONS =====
// Los botones de interacción: like ♥, comentario 💬, compartir ✈️
// Lo separamos del Post porque también se usa dentro del modal.
// Props:
//   post: el post con sus datos (para mostrar los likes y el estado 'liked')
//   onLike: función que se llama al presionar like
//   compact: boolean - si es true muestra los botones más chicos (para el overlay)

function PostActions({ post, onLike, compact }) {
  // Prevenimos que el click en los botones también abra el modal
  function handleLikeClick(e) {
    e.stopPropagation()
    onLike(post.id)
  }

  return (
    <div className={`post-actions ${compact ? "post-actions-compact" : ""}`}>
      {/* Botón de like */}
      <button
        className={`action-btn ${post.liked ? "action-liked" : ""}`}
        onClick={handleLikeClick}
        title="Like"
      >
        {/* Si está likeado mostramos corazón lleno, sino vacío */}
        <span className="action-icon">{post.liked ? "♥" : "♡"}</span>
        {/* En modo normal (no compact) mostramos el número de likes */}
        {!compact && (
          <span className="action-count">{formatCount(post.likes)}</span>
        )}
      </button>

      {/* Botón de comentario */}
      <button className="action-btn" title="Comentar" onClick={(e) => e.stopPropagation()}>
        <span className="action-icon">💬</span>
      </button>

      {/* Botón de compartir */}
      <button className="action-btn" title="Compartir" onClick={(e) => e.stopPropagation()}>
        <span className="action-icon">✈️</span>
      </button>
    </div>
  )
}

export default PostActions