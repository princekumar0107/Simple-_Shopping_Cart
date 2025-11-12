import React from "react";
import {useCart} from "../context/CartContext";
import {useNavigate} from "react-router-dom";

const ProductCard=({product})=>{
  const{addToCart}=useCart();
  const navigate = useNavigate();

  const handleAddToCart=()=>{
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;


