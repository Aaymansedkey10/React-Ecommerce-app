import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUlr = "https://dummyjson.com/products"

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async ()=>{
    const response = await fetch(apiUlr);
    const products = await response.json();
    return products.products
})

export const getProductsByCategory = createAsyncThunk("productsSlice/getProductsByCategory" , async (category)=>{
    // const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    // https://dummyjson.com/products/category/beauty
    const response = await fetch(`${apiUlr}/category/${category}`);
    const data = await response.json();
    if(!data){
        return null ;
    }
    return data.products ;  
})

export const getSingleProduct = createAsyncThunk("ProductsSlice/getSingleProduct" ,async (productId)=>{
    const response = await fetch(`${apiUlr}/${productId}`)
    const data = await response.json();
    return data ;
})

export const getProductsOfTopRating = createAsyncThunk('productsSlice/getProductsOfTopRating', async (rating)=>{
    const response = await fetch(apiUlr);
    const products = await response.json();
    const productsOfTopRating = products.products.filter(product => product.rating >= rating);
    return productsOfTopRating ;
})


export const ProductSlice = createSlice({
    initialState:[],
    name : "productSlice",
    reducers:{

    },
    extraReducers:(builder)=>{
        // builder.addCase(fetchProducts.pending , (state,action)=>{
        //     return <h1>loading...</h1>
        // })
        builder.addCase(fetchProducts.fulfilled , (state , action)=>{
           return state = action.payload ;
        })
        // builder.addCase(fetchProducts.rejected , (state,action)=>{
        //     return <h1>rejected</h1>
        // })
        builder.addCase(getProductsByCategory.fulfilled , (state ,action)=>{
            return state = action.payload ;
        })
        builder.addCase(getSingleProduct.fulfilled , (state ,action)=>{
            return state = action.payload ;
        })
        builder.addCase(getProductsOfTopRating.fulfilled , (state ,action)=>{
            return state = action.payload ;
        })
    }
})

export default ProductSlice.reducer