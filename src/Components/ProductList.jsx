import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList=()=>{
  const [products, setProducts]=useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((res)=>res.json())
      .then((data)=>setProducts(data));
  },[]);

  return (
    <div className="product-list">
      {products.map((p)=>(
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
export default ProductList;




