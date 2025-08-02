import { useState } from "react";
import React from "react";
import {
  Share2,
  Heart,
  Star,
  ChevronDown,
  ChevronUp,
  Truck,
} from "lucide-react";
import cam from '../../assets/cam.png'

const SizeSelector = ({ sizes, selectedSize, onSelect }) => (
  <div className="flex gap-2">
    {sizes.map((size) => (
      <button
        key={size}
        type="button"
        aria-label={`Select size ${size}`}
        onClick={() => onSelect(size)}
        className={`px-3 py-1 border rounded transition-colors ${
          selectedSize === size
            ? "bg-black text-white"
            : "bg-white text-black hover:bg-gray-100"
        }`}
      >
        {size}
      </button>
    ))}
  </div>
);

const ColorPicker = ({ colors, selectedColor, onSelect }) => (
  <div className="flex gap-2">
    {colors.map((color) => (
      <button
        key={color}
        type="button"
        aria-label={`Select color ${color}`}
        onClick={() => onSelect(color)}
        className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-colors ${
          selectedColor === color ? "border-black" : "border-gray-300"
        }`}
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

export default function ProductDetails({ product }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  const SIZES = ["S", "M", "L", "XL"];
  const COLORS = ["blue", "red", "yellow", "green"];

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto bg-white p-4">

      <div className="flex gap-6">

        
      <div className="flex gap-2 flex-col overflow-x-auto py-2">
          {product.image.map((img, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View image ${index + 1}`}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 border rounded-xl transition-colors ${
                selectedImage === index
                  ? "border-black"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <img
                src={`/ProductCategoryImg/${img}`}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
          <img src={cam} className="w-9 h-9 ml-3" alt="" />
                      <span className="text-sm text-center">Try <br /> virtually</span>
      </div>

      {/* Image Section */}     
        <div className="w-1/2 h-96 bg-gray-100 rounded-lg overflow-hidden mb-3">
          <img
            src={`/ProductCategoryImg/${product.image[selectedImage]}`}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

      {/* Detail Section */}
      <div className="md:sticky md:top-4">
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>

        <div className="flex gap-4 items-center mb-4">
          <span className="text-lg font-bold text-black">
            ₹{product.salePrice}
          </span>
          <span className="line-through text-gray-500">
            ₹{product.originalPrice}
          </span>
          {product.discount && (
            <span className="text-green-600 text-sm">
              ({product.discount}% off)
            </span>
          )}
        </div>

        {product.status && (
          <span
            className={`inline-block px-3 py-1 text-sm rounded-full text-white bg-${product.statusColor} mb-6`}
          >
            {product.status}
          </span>
        )}

        <div className="mt-6">
          <p className="text-sm font-semibold mb-2">Size:</p>
          <SizeSelector
            sizes={SIZES}
            selectedSize={selectedSize}
            onSelect={setSelectedSize}
          />
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold mb-2">Color:</p>
          <ColorPicker
            colors={COLORS}
            selectedColor={selectedColor}
            onSelect={setSelectedColor}
          />
        </div>

        <div className="mt-6 flex gap-3 items-center">
          <p className="text-sm font-semibold">Quantity:</p>
          <div className="flex items-center border rounded">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={decrementQuantity}
              className="px-3 py-1 hover:bg-gray-100"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={incrementQuantity}
              className="px-3 py-1 hover:bg-gray-100"
              disabled={quantity >= 10}
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          <button
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex-1 min-w-[200px]"
            aria-label="Add to cart"
          >
            Add to Cart
          </button>
          <button
            className="border border-black px-6 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center flex-1 min-w-[200px]"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5 mr-2" />
            Wishlist
          </button>
        </div>

        <div className="mt-6 border rounded-xl p-4 bg-gray-50 flex items-center gap-4">
          <Truck className="w-6 h-6 flex-shrink-0" />
          <span>Free Delivery in 4-6 days</span>
        </div>

        <div className="mt-6">
          {[
            { title: "Description", content: product.description },
            { title: "Return Policy", content: "You can return this product within 7 days." },
            { title: "Shipping Info", content: "Free shipping on all orders over ₹1000." }
          ].map((section) => (
            <div key={section.title} className="border-t">
              <button
                className="flex justify-between items-center w-full py-3 hover:bg-gray-50 px-1 rounded"
                onClick={() => toggleSection(section.title)}
                aria-expanded={expandedSection === section.title}
                aria-controls={`${section.title}-content`}
              >
                <span className="font-medium">{section.title}</span>
                {expandedSection === section.title ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {expandedSection === section.title && (
                <div
                  id={`${section.title}-content`}
                  className="pb-3 text-sm text-gray-600 px-1"
                >
                  {section.content || "No information provided."}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      </div>

    </div>
  );
}