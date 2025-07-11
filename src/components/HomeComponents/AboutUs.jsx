import React from "react";
import set1 from "../../assets/set1.png"
import set2 from "../../assets/set2.png"
import set3 from "../../assets/set3.png"
import top_frame from "../../assets/AboutUs_frame_up.svg"
import down_frame from "../../assets/downFrame_aboutUs.svg"
const AboutUs = () => {
  return (
    <section className="relative bg-[#f9f4ef] py-16 px-6 lg:px-20 overflow-hidden">
      {/* Decorative Corner Frames */}
      <img
        src={top_frame} // example SVG
        alt="Corner Frame Top Right"
        className="hidden md:block absolute top-0 right-0 w-32 opacity-30"
      />
      <img
        src={down_frame}
        alt="Corner Frame Bottom Left"
        className="hidden md:block absolute bottom-0 left-0 w-32 opacity-30 "
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4 tracking-widest">
            ABOUT US
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Sumaya, we’re redefining how Indian fashion is created, shared, and sold.
            More than just a platform, Sumaya connects local tailors, independent sellers,
            and everyday buyers into one seamless ecosystem. Whether you're a designer,
            a reseller, or a fashion lover — Sumaya helps you grow, earn, and express
            style in your own way.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With easy-to-use tools for reselling, custom tailoring options, and a curated
            product catalog, Sumaya empowers people from all walks of life to take part
            in the fashion economy — without inventory, without overheads, and without limits.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-md transition">
            DISCOVER THE PROCESS
          </button>
        </div>

        {/* Image Grid */}
      <div className="relative w-full h-[550px] mt-10">
      {/* Top image (wide) */}
      <img
        src={set3}
        alt="Top"
        className="absolute top-0 left-[120px] w-[380px] h-[160px] object-cover rounded-xl"
      />

      {/* Bottom-left small image */}
      <img
        src={set1}
        alt="Bottom Left"
        className="absolute bottom-0 left-0 top-80 w-[200px] h-[250px] object-cover rounded-xl"
      />

      {/* Bottom-right tall image */}
      <img
        src={set2}
        alt="Right"
        className="absolute bottom-0 top-[180px] left-[70px] w-[450px] h-[300px] object-cover rounded-xl"
      />
    </div>
      </div>
    </section>
  );
};

export default AboutUs;
