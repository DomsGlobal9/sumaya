import React from 'react';
import { motion } from 'framer-motion';
import signup_icon from "../../assets/SignUpSvg.svg";
import Dress_icon from "../../assets/Choose_Dress_Icon.svg";
import share_icon from "../../assets/Share_icon.svg";
import Earn_and_share from "../../assets/Earn_and_sale.svg";

const HowItWorks = () => {
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
      left: "left-120"
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
      position: "lift",
      left: "left-120"
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

  return (
    <div className="bg-orange-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-serif font-bold text-[#D4793D] mb-2"
        >
          How it Works
        </motion.h2>
        
        <motion.div 
          className="relative space-y-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-200 z-0 overflow-hidden">
    <motion.div
      className="w-full h-22 bg-gradient-to-b from-orange-500 to-orange-400"
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
              className={`flex items-center justify-start ${
                step.position === 'right' ? 'flex-row-reverse' : ''
              } relative z-10`}
              variants={itemVariants}
            >
              {/* Content Side */}
              <div className={`relative flex-1 ${step.position === 'right' ? 'text-right pr-29 flex flex-col items-end' : 'text-left pl-40'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <motion.div 
                    className="w-9 h-9 bg-[#D4793D] text-white rounded-full flex items-center justify-center text-xl font-bold"
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

              {/* Icon Side */}
              <div className={`flex-shrink-0 absolute ${step.left}`}>
                <motion.div 
                  className="w-24 h-24 flex items-right justify-right"
                  variants={iconVariants}
                >
                  <motion.img 
                    src={step.src} 
                    alt={step.title} 
                    className="w-25 h-25 text-gray-400"
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