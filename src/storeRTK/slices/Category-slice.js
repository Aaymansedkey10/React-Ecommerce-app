import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchCategories = createAsyncThunk("categorySlice/fetchCategories", async ()=>{
    const res = await fetch('https://dummyjson.com/products/categories');
    const categories = await res.json();
    return categories ;
})


export const categorySlice = createSlice({
    initialState:[],
    name:"categorySlice",
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(FetchCategories.fulfilled , (state , action)=>{
           return state = action.payload ;
        })
    }
})



export const {getProductsByCategory} = categorySlice.actions ;
export default categorySlice.reducer ;