import { Link } from "react-router-dom";
import { Card, Button, Col} from "react-bootstrap";
import useSound from "use-sound";

const SingleCard = ({product , index}) => {
  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );

          return (
            <Col key={index}>
              <Card className="flower-card" style={{ width: "16.5rem" ,height:"30rem"}}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title><h6>{product.name}</h6></Card.Title>
                  <Card.Text><h5>${product.price}</h5></Card.Text>
                  <Card.Text><h6>{product.delivary}</h6></Card.Text>
                  <Button
                    className="card-button"
                    variant="primary"
                    onClick={() => {
                      play();
                    }}
                    as={Link}
                    to={`/product/${product._id}`}
                  >
                    Read In Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        }
    

export default SingleCard;
