import {createSlice} from "@reduxjs/toolkit"

const initialProds:string[]=[];
const productSlice=createSlice(
    {
        name:'products',
        initialState:initialProds,
        reducers:{
            prodData(state,action){
                return [...state ,action.payload]
            },
        }

    }
)
export const {prodData} = productSlice.actions;
export default productSlice.reducer;
