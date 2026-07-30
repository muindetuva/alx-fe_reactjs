import { useEffect, useState } from 'react'

const technologies = [
  'React',
  'JavaScript',
  'TypeScript',
  'Vite',
  'React Router',
  'CSS Modules',
  'Node.js',
  'Accessibility',
  'Testing Library',
  'GraphQL',
]

function LiveSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(technologies)

  useEffect(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const nextResults = technologies.filter((technology) =>
      technology.toLowerCase().includes(normalizedQuery),
    )
    setResults(nextResults)
  }, [query])

  const clearSearch = () => {
    setQuery(() => '')
    setResults(() => technologies)
  }

  return (
    <div className="live-search">
      <div className="search-controls">
        <label htmlFor="technology-search">Search technologies</label>
        <input
          id="technology-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try React or CSS"
        />
        <button type="button" onClick={clearSearch}>
          Clear
        </button>
      </div>
      <p aria-live="polite">{results.length} matching technologies</p>
      <ul className="result-list">
        {results.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  )
}

export default LiveSearch
