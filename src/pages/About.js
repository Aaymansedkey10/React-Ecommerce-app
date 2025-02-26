import "../css/About.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../storeRTK/slices/About-slice";
import { Container } from "react-bootstrap";

export default function About(){
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    console.log(users);
    
    useEffect(() => {
        dispatch(fetchUsers());
    },[])
    return (
        <>
            <Container fluid>
                <div className="row">
                    <div className="col-12 py-3">
                        <h1 className="text-center fw-bold">About Our team in Store</h1>
                        {/* <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eaque.</p>
                        <p> Welcome to My Store Name, we are committed to providing high-quality products at the best prices. We offer a carefully curated selection of [your product categories] to meet your needs. With fast shipping, secure payments, and 24/7 customer support, we ensure a seamless shopping experience. Shop with confidence and discover the best deals today!</p> */}
                    </div>
                    {
                        Array.isArray(users) && users.length > 0 ? (
                            users.map((user) => (
                                <div className="col-12 col-md-6 col-lg-4" key={user.id}>
                                    <div className="card about-card position-relative mb-4">
                                        <img src={user.image} className="card-img-top" alt="..." />
                                        <div className="card-body d-none flex-column align-items-center justify-content-center gap-2 text-white">
                                            <h5 className="card-title fw-bold">{user.firstName + " " + user.maidenName + " " + user.lastName}</h5>
                                            <p className="card-text">{user.address.address+" "+user.address.city+" "+user.address.state}</p>
                                            <p className="card-text"> <span className="fw-bold">Country: </span>{user.address.country}</p>
                                            <p className="card-text"><span className="fw-bold">Age: </span>{user.age} Years</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )
                    }
                </div>
            </Container>
        </>
    )
}