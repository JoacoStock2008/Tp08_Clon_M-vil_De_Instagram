import "./Sidebar.css"

// ===== SIDEBARITEM =====
// Representa UN item del menú de navegación del sidebar.
// Lo separamos en su propio componente para que sea reutilizable.
// Props:
//   icon: string - el ícono del item
//   label: string - el texto del item
//   isActive: boolean - si está seleccionado actualmente
//   onClick: función - qué hacer cuando se hace click

function SidebarItem({ icon, label, isActive, onClick }) {
  return (
    <button
      // Si está activo, le agregamos la clase "active" para el estilo
      className={`sidebar-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {/* Barra indicadora de item activo */}
      {isActive && <span className="active-indicator" />}

      <span className="sidebar-item-icon">{icon}</span>
      <span className="sidebar-item-label">{label}</span>
    </button>
  )
}

export default SidebarItem