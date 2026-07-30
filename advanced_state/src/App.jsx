import { Provider } from 'react-redux'
import CartSummary from './components/CartSummary.jsx'
import ProductList from './components/ProductList.jsx'
import ThemeToggleButton from './components/ThemeToggleButton.jsx'
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx'
import { store } from './store/store.js'

function MarketCart() {
  const { theme } = useTheme()

  return (
    <div className={`app-theme app-theme-${theme}`}>
      <header className="site-header">
        <div>
          <p className="eyebrow">Context + Redux Toolkit</p>
          <h1>MarketCart</h1>
        </div>
        <ThemeToggleButton />
      </header>
      <main className="app-layout">
        <section aria-labelledby="products-heading">
          <h2 id="products-heading">Products</h2>
          <ProductList />
        </section>
        <CartSummary />
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <MarketCart />
      </Provider>
    </ThemeProvider>
  )
}

export default App
