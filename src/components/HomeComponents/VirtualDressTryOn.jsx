// // components/VirtualDressTryOn.js
// import React from "react";
// import Tryon_frame from "../../assets/Try_dress_frame.jpg"
// import Phone from "../../assets/Phone.jpg"
// import Phone_bg_frame from '../../assets/Phone_bg_frame.svg'
// const VirtualDressTryOn = () => {
//   return (
//     <div className="min-h-screen bg-[#f5ede5] flex flex-col md:flex-row items-center justify-center">
//       {/* Left Section */}
//       <div><img src={Tryon_frame} alt="" className="h-[600px] w-full"/></div>
//       <div className="md:w-1/2 w-full md:pr-12 ps-6">
//         <h1 className="text-4xl font-bold text-[#c97f3d] mb-4">
//           Try Dresses Virtually
//         </h1>
//         <p className="text-gray-700 mb-6">
//           Visualize outfits on a virtual model that matches your body type and style.
//           Browse our sarees, lehengas, and more—then see how they look in real time.
//         </p>
//         <h2 className="text-lg font-semibold text-[#c97f3d] mb-2">
//           How it Works
//         </h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Select your body type and skin tone</li>
//           <li>Pick a dress or saree to preview</li>
//           <li>Rotate, zoom, and explore your look</li>
//         </ul>
//         <button className="border border-[#c97f3d] text-[#c97f3d] px-6 py-2 rounded hover:bg-[#c97f3d] hover:text-white transition">
//           Try Now
//         </button>
//       </div>

//       {/* Right Section: Phone Mockup */}
//       <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
//         <div className="relative bg-black rounded-3xl w-72 h-[520px] shadow-xl flex flex-col items-center">
//           {/* Top bar */}
//           <div className="w-full flex justify-between items-center px-4 py-2">
//             <span className="text-white text-xs">Auto</span>
//             <span className="text-white text-xs font-semibold">HDR</span>
//             <span className="text-white text-xl">⚙️</span>
//           </div>
//           {/* Photo grid */}
//           <div className="absolute top-12 left-0 w-full h-[320px] flex flex-col items-center justify-center">
//             {/* Model Image */}
//             <img
//               src={Phone}
//               alt="Model in Saree"
//               className="w-30 h-46 object-cover rounded-lg mx-auto"
//               style={{ filter: "brightness(0.95)" }}
//             />
           
//             {/* Overlay Text */}
//             <div className="absolute top-36 w-full flex flex-col items-center">
//               <span className="text-white text-xs bg-black bg-opacity-40 px-2 rounded mb-2">
//                 POINT THE CAMERA AT YOUR FEET
//               </span>
//               <button className="bg-white bg-opacity-80 text-black font-semibold px-4 py-1 rounded shadow">
//                 Choose video
//               </button>
//               <span className="text-white text-xs mt-1">Tap for photo</span>
//             </div>
//           </div>
//           {/* Bottom bar */}
//           <div className="absolute bottom-6 w-full flex flex-col items-center">
//             <div className="flex justify-center space-x-8 mb-3">
//               <span className="text-white text-xs">VIDEO</span>
//               <span className="text-[#c97f3d] text-xs font-semibold">PHOTO</span>
//               <span className="text-white text-xs">PORTRAIT</span>
//             </div>
//             <div className="flex justify-center">
//               <div className="w-12 h-12 border-4 border-white rounded-full bg-black"></div>
//             </div>
//             <div className="flex justify-end w-full pr-6 mt-3">
//               <span className="text-white text-2xl">🖼️</span>
//             </div>
//           </div>
//         </div>
//       </div>
//            <img src={Phone_bg_frame} alt="Phone_bg_frame" className="w-[300px]" />
//     </div>
//   );
// };

// export default VirtualDressTryOn;


import React from "react";
import Tryon_frame from "../../assets/Try_dress_frame.jpg";
import Phone from "../../assets/Phone.jpg";
import Phone_bg_frame from "../../assets/Phone_bg_frame.svg";

const VirtualDressTryOn = () => {
  return (
    <div className="min-h-screen bg-[#f5ede5] flex flex-col md:flex-row items-center justify-center">
      {/* Left Section */}
      <div>
        <img src={Tryon_frame} alt="" className="h-[640px] w-full" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

      </div>
      <div className="md:w-1/2 w-full md:pr-12 ps-6">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#D4793D] mb-2">
          Try Dresses Virtually
        </h1>
        <p className="text-gray-700 mb-6">
          Visualize outfits on a virtual model that matches your body type and style.
          Browse our sarees, lehengas, and more—then see how they look in real time.
        </p>
        <h2 className="text-lg font-bold text-[#c97f3d] mb-2">
          How it Works
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Select your body type and skin tone</li>
          <li>Pick a dress or saree to preview</li>
          <li>Rotate, zoom, and explore your look</li>
        </ul>
        <button className="border border-[#c97f3d] text-[#c97f3d] px-6 py-2 rounded hover:bg-[#c97f3d] hover:text-white transition">
          Try Now
        </button>
      </div>

      {/* Right Section: Phone Mockup with Background Frame */}
      <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0 relative">
        {/* Background Frame */}
        <img
          src={Phone_bg_frame}
          alt="Phone_bg_frame"
          className="w-[550px] absolute left-[350px] top-[384px] -translate-x-1/2 -translate-y-1/2 z-0 overflow-hidden "
          style={{ pointerEvents: "none" }}
        />
        {/* Phone Mockup */}
        <div className="relative bg-black rounded-3xl w-72 h-[520px] shadow-xl flex flex-col items-center z-10">
          {/* Top bar */}
          <div className="w-full flex justify-between items-center px-4 py-2">
            <span className="text-white text-xs">Auto</span>
            <span className="text-white text-xs font-semibold">HDR</span>
            <span className="text-white text-xl">⚙️</span>
          </div>
          {/* Photo grid */}
          <div className="absolute top-12 left-0 w-full h-[320px] flex flex-col items-center justify-center">
            <img
              src={Phone}
              alt="Model in Saree"
              className="w-30 h-46 object-cover rounded-lg mx-auto"
              style={{ filter: "brightness(0.95)" }}
            />
            <div className="absolute top-36 w-full flex flex-col items-center">
              <span className="text-white text-xs bg-black bg-opacity-40 px-2 rounded mb-2">
                POINT THE CAMERA AT YOUR FEET
              </span>
              <button className="bg-white bg-opacity-80 text-black font-semibold px-4 py-1 rounded shadow">
                Choose video
              </button>
              <span className="text-white text-xs mt-1">Tap for photo</span>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="absolute bottom-6 w-full flex flex-col items-center">
            <div className="flex justify-center space-x-8 mb-3">
              <span className="text-white text-xs">VIDEO</span>
              <span className="text-[#c97f3d] text-xs font-semibold">PHOTO</span>
              <span className="text-white text-xs">PORTRAIT</span>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 border-4 border-white rounded-full bg-black"></div>
            </div>
            <div className="flex justify-end w-full pr-6 mt-3">
              <span className="text-white text-2xl">🖼️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualDressTryOn;
