import React from "react";
import imgKurti from "../../assets/Kurthi_set.png";
import imgWedding from "../../assets/Wedding_Dresses.png";
import imgSaree from "../../assets/saree.png";
import imgElegant from "../../assets/Everyday_Elegance.png";
import Fashion_film_video from "../../assets/Indian_Fashion_Film_video.mp4";
import sumaya_logo from "../../assets/Sumaya_Logo.png";

const CategoryFrame = () => {
  return (
    <section className="w-full h-full">
      {/* Video Section */}
      <div className="relative w-full">
        <video
          src={Fashion_film_video}
          className="w-full h-[50vh] md:h-[80vh] lg:h-[120vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <img
          src={sumaya_logo}
          alt="Sumaya Logo"
          className="absolute bottom-4 right-4 w-20 h-20 md:w-40 md:h-40 object-contain z-10"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[124vh]">
        {/* Left Column - Shows below on mobile, then first column on desktop */}
        <div className="relative h-64 md:h-auto md:col-span-1 md:row-span-2 overflow-hidden order-1 md:order-none">
          <img
            src={imgKurti}
            alt="Kurti Set"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4 order-3 md:order-none">
          {/* Wedding Dresses - Top on desktop, second on mobile */}
          <div className="relative h-64 md:flex-1 overflow-hidden">
            <img
              src={imgWedding}
              alt="Wedding Dresses"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Text */}
          <div className="bg-orange-50 flex flex-col justify-center items-center text-center h-64 md:flex-1 px-4 py-6">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl text-black w-full tracking-wide">
              CATEGORIES
            </h2>
            <p className="text-lg text-[#D4793D] mt-4 md:mt-8 font-medium tracking-wide">
              YOUR STYLE
            </p>
            <p className="text-[#D4793D] text-xl font-bold tracking-widest mb-3">
              YOUR STORE
            </p>
            <button className="bg-[#D4793D] text-white px-4 py-2 rounded-sm shadow">
              Browse Collection
            </button>
          </div>

          {/* Sarees - Bottom on desktop, fourth on mobile */}
          <div className="relative h-64 md:flex-1 overflow-hidden">
            <img
              src={imgSaree}
              alt="Sarees"
              className="w-full h-full object-fill -mb-10"
            />
          </div>
        </div>

        {/* Right Column - Shows third on mobile, then last column on desktop */}
        <div className="relative h-64 md:h-auto md:col-span-1 md:row-span-2 overflow-hidden order-2 md:order-none">
          <img
            src={imgElegant}
            alt="Everyday Elegance"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryFrame;