// components/HeroSection.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import HeroImg from "../../assets/main_hero_img.png";
import Left_frame from "../../assets/left_frame_bg.jpg";
import Right_frame from "../../assets/right_frame_bg.jpg";
const HeroSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 z-10 ">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 font-poltawski">
            Fall in <span className="text-orange-600">Love</span>
            <br />
            With Your <span className="text-orange-600">Closet Again</span>.
          </h1>
          <span className="text-gray-600 text-sm md:text-base">
            A Fashion Hub Where You Can Earn While You Shop!
          </span>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
              Browse Collection
            </button>
            <button className="border border-orange-600 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold">
              Become a Seller
            </button>
          </div>

          <div className="flex gap-10 pt-8 text-sm font-medium text-gray-700 justify-center lg:justify-start">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-gray-900">12K+</span>
              <span>Business Started</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-gray-900">25K+</span>
              <span>People Onboarded</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-gray-900 flex items-center">
                4.8 <FaStar className="text-yellow-400 ml-1" />
              </span>
              <span>Seller Rating</span>
            </div>
          </div>
        </div>

        {/* Right Model Image */}
        <div className="flex items-start z-1">
          <img
            src={HeroImg}
            alt="Model"
            className="w-[85%] max-w-md h-[600px] object-contain"
          />
        </div>
      </div>

      {/* Optional Background Pattern */}
      <img
        src={Left_frame}
        alt="Left Frame"
        className="absolute bottom-0 left-0 w-120  z-0"
      />
      <img
        src={Right_frame}
        alt="Right Frame"
        className="absolute bottom-0 right-0 w-120  z-0"
      />
    </section>
  );
};

export default HeroSection;
