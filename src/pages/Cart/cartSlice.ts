import {createSlice} from "@reduxjs/toolkit"
import { prodDataType } from "../../types/productDataType";

const initialCart:prodDataType[]=[];

const cartSlice=createSlice(
    {
        name:"cart",
        initialState:initialCart,
        reducers:{
            addToCart(state,action) {
                //console.log(action.payload);
                return [...state ,action.payload]
                //state.push(action.payload)
            },
            removeFromCart(state,action) {
                return state.filter((item)=> item.id !== action.payload.id)
            }
        }

    }
)
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
