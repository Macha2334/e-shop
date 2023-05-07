import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../pages/Cart/cartSlice"
import prodSlice from "./productsSlice"
import productsFilterSlice from "./productsFilterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "../Login/loginSlice";
const reducer=combineReducers(
    {
        cart:cartSlice,
        products:prodSlice,
        productFilter:productsFilterSlice,
        login:loginSlice
    }
)
const store= configureStore(
    {
        reducer
    }
);
export default store;