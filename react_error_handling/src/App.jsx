import BuggyWidget from './components/BuggyWidget.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import UserProfile from './components/UserProfile.jsx'

function ApplicationContent() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Layered recovery</p>
        <h1>ReactGuard</h1>
        <p>
          Small failure zones keep unrelated features usable while validation
          and monitoring preserve useful diagnostic context.
        </p>
      </header>

      <div className="content-grid">
        <section className="panel" aria-labelledby="widget-heading">
          <h2 id="widget-heading">Unstable widget</h2>
          <ErrorBoundary fallback="This widget couldn't load.">
            <BuggyWidget />
          </ErrorBoundary>
        </section>

        <section className="panel" aria-labelledby="profile-heading">
          <h2 id="profile-heading">Validated user profile</h2>
          <ErrorBoundary fallback="The user profile couldn't load.">
            <UserProfile />
          </ErrorBoundary>
        </section>
      </div>
    </main>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ApplicationContent />
    </ErrorBoundary>
  )
}

export default App
