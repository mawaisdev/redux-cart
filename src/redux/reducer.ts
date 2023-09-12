import { createReducer } from '@reduxjs/toolkit'

type CartReducerState = {
  cartItems: any[]
  subtotal: string
  shipping: string
  tax: string
  total: string
}

const initialState: CartReducerState = {
  cartItems: [],
  subtotal: '0',
  shipping: '0',
  tax: '0',
  total: '0',
}
export const cartReducer = createReducer(initialState, {
  addToCart: (state, action) => {
    const item = action.payload
  },
})
