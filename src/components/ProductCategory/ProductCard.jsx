import React, { useState, useRef, useEffect } from "react";
import { Share2, Copy, Heart, Star, Facebook, Instagram, Mail } from "lucide-react";
import insta from '../../assets/sharemodel/insta.png'
import facebook from '../../assets/sharemodel/facebook.png'
import snapchat from '../../assets/sharemodel/snapchat.png'
import whatsapp from '../../assets/sharemodel/whatsapp.png'
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


export default function ProductCard({product}) {
  const navigate = useNavigate()
  const [sliderRef, setSliderRef] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const modalRef = useRef(null);
  const productLink = "https://www.felizunlimited.com/product/festive-sr";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(productLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-gray-400 hover:bg-orange-400 transition-colors duration-100 cursor-pointer"></div>
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

  // Modal close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="bg-white rounded-xl shadow-md relative w-[279px] h-[487px] cursor-pointer"
      onClick={()=>navigate(`/product-detailed/${product.id}`)}
    >

      {/* Heart Icon */}
      <button className="absolute top-3 right-3 z-10 p-1">
        <Heart className="w-5 h-5 text-orange-400 hover:text-orange-500 transition-colors" />
      </button>

      {/* Image Carousel */}
      <div
        className="mb-3 relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Status Badge */}
        {product.status && (
          <span className="absolute backdrop-blur-sm bg-black/10 top-3 left-3 text-xs px-2 py-1 rounded-md shadow-md text-gray-900 z-10 flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
            <div
              className={`w-3 h-3 rounded-full bg-${product.statusColor} border border-${product.statusColor}`}
            ></div>
            {product.status}
          </span>
        )}

        {product.outOfStock && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="backdrop-blur-sm bg-black/20 p-4 rounded-full text-white text-sm font-semibold shadow-lg">
              Out Of Stock
            </div>
          </div>
        )}
        <Slider {...sliderSettings} ref={setSliderRef}>
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
        {/* Brand and Rating */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm text-gray-500">{product.brand}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.6/5</span>
          </div>
        </div>

        {/* Product Name */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          {product.name}
        </h2>

        {/* Price Section */}
        <div className="mb-4">
          <span className="text-sm text-gray-400 line-through mr-2">
            ₹{product.originalPrice}
          </span>
          <span className="text-red-600 text-xl font-semibold">
            ₹{product.salePrice}/-
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center gap-3">
          <button
            className={`flex-1 py-2 px-4 rounded-lg text-md font-medium transition-colors ${product.outOfStock
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white text-[#D4793D] hover:bg-[#D4793D] hover:text-white"
              }`}
            disabled={product.outOfStock}
          >
             Add to Cart
          </button>

          <button
            className="p-2 rounded-lg hover:bg-green-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Share2 className="w-5 h-5 text-green-400 hover:text-white" />
          </button>

          {/* Share Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-opacity-4 z-40 flex items-center justify-center">
              <div
                ref={modalRef}
                className="bg-white w-80 rounded-lg shadow-xl z-50 border border-gray-200 p-4"
              >

                <div>
                  <div className="flex gap-5">
                    <div>
                      <img src={`/ProductCategoryImg/${product.image[0]}`} alt="" className="w-20 h-20 rounded-md" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Share</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.name}</p>
                      <p className="text-xs text-gray-500 mb-4">Size: L</p>

                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Share this link via
                      </h4>
                    </div>
                  </div>

                  <div className="flex space-x-4 mb-4 border border-gray-300 rounded-md p-2 flex item-center justify-center">
                    <button className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200">
                      <img src={facebook} alt="" className="h-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200">
                      <img src={insta} alt="" className="h-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full bg-yellow-100 text-yellow-500 hover:bg-yellow-200">
                      <img src={snapchat} alt="" className="h-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full bg-green-100 text-green-500 hover:bg-green-200">
                      <img src={whatsapp} alt="" className="h-6 h-6" />
                    </button>
                  </div>

                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <input
                      type="text"
                      value={productLink}
                      readOnly
                      className="flex-1 px-3 py-3 text-md text-gray-900 truncate"
                    />

                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="px-3 py-3 m-2 rounded-md w-full bg-[#D4793D] hover:bg-[#D4793D] text-white flex items-center justify-center"
                  >
                    {isCopied ? (
                      <span className="text-xs text-white-500">Copied !</span>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        <span className="text-xs">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

           <style jsx>{`
        .custom-dots {
          position: absolute !important;
          bottom: 8px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 6px !important;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
        }

        .custom-dots li.slick-active div {
          background-color: #f97316 !important;
          transform: scale(1.2);
        }

        .slick-list {
          border-radius: 8px;
          overflow: hidden;
        }
      `}</style>

        </div>
      </div>

      {/* Slider Styles */}
     
    </div>
    
  );
}




