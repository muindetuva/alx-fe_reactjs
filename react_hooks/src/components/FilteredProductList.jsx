import { useMemo, useState } from 'react'
import useFilteredList from '../hooks/useFilteredList.js'

const productNames = [
  'Aurora Desk Lamp',
  'Bamboo Laptop Stand',
  'Canvas Travel Tote',
  'Ceramic Coffee Mug',
  'Compact Mechanical Keyboard',
  'Cotton Throw Blanket',
  'Desktop Cable Organizer',
  'Digital Kitchen Scale',
  'Ergonomic Office Chair',
  'Fitness Tracker Band',
  'Foldable Phone Stand',
  'Glass Water Bottle',
  'Insulated Lunch Bag',
  'Leather Notebook Cover',
  'LED Monitor Light',
  'Linen Cushion Set',
  'Magnetic Charging Cable',
  'Mesh Storage Basket',
  'Mini Bluetooth Speaker',
  'Noise Cancelling Headphones',
  'Portable SSD Drive',
  'Recycled Paper Notebook',
  'Smart Indoor Thermometer',
  'Stainless Steel Flask',
  'Travel Adapter Kit',
  'USB-C Docking Station',
  'Wireless Charging Pad',
  'Wireless Ergonomic Mouse',
  'Wool Desk Mat',
  'Adjustable Tablet Holder',
  'Pocket Power Bank',
  'Reusable Shopping Bag',
]

function FilteredProductList() {
  const [query, setQuery] = useState('')
  const products = useMemo(
    () => productNames.map((name, index) => ({ id: index + 1, name })),
    [],
  )
  const {
    pageItems,
    filteredItems,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    goToPage,
    startIndex,
    endIndex,
  } = useFilteredList(products, query, 6)

  return (
    <div>
      <label htmlFor="product-filter">Filter local products</label>
      <input
        id="product-filter"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try wireless or desk"
      />
      <p aria-live="polite">
        Showing {filteredItems.length === 0 ? 0 : startIndex + 1}–{endIndex} of{' '}
        {filteredItems.length} products
      </p>
      <ul className="product-grid">
        {pageItems.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <div className="pagination" aria-label="Product pages">
        <button
          type="button"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <label htmlFor="page-number">Go to page</label>
        <input
          id="page-number"
          type="number"
          min="1"
          max={totalPages}
          value={currentPage}
          onChange={(event) => goToPage(Number(event.target.value))}
        />
      </div>
    </div>
  )
}

export default FilteredProductList
