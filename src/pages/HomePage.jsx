import Stories from "../components/Stories/Stories.jsx"
import Feed from "../components/Feed/Feed.jsx"
import "./HomePage.css"

// ===== HOMEPAGE =====
// La página de inicio. Contiene las stories arriba y el feed abajo.
// Props:
//   onOpenPost: función que viene de App.jsx para abrir el modal

function HomePage({ onOpenPost }) {
  return (
    <div className="home-page">
      {/* Sección de stories circulares */}
      <Stories />

      {/* Feed con el grid de publicaciones */}
      <Feed onOpenPost={onOpenPost} />
    </div>
  )
}

export default HomePage