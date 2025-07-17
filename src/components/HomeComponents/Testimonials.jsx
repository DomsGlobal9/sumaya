// import React from "react";
// import Slider from "react-slick";

// export default function Testimonials() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//     </Slider>
//   );
// }

// import React from "react";
// import Slider from "react-slick";
// import frameTopLeft from "../../assets/frameTopLeft.png"; // Replace with your frame asset
// import frameBottomRight from "../../assets/frameBottomRight.png"; // Replace with your frame asset
// import priyaImg from "../../assets/priya.jpg"; // Replace with your user asset

// // Custom Arrow Buttons
// const Arrow = ({ onClick, direction }) => (
//   <button
//     onClick={onClick}
//     className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#d7c7b8] hover:bg-[#c97f3d] transition-colors absolute top-1/2 -translate-y-1/2 z-10 ${
//       direction === "left" ? "-left-12" : "-right-12"
//     }`}
//     aria-label={direction === "left" ? "Previous" : "Next"}
//     type="button"
//   >
//     <span className="text-2xl text-white">{direction === "left" ? "←" : "→"}</span>
//   </button>
// );

// // Testimonial Data
// const testimonials = [
//   {
//     title: "Aspiring Entrepreneur",
//     text: `“Joining Sumaya has been a turning point. It gave me the freedom to build my own identity while staying close to my family. I’m not just selling — I’m growing, learning, and connecting with people every day.”`,
//     name: "Priya",
//     location: "Bengaluru",
//     img: priyaImg,
//   },
//   // Add more testimonials if needed
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   prevArrow: <Arrow direction="left" />,
//   nextArrow: <Arrow direction="right" />,
//   appendDots: dots => (
//     <div>
//       <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
//     </div>
//   ),
//   customPaging: i => (
//     <div className="w-3 h-3 rounded-full bg-[#d7c7b8] opacity-70" />
//   ),
// };

// export default function Testimonials() {
//   return (
//     <div className="relative min-h-[70vh] bg-[#f5ede5] flex flex-col items-center justify-center overflow-hidden">
//       {/* Decorative Frames */}
//       <img
//         src={frameTopLeft}
//         alt=""
//         className="absolute top-0 left-0 w-32 pointer-events-none select-none"
//         draggable="false"
//       />
//       <img
//         src={frameBottomRight}
//         alt=""
//         className="absolute bottom-0 right-0 w-32 pointer-events-none select-none"
//         draggable="false"
//       />

//       {/* Heading */}
//       <h2 className="text-[#c97f3d] font-bold text-3xl text-center mb-10 mt-10 font-poltawski">
//         What our Sellers Say
//       </h2>

//       {/* Slider */}
//       <div className="relative flex items-center justify-center w-full">
//         <div className="mx-auto w-full max-w-xl">
//           <Slider {...settings}>
//             {testimonials.map((t, idx) => (
//               <div key={idx}>
//                 <div className="bg-white rounded-lg border-8 border-[#e3cdb7] shadow-lg px-8 py-8 flex flex-col items-start min-h-[220px]">
//                   <div className="font-bold text-lg mb-2">{t.title}</div>
//                   <div className="text-gray-700 mb-6">{t.text}</div>
//                   <div className="flex items-center mt-auto">
//                     <img
//                       src={t.img}
//                       alt={t.name}
//                       className="w-12 h-12 rounded-full object-cover mr-3"
//                     />
//                     <div>
//                       <div className="font-bold text-base">{t.name}</div>
//                       <div className="text-gray-500 text-sm">{t.location}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import top_left_frame from "../../assets/AboutUs_frame_up.svg";
import bottom_left_frame from "../../assets/AboutUs_frame_down.svg";
import avatarImg from "../../assets/saree.png"
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      category: "Aspiring Entrepreneur",
      text: "Joining Sumaya has been a turning point. It gave me the freedom to build my own identity while staying close to my family. I'm not just selling — I'm growing, learning, and connecting with people every day.",
      name: "Priya",
      role: "Bangalore",
      avatar:
        avatarImg,
    },
    {
      id: 2,
      category: "Fashion Enthusiast",
      text: "The platform has transformed how I approach fashion retail. The support system is incredible and the earning potential is amazing. I've built lasting relationships with customers.",
      name: "Anjali",
      role: "Mumbai",
      avatar:
        avatarImg,
    },
    {
      id: 3,
      category: "Working Mother",
      text: "Sumaya gave me the perfect work-life balance. I can earn while taking care of my family. The flexible schedule and supportive community make all the difference.",
      name: "Meera",
      role: "Delhi",
      avatar:
        avatarImg,
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Decorative frame pattern
  const DecorativeFrame = ({ className }) => (
    <div className={`absolute ${className} opacity-20`}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0H0V20M80 0H100V20M100 80V100H80M20 100H0V80"
          stroke="#D4793D"
          strokeWidth="2"
        />
        <path
          d="M35 15H65M85 35V65M65 85H35M15 65V35"
          stroke="#D4793D"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  );

  return (
    <div className="bg-orange-50 py-16 px-4 relative overflow-hidden h-[650px]">
      {/* Decorative Frames */}
      {/* Top-right frame */}
      <img
        src={top_left_frame}
        alt=""
        className="absolute top-8 left-2 rotate-270 w-45 pointer-events-none select-none"
        draggable="false"
      />

      {/* Bottom-right frame */}
      <img
        src={bottom_left_frame}
        alt=""
        className="absolute bottom-8 right-1 rotate-272 w-45 pointer-events-none select-none"
        draggable="false"
      />

      {/* <DecorativeFrame className="top-8 left-8" />
      <DecorativeFrame className="top-8 right-8 rotate-90" />
      <DecorativeFrame className="bottom-8 left-8 -rotate-90" />
      <DecorativeFrame className="bottom-8 right-8 rotate-180" /> */}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#D4793D] mb-2">
          What our Sellers Say
        </h2>

        <div className="relative ">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-[#D4793D] text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-[#D4793D] text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial Cards */}
          <div className="mx-19">
            <div className="bg-[#D4793D]/40 p-5 rounded-lg shadow-lg">
              <div className="bg-white p-5  rounded-lg relative">
                <div className="mb-4">
                  <span className="text-lg font-semibold text-gray-800">
                    {testimonials[currentSlide].category}
                  </span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  "{testimonials[currentSlide].text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentSlide].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#D4793D]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
