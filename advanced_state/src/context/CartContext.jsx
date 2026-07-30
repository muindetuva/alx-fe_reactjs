import {
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react'

const CartStateContext = createContext(undefined)
const CartDispatchContext = createContext(undefined)

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])
  const stateValue = useMemo(() => ({ items }), [items])

  return (
    <CartStateContext.Provider value={stateValue}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

export function useCart() {
  const state = useContext(CartStateContext)
  const dispatch = useContext(CartDispatchContext)

  if (state === undefined || dispatch === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return {
    items: state.items,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
  }
}

export { CartDispatchContext, CartStateContext }
