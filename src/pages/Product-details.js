import '../css/Product-details.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { Carousel, Container } from "react-bootstrap";
import { addProductToCard} from '../storeRTK/slices/Cart-slice';
import { getSingleProduct } from '../storeRTK/slices/product-slice';

export const ProductDetails = ()=>{
    const {productId} = useParams();
    const product = useSelector((state)=> state.products);
    const dispatch = useDispatch();
    const priceBeforeDiscount = +product.price;
    const priceAfterDiscount = priceBeforeDiscount * (1 - product.discountPercentage / 100);
    useEffect(()=>{
        dispatch(getSingleProduct(productId))
    },[])
    return(
        <>
            <Container className="py-4 product-details-container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center fw-bold fs-3 text-capitalize">products details of <span className="text-warning">{product.title}</span></p>
                    </div>
                    <div className="col-12 col-md-6">
                        <Carousel data-bs-theme="dark" className="carousel py-3">
                            <Carousel.Item>
                                <img className="d-block w-100" src={product.images ? product.images[0] : product.thumbnail} alt={product.title} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={product.images ? product.images[0] : product.thumbnail} alt={product.title} />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="d-flex flex-column justify-content-center">
                            <h3>{product.title}.</h3>
                            <p>{product.description}</p>
                            <p className={`${product.rating < 4 ? "d-block" : "d-none"}`}><span className="fw-bold text-capitalize">price : </span>{priceBeforeDiscount.toFixed(2)} $</p>
                            <p className={`text-danger ${product.rating > 4 ? "d-block" : "d-none"}`}><span className="fw-bold text-capitalize">price : </span>{priceAfterDiscount.toFixed(2)} $</p>
                            <p><span className="fw-bold text-capitalize">Brand : </span>{product.brand}.</p>
                            <p><span className="fw-bold text-capitalize">Category : </span>{product.category}.</p>
                            <p><span className="fw-bold text-capitalize">Warranty : </span>{product.warrantyInformation}.</p>
                            <p><span className="fw-bold text-capitalize">returnPolicy : </span>{product.returnPolicy}.</p>
                            <p><span className="fw-bold text-capitalize">stock : {product.stock}</span> products.</p>
                            <div className="text-end">
                                <button className="text-capitalize btn custom-btn w-auto" onClick={()=>{dispatch(addProductToCard(product))}}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}