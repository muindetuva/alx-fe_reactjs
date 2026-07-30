import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AboutPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <section className="content-panel">
      <h1>About this project</h1>
      <p>
        The controlled form below demonstrates state-driven input and
        programmatic navigation.
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="login-username">Username</label>
        <input
          id="login-username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Log in</button>
      </form>
    </section>
  )
}

export default AboutPage
