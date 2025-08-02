import React from "react";
import { motion } from "framer-motion";
import Tryon_frame from "../../assets/Try_dress_frame.jpg";
import Phone from "../../assets/Phone.jpg";
import Phone_bg_frame from "../../assets/Phone_bg_frame.svg";

const VirtualDressTryOn = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const phoneFrame = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    }
  };

  const phoneBg = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.8
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#f5ede5] flex flex-col md:flex-row items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Left Section */}
      <div className="">
        <motion.img 
          src={Tryon_frame} 
          alt="" 
          className="h-[640px] object-cover"
          variants={item}
        />
      </div>

      {/* Content Section */}
      <motion.div 
        className=" w-full md:pr-12 px-6 md:px-8"
        variants={slideIn}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl font-serif font-bold text-[#D4793D] mb-4"
          variants={item}
        >
          Try Dresses Virtually
        </motion.h1>
        <motion.p 
          className="text-gray-700 mb-6 text-lg"
          variants={item}
        >
          Visualize outfits on a virtual model that matches your body type and style.
          Browse our sarees, lehengas, and more—then see how they look in real time.
        </motion.p>
        <motion.h2 
          className="text-xl font-bold text-[#c97f3d] mb-3"
          variants={item}
        >
          How it Works
        </motion.h2>
        <motion.ul 
          className="list-disc list-inside text-gray-700 mb-8 space-y-2 text-lg"
          variants={container}
        >
          <motion.li variants={item}>Select your body type and skin tone</motion.li>
          <motion.li variants={item}>Pick a dress or saree to preview</motion.li>
          <motion.li variants={item}>Rotate, zoom, and explore your look</motion.li>
        </motion.ul>
        <motion.button 
          className="border-2 border-[#c97f3d] text-[#c97f3d] px-8 py-3 rounded-lg hover:bg-[#c97f3d] hover:text-white transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Now
        </motion.button>
      </motion.div>

      {/* Right Section: Phone Mockup with Background Frame */}
      <motion.div 
        className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0 relative"
        variants={container}
      >
        {/* Background Frame - pops up first */}
        <motion.img
          src={Phone_bg_frame}
          alt="Phone background frame"
          className="w-[650px] absolute left-[250px] top-[384px] -translate-x-1/2 -translate-y-1/2 z-0"
          style={{ pointerEvents: "none" }}
          variants={phoneBg}
        />

        {/* Phone Mockup - pops up after with spring effect */}
        <motion.div 
          className="relative bg-black rounded-3xl w-72 h-[520px] shadow-xl flex flex-col items-center z-10"
          variants={phoneFrame}
        >
          {/* Top bar */}
          <div className="w-full flex justify-between items-center px-4 py-2">
            <span className="text-white text-xs">Auto</span>
            <span className="text-white text-xs font-semibold">HDR</span>
            <span className="text-white text-xl">⚙️</span>
          </div>
          
          {/* Photo grid */}
          <div className="absolute top-12 left-0 w-full h-[320px] flex flex-col items-center justify-center">
            <motion.img
              src={Phone}
              alt="Model in Saree"
              className="w-30 h-46 object-cover rounded-lg mx-auto"
              style={{ filter: "brightness(0.95)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            
            <motion.div 
              className="absolute top-36 w-full flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-white text-xs bg-black bg-opacity-40 px-2 rounded mb-2">
                POINT THE CAMERA AT YOUR FEET
              </span>
              <motion.button 
                className="bg-white bg-opacity-80 text-black font-semibold px-4 py-1 rounded shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose video
              </motion.button>
              <span className="text-white text-xs mt-1">Tap for photo</span>
            </motion.div>
          </div>
          
          {/* Bottom bar */}
          <motion.div 
            className="absolute bottom-6 w-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="flex justify-center space-x-8 mb-3">
              <span className="text-white text-xs">VIDEO</span>
              <span className="text-[#c97f3d] text-xs font-semibold">PHOTO</span>
              <span className="text-white text-xs">PORTRAIT</span>
            </div>
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 border-4 border-white rounded-full bg-black"></div>
            </motion.div>
            <div className="flex justify-end w-full pr-6 mt-3">
              <span className="text-white text-2xl">🖼️</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VirtualDressTryOn;