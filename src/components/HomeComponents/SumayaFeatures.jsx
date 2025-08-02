import React from 'react';
import { Package, Truck, Shield, CheckCircle, RotateCcw, DollarSign } from 'lucide-react';
import top_left_frame from "../../assets/AboutUs_frame_up.svg";
import bottom_left_frame from "../../assets/AboutUs_frame_down.svg";
import D_collections from "../../assets/Collection_img.jpg";
import Delivery from "../../assets/Delivery_img.jpg";
import Secure from "../../assets/secure_checkout_img.jpg";
import Tick_mark_gif from "../../assets/Tick_mark_gif.gif";

const SumayaFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Diverse Collections",
      image: D_collections,
      icon: Package,
      message: "Explore our wide range of fashionable dresses for every occasion."
    },
    {
      id: 2,
      title: "Fast Delivery",
      image: Delivery,
      icon: Truck,
      message: "We deliver your products within 24 hours!"
    },
    {
      id: 3,
      title: "Secure Checkout",
      image: Secure,
      icon: Shield,
      message: "Your payments are 100% secure with our encrypted checkout."
    }
  ];

  const bottomFeatures = [
    {
      title: "Verified Sellers",
      icon: CheckCircle
    },
    {
      title: "Easy Returns",
      icon: RotateCcw
    },
    {
      title: "No Hidden Charges",
      icon: DollarSign
    }
  ];

  return (
    <div className="bg-orange-50 px-4 relative overflow-hidden min-h-[640px]">
      <img
        src={top_left_frame}
        alt=""
        className="absolute top-0 right-0 w-40 pointer-events-none select-none"
        draggable="false"
      />
      
      <img
        src={bottom_left_frame}
        alt=""
        className="absolute bottom-0 left-0 w-40 pointer-events-none select-none"
        draggable="false"
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className=" mb-12 mt-5">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#D4793D] mb-2">
            Why Shop with Sumaya?
          </h2>
          <p className="text-gray-700 text-sm text-start">
            Everything you need - from perfect picks to doorstep delivery.
          </p>
        </div>
        
        {/* Top Features */}
        <div className="flex flex-row items-center justify-center gap-20 mb-16 w-full px-4">
          {features.map((feature) => (
           <div 
  key={feature.id} 
  className="text-center flex-1 max-w-[290px] transition-all duration-300 group" 
>
  <div className="relative mb-4">
    <img
      src={feature.image}
      alt={feature.title}
      className="w-full h-42  mx-auto rounded-2xl object-cover shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-105"
    />
  </div>
  <h3 className="text-lg font-semibold text-gray-800 mb-2">
    {feature.title}
  </h3>
  <div className="text-sm text-gray-600  opacity-0 overflow-hidden transition-all duration-300  group-hover:opacity-100">
    {feature.message}
  </div>
</div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="flex flex-row items-center justify-center gap-8">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="text-center flex items-center justify-center gap-2">
              <img src={Tick_mark_gif} alt="tick mark" className='w-8 h-8' />
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title} 
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SumayaFeatures;