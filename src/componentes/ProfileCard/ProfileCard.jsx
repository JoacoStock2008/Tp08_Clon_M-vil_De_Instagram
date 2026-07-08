import { currentUser, formatCount } from "../../data/userData.js"
import "./ProfileCard.css"

// ===== PROFILECARD =====
// Muestra la info completa del perfil del usuario emulado.
// Incluye foto, nombre, bio, seguidores, seguidos y publicaciones.
// No recibe props porque usa directamente los datos del archivo userData.js

function ProfileCard() {
  return (
    <div className="profile-card">
      {/* Foto de perfil */}
      <div className="profile-avatar-wrapper">
        <img
          src={currentUser.avatar}
          alt={currentUser.displayName}
          className="profile-avatar"
        />
      </div>

      {/* Info del usuario */}
      <div className="profile-info">
        <div className="profile-name-row">
          <h1 className="profile-name">{currentUser.displayName}</h1>
          {currentUser.verified && (
            <span className="profile-verified" title="Cuenta verificada">✓</span>
          )}
        </div>
        <p className="profile-handle">{currentUser.username}</p>
        <p className="profile-bio">{currentUser.bio}</p>

        {/* Estadísticas del perfil */}
        <div className="profile-stats">
          <ProfileStat label="Posts" value={currentUser.posts} />
          <ProfileStat label="Followers" value={formatCount(currentUser.followers)} />
          <ProfileStat label="Following" value={currentUser.following} />
        </div>

        {/* Botones de acción del perfil */}
        <div className="profile-actions">
          <button className="profile-btn-edit">Editar perfil</button>
          <button className="profile-btn-settings">⚙️</button>
        </div>
      </div>
    </div>
  )
}

// Subcomponente para una sola estadística (posts, followers, following)
// Props:
//   label: string - el nombre de la estadística
//   value: number/string - el valor a mostrar
function ProfileStat({ label, value }) {
  return (
    <div className="profile-stat">
      <span className="profile-stat-value">{value}</span>
      <span className="profile-stat-label">{label}</span>
    </div>
  )
}

export default ProfileCard