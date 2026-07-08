import { useState } from "react"
import "./Stories.css"

// ===== STORY =====
// Muestra UNA story circular con borde gradiente y el username debajo.
// Props:
//   story: objeto con { id, imageUrl, username }

function Story({ story }) {
  // Estado para saber si ya fue vista (cambia el borde)
  const [visto, setVisto] = useState(false)

  function handleClick() {
    setVisto(true)
  }

  return (
    <div className="story" onClick={handleClick}>
      {/* El borde del círculo cambia según si fue visto o no */}
      <div className={`story-ring ${visto ? "story-ring-visto" : ""}`}>
        <img
          src={story.imageUrl}
          alt={story.username}
          className="story-img"
        />
      </div>
      <span className="story-username">{story.username}</span>
    </div>
  )
}

export default Story