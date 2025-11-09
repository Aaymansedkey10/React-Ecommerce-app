import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';
import About from './pages/About';
import Cart from './pages/Cart';
import { ProductDetails } from './pages/Product-details';
import { Categories } from './pages/Categories';
import { Contact } from './pages/Contact';



function App() {
  return (
    <div className="App w-100">
       <NavBar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<ProductsList />} />
        <Route path ="/products/:productId" element={<ProductDetails/>} />
        <Route path ="/categories/:category" element={<Categories/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
       </Routes>
       <Footer />
       <div className='back-to-top text-end'>
        <button className="rounded btn custom-btn" aria-label="up to top button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}><i className="fa fa-arrow-up"></i></button>
       </div>
    </div>
  );
}

export default App;
