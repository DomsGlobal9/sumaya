// import React from "react";

// // Example SVG icons (replace with your own SVGs or images as needed)
// const IconUser = () => (
//   <svg className="w-10 h-10 text-[#d7c7b8]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <circle cx="12" cy="8" r="4" stroke="currentColor" />
//     <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" />
//   </svg>
// );

// const IconDress = () => (
//   <svg className="w-10 h-10 text-[#d7c7b8]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <path d="M12 2l3 7h-6l3-7zm0 7v13" stroke="currentColor" />
//     <path d="M5 22l7-13 7 13" stroke="currentColor" />
//   </svg>
// );

// const IconNetwork = () => (
//   <svg className="w-10 h-10 text-[#d7c7b8]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="3" stroke="currentColor" />
//     <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 7.07l-1.41-1.41M6.34 6.34l-1.41-1.41m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" stroke="currentColor" />
//   </svg>
// );

// const IconCart = () => (
//   <svg className="w-10 h-10 text-[#d7c7b8]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <circle cx="9" cy="21" r="1" stroke="currentColor" />
//     <circle cx="20" cy="21" r="1" stroke="currentColor" />
//     <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke="currentColor" />
//   </svg>
// );

// const steps = [
//   {
//     icon: <IconUser />,
//     number: 1,
//     title: "Sign Up for Free",
//     description: "Sign up with KYC and bank details — get approved in 24 hrs.",
//   },
//   {
//     icon: <IconDress />,
//     number: 2,
//     title: "Choose Dresses to Sell",
//     description: "Pick dresses to sell — no inventory needed.",
//   },
//   {
//     icon: <IconNetwork />,
//     number: 3,
//     title: "Share with Your Network",
//     description: "Share product links with friends, family, or followers.",
//   },
//   {
//     icon: <IconCart />,
//     number: 4,
//     title: "Earn on Every Sale",
//     description: "Earn every time someone buys from your link.",
//   },
// ];

// const HowItWorks = () => (
//   <div className="bg-[#f5ede5] min-h-screen flex items-center justify-center py-10">
//     <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row px-8 py-12">
//       {/* Left: Title & Icons */}
//       <div className="md:w-2/5 flex flex-col items-center md:items-start">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#c97f3d] mb-8">How it Works</h2>
//         <div className="flex flex-col gap-12">
//           {steps.map((step, idx) => (
//             <div key={idx} className="flex items-center">
//               {step.icon}
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Divider */}
//       <div className="hidden md:block w-px bg-[#e0d2c2] mx-10"></div>
//       {/* Right: Steps */}
//       <div className="md:w-3/5 flex flex-col justify-center">
//         <div className="flex flex-col gap-12">
//           {steps.map((step, idx) => (
//             <div key={idx} className="flex items-start">
//               {/* Numbered Circle */}
//               <div className="flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full bg-[#c97f3d] flex items-center justify-center text-white font-bold mr-5 mt-1">
//                   {step.number}
//                 </div>
//               </div>
//               {/* Text */}
//               <div>
//                 <div className="font-semibold text-base text-[#c97f3d]">{step.title}</div>
//                 <div className="text-gray-600 text-sm">{step.description}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default HowItWorks;


// import React from 'react';
// import { Users, Shirt, Share2, ShoppingCart } from 'lucide-react';
// import signup_icon from "../../assets/SignUpSvg.svg"
// import Dress_icon from "../../assets/Choose_Dress_Icon.svg"
// import share_icon from "../../assets/Share_icon.svg"
// import Earn_and_share from "../../assets/Earn_and_sale.svg"

// const HowItWorks = () => {
//   const steps = [
//     {
//       number: 1,
//       title: "Sign Up for Free",
//       description: "Sign up with KYC and bank details - get approved in 24 hrs",
//       src: signup_icon,
//       position: "right"
//     },
//     {
//       number: 2,
//       title: "Choose Dresses to Sell",
//       description: "Pick dresses to sell - no inventory needed",
//       src: Dress_icon,
//       position: "left"
//     },
//     {
//       number: 3,
//       title: "Share with Your Network",
//       description: "Share product links with friends, family, or followers",
//       src: share_icon,
//       position: "right"
//     },
//     {
//       number: 4,
//       title: "Earn on Every Sale",
//       description: "Earn every time buyers buys from your link",
//       src: Earn_and_share,
//       position: "left"
//     }
//   ];

//   return (
//     <div className="bg-orange-50 py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">
//           How it Works
//         </h2>
        
//         <div className="space-y-8">
//           {steps.map((step, index) => (
//             <div
//               key={step.number}
//               className={`flex items-center justify-between ${
//                 step.position === 'left' ? 'flex-row-reverse' : ''
//               }`}
//             >
//               {/* Content Side */}
//               <div className={`flex-1 ${step.position === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm max-w-xs">
//                   {step.description}
//                 </p>
//               </div>

//               {/* Icon Side */}
//               <div className="flex-shrink-0 relative">
//                 <div className="w-20 h-20  rounded-full flex items-center justify-center ">
//                   {/* <step.icon className="w-8 h-8 text-gray-400" /> */}
                //   <img src={step.src} alt={step.title} className="w-8 h-8 text-gray-400 h-100 w-100"/>
//                 </div>
//                 {/* Step Number */}
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
//                   {step.number}
//                 </div>
//               </div>

//               {/* Connecting Line */}
//               {index < steps.length - 1 && (
//                 <div className="absolute left-1/2 transform -translate-x-1/2 mt-20 w-1 h-[230px] bg-gray-300 z-0"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;




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