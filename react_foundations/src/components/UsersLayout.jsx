import { NavLink, Outlet } from 'react-router-dom'

function UsersLayout() {
  return (
    <section className="content-panel">
      <h1>User profiles</h1>
      <p>Select a sample username to open the dynamic nested route.</p>
      <nav className="user-links" aria-label="Example users">
        <NavLink to="ada-lovelace">Ada Lovelace</NavLink>
        <NavLink to="grace-hopper">Grace Hopper</NavLink>
      </nav>
      <Outlet />
    </section>
  )
}

export default UsersLayout
