import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2' ;


export const cartSlice = createSlice ({
    initialState:[],
    name:"cardSlice",
    reducers:{
        getCardProducts:(state , action)=>{            
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
                localStorage.setItem("cart" ,JSON.stringify(state));
            }           
        },
        deleteProduct: (state, action) => {
            const productFind = state.find((pro) => pro.id === action.payload.id);
            if (productFind) {
              state.splice(state.indexOf(productFind), 1);
            }
        },
        incrementQuantity:(state , action)=>{
            console.log(action.payload);
            const productFind = state.find((pro)=>pro.id === action.payload.id);
            if(productFind){
                productFind.quantity += 1;
            }
        },
        decrementQuantity:(state , action)=>{
            const productFind = state.find((pro)=>pro.id === action.payload.id);
            if(productFind){
                    productFind.quantity -= 1;
            }
        },
        clearCart:(state , action)=>{ 
                return [];
        },
        getTotalPrice:(state , action)=>{            
            let total = 0;
            state.forEach((pro)=>{
                total += pro.price * pro.quantity;
                return total;
            });
            console.log(total);
            
        }
    }
}) 

export const {addProductToCard , getCardProducts , deleteProduct , incrementQuantity , decrementQuantity , clearCart , getTotalPrice} = cartSlice.actions
export default cartSlice.reducer ;