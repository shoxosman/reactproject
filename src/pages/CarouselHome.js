import { Carousel } from "react-bootstrap";
const CarouselHome = () => {
  return (
    <div className="carouselhome">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://images.pexels.com/photos/6070380/pexels-photo-6070380.jpeg?cs=srgb&dl=pexels-jill-burrow-6070380.jpg&fm=jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://images.pexels.com/photos/7245414/pexels-photo-7245414.jpeg?cs=srgb&dl=pexels-olga-lioncat-7245414.jpg&fm=jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4019666/pexels-photo-4019666.jpeg?cs=srgb&dl=pexels-flora-westbrook-4019666.jpg&fm=jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
