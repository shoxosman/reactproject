import React from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "../features/TheCardsSlice";
import useSound from "use-sound";
import { useState } from "react";
import { useGetProductByIdQuery } from "../features/TheApiSlice";
const HomeCardDetail = () => {
  let { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  

 
 

  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();

  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
  
  if (error)
  return (
    
   <h1>Unknown error</h1>
  );
if (isLoading) return <h1>loading</h1>;
if (data) {

  
  return (
    <div className="container home">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 col-xl-6 mt-5">
            <br />
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <h3>${data.price} </h3>
            <h3>{data.delivary} </h3>
            <br />
            <Button
              disabled={disable}
              className="card-button"
              variant="primary"
              onClick={() => {
                dispatch(addCart(data));
                play();
                setDisable(true);
              }}
            >
              Add To Cart
            </Button>
          </div>
          <div class="col-12 col-lg-6 col-xl-6">
            <div>
              <img style={{ width: "350px" }} src={data.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
};

export default HomeCardDetail;

/* http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3 */
