import { currentUser, formatCount } from "../../data/userData.js"
import SidebarItem from "./SideBarItem.jsx"
import "./Sidebar.css"

// ===== SIDEBAR =====
// La barra lateral oscura de la izquierda.
// Muestra el perfil del usuario y los links de navegación.
// Props:
//   currentPage: string - qué página está activa ("home" o "profile")
//   onNavigate: función - se llama cuando el usuario hace click en un item

function Sidebar({ currentPage, onNavigate }) {
  // Los items del menú de navegación
  // icon es el emoji/símbolo que se muestra, label es el texto
  const navItems = [
    { id: "home", icon: "⌂", label: "Home" },
    { id: "explore", icon: "◎", label: "Explore" },
    { id: "reels", icon: "▣", label: "Reels" },
    { id: "igtv", icon: "▭", label: "IGTV" },
    { id: "notifications", icon: "🔔", label: "Notifications" },
  ]

  return (
    <aside className="sidebar">
      {/* Sección del perfil del usuario arriba del sidebar */}
      <div className="sidebar-profile" onClick={() => onNavigate("profile")}>
        <div className="sidebar-avatar-wrapper">
          <img
            src={currentUser.avatar}
            alt={currentUser.displayName}
            className="sidebar-avatar"
          />
        </div>
        <h2 className="sidebar-name">
          {currentUser.displayName}
          {currentUser.verified && (
            <span className="verified-badge" title="Verificado">✓</span>
          )}
        </h2>
        <p className="sidebar-username">{currentUser.username}</p>

        {/* Stats de seguidores y likes */}
        <div className="sidebar-stats">
          <div className="sidebar-stat">
            <span className="stat-icon">👤</span>
            <span className="stat-value">{formatCount(currentUser.followers)}</span>
          </div>
          <div className="sidebar-stat">
            <span className="stat-icon">♥</span>
            <span className="stat-value">{formatCount(currentUser.following * 744)}</span>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="sidebar-divider" />

      {/* Lista de items de navegación */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            // Un item está activo si coincide con la página actual
            isActive={currentPage === item.id}
            onClick={() => onNavigate(item.id)}
          />
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar