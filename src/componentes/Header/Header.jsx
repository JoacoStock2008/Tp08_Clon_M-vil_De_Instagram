import "./Header.css"

// ===== HEADER =====
// La barra superior que muestra el logo de Instagram,
// el buscador y los botones de acciones (configuración, cámara, mensajes, nuevo post)

function Header() {
  return (
    <header className="header">
      {/* Logo de Instagram */}
      <div className="header-logo">
        <span className="logo-icon">📷</span>
        <span className="logo-text">Instagram</span>
      </div>

      {/* Buscador del centro */}
      <div className="header-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Username, hashtag and story search"
          className="search-input"
        />
      </div>

      {/* Botones de la derecha */}
      <div className="header-actions">
        <button className="header-btn" title="Configuración">⚙️</button>
        <button className="header-btn" title="Cámara">📷</button>
        <button className="header-btn" title="Mensajes">✈️</button>
        <button className="header-btn-new">
          <span>+</span>
          <span>New Post</span>
        </button>
      </div>
    </header>
  )
}

export default Header