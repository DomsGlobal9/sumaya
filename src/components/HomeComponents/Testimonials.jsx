import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import top_left_frame from "../../assets/AboutUs_frame_up.svg";
import bottom_left_frame from "../../assets/AboutUs_frame_down.svg";
import avatarImg from "../../assets/saree.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Testimonials = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const testimonials = [
    {
      id: 1,
      category: "Aspiring Entrepreneur",
      text: "Joining Sumaya has been a turning point. It gave me the freedom to build my own identity while staying close to my family. I'm not just selling — I'm growing, learning, and connecting with people every day.",
      name: "Priya",
      role: "Bangalore",
      avatar: avatarImg,
    },
    {
      id: 2,
      category: "Fashion Enthusiast",
      text: "The platform has transformed how I approach fashion retail. The support system is incredible and the earning potential is amazing. I've built lasting relationships with customers.",
      name: "Anjali",
      role: "Mumbai",
      avatar: avatarImg,
    },
    {
      id: 3,
      category: "Working Mother",
      text: "Sumaya gave me the perfect work-life balance. I can earn while taking care of my family. The flexible schedule and supportive community make all the difference.",
      name: "Meera",
      role: "Delhi",
      avatar: avatarImg,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const play = () => {
      autoPlayRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    };

    play();
    return () => clearTimeout(autoPlayRef.current);
  }, [currentSlide]);

  const handleTransition = (callback) => {
    if (isAnimating) return;
    setIsAnimating(true);
    callback();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    handleTransition(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    });
  };

  const prevSlide = () => {
    handleTransition(() => {
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    });
  };

  const goToSlide = (index) => {
    handleTransition(() => {
      setCurrentSlide(index);
    });
  };

  // Accessibility - keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // Reset autoplay on user interaction
  const resetAutoPlay = () => {
    clearTimeout(autoPlayRef.current);
    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
  };

  return (
    <section className="bg-orange-50 px-4 sm:px-6 relative overflow-hidden min-h-[500px] sm:min-h-[550px] py-10 sm:py-0">
      {/* Decorative Frames - Mobile Adjusted */}
      <img
        src={top_left_frame}
        alt=""
        className={`absolute ${isMobile ? 'top-0 left-0 w-24' : '-top-1 left-0 w-40'} rotate-270 pointer-events-none select-none`}
        draggable="false"
      />
      <img
        src={bottom_left_frame}
        alt=""
        className={`absolute ${isMobile ? 'bottom-0 right-0 w-24' : '-bottom-1 right-0 w-40'} rotate-272 pointer-events-none select-none`}
        draggable="false"
      />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#D4793D] mb-4 sm:mb-6 text-center sm:text-start mt-18 sm:mt-15 px-2">
          What our Sellers Say
        </h2>

        <div className="relative mt-8 sm:mt-12 w-full" ref={sliderRef}>
          {/* Navigation Arrows - Mobile Adjusted */}
          <button
            onClick={() => {
              prevSlide();
              resetAutoPlay();
            }}
            className={`absolute ${isMobile ? 'left-1 top-1/2' : 'left-2 top-30'} transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
              currentSlide === 0
                ? "bg-[#C19A7D] cursor-not-allowed"
                : "bg-[#D4793D] hover:bg-orange-600 text-white"
            }`}
            disabled={currentSlide === 0}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={isMobile ? 16 : 20} />
          </button>

          <button
            onClick={() => {
              nextSlide();
              resetAutoPlay();
            }}
            className={`absolute ${isMobile ? 'right-1 top-1/2' : 'right-2 top-30'} transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
              currentSlide === testimonials.length - 1
                ? "bg-[#C19A7D] cursor-not-allowed"
                : "bg-[#D4793D] hover:bg-orange-600 text-white"
            }`}
            disabled={currentSlide === testimonials.length - 1}
            aria-label="Next testimonial"
          >
            <ChevronRight size={isMobile ? 16 : 20} />
          </button>

          {/* Testimonial Cards - Mobile Adjusted */}
          <div className={`${isMobile ? 'mx-2' : 'ml-12 sm:ml-26'} w-full sm:w-3/4`}>
            <div
              className="bg-[#D4793D]/40 p-3 sm:p-4 rounded-lg shadow-lg transition-opacity duration-500"
              style={{ opacity: isAnimating ? 0.7 : 1 }}
            >
              <div className="bg-white p-3 sm:p-4 rounded-lg relative">
                <div className="mb-3 sm:mb-4">
                  <span className="text-base sm:text-lg font-semibold text-gray-800">
                    {testimonials[currentSlide].category}
                  </span>
                </div>

                <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 object-cover"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {testimonials[currentSlide].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation - Mobile Adjusted */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  resetAutoPlay();
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#D4793D]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button - Mobile Adjusted */}
        <div className="flex justify-center mt-8 sm:mt-12 pb-6 sm:pb-0">
          <button
            className="bg-[#D4793D] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg mb-15 text-sm sm:text-base font-semibold transition-colors shadow-md cursor-pointer"
            onClick={() => navigate("/become-seller")}
          >
            Become a seller
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;