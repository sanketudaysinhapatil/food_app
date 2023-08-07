import {configureStore} from "@reduxjs/toolkit"
// import cartSlice from "./cartSlice"

import restaurentSlice from "./restaurentSlice"
import { basketSlice } from "./cartSlice"

export const store = configureStore({
    reducer:{
        cart :basketSlice,
        restaurent : restaurentSlice

    }
})
