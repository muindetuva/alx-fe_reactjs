import { useParams } from 'react-router-dom'

function UserProfilePage() {
  const { username } = useParams()

  return (
    <article className="user-profile">
      <h2>@{username}</h2>
      <p>This profile was rendered from the dynamic URL parameter.</p>
    </article>
  )
}

export default UserProfilePage
