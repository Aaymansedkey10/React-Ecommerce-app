import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsOfTopRating } from "../storeRTK/slices/product-slice";
import { SingleProduct } from "./Single-product";

export const ProductsTopRating = () => {
    const productsTopRating = useSelector((state)=> state.products);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getProductsOfTopRating(4));
    },[dispatch])

    
    return (
        <>
            <Container fluid>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center fw-bold my-3 text-capitalize">Products top rating</h1>
                    </div>
                    {
                        Array.isArray(productsTopRating) && productsTopRating.length > 0 ? (
                            productsTopRating.map((product) => (
                                <div className="col-12 col-md-3" key={product.id}>
                                    <SingleProduct key={product.id} product={product} />
                                </div>
                        ))):(
                            <div className="col-12">
                                <h1 className="text-center fw-bold my-3 text-capitalize">No products found</h1>
                            </div>
                        )
                    }
                </div>
            </Container>
        </>
    )
}