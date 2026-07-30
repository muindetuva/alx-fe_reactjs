import useFetch from '../hooks/useFetch.js'
import { parseUser } from '../schemas/userSchema.js'

function UserProfile() {
  const { status, data, error } = useFetch('/api/user', parseUser)

  if (status === 'idle') {
    return <p>Profile request is idle.</p>
  }

  if (status === 'loading') {
    return <p role="status">Loading user profile…</p>
  }

  if (status === 'error') {
    return <p role="alert">Could not load profile: {error.message}</p>
  }

  return (
    <article className="profile-card">
      <span className="profile-mark" aria-hidden="true">
        {data.name.slice(0, 1)}
      </span>
      <div>
        <h3>{data.name}</h3>
        <p>{data.email}</p>
        <small>User ID: {data.id}</small>
      </div>
    </article>
  )
}

export default UserProfile
