import Navbar from './Navbar.jsx'

function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <header className="site-header">
        <a className="brand" href="/">
          React Foundations
        </a>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Built with Vite, React, and React Router.</footer>
    </div>
  )
}

export default PageLayout
