import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import logo from '../assets/logo_light.png';
import { getCardProducts } from '../storeRTK/slices/Cart-slice';


function NavBar () {
  const ProductsInCart = useSelector((state)=> state.cart);  
  const dispatch = useDispatch();  
  useEffect(()=>{
    dispatch(getCardProducts());
  },[dispatch])

    return(
        <>
          <Navbar expand="lg" className="navbar-controller" sticky="top">
            <Container fluid > 
              <Link to="/"><img src={logo} alt="logo" className='navbar-logo navbar-brand' /></Link> 
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  <Link className='nav-link' to="/">Home</Link>
                  <Link className='nav-link' to="/products">shop</Link>
                  <Link className='nav-link' to="/about">About</Link>
                  <Link className='nav-link' to="/contact">contact</Link>
                </Nav>
                <div className="d-flex flex-column flex-lg-row align-items-lg-center align-items-start justify-content-lg-between gap-3">
                    {/* <Link className='nav-link' to="/">sell</Link>
                    <Link className='nav-link' to="/">track your order</Link>
                    <p className='nav-link m-0 p-0'>USD <sup className="bg-black text-white fw-bold total-price-in-cart">{totalPrice.toFixed(2)}</sup></p>
                    <Form.Select aria-label="Default select example" defaultValue={1}>
                      <option value="1">English</option>
                      <option value="2">Arabic</option>
                    </Form.Select> */}
                    <Link className='nav-link fw-bold' to="/cart">Cart <sup className="bg-black text-white fw-bold rounded-circle count-in-cart">{ProductsInCart.length}</sup></Link>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}


export default NavBar;


