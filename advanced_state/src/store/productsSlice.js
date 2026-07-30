import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProductsFromApi } from '../api/products.js'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => fetchProductsFromApi(),
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unable to load products'
      })
  },
})

export default productsSlice.reducer
