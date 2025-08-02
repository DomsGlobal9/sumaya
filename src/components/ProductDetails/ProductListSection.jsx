import React from "react";
import { Heart, Share2, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 relative w-full">
      {/* Status */}
      {product.status && (
        <span
          className={`absolute top-2 left-2 text-xs px-2 py-1 rounded bg-${product.statusColor} text-white`}
        >
          {product.status}
        </span>
      )}

      {/* Wishlist */}
      <Heart className="absolute top-2 right-2 text-gray-400" size={18} />

      {/* Image */}
      <img
        src={product.image[0]}
        alt={product.name}
        className="w-full h-[250px] object-cover rounded"
      />

      {/* Details */}
      <div className="mt-3 space-y-1">
        <p className="text-xs text-gray-500">{product.brand}</p>
        <h3 className="text-sm font-semibold">{product.name}</h3>

        <div className="flex items-center text-yellow-500 text-xs gap-1">
          <Star size={14} fill="#facc15" stroke="none" />
          <span>{product.rating}/5</span>
        </div>

        <div className="text-sm">
          <span className="line-through text-gray-400 mr-1">
            ₹{product.originalPrice}
          </span>
          <span className="text-[#E91E63] font-semibold">
            ₹{product.salePrice}
          </span>
        </div>
      </div>

      {/* Share */}
      <div className="mt-2 flex justify-center">
        <button className="w-[90%] border rounded-full py-1 flex items-center justify-center text-gray-500 hover:bg-gray-100">
          <Share2 size={14} className="mr-1" />
        </button>
      </div>
    </div>
  );
};

const ProductListSection = ({ title, products }) => {
  return (
    <section className="px-6 md:px-16 py-10">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
