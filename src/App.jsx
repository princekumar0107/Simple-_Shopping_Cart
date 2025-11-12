import React from 'react'
import ProductList from "./Components/ProductList";
import CartSummary from "./Components/CartSummary";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {

    
  return (
    <>
    <CartProvider>
      <div className="app">
        <h1>Simple Shopping Cart</h1>
        <div className="container">
          <ProductList />
          <CartSummary />
        </div>
      </div>
    </CartProvider>
      
    </>
  )
}

export default App