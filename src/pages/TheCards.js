import SingleCard from "./SingleCard";
import { connect } from "react-redux";

const TheCards = ({ products }) => {
  return (
    <div className="mt-5">
      <h2>Products</h2>
      <hr />
      {products.map((prod) => (
        <SingleCard key={prod.id} productData={prod} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.card.SingleCard };
};
export default connect(mapStateToProps)(TheCards);
