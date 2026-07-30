import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    },
    removeItem: (state, action) =>
      state.filter((item) => item.id !== action.payload),
    clearCart: () => [],
  },
})

export const { addItem, clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer
