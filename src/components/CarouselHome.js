import { Carousel } from "react-bootstrap";
const CarouselHome = () => {
  return (
    <div className="carouselhome">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1527904219733-fddc74937915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Take time to smell the roses</h1>
            <p>“Love is the flower you’ve got to let grow.”</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            
            src="https://media.istockphoto.com/photos/summer-flowers-on-a-paper-picture-id1081176136?b=1&k=20&m=1081176136&s=170667a&w=0&h=5q-JOSk1d8MiQI3rdJf25CEE20Q0s_egIfUWANrDV20="
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Fresh flower delivery across the Slemanyah</h1>
            <p>Send fresh flowers online on the same day in Slemanyah</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Hand-Crafted With Love</h1>
            <p>Bring Nature Into Your Home</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
