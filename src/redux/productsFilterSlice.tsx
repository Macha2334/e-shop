import {createSlice} from "@reduxjs/toolkit"
import { prodDataType } from "../types/productDataType";
const initialCart:prodDataType[]=[];

const prodFilterSlice=createSlice(
    {
        name:"productFilter",
        initialState:initialCart,
        reducers:{
            setFilterProducts(state,action) {
                console.log('payload',action.payload);
                return [...action.payload]
                //state.push(action.payload)
            },
            getFilterProducts(state,action) {
                return state.filter((item)=> item.id !== action.payload.id)
            },
            resetFilterProducts(state){
                return state.filter((item:prodDataType)=>false)
            }
        }

    }
)
export const {setFilterProducts,getFilterProducts,resetFilterProducts} = prodFilterSlice.actions;
export default prodFilterSlice.reducer;
