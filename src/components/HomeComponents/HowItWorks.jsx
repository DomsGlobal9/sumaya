




import React from 'react';
import { Users, Shirt, Share2, ShoppingCart } from 'lucide-react';
import signup_icon from "../../assets/SignUpSvg.svg"
import Dress_icon from "../../assets/Choose_Dress_Icon.svg"
import share_icon from "../../assets/Share_icon.svg"
import Earn_and_share from "../../assets/Earn_and_sale.svg"

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up for Free",
      description: "Sign up with KYC and bank details - get approved in 24 hrs",
      src:signup_icon,
      position: "left"
    },
    {
      number: 2,
      title: "Choose Dresses to Sell",
      description: "Pick dresses to sell - no inventory needed",
      src:Dress_icon,
      position: "right"
    },
    {
      number: 3,
      title: "Share with Your Network",
      description: "Share product links with friends, family, or followers",
      src:share_icon,
      position: "left"
    },
    {
      number: 4,
      title: "Earn on Every Sale",
      description: "Earn every time buyers buys from your link",
      src:Earn_and_share,
      position: "right"
    }
  ];

  return (
    <div className="bg-orange-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600 text-start mb-12">
          How it Works
        </h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex items-center justify-start ${
                step.position === 'right' ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className={`flex-1 ${step.position === 'right' ? 'text-right pr-8 flex flex-col items-end' : 'text-left pl-8'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Icon Side */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20  flex items-center justify-end">
                   <img src={step.src} alt={step.title} className="w-8 h-8 text-gray-400 h-100 w-100"/>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-20 w-1 h-[240px] bg-gray-300 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;