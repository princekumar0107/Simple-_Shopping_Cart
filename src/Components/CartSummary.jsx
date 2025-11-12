import React from "react";
import {useCart} from "../context/CartContext";   

const CartSummary=()=>{
  const {cartItems, removeFromCart, getTotalItems, getTotalPrice}=useCart();

  return (
    <div className="cart-summary">
      <h2>Cart</h2>
      <p>Total Items:{getTotalItems()}</p>
      <p>Total Price:${getTotalPrice()}</p>

      {cartItems.map((item)=>(
        <div key={item.id}className="cart-item">
        <span>{item.title}</span>
        <span>{item.qty}</span>
        <button onClick={()=>removeFromCart(item.id)}>Remove</button>
      </div>
      ))}
    </div>
  );
};

export default CartSummary;
