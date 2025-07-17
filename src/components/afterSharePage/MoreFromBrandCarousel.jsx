import React from 'react';
import ProductCard from '../ProductCategory/ProductCard';


const MoreFromBrandCarousel = ({ products }) => {
  return (
    <div className="px-6 py-10">
      <h3 className="text-2xl font-semibold mb-6">More from this Brand</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {products.map((item, index) => (
                 <ProductCard key={index} product={item} />
               ))}
             </div>
      
    </div>
  );
};

export default MoreFromBrandCarousel;
