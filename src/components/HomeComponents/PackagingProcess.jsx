import React from 'react';
import { motion } from 'framer-motion';
import top_left_frame from '../../assets/AboutUs_frame_up.svg';
import bottom_left_frame from '../../assets/AboutUs_frame_down.svg';
import qualityCheckVideo from '../../assets/Packagingvedios/quality-check.mp4';
import securePackingVideo from '../../assets/Packagingvedios/secure-packing.mp4';
import courierPickupVideo from '../../assets/Packagingvedios/courier-pickup.mp4';
import doorstepDeliveryVideo from '../../assets/Packagingvedios/doorstep-delivery.mp4';

const steps = [
  {
    title: 'Quality Check',
    video: qualityCheckVideo,
  },
  {
    title: 'Secure Packing',
    video: securePackingVideo,
  },
  {
    title: 'Courier Pickup',
    video: courierPickupVideo,
  },
  {
    title: 'Doorstep Delivery',
    video: doorstepDeliveryVideo,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const PackagingProcess = () => {
  return (
    <section className="relative bg-[#fef6f0] py-14 px-4 md:px-16 overflow-hidden min-h-[650px]">
      {/* Decorative frames */}
      <img
        src={bottom_left_frame}
        alt=""
        className="absolute bottom-0 left-0 w-45 pointer-events-none select-none"
        draggable="false"
      />
      <img
        src={top_left_frame}
        alt=""
        className="absolute top-0 right-0 w-45 pointer-events-none select-none"
        draggable="false"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#D4793D] mb-2">
            Our Packaging Process
          </h2>
          <p className="text-left text-gray-700 text-base md:text-lg mb-10 max-w-3xl">
            Every order you place goes through a strict quality check, hygienic packing,
            and quick dispatch to ensure your customer receives their product on time and in perfect condition.
          </p>
        </motion.div>

        {/* Process steps with videos */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                className="relative flex flex-col items-center text-center relative z-10"
              >
                <div className='absolute left-13 top-17 bg-white  rounded-full border-3 border-[#c35b18] p-1'></div>
                <div className='absolute right-13 top-17 bg-white  rounded-full border-3 border-[#c35b18] p-1'></div>
                {/* Circular Video Container */}
                <div className="w-28 h-28 md:w-37 md:h-37 rounded-full border-3 border-[#c35b18] p-2 mb-4 overflow-hidden bg-white">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-full"
                  >
                    <source src={step.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Step Title */}
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Connecting arrows - only on desktop */}
          <div className="hidden md:flex absolute top-1/4 left-0 right-0 h-1/2 items-center justify-between px-12 z-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex-1 flex items-center"
              >
                {/* <svg className="w-full h-8 text-[#c35b18]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg> */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote and CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-lg md:text-xl font-medium text-gray-800 mb-6">
            "With <span className="text-[#d55d29] font-bold">Sumaya</span>, it's not just fashion—
            it's a promise of quality from <span className="text-[#d55d29] font-bold">our hands to yours</span>."
          </p>
          <motion.button
            className="bg-[#d55d29] hover:bg-[#b34d20] text-white px-6 py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagingProcess;