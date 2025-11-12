import React, { createContext, useState, useContext } from "react";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems]=useState([]);
  const addToCart = (product)=>{
    setCartItems((prev)=>{
      const exist=prev.find((item)=>item.id===product.id);
      if(exist){
        return prev.map((item)=>
          item.id===product.id ?{ ...item, qty: item.qty+1}:item
        );
      }
      return [...prev,{ ...product, qty: 1 }];
    });
  };
  const removeFromCart=(id)=>{
    setCartItems((prev)=>prev.filter((item)=>item.id!==id));
  };

  const getTotalItems=()=>{
    return cartItems.reduce((acc, item)=>acc+item.qty,0);
  };

  const getTotalPrice=()=>{
    return cartItems
      .reduce((acc, item)=>acc+item.price*item.qty, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, getTotalItems, getTotalPrice}}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

