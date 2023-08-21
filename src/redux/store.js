import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './basketSlice'
import restaurentSlice from './restaurentSlice'


export const store = configureStore({
  reducer: {
    basket: basketSlice,
    resturant: restaurentSlice
  },
})