import "../css/Home.css"
import { Container } from "react-bootstrap";
import HomeCarousel from "../pages/Home-carousel";
import { ProductsTopRating } from "../pages/Products-top-rating";
import { OurCategories } from "../pages/Our-categories";
export default function Home(){
    return(
        <>
            {/* <Container fluid > */}
                <HomeCarousel />
                {/* <Categories /> */}
                <OurCategories />
                <ProductsTopRating />
            {/* </Container> */}
        </>
    )
}