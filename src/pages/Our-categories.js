import { useEffect } from "react";
import "../css/Our-categories.css"
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FetchCategories } from "../storeRTK/slices/Category-slice";
import {SpinnerLoader }from './SpinnerLoader'

export const OurCategories = () =>{
    const categories = useSelector((state)=> state.category);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(FetchCategories())
    },[dispatch])
    
    return (
        <>
            <Container fluid>
             <div className="row">
                    <div className="col-12 mb-3">
                        <h1 className="text-center fw-bold">Our Categories</h1>
                    </div>
                        {
                           Array.isArray(categories) && categories.length>0 ? ( categories.map((category, index) => {
                                return(
                                    <div className="col-lg-3 col-md-4 col-6 mb-3" key={category.name} onClick={()=> navigate(`/categories/${category.name}`) }>
                                        <div className="category-card border border-2 border-black p-lg-4 p-2 text-center fw-bold">
                                            {category.name}
                                        </div>
                                    </div>
                                )
                            })) : (<SpinnerLoader />)
                        }
                </div>
            </Container>
        </>
    )
}
