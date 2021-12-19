import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaHome,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import CategoriesComp from './CategoriesComp'

const TheFooter = () => {
  const today = new Date();
  return (
    <footer className="footer text-center text-lg-start  text-muted">
      <section className="  container d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <span className="me-5  text-reset">
            <a href="https://www.facebook.com/">
              <FaFacebook className="f-icon" />
            </a>
          </span>
          <span className="me-5 text-reset">
            <a href="https://twitter.com/">
              <FaTwitter className="f-icon" />
            </a>
          </span>
          <span className="me-5 text-reset">
            <a href="https://www.google.com/">
              <FaGoogle className="f-icon" />
            </a>
          </span>
          <span className="me-5 text-reset">
            <a href="https://www.instagram.com/">
              <FaInstagram className="f-icon" />
            </a>
          </span>
        </div>
      </section>

      <section >
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto ">
              <a href="/">
                <h1 className="footer-link" >Aster</h1>
              </a>
              <p>
                Aster is an online Shop founded in 2018.We have some years of
                experience in serving our customers
                <h6>Same Day Flower Delivery to all places in Slemanyah.</h6>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <CategoriesComp/>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Help Full links</h6>
              <p>
                <a href="/about" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="/login" className="text-reset">
                  Log In
                </a>
              </p>
              <p>
                <a href="/register" className="text-reset">
                  Register
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome /> Slemanyah, Baxtyary Street
              </p>
              <p>
                <FaEnvelope />
                aster@email.com
              </p>
              <p>
                <FaPhone /> + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p >Copyright &copy; {today.getFullYear()} Aster</p>
      </div>
    </footer>
  );
};

export default TheFooter;
