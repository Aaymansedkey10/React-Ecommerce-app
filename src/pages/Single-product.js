import '../css/Single-product.css'
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addProductToCard, incrementQuantity } from "../storeRTK/slices/Cart-slice";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const SingleProduct = (props)=>{
  const product = props.product ;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const PriceAfterDiscount = product.price * (1 - product.discountPercentage / 100);
  
  function handleAddProduct(productSelected) {
    const existingProduct = cart.find((pro) => pro.id === productSelected.id);
    if (existingProduct) {
      Swal.fire({
        title: "Product already added, We increased the Quantity",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(incrementQuantity(productSelected));
        }
      });
    } else {
      dispatch(addProductToCard(productSelected));
    }
  }
  
  return (
    <>
      <div className="card custom-card mb-3 position-relative" onClick={() => navigate(`/products/${product.id}`)}>
        <img className="card-img-top" src={product.images[0]} alt="Title" />
        <div className="card-body">
          <h4 className="card-title fw-bold text-capitalize">{product.title.substring(0, 15)}..</h4>
          <div className="d-flex align-items-center justify-content-between">
            <p className={`card-text fw-bold ${product.rating > 4 ? "text-decoration-line-through" : ""}`}>{product.price.toFixed(2)}<span className='fw-bold'> $</span></p>
            <p className={`card-text fw-bold text-danger ${product.rating > 4 ? "d-block" : "d-none"}`}>{PriceAfterDiscount.toFixed(2)}<span className='fw-bold'> $</span></p>
          </div>
          <p className="card-text text-capitalize">{product.description.substring(0, 30)}..</p>
          <p className="card-text text-capitalize"><span className='fw-bold'>category : </span>{product.category}</p>
          {/* show rating */}
          <p className='fw-bold'> <i className="fa-solid fa-star text-warning me-2"></i> {product.rating}</p>
        </div>
        <div className='overlay position-absolute rounded d-none'>
          <div className='d-flex flex-column align-items-end gap-3 px-2 py-1'>
          <button 
            className="btn custom-btn rounded-circle" 
            onClick={(e) => {
              e.stopPropagation();
              handleAddProduct(product);
            }}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button> 
          <Link to={`/products/${product.id}`} className="btn custom-btn rounded-circle"><i className="fa-solid fa-info"></i></Link>
          <button 
            className="btn custom-btn rounded-circle" 
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
        {/* <div className={`discount position-absolute bg-danger text-white px-2 rounded-circle pt-2 px-2 ${product.rating > 4  ? "d-block" : "d-none"}`}>
            <p>{product.discountPercentage}%</p>
        </div> */}
      </div>
    </>
  );
}