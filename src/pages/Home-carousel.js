import "../css/Home-carousel.css"
import Carousel from 'react-bootstrap/Carousel';
import slideone from '../assets/slide-image-1.jpg';
import slidetwo from '../assets/slide-image-2.jpg';
import { Container } from "react-bootstrap";
function HomeCarousel() {
  return (
    <>
      <Container fluid>
        <Carousel data-bs-theme="dark" className="carousel py-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slideone}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slidetwo}
              alt="Second slide"
            />
            {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default HomeCarousel;