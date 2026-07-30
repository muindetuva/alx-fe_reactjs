import { NavLink } from 'react-router-dom'

function navigationClass({ isActive }) {
  return isActive ? 'nav-link nav-link-active' : 'nav-link'
}

function Navbar() {
  return (
    <nav aria-label="Primary navigation">
      <NavLink className={navigationClass} to="/" end>
        Home
      </NavLink>
      <NavLink className={navigationClass} to="/about">
        About
      </NavLink>
      <NavLink className={navigationClass} to="/users">
        Users
      </NavLink>
    </nav>
  )
}

export default Navbar
