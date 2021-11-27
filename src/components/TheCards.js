import SingleCard from "./SingleCard";

/* import { connect } from "react-redux"; */

const TheCards = ({ products }) => {
  return (
    <div className="mt-5 ">
      <h2>Products</h2>
      <hr />
      <div>
        <SingleCard />
      </div>
    </div>
  );
};

export default TheCards;
