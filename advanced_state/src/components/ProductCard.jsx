import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice.js'

function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <article className="product-card">
      <span className="product-mark" aria-hidden="true">
        {product.name.slice(0, 1)}
      </span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-footer">
        <strong>${product.price}</strong>
        <button type="button" onClick={() => dispatch(addItem(product))}>
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
