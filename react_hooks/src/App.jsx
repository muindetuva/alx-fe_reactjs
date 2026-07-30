import DebouncedSearch from './components/DebouncedSearch.jsx'
import DragIndicator from './components/DragIndicator.jsx'
import FilteredProductList from './components/FilteredProductList.jsx'
import MousePosition from './components/MousePosition.jsx'
import SignupForm from './components/SignupForm.jsx'

function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">ALX React</p>
        <h1>HookMastery</h1>
        <p>
          Reusable custom Hooks for browser events, forms, fetching,
          persistence, debouncing, filtering, and pagination.
        </p>
      </header>

      <section className="panel" aria-labelledby="mouse-heading">
        <h2 id="mouse-heading">Mouse position</h2>
        <MousePosition />
        <DragIndicator />
      </section>

      <section className="panel" aria-labelledby="signup-heading">
        <h2 id="signup-heading">Hook-powered signup</h2>
        <SignupForm />
      </section>

      <section className="panel" aria-labelledby="remote-heading">
        <h2 id="remote-heading">Persisted remote search</h2>
        <DebouncedSearch />
      </section>

      <section className="panel" aria-labelledby="products-heading">
        <h2 id="products-heading">Filtered product catalogue</h2>
        <FilteredProductList />
      </section>
    </main>
  )
}

export default App
