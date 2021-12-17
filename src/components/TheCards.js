import {Row } from "react-bootstrap";
import SingleCard from "./SingleCard"

import { useGetProductsQuery } from "../features/TheApiSlice";
const TheCards = () => {
  

 
  const { data, isLoading, error } = useGetProductsQuery();

  if (error)
    return (
      
     <h1>Unknown error</h1>
    );
  if (isLoading) return <h1>loading</h1>;
  if (data) {
  return (
    <div>
      <Row xs={1} md={4} className="g-4 mt-5">
        {data.map((product, index) => {
          return (
            <SingleCard product={product} key={index} />
          );
        })}
      </Row>
    </div>
  );}
};
export default TheCards;