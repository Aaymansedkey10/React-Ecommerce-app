import { configureStore } from "@reduxjs/toolkit";
import  categoryReducer  from "./slices/Category-slice";
import  productsReducer  from "./slices/product-slice";
import cartReducer  from "./slices/Cart-slice";
import aboutReducer  from "./slices/About-slice";

export const store = configureStore({
   reducer :{
            products:productsReducer,
            category:categoryReducer ,
            cart : cartReducer ,
            users : aboutReducer ,
        }
})