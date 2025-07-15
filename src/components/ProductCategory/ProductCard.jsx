import React, { useState } from "react";
import { Share2, Heart, Star } from 'lucide-react';
import Slider from "react-slick";

export default function ProductCard({ product }) {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-orange-400 transition-colors duration-200 cursor-pointer"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots) => (
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2"> {dots} </ul>
      </div>
    ),
  };

  const handleMouseEnter = () => {
    if (sliderRef && product.image.length > 1) {
      sliderRef.slickPlay();
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef) {
      sliderRef.slickPause();
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md  relative w-[279px] h-[487px]">
      {/* Status Badge */}
      {product.status && (
        <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-red-500 text-white z-10">
          {product.status}
        </span>
      )}

      {/* Heart Icon */}
      <button className="absolute top-3 right-3 z-10 p-1">
        <Heart className="w-5 h-5 text-orange-400 hover:text-orange-500 transition-colors" />
      </button>

      {/* Image Carousel */}
      <div 
        className="mb-3 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Slider 
          {...sliderSettings}
          ref={setSliderRef}
        >
          {product.image.map((img, idx) => (
            <div key={idx} className="relative">
              <img
                src={`/ProductCategoryImg/${img}`}
                alt={`${product.name}-${idx}`}
                className="w-full h-75 object-fit rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="px-4">
      {/* Store Name and Rating */}
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm text-gray-500">{product.brand}</h3>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">4.6/5</span>
        </div>
      </div>

      {/* Product Name */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{product.name}</h2>

      {/* Price Section */}
      <div className="mb-4">
        <span className="text-sm text-gray-400 line-through mr-2">₹{product.originalPrice}</span>
        <span className="text-red-600 text-xl font-semibold">₹{product.salePrice}/-</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center gap-3">
        <button 
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
            product.outOfStock 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
          disabled={product.outOfStock}
        >
          {product.outOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
        
        <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <Share2 className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      </div>

      <style jsx>{`
        .custom-dots {
          position: absolute !important;
          bottom: 8px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
        }

        .custom-dots li {
          margin: 0 !important;
          padding: 0 !important;
        }

        .custom-dots li button {
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
          background: transparent !important;
          outline: none !important;
        }

        .custom-dots li.slick-active div {
          background-color: #f97316 !important;
          transform: scale(1.2);
        }

        .slick-slider {
          position: relative;
        }

        .slick-list {
          border-radius: 8px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}