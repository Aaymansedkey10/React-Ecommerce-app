import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // <!-- Footer -->/
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">

      {/* <!-- Section: Links  --> */}
      <section className="pt-3">
        <div className="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Martfury
              </h6>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                eaque.
              </p>
            </div>
            {/* <!-- Grid column -->


        <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <Nav className="d-flex flex-column align-items-start">
                <Link className="nav-link text-muted" to="/">
                  Home
                </Link>
                <Link className="nav-link text-muted" to="/products">
                  shop
                </Link>
                <Link className="nav-link text-muted" to="/about">
                  About
                </Link>
                <Link className="nav-link text-muted" to="/contact">
                  contact
                </Link>
              </Nav>
            </div>
            {/* <!-- Grid column -->

        <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> cairo, Egypt
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                aymansedkey10@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+201121549081 
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +201000607106
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://www.linkedin.com/in/aymansedkey10"
        >
          Ayman Sedkey
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
}
