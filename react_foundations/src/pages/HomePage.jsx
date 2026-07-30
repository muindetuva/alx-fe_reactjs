import ThemeToggleButton from '../components/ThemeToggleButton.jsx'

function DashboardPreferences() {
  return (
    <div className="preferences-panel">
      <p>Choose the appearance used across the application.</p>
      <ThemeToggleButton />
    </div>
  )
}

function LearningDashboard() {
  return (
    <section className="content-panel" aria-labelledby="preferences-heading">
      <h2 id="preferences-heading">Dashboard preferences</h2>
      <DashboardPreferences />
    </section>
  )
}

function HomePage({ profileCards, liveSearch }) {
  return (
    <>
      <section className="content-panel hero-panel">
        <p className="eyebrow">React foundations</p>
        <h1>Styles, state, routes, and context</h1>
        <p>
          Compare styling approaches, search a stateful list, navigate nested
          routes, and update a shared theme.
        </p>
      </section>

      <section className="content-panel" aria-labelledby="profiles-heading">
        <h2 id="profiles-heading">Styling comparison</h2>
        <div className="profile-grid">{profileCards}</div>
      </section>

      <section className="content-panel" aria-labelledby="search-heading">
        <h2 id="search-heading">Live search</h2>
        {liveSearch}
      </section>

      <LearningDashboard />
    </>
  )
}

export default HomePage
