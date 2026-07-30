import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="content-panel">
      <h1>Page not found</h1>
      <p>The requested route does not exist.</p>
      <Link to="/">Return home</Link>
    </section>
  )
}

export default NotFoundPage
