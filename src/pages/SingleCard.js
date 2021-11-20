import { Card, Button } from "react-bootstrap";
const SingleCard = (productData) => {
  return (
    <div>
      <div className="mt-5">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={productData.image} />
          <Card.Body>
            <Card.Title>{productData.Title}</Card.Title>
            <Card.Text>{productData.price}</Card.Text>
            <Button className="card-button" variant="primary">
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SingleCard;
