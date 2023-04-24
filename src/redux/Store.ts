import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../pages/Cart/cartSlice"

export default configureStore(
    {
        reducer:{
            cart:cartSlice,
        },
    }
);