import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../features/TheCardsSlice";
import { Col, Row  } from "react-bootstrap";
import { FaTrash  } from "react-icons/fa";
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
          <h4 className="mt-5" style={{ fontSize: "2rem" }}>Your Shopping Cart</h4>
          <hr className="cart-hr"/>
          <div>
           
            {cart.map((product, index) => {
              totalPrice += product.price;
              console.log(totalPrice);
              return (
                <div className="cart-card mt-2">
                   <Row className="container cart-row">
                    <Col>
                    <div style={{ display:"flex",flexDirection:"row" ,justifyContent:"space-around"}}>
                    <div><h2 style={{ fontSize: "2rem" }}>{product.name}</h2>
                      <h4>${product.price}</h4>
                      <p>{product.delivary}</p>
                      <FaTrash
                        onClick={() => {
                          dispatch(removeCart(product.name));
                          play();
                        }}
                        style={{ fontSize: "1.7rem" }}
                      /></div>
                      
                    <div><img style={{ width: "140px" }} src={product.image} alt="" /></div>
                      </div>
                      <hr style={{ width: "100%"}}/>
                    </Col>
                   
                   </Row>
                </div>
              );
            })}
            <div className="price-list">
              <h4>Numbers of Items: {cart.length}</h4>
    
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
            
           
          </div>
        </div> 
  );
};

export default Cart;

