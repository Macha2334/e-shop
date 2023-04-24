import {createSlice} from "@reduxjs/toolkit"
import { prodDataType } from "../../types/productDataType";

const initialCart:prodDataType[]=[];

export const cartSlice=createSlice(
    {
        name:"cart",
        initialState:initialCart,
        reducers:{
            addToCart(state,action) {
                //console.log('add to cart'+action.type);
                return [...state ,action.payload]
                //state.push(action.payload)
            },
            removeFromCart(state,action) {
                //console.log('add to cart'+action.type);
                return state.filter((item)=> item.id !== action.payload.id)
                //state.push(action.payload)
            }
        }

    }
)
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
