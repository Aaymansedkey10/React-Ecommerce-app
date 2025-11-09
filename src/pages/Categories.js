import { useParams } from "react-router-dom";
import "../css/Categories.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsByCategory } from "../storeRTK/slices/product-slice";
import { SingleProduct } from "./Single-product";
import { SpinnerLoader } from "./SpinnerLoader"
export const Categories = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const productsOfCategory = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(getProductsByCategory(category))
    }, [category , dispatch]);


    return (
        <>
            <div className="container-fluid py-lg-5 py-3">
                <div className="row">
                    {
                        productsOfCategory ? (
                            <>
                                <div className="col-12 mb-3">
                                    <h4 className="text-center fw-bold text-capitalize">welcome to category : <span className="text-warning">{category}</span> </h4>
                                </div>
                                {
                                    Array.isArray(productsOfCategory) && productsOfCategory.length > 0 ? (
                                        productsOfCategory.map((product) => (
                                            <div className="col-12 col-md-6 col-lg-3" key={product.id}>
                                                <SingleProduct key={product.id} product={product} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-12 text-center">
                                            <img src="https://th.bing.com/th/id/OIP.lkttguT3U5o6ij2c6CLkaQHaHa?rs=1&pid=ImgDetMain" alt="there are no products are founded for this category" className="img-fluid rounded-circle" />
                                        </div>
                                    )
                                }
                            </>
                        ) : (<SpinnerLoader />)
                    }
                </div>
            </div>
        </>
    )
};
