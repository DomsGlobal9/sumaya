import React from "react";

// Replace with your own images
import imgKurti from "../../assets/Kurthi_set.png";
import imgWedding from "../../assets/Wedding_Dresses.png";
import imgSaree from "../../assets/saree.png";
import imgElegant from "../../assets/Everyday_Elegance.png";
import Fashion_film_video from "../../assets/Indian_Fashion_Film_video.mp4"
import sumaya_logo from "../../assets/Sumaya_Logo.png"
const CategoryFrame = () => {
  return (
    <section className="w-full h-full">
        <div className="relative w-full">
        <video
          src={Fashion_film_video}
          className="w-full h-[120vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Logo at bottom-right over the video */}
        <img
          src={sumaya_logo}
          alt="Sumaya Logo"
          className="absolute bottom-4 right-4 w-50 h-50 object-contain z-10"
          style={{ pointerEvents: "none" }}
        />
      </div>

      <div className="grid grid-cols-3  h-[124vh]">
        {/* Left Column: Kurti Set (2 rows) */}
        <div className="relative col-span-1 row-span-2  overflow-hidden">
          <img
            src={imgKurti}
            alt="Kurti Set"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Column: 3 Rows (Wedding, Categories, Saree) */}
        <div className="flex flex-col gap-4">
          {/* Top: Wedding Dresses */}
          <div className="relative flex-1  overflow-hidden">
            <img
              src={imgWedding}
              alt="Wedding Dresses"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle: Center Text */}
          <div className="bg-orange-50 flex flex-col justify-center items-center text-center  flex-1 px-4 py-6">
            <h2 className="text-xl lg:text-2xl font-bold text-black">
              CATEGORIES
            </h2>
            <p className="mt-1 text-orange-600 font-medium tracking-wide">
              YOUR STYLE
            </p>
            <p className="text-orange-600 text-lg font-bold tracking-widest mb-3">
              YOUR STORE
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
              Browse Collection
            </button>
          </div>

          {/* Bottom: Sarees */}
          <div className="relative flex-1  overflow-hidden">
            <img
              src={imgSaree}
              alt="Sarees"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Everyday Elegance (2 rows) */}
        <div className="relative col-span-1 row-span-2  overflow-hidden">
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
