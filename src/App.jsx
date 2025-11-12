import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import { CartProvider } from "./context/CartContext";
import "./index.css";

const App = () => {
  return (
    <CartProvider>
    <Router>
     <div className="app">
      <h1>Simple Shopping Cart</h1>
      <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
      </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
