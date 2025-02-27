import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2' ;


export const cartSlice = createSlice ({
    initialState:[],
    name:"cardSlice",
    reducers:{
        getCardProducts:(state , action)=>{
            const storagedProducts = sessionStorage.getItem('cart');
            if(storagedProducts){
                state = JSON.parse(storagedProducts);
            }     
            return state ;
        },
        addProductToCard:(state , action)=>{ 
            const productFind = state.find((pro)=>pro.id === action.payload.id);
            if(productFind){
                productFind.quantity += 1;                
            }else{
                const productClone = {...action.payload , quantity:1};
                Swal.fire({
                    title :"Product added to card",
                    icon : "success" ,
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    },
                    toast: true,
                    position: 'top-end',
                    timer: 1000,
                    showConfirmButton:false,
                });
                state.push(productClone);
                sessionStorage.setItem("cart" ,JSON.stringify(state));
            }           
        },
        deleteProduct: (state, action) => {
            const productFind = state.find((pro) => pro.id === action.payload.id);
            if (productFind) {
              state.splice(state.indexOf(productFind), 1);
              sessionStorage.setItem("cart", JSON.stringify(state));
            }
        },
        incrementQuantity:(state , action)=>{
            console.log(action.payload);
            const productFind = state.find((pro)=>pro.id === action.payload.id);
            if(productFind && productFind.quantity > 0){
                productFind.quantity += 1;
                sessionStorage.setItem("cart", JSON.stringify(state));
            }
        },
        decrementQuantity:(state , action)=>{
            const productFind = state.find((pro)=>pro.id === action.payload.id);
            if(productFind && productFind.quantity > 1){
                productFind.quantity -= 1;
                sessionStorage.setItem("cart", JSON.stringify(state));
            }
        },
        clearCart:(state , action)=>{ 
            const LocalStorageProducts = localStorage.getItem('cart');
            if(LocalStorageProducts){
                state = JSON.parse(LocalStorageProducts);
                sessionStorage.removeItem('cart');
                state = [] ;
            }
               return state;
        },
        getTotalPrice:(state , action)=>{            
            let total = 0;
            state.forEach((pro)=>{
                total += pro.price * pro.quantity;
            });
            return total;
        }
    }
}) 

export const {addProductToCard , getCardProducts , deleteProduct , incrementQuantity , decrementQuantity , clearCart , getTotalPrice} = cartSlice.actions
export default cartSlice.reducer ;