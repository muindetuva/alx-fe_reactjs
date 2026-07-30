import { useDispatch, useSelector } from 'react-redux'
import {
  clearCart,
  removeItem,
} from '../features/cart/cartSlice.js'

function CartSummary() {
  const items = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <aside className="cart-summary" aria-labelledby="cart-heading">
      <div className="cart-heading-row">
        <h2 id="cart-heading">Cart ({items.length})</h2>
        <button
          className="button-secondary"
          type="button"
          onClick={() => dispatch(clearCart())}
          disabled={items.length === 0}
        >
          Clear cart
        </button>
      </div>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button
                className="button-link"
                type="button"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <strong className="cart-total">Total: ${total}</strong>
    </aside>
  )
}

export default CartSummary
