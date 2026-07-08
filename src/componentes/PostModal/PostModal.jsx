import { useState, useEffect } from "react"
import { fakeComments, formatCount } from "../../data/userData.js"
import "./PostModal.css"

// ===== POSTMODAL =====
// La ventana emergente que aparece cuando el usuario hace click en un post.
// Muestra la imagen grande, caption, likes y comentarios falsos.
// Props:
//   post: el post seleccionado con todos sus datos
//   onClose: función para cerrar el modal

function PostModal({ post, onClose }) {
  // Estado para manejar si el post está likeado dentro del modal
  const [liked, setLiked] = useState(post.liked)
  const [likesCount, setLikesCount] = useState(post.likes)

  // Tomamos solo los primeros 5 comentarios falsos
  const comentarios = fakeComments.slice(0, 5)

  // Función para cerrar el modal si se hace click FUERA del contenido
  function handleBackdropClick(e) {
    // Solo cerramos si el click fue en el fondo (backdrop), no en el contenido
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  function handleLike() {
    setLiked(!liked)
    setLikesCount(liked ? likesCount - 1 : likesCount + 1)
  }

  // Cerramos el modal con la tecla Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    // Cleanup: quitamos el listener cuando el componente se desmonta
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    // El backdrop oscuro detrás del modal
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        {/* Botón para cerrar */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Imagen grande del post */}
        <div className="modal-image-side">
          <img
            src={post.imageUrl}
            alt={`Post de ${post.username}`}
            className="modal-image"
          />
        </div>

        {/* Panel de info derecho */}
        <div className="modal-info-side">
          {/* Header con avatar y usuario */}
          <div className="modal-user-header">
            <img
              src={post.avatar}
              alt={post.username}
              className="modal-avatar"
            />
            <div>
              <p className="modal-username">{post.username}</p>
              <p className="modal-date">{post.date}</p>
            </div>
          </div>

          <div className="modal-divider" />

          {/* Caption del post */}
          <div className="modal-caption">
            <span className="modal-caption-user">{post.username} </span>
            <span>{post.caption}</span>
          </div>

          {/* Comentarios falsos */}
          <div className="modal-comments">
            {comentarios.map((comentario, index) => (
              <div key={index} className="modal-comment">
                <span className="comment-user">{comentario.user} </span>
                <span className="comment-text">{comentario.text}</span>
              </div>
            ))}
          </div>

          <div className="modal-divider" />

          {/* Acciones y likes */}
          <div className="modal-actions">
            <div className="modal-btns">
              {/* Like */}
              <button
                className={`modal-action-btn ${liked ? "modal-liked" : ""}`}
                onClick={handleLike}
              >
                {liked ? "♥" : "♡"}
              </button>
              {/* Comentario */}
              <button className="modal-action-btn">💬</button>
              {/* Compartir */}
              <button className="modal-action-btn">✈️</button>
            </div>
            <p className="modal-likes">{formatCount(likesCount)} likes</p>
          </div>

          {/* Campo para agregar comentario (visual, sin funcionalidad real) */}
          <div className="modal-add-comment">
            <input
              type="text"
              placeholder="Agregá un comentario..."
              className="modal-comment-input"
            />
            <button className="modal-comment-send">Publicar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostModal