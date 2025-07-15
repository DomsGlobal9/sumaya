import products from "../../data/products";
import ProductCard from "./ProductCard";
import React from "react";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
}
