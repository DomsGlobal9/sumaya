import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import signup_icon from "../../assets/SignUpSvg.svg";
import Dress_icon from "../../assets/Choose_Dress_Icon.svg";
import share_icon from "../../assets/Share_icon.svg";
import Earn_and_share from "../../assets/Earn_and_sale.svg";
import top_left_frame from "../../assets/AboutUs_frame_up.svg";
import bottom_left_frame from "../../assets/AboutUs_frame_down.svg";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      number: 1,
      title: "Sign Up for Free",
      description: "Sign up with KYC and bank details - get approved in 24 hrs",
      src: signup_icon,
      position: "right",
      left: "left-80"
    },
    {
      number: 2,
      title: "Choose Dresses to Sell",
      description: "Pick dresses to sell - no inventory needed",
      src: Dress_icon,
      position: "left",
      left: "left-150"
    },
    {
      number: 3,
      title: "Share with Your Network",
      description: "Share product links with friends, family, or followers",
      src: share_icon,
      position: "right",
      left: "left-80"
    },
    {
      number: 4,
      title: "Earn on Every Sale",
      description: "Earn every time someone buys from your link",
      src: Earn_and_share,
      position: "left",
      left: "left-150"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000); // Change active step every 2 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative bg-orange-50 py-8 px-2">
      <img
        src={top_left_frame}
        alt=""
        className="absolute top-0 right-0 w-40 pointer-events-none select-none"
        draggable="false"
      />

      <img
        src={bottom_left_frame}
        alt=""
        className="absolute bottom-0 left-0  w-40 pointer-events-none select-none"
        draggable="false"
      />
      <div className="max-w-5xl mx-auto">
        <div className='md:w-1/2 w-full md:pr-12 '>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#D4793D] mb-4"
          >
            How it Works
          </motion.h2>
        </div>

        <motion.div
          className="relative space-y-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Vertical line with animated gradient */}
          <div className="absolute h-[130vh] left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-200 z-0 overflow-hidden">
            <motion.div
              className="w-full h-20 bg-[#D4793D]"
              initial={{ y: -100 }}
              animate={{ y: "100vh" }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`flex items-center justify-start ${step.position === 'right' ? 'flex-row-reverse' : ''
                } relative z-10`}
              variants={itemVariants}
            >
              {/* Content Side */}
              <div className={`relative flex-1 ${step.position === 'right' ? 'text-right pr-29 flex flex-col items-end' : 'text-left pl-40'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    className={`w-9 h-9 ${activeStep === index ? 'bg-[#D4793D]' : 'bg-[#D4793D]'} text-white rounded-full flex items-center justify-center text-xl font-bold`}
                    variants={iconVariants}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Icon Side - changes color based on active step */}
              <div className={`flex-shrink-0 absolute ${step.left}`}>
                <motion.div
                  className="w-24 h-24 flex items-right justify-right"
                  variants={iconVariants}
                >
                  <motion.img
                    src={step.src}
                    alt={step.title}
                    className={`w-25 h-25 ${activeStep === index ? 'filter-orange-500' : 'text-gray-400'}`}
                    style={{
                      filter: activeStep === index
                        ? 'invert(63%) sepia(65%) saturate(520%) hue-rotate(340deg) brightness(95%) contrast(89%)'
                        : 'none'
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;