import React from 'react'
import { useParams } from "react-router-dom";
import { useGetCategoryByCategoryQuery } from "../features/TheApiSlice";
import { Card, Button, Col} from "react-bootstrap";
import useSound from "use-sound";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ItemsOfSingleCategory() {
  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
    let { category } = useParams();
    const {
        data = [],
        isLoading,
        error,
      } = useGetCategoryByCategoryQuery(category);

      return data.map((products, index) => {
        return (

          <Col key={index}>
              <Card className="flower-card" style={{ width: "16.5rem" ,height:"30rem"}}>
                <Card.Img variant="top" src={products.image} />
                <Card.Body>
                  <Card.Title><h6>{products.name}</h6></Card.Title>
                  <Card.Text><h5>${products.price}</h5></Card.Text>
                  <Card.Text><h6>{products.delivary}</h6></Card.Text>
                  <span className="product-catagory">{products.category}</span>
                  <Button
                    className="card-button"
                    variant="primary"
                    onClick={() => {
                      play();
                    }}
                    as={Link}
                    to={`/product/${products._id}`}
                  >
                    Read In Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>



          
            
        );
      });
    }
