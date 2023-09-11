import { createReducer } from '@reduxjs/toolkit'
import { Coins } from '../types/Coin'

type firstReducerState = {
  coins: Coins[]
}
const initialState: firstReducerState = {
  coins: [],
}
export const firstReducer = createReducer(initialState, {
  firstCase: () => {},
})
