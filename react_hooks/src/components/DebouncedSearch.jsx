import useDebounce from '../hooks/useDebounce.js'
import useFetch from '../hooks/useFetch.js'
import useLocalStorage from '../hooks/useLocalStorage.js'
import useWindowSize from '../hooks/useWindowSize.js'

function DebouncedSearch() {
  const [query, setQuery] = useLocalStorage('hookmastery-query', '')
  const debouncedQuery = useDebounce(query, 400)
  const { width, height } = useWindowSize()
  const endpoint = debouncedQuery
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(debouncedQuery)}`
    : null
  const { data, error, loading } = useFetch(endpoint)
  const products = data?.products ?? []

  return (
    <div>
      <label htmlFor="remote-search">Search remote products</label>
      <input
        id="remote-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search phones, laptops, and more"
      />
      <p className="viewport-note">
        Viewport: {width} × {height}
      </p>
      {loading && <p role="status">Loading results…</p>}
      {error && <p role="alert">Unable to load results: {error.message}</p>}
      {!loading && !error && debouncedQuery && products.length === 0 && (
        <p>No matching remote products.</p>
      )}
      <ul className="compact-list">
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default DebouncedSearch
