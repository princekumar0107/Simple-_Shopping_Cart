import React from "react";
import {useCart} from "../context/CartContext";
import {useNavigate} from "react-router-dom";

const CartPage=()=>{
  const {cartItems, removeFromCart, getTotalItems, getTotalPrice}=useCart();
  const navigate=useNavigate();

  return (
    <div className="cart">
    <div className="cart-summary">
      <h2>Your Cart</h2>
      <p>Total Items:{getTotalItems()}</p>
      <p>Total Price:${getTotalPrice()}</p>

      {cartItems.length===0 && <p>No items in cart</p>}

      {cartItems.map((item)=>(
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>
          <span>x{item.qty}</span>
          <button onClick={()=>removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <button
        className="back-btn"
        onClick={() => {
          navigate("/");
          }}>Back to Home</button>
    </div>
    </div>
  );
};
export default CartPage;


