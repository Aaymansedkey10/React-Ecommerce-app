import { Container } from "react-bootstrap";
import { SingleProduct } from "../pages/Single-product";
import {SpinnerLoader}  from "../pages/SpinnerLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../storeRTK/slices/product-slice";
import { Outlet } from "react-router-dom";
import HomeCarousel from "../pages/Home-carousel";

// const products = [
//     { id: 1, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/b1acc6e1e4f9b62ef15105fb0e737eca.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "C Programming", price: 199, access: "4 months" },
//     { id: 2, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/f009d319f599a09b2315a5413ff792fc.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "C++ Programming", price: 199, access: "4 months" },
//     { id: 3, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/fc202d482311c839b0efc20d9539d11a.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Data Structures", price: 199, access: "4 months" },
//     { id: 4, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/518e870b9d59561e6e36f539cddc7c77.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Algorithms", price: 199, access: "4 months" },
//     { id: 5, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/6c365a63709c832d6ac5e9231fc61ea1.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "OOP", price: 22, access: "4 months" },
//     { id: 6, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/1bd2240e4562fcee1fc5667e78471cb1.png?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Intrapreneurship", price: 199, access: "4 months" },
//     { id: 7, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/d48941df917138b3e4cf01d2092d7486.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Entrepreneurship", price: 9, access: "4 months" },
//     { id: 8, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/bf87b48ec02f44973ac4b386358e72e4.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "UI & UX Design", price: 9, access: "4 months" },
//     { id: 9, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/33233a814ff45ead7f8535b5a699888f.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Dart", price: 9, access: "4 months" },
//     { id: 10, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/db5d19efa85ec380085dfe4b151be72e.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Flutter", price: 199, access: "4 months" },
//     { id: 11, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/4210b8de895d4f3cacaf0fee85193291.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "HTML", price: 77, access: "2 months" },
//     { id: 12, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/28d08e58d25e084008c03302551398cf.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Python", price: 199, access: "4 months" },
//     { id: 13, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/d25156e6865d746e4cdb91dc7dbc3070.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "CSS", price: 77, access: "4 months" },
//     { id: 14, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/5ce005726ae5c9a9c5a259329acfc6bb.png?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "GTK", price: 9, access: "4 months" },
//     { id: 15, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/f90fdab7ceadf421df7f4234c948651a.jpg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Linear Algebra", price: 9, access: "4 months" },
//     { id: 16, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/ed5e8ddd055ebde90893f144e4766e6a.jpeg?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "JavaScript", price: 9, access: "4 months" },
//     { id: 17, img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/17683da704ee9a41eafe522767c75f56.png?client_id=64f9d95d01ac55bf5644ea7a&width=400&height=0", title: "Masterclass", price: 9, access: "4 months" },
// ];
export default function ProductsList(){

    const products = useSelector((state)=> state.products);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
    
    return(
        <>
            <HomeCarousel />
            <Container fluid >
                <div className="row align-items-center">
                    <div className="col-12">
                    </div>
                    {
                       Array.isArray(products) && products.length > 0 ? ( products.map((product)=>{
                            return ( 
                                    <div className="col-6 col-md-6 col-lg-3 mb-3" key={product.id}>
                                        <SingleProduct product={product} />
                                    </div>
                                    ) 
                                }) ): (<SpinnerLoader />)
                    }
                </div>
            </Container>
            <Outlet />
        </>
    )
}