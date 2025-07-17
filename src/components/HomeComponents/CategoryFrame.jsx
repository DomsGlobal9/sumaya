import React from "react";
import imgKurti from "../../assets/Kurthi_set.png";
import imgWedding from "../../assets/WeddingCollection.png";
import imgSaree from "../../assets/saree.png";
import imgElegant from "../../assets/Everyday_Elegance.png";
import Fashion_film_video from "../../assets/Indian_Fashion_Film_video.mp4";
import sumaya_logo from "../../assets/Sumaya_Logo.png";
import { useNavigate } from "react-router-dom";

const CategoryFrame = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full">
      {/* Video Section */}
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
        <video
          src={Fashion_film_video}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <img
          src={sumaya_logo}
          alt="Sumaya Logo"
          className="absolute bottom-4 right-4 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
        />
      </div>

      {/* Grid Section - Properly arranged columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {/* Left Column - Kurti (appears first on mobile, left on desktop) */}
        <div className="relative h-64 md:h-[132vh] w-full overflow-hidden animate__animated animate__fadeInLeft">
          <img
            src={imgKurti}
            alt="Kurti Set"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
            <h3 className="absolute bottom-30  rigth-20 text-black bg-white px-4 py-2 rounded-md text-lg md:text-xl font-bold tracking-wider">KURTI COLLECTION</h3>
          </div>
        </div>

        {/* Middle Column - Wedding, Text, Saree (appears second on mobile, middle on desktop) */}
        <div className="flex flex-col">
          {/* Wedding Dresses */}
          <div className="relative h-64 md:h-[44vh] w-full overflow-hidden animate__animated animate__fadeInDown">
            <img
              src={imgWedding}
              alt="Wedding Dresses"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
              <h3 className="absolute left-40 top-40 text-black bg-white px-4 py-2 rounded-md text-lg md:text-xl font-bold tracking-wider">WEDDING COLLECTION</h3>
            </div>
          </div>

          {/* Text Section */}
          <div className="bg-orange-50 h-64 md:h-[44vh] flex flex-col items-center justify-center p-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black tracking-wider mb-2 md:mb-4 animate__animated animate__fadeInDown animate__delay-2s">
              CATEGORIES
            </h2>
            <p className="text-lg md:text-xl text-[#D4793D] font-medium tracking-wider animate__animated animate__fadeInDown animate__delay-2s">
              YOUR STYLE
            </p>
            <p className="text-xl md:text-2xl text-[#D4793D] font-bold tracking-widest mb-4 md:mb-6 animate__animated animate__fadeInDown animate__delay-2s">
              YOUR STORE
            </p>
            <button className="bg-[#D4793D] hover:bg-[#b8652f] text-white px-6 py-2 md:px-8 md:py-3 rounded-sm shadow-lg transition-colors duration-300 animate__animated animate__fadeInDown animate__delay-1s"
              onClick={()=>navigate("/product-category")}
            >
              Browse Collection
            </button>
          </div>

          {/* Sarees */}
          <div className="relative h-64 md:h-[44vh] w-full overflow-hidden animate__animated animate__fadeInUp">
            <img
              src={imgSaree}
              alt="Sarees"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
              <h3 className="absolute left-45 top-40 text-black bg-white px-4 py-2 rounded-md text-lg md:text-xl font-bold tracking-wider">SAREE COLLECTION</h3>
            </div>
          </div>
        </div>

        {/* Right Column - Elegant (appears third on mobile, right on desktop) */}
        <div className="relative h-64 md:h-[132vh] w-full overflow-hidden animate__animated animate__fadeInRight">
          <img
            src={imgElegant}
            alt="Everyday Elegance"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
            <h3 className="absolute bottom-40 rigth-20 text-black bg-white px-4 py-2 rounded-md text-lg md:text-xl font-bold tracking-wider">EVERYDAY ELEGANCE</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFrame;