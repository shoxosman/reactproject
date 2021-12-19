import React from 'react'
import { useParams } from "react-router-dom";
import { useGetCategoryByCategoryQuery } from "../features/TheApiSlice";

import { Card, Button, Col, Row} from "react-bootstrap";
import useSound from "use-sound";
import { Link } from "react-router-dom";


export default function ItemsOfSingleCategory() {
  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
    let { category } = useParams();
    const { data, isLoading, error } =  useGetCategoryByCategoryQuery(category);
    
    

    if (error)
      return (
        
       <h1>Unknown error</h1>
      );
    if (isLoading) return <h1>loading...</h1>;
    if (data) {
      
    return (
      <div className='container'>
      
        <Row xs={1} sm={1} xl={4} md={4} className="g-4 mt-5">
          {data.map((products, index) => {
            return (
              <Col key={index}>
              <Card className="flower-card" >
                <Card.Img variant="top" src={products.image} />
                <Card.Body>
                  <Card.Title><h6>{products.name}</h6></Card.Title>
                  <Card.Text><h5>${products.price}</h5></Card.Text>
                  <Card.Text><h6>{products.delivary}</h6></Card.Text>
                 
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
          })}
        </Row>
      </div>);
    }
      };
     


    
   
