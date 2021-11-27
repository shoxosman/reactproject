import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../features/TheCardsSlice";
import { Col, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import useSound from "use-sound";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const [play] = useSound(
    "http://freesoundeffect.net/sites/default/files/game-menu-remove-sound-effect-33984376.mp3"
  );

  const dispatch = useDispatch();
  var totalPrice = 0;
  return (
    <div className="container">
      <h3 style={{ fontSize: "2rem" }}>Your Shopping Cart</h3>
      <div>
        {cart.map((product, index) => {
          totalPrice += product[0].price;
          console.log(totalPrice);
          return (
            <div className="cart-card mt-2">
              <Row className="container">
                <Col>
                  <h2 style={{ fontSize: "2rem" }}>{product[0].title}</h2>
                  <h4>${product[0].price}</h4>
                  <p>{product[0].Text}</p>
                  <FaTrash
                    onClick={() => {
                      dispatch(removeCart(product.name));
                      play();
                    }}
                    style={{ fontSize: "1.7rem" }}
                  />
                </Col>
                <Col>
                  <img style={{ width: "150px" }} src={product[0].img} alt="" />
                </Col>
              </Row>
            </div>
          );
        })}
        <div className="cart-payment mt-5">
          <h4>Numbers of Items: {cart.length}</h4>

          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
