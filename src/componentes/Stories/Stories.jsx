import { useState, useEffect } from "react"
import Story from "./Story.jsx"
import { fetchStoryImages } from "../../services/catService.js"
import { fakeUsers } from "../../data/userData.js"
import "./Stories.css"

// ===== STORIES =====
// Muestra la sección de stories circulares en la parte superior.
// Carga las imágenes desde la API y las mapea a cada usuario falso.

function Stories() {
  // Estado para guardar las stories que vienen de la API
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect se ejecuta una sola vez al cargar el componente
  // (el array vacío [] al final es lo que hace que solo se ejecute una vez)
  useEffect(() => {
    async function cargarStories() {
      try {
        const imagenes = await fetchStoryImages(7)
        // Combinamos las imágenes de la API con los usuarios falsos
        const storiesConUsuario = imagenes.map((img, index) => ({
          id: img.id,
          imageUrl: img.url,
          username: fakeUsers[index % fakeUsers.length].username,
        }))
        setStories(storiesConUsuario)
      } catch (error) {
        console.error("Error al cargar stories:", error)
      } finally {
        setLoading(false)
      }
    }

    cargarStories()
  }, [])

  return (
    <section className="stories-section">
      <h2 className="stories-title">STORİES</h2>

      {loading ? (
        <div className="stories-loading">
          {/* Mostramos 7 círculos grises mientras carga */}
          {[...Array(7)].map((_, i) => (
            <div key={i} className="story-skeleton" />
          ))}
        </div>
      ) : (
        <div className="stories-list">
          {/* Mapeamos cada story y creamos un componente Story */}
          {stories.map((story) => (
            <Story key={story.id} story={story} />
          ))}
          {/* Botón para ver más stories */}
          <button className="stories-next">›</button>
        </div>
      )}
    </section>
  )
}

export default Stories