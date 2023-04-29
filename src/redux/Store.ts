import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../pages/Cart/cartSlice"
import prodSlice from "./productsSlice"
import productsFilterSlice from "./productsFilterSlice";
import { combineReducers } from "@reduxjs/toolkit";
const reducer=combineReducers(
    {
        cart:cartSlice,
        products:prodSlice,
        productFilter:productsFilterSlice
    }
)
const store= configureStore(
    {
        reducer
    }
);
export default store;