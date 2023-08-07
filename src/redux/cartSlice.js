import {createSlice} from "@reduxjs/toolkit"
import { act } from "react-test-renderer"

const initialState = {
    items : []
}
export const cartSLice = createSlice({
    name:"cart",
    reducers:{
        addToCart : (action, action)=>{
            state.items = [...state.items, action.payload]
        },
        removeFromCart :(action , payload)=>{
            let newCart = [...state.items]
            let itemIndex = state.items.findIndex(item =>item.id == action.payload.id)
            if(itemIndex >= 0 ){
                newCart.splice(itemIndex, 1)
            }else{
                console.log("cant remove item")

            }
            state.items = newCart;
            
        },
        emptyCart :(action , payload)=>{
            state.items= []
        }
    }
})

export const {addToCart, removeFromCart, emptyCart} = cartSLice.actions

export const selsectCartItems = state => state.cart.items
export const selectCartItemsById = (state, id )=> state.cart.item.filter(item=>item.id == id)

export const selectCartTotal = state => state.cart.items.reducer((total, item)=> total= total+ item.price, 0)



export default cartSLice.reducer
