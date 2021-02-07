import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      console.log('hej!')
      state.items.push({ ...action.payload, quantity: 1 })
    }
  }
})