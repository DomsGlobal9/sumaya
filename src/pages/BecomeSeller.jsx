import React from 'react';
import { ArrowLeft } from 'lucide-react';

import Innovator from '../assets/innovators.png';
import Artist from '../assets/artistbrush.png';
import top_left_frame from "../assets/AboutUs_frame_up.svg";
import bottom_left_frame from "../assets/AboutUs_frame_down.svg";
import { useNavigate } from 'react-router-dom';

const BecomeSeller = () => {
  const navigate = useNavigate();
  return (
   <div className="min-h-screen md:pr-40 text-wrap bg-white md:px-20 py-10 relative overflow-hidden">

    {/* Decorative Frames */}
          <img
            src={top_left_frame}
            alt=""
            className="absolute top-0 left-0 rotate-270 w-40 pointer-events-none select-none"
            draggable="false"
          />
          <img
            src={bottom_left_frame}
            alt=""
            className="absolute bottom-0 right-0 rotate-272 w-40 pointer-events-none select-none"
            draggable="false"
          />

  {/* Back Button */}
  <button className="flex items-center mx-20 my-6 text-md text-gray-900 mb-6 relative z-10 cursor-pointer"
    onClick={()=>navigate('/home')}
  >
    <ArrowLeft className="w-5 h-5 mr-1" />
    Back
  </button>

  {/* Main content with responsive wrap */}
  <div className="relative z-10 px-10 flex flex-col md:flex-row gap-3 items-start text-wrap">

    {/* LEFT: Text Section */}
    <div className="flex-1">
      <h1 className="text-4xl font-serif font-semibold text-[#D4793D] mb-4">Become a Seller</h1>

      <p className="text-gray-900 text-wrap max-w-2xl mb-4">
        Turn your fashion business into a success story — without any upfront investment.
      </p>

      <p className="text-gray-900 max-w-2xl text-wrap mb-5">
        Whether you're a boutique owner or a home-based tailor, Sumaya makes it easy to showcase,
        share, and sell your products to a wider audience.
      </p>

      <h2 className="text-[#D4793D] font-semibold mb-2">How it works:</h2>
      <ul className="list-disc list-inside text-gray-900 space-y-2 mb-6">
        <li>Sign up as a seller and access a curated catalog of ethnic wear.</li>
        <li>Share sarees, kurtis, suits, and more via WhatsApp, Instagram, or your own storefront.</li>
        <li>Use referral links to earn a commission on every purchase.</li>
        <li>No need to manage inventory, packing, or delivery — Sumaya handles it all.</li>
        <li>Track your earnings, performance, and orders from a simple mobile dashboard.</li>
        <li>Build your own fashion resale brand with zero upfront cost.</li>
      </ul>

      <p className="text-gray-900 mb-6 max-w-2xl">
        Join hundreds of sellers growing their income through Sumaya’s easy-to-use platform.
      </p>

      <button className="bg-[#D4793D] text-white px-6 py-2 rounded transition"
      >
        Become a Seller
      </button>
    </div>

    {/* RIGHT: Zig-zag images */}
   <div className="flex flex-col items-center mr-50 md:items-start md:mx-0 relative z-10">

      <img
        src={Artist}
        alt="Seller"
        className="w-32 h-44 sm:w-32 sm:h-52 md:w-46 md:h-68 object-cover shadow-xl shadow-[#D4793D]/50 rounded-t-full rounded-b-full  shadow-md transform md:-translate-x-7"
      />
      <img
        src={Innovator}
        alt="Seller"
        className="w-32 h-44 sm:w-32 sm:h-52 md:w-46 md:h-68 object-cover shadow-xl shadow-[#D4793D]/50 rounded-t-full rounded-b-full shadow-md -mt-16 transform md:translate-x-8"
      />
    </div>
  </div>
</div>

  );
};

export default BecomeSeller;