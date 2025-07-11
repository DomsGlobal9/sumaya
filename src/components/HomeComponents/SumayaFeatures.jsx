import React from 'react';
import { Package, Truck, Shield, CheckCircle, RotateCcw, DollarSign } from 'lucide-react';
import top_left_frame from "../../assets/AboutUs_frame_up.svg";
import bottom_left_frame from "../../assets/AboutUs_frame_down.svg";
import D_collections from "../../assets/Collection_img.jpg"
import Delivery from "../../assets/Delivery_img.jpg"
import Secure from "../../assets/secure_checkout_img.jpg"
import Tick_mark_gif from "../../assets/Tick_mark_gif.gif"
const SumayaFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Diverse Collections",
      image: D_collections,
      icon: Package,
      message: "We deliver your products within 24 hours!"
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
      message: "We deliver your products within 24 hours!"
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

  // Decorative frame image
  // const DecorativeFrameImage = ({ className, rotate = "" }) => (
  //   <div className={`absolute ${className} opacity-30 ${rotate}`}>
  //     <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <path d="M20 0L0 20L20 40L40 20L20 0Z" stroke="#D97706" strokeWidth="2" fill="none"/>
  //       <path d="M40 20L20 40L40 60L60 40L40 20Z" stroke="#D97706" strokeWidth="1.5" fill="none"/>
  //       <path d="M60 40L40 60L60 80L80 60L60 40Z" stroke="#D97706" strokeWidth="1" fill="none"/>
  //       <circle cx="20" cy="20" r="3" fill="#D97706" opacity="0.5"/>
  //       <circle cx="40" cy="40" r="3" fill="#D97706" opacity="0.4"/>
  //       <circle cx="60" cy="60" r="3" fill="#D97706" opacity="0.3"/>
  //     </svg>
  //   </div>
  // );

  return (
    <div className="bg-orange-50 py-16 px-4 relative overflow-hidden h-[600px]">
      {/* Decorative Frame Images */}
      {/* <DecorativeFrameImage className="top-8 left-8" />
      <DecorativeFrameImage className="bottom-8 right-8" rotate="rotate-180" /> */}
           <img
              src={top_left_frame}
              alt=""
              className="absolute top-0 left-2 rotate-270 w-50 pointer-events-none select-none"
              draggable="false"
            />
      
            {/* Bottom-right frame */}
            <img
              src={bottom_left_frame}
              alt=""
              className="absolute bottom-0 right-1 rotate-272 w-50 pointer-events-none select-none"
              draggable="false"
            />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-5">
          <h2 className="text-3xl font-bold text-orange-600 text-start mb-2">
            Why Shop with Sumaya ?
          </h2>
          <p className="text-gray-700 text-sm text-start">
            Everything you need - from perfect picks to doorstep delivery.
          </p>
        </div>
        
        {/* Main Feature Cards in Single Column */}
        {/* <div className="flex flex-row items-center justify-center gap-35 mb-16 w-full">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="relative mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  // className="w-40 h-32 mx-auto rounded-2xl object-cover shadow-lg cursor-pointer"
                      className="w-40 h-32 mx-auto rounded-2xl object-cover shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
                <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 text-sm text-gray-600 mt-2">
                {feature.message}
              </p>
            </div>
          ))}
        </div> */}
        <div className="flex flex-row items-center justify-center gap-35 mb-16 w-full p-10">
  {features.map((feature) => (
    <div key={feature.id} className="text-center group"> {/* Add group here */}
      <div className="relative mb-4">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-40 h-32 mx-auto rounded-2xl object-cover shadow-lg cursor-pointer transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">
        {feature.title}
      </h3>
      <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 text-sm text-gray-600 mt-2">
        {feature.message}
      </div>
    </div>
  ))}
</div>

        
        {/* Bottom Features in Single Column */}
        <div className="flex flex-row items-center gap-35  justify-center">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-3">
                <feature.icon className="w-6 h-6 text-orange-500" />
              </div> */}
              <div className='flex flex-row items-center justify-center'>
                <div><span><img src={Tick_mark_gif} alt="gif" className='w-5 me-3'/></span></div>
                <div>
                   <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title} 
                   </h3></div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SumayaFeatures;