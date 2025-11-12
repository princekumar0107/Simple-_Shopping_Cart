import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="product-list">
      {product.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
    </div>
  );
};
export default ProductList;
