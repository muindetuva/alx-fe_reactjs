import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice.js'
import { actionLogger } from './middleware/actionLogger.js'
import productsReducer from './productsSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionLogger),
})

// JavaScript runtime equivalents of Redux Toolkit's TypeScript aliases.
export const RootState = store.getState
export const AppDispatch = store.dispatch
