import "../css/Cart.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux" ;
import notFoundImage from "../assets/Notfound-2.webp"
import emptyCart from "../assets/empty-cart.png"
import { clearCart, decrementQuantity, deleteProduct, getCardProducts, getTotalPrice, incrementQuantity} from "../storeRTK/slices/Cart-slice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart(){
    const products = useSelector((state=> state.cart));
    const dispatch = useDispatch(); 
    const totalPrice = products.reduce((acc,curr) =>{ return acc + curr.price * curr.quantity} , 0);
    useEffect(()=>{
        dispatch(getCardProducts());
    },[])

    const handelDeleteProduct = (product)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.isConfirmed){
                dispatch(deleteProduct(product));
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handelClearCart = ()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.isConfirmed){
                dispatch(clearCart());
            }})
    }
    
    return(
        <div className="container-fluid py-lg-5 py-3">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center fw-bold"> Cart</h1>
                </div>
                <div className="col-12">
                    <div className="border-bottom border-2 border-black py-2 mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex">
                                <h5> total price = </h5>
                                <p className="fw-bold">{totalPrice.toFixed(2)}$</p>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <button className="btn btn-danger fw-bold rounded-0 px-lg-4" onClick={() => handelClearCart()}>clear</button>
                                <button className="btn custom-btn">check out</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {
                Array.isArray(products) && products.length > 0 ? (
                    <div className="row align-items-start">
                        {
                            products.map((product) => {
                                return(
                                    <div className="col-12" key={product.id}>
                                        <div className="border-bottom d-flex py-2 mb-3 cart-container">
                                            <div className="card-header">
                                                <img src={product.images ? product.images[0] : notFoundImage} className="product-image" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <h4>{product.title}</h4>
                                                <p>{product.description}</p>
                                                <p className="fw-bold">price = {product.price}$</p>
                                                <div className="d-flex align-items-center">
                                                    <button className="btn fw-bold m-0 fs-5 rounded-0 bg-dark text-white" onClick={() => dispatch(decrementQuantity(product))}> - </button>
                                                    <p className="p-2 m-0 mx-3 fw-bold">{product.quantity}</p>
                                                    <button className="btn fw-bold m-0 fs-5 rounded-0 bg-dark text-white" onClick={() => dispatch(incrementQuantity(product))}> + </button>
                                                </div>
                                            </div>
                                            <div className="card-footer d-flex flex-column">
                                                <button className="btn fw-bold m-0 fs-5 rounded-0 bg-danger text-white" onClick={() => handelDeleteProduct(product)}> X </button>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                )
                : (
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-column align-items-center gap-3">
                                <img src={emptyCart} className="empty-cart" alt="empty cart" />
                                <Link to="/" className="btn custom-btn">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}