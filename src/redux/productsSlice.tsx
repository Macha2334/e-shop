import {createSlice} from "@reduxjs/toolkit"
import { prodDataType } from "../types/productDataType";
const initialCart:prodDataType[]=[];

const prodSlice=createSlice(
    {
        name:"products",
        initialState:initialCart,
        reducers:{
            setProducts(state,action) {
                console.log('payload',action.payload);
                return [...state,...action.payload]
                //state.push(action.payload)
            },
            getProducts(state,action) {
                return state.filter((item)=> item.id !== action.payload.id)
            },
            resetProducts(state){
                return state.filter((item:prodDataType)=>false)
            }
        }

    }
)
export const {setProducts,getProducts,resetProducts} = prodSlice.actions;
export default prodSlice.reducer;
