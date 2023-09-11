import { configureStore } from '@reduxjs/toolkit'
import { firstReducer } from './reducer'

export const store = configureStore({
  reducer: {
    first: firstReducer,
  },
})
