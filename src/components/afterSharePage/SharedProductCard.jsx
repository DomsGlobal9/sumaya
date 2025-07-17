import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp, Share2, Heart, Truck, RotateCcw} from 'lucide-react';
import insta from '../../assets/sharemodel/insta.png'
import facebook from '../../assets/sharemodel/facebook.png'
import whatsapp from '../../assets/sharemodel/whatsapp.png'
import cam from '../../assets/cam.png'

export default function SharedProductCard() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('blue');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  const product = {
    brand: "Ethnic Boutique",
    name: "Blue Anarkali Kurti",
    rating: 5,
    reviews: 3,
    originalPrice: 2000,
    salePrice: 1499,
    discount: 33,
    stock: 9,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'blue', value: '#60A5FA', selected: true },
      { name: 'black', value: '#1F2937', selected: false },
      { name: 'pink', value: '#F9A8D4', selected: false }
    ],
    images: [
      "catProduct01.png",
       "catProduct0102.png",
    ],
    deliveryDate: 'Jul 30 - Aug 03',
    freeShipping: true,
    freeShippingAmount: 599,
    description: "Give a new glam Christmas! A full set comes with a straight 3/4 Kurti featuring intricate embroidery and a hand-crafted. The coat or gilli kurti is paired with matching straight pants and a soft dupatta. The ensemble is enhanced with traditional buttons and decorative elements. It's a complete package for festive occasions that emphasizes your elegance and style charm.",
    specifications: {
      "Top Shape": "Straight",
      "Top Type": "Kurti",
      "Colour": "Blue",
      "Dupatta": "With Dupatta",
      "Top Pattern": "Embroidered",
      "Sleeve Length": "Three-Quarter Sleeves",
      "Neck": "Round Neck",
      "Top Length": "Calf Length",
      "Print or Pattern": "Embroidered",
      "Fabric": "Cotton",
      "Waistband": "Partially Elasticated",
      "Dupatta Pattern": "Solid Lines Detailing",
      "Hemline": "Straight",
      "Weave Type": "Dobby 3x1",
      "Occasion": "Festive Wear"
    },
    seller: {
      name: "The Weave Story",
      address: "Plot No. 6, Shiv County, Amravati Circle, Haryana-133001",
      country: "India",
      additionalAddress: "Plot No. 6, Shiv County, Amravati Circle, Haryana-133001",
      email: "theweave@gmail.com",
      phone: "99 - 4845-99473"
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-4">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Product Shared:</h1>
      
      <div className="flex gap-6">
         {/* Thumbnail Images */}
          <div className="flex gap-2 flex-col">
            {product.images.slice(0, 3).map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-20 rounded-lg overflow-hidden border ${
                  selectedImage === index ? 'border-orange-500 border-2' : 'border-gray-300'
                }`}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
            <div className="w-16 h-20 bg-gray-100 rounded-lg flex flex-col items-center justify-center border border-gray-300">
              {/* <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mb-1">
                <span className="text-white text-xs">▶</span>
              </div>
              <span className="text-gray-500 text-xs">Videos</span>*/}
            </div> 
            <img src={cam} className="w-9 h-9 ml-3" alt="" />
            <span className="text-sm text-center">Try <br /> virtually</span>
          </div>
        {/* Left Side - Images */}
        <div className="w-80 flex-shrink-0">
          {/* Main Image */}
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-3">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="flex-1">
          {/* Brand and Product Name */}
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
            <h2 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h2>
            
            {/* Rating */}
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < product.rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews})</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center mb-3">
            <span className="text-xl font-bold text-red-600 mr-2">₹{product.salePrice}</span>
            <span className="text-sm text-gray-400 line-through mr-2">₹{product.originalPrice}</span>
            <span className="bg-[#D4793D] text-white px-2 py-1 rounded text-xs font-medium">
              {product.discount}% Off
            </span>
          </div>

          {/* Stock Status */}
          <p className="text-sm text-gray-600 mb-4">Only {product.stock} item(s) left in stock!</p>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-800 mb-2">Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border text-sm ${
                    selectedSize === size
                      ? 'border-gray-800 bg-gray-100'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-800 mb-2">Color: {selectedColor}</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.name ? 'border-gray-800' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-800 mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-lg"
              >
                -
              </button>
              <span className="w-12 h-8 border-t border-b border-gray-300 flex items-center justify-center text-sm">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="bg-[#D4793D] text-white px-6 py-2 rounded font-medium">
              Buy Now
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-50">
              Add to cart
            </button>
          <span className="text-[#D4793D] text-md">Share</span>
            <div className="flex gap-4 mt-2">
              {/* <Facebook className="w-5 h-5 text-blue-600" />
              <Twitter className="w-5 h-5 text-blue-400" />
              <Instagram className="w-5 h-5 text-pink-600" /> */}
                <img src={insta} alt="" className="h-6 h-6" />
                  <img src={facebook} alt="" className="h-6 h-6" />
                    <img src={whatsapp} alt="" className="h-6 h-6" />
            </div>
          </div>

          {/* Delivery Info */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">Estimated Delivery: {product.deliveryDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">Free Shipping & Returns: On all orders over ₹{product.freeShippingAmount}/-</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="mt-6 space-y-2">
        {/* Product Description */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('description')}
            className="w-full py-4 flex justify-between items-center text-left"
          >
            <span className="font-medium text-gray-800">Product Description</span>
            {expandedSection === 'description' ? 
              <ChevronUp className="w-5 h-5 text-gray-600" /> : 
              <ChevronDown className="w-5 h-5 text-gray-600" />
            }
          </button>
          {expandedSection === 'description' && (
            <div className="pb-4 text-sm text-gray-700 leading-relaxed">
              {product.description}
            </div>
          )}
        </div>

        {/* Specifications */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('specifications')}
            className="w-full py-4 flex justify-between items-center text-left"
          >
            <span className="font-medium text-gray-800">Specifications</span>
            {expandedSection === 'specifications' ? 
              <ChevronUp className="w-5 h-5 text-gray-600" /> : 
              <ChevronDown className="w-5 h-5 text-gray-600" />
            }
          </button>
          {expandedSection === 'specifications' && (
            <div className="pb-4">
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 text-sm">
                    <span className="text-gray-600 font-medium">{key}:</span>
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Seller Information */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('seller')}
            className="w-full py-4 flex justify-between items-center text-left"
          >
            <span className="font-medium text-gray-800">Seller Information</span>
            {expandedSection === 'seller' ? 
              <ChevronUp className="w-5 h-5 text-gray-600" /> : 
              <ChevronDown className="w-5 h-5 text-gray-600" />
            }
          </button>
          {expandedSection === 'seller' && (
            <div className="pb-4 space-y-3 text-sm">
              <div>
                <span className="text-gray-600 font-medium">Manufactured & Marketed by: </span>
                <span className="text-gray-800">{product.seller.name}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Address: </span>
                <span className="text-gray-800">{product.seller.address}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Country of Origin: </span>
                <span className="text-gray-800">{product.seller.country}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Additional Address: </span>
                <span className="text-gray-800">{product.seller.additionalAddress}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Email: </span>
                <span className="text-gray-800">{product.seller.email}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Call / WhatsApp: </span>
                <span className="text-gray-800">{product.seller.phone}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}