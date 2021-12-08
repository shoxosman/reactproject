import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaHome,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

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
              <FaFacebook />
            </a>
          </span>
          <span className="me-5 text-reset">
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
          </span>
          <span className="me-5 text-reset">
            <a href="https://www.google.com/">
              <FaGoogle />
            </a>
          </span>
          <span className="me-5 text-reset">
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </span>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto ">
              <a href="/">
                <h1 className="fw-bold ">Aster</h1>
              </a>
              <p>
                Aster is an online Shop founded in 2018.We have some years of
                experience in
                <h4>Same Day Flower Delivery to all places in Slemanyah.</h4>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="products/Birthday" className="text-reset">
                  Birthday
                </a>
              </p>
              <p>
                <a href="/products/Wedding" className="text-reset">
                  Wedding
                </a>
              </p>
              <p>
                <a href="/products/Graduation" className="text-reset">
                  Graduation
                </a>
              </p>
              <p>
                <a href="/categories/Flowers" className="text-reset">
                  Flowers
                </a>
              </p>
              <p>
                <a href="/categories/Balloons" className="text-reset">
                  Balloons
                </a>
              </p>
              <p>
                <a href="/categories/TedyBears" className="text-reset">
                  Tedy bears
                </a>
              </p>
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
        <p>Copyright &copy; {today.getFullYear()} Aster</p>
      </div>
    </footer>
  );
};

export default TheFooter;
