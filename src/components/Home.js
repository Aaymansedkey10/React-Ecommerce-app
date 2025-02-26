import "../css/Home.css"
import HomeCarousel from "../pages/Home-carousel";
import { ProductsTopRating } from "../pages/Products-top-rating";
import { OurCategories } from "../pages/Our-categories";
export default function Home(){
    return(
        <>
            <HomeCarousel />
            <OurCategories />
            <ProductsTopRating />
        </>
    )
}