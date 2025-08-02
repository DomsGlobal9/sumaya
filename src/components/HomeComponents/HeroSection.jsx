// components/HeroSection.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import HeroImg from "../../assets/main_hero_img.png";
import Left_frame from "../../assets/left_frame_bg.jpg";
import Right_frame from "../../assets/right_frame_bg.jpg";
import rating_star from "../../assets/rating_star.png";
import { useNavigate} from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id='#home' className="w-full bg-white overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4 z-10  ">
          <div className="text-4xl md:text-5xl mb-2 font-serif">
            Fall in <span className="text-[#D4793D]">Love</span>
            <br />
            With Your <span className="text-[#D4793D]">Closet Again.</span>
          </div>
          <span className="text-gray-700 font-semibold text-sm ml-1 md:text-base">
            A Fashion Hub Where You Can Earn While You Shop!
          </span>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-9">
            <button className="bg-[#D4793D] text-white px-5 py-2 rounded-sm text-sm font-semibold cursor-pointer"
                  onClick={()=>navigate("/browse-collection")}
            >
              Browse Collection
            </button>
            <button className="border border-[#D4793D] text-[#D4793D] px-5 py-2 rounded-sm text-sm font-semibold cursor-pointer"
                 onClick={() => navigate("/become-seller")}
            >
              Become a Seller
            </button>
          </div>

          <div className="flex gap-14 pt-8 text-sm font-medium text-gray-700 justify-center lg:justify-start">
            <div className="flex flex-col items-left ">
              <span className="text-2xl font-bold text-gray-900 font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A54B10] to-[#3F1D06]">12K+</span>
              <span className="text-sm">Business Started</span>
            </div>
            <div className="flex flex-col items-left">
              <span className="text-2xl font-bold text-gray-900 font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A54B10] to-[#3F1D06]">25K+</span>
              <span className="text-sm">People Onboarded</span>
            </div>
            <div className="flex flex-col items-left">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A54B10] to-[#3F1D06] flex items-center font-serif ">
                4.8 <img src={rating_star} alt="star_rating" width={18}  className="ml-2"/>
              </span>
              <span className="text-sm">Seller Rating</span>
            </div>
          </div>
        </div>

        {/* Right Model Image */}
        <div className="flex items-start z-1">
          <img
            src={HeroImg}
            alt="Model"
            className="w-[85%] max-w-md h-[620px] object-contain animate__animated animate__fadeInBottomRight animate__slow"
          />
        </div>
      </div>

      {/* Optional Background Pattern */}
      <img
        src={Left_frame}
        alt="Left Frame"
        className="absolute bottom-0 left-0 w-160  z-0"
      />
      <img
        src={Right_frame}
        alt="Right Frame"
        className="absolute bottom-0 right-0 w-160  z-0"
      />
    </section>
  );
};

export default HeroSection;
