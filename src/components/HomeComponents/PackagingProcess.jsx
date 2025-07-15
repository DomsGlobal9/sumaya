import React from 'react';
import { motion } from 'framer-motion';
import top_left_frame from '../../assets/AboutUs_frame_up.svg';
import bottom_left_frame from '../../assets/AboutUs_frame_down.svg';
import packaging01 from '../../assets/packaging01.png';
import packaging02 from '../../assets/packaging02.png';
import packaging03 from '../../assets/packaging03.png';
import packaging04 from '../../assets/packaging04.png';

const steps = [
  {
    title: 'Quality Check',
    image: packaging01,
  },
  {
    title: 'Secure Packing',
    image: packaging02,
  },
  {
    title: 'Courier Pickup',
    image: packaging03,
  },
  {
    title: 'Doorstep Delivery',
    image: packaging04,
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
    <section className="relative bg-[#fef6f0] py-14 px-15 md:px-16 overflow-hidden h-850px]">

      {/* Bottom-right frame */}
        <img
        src={bottom_left_frame}
        alt=""
        className="absolute top-110 left-0 w-50 pointer-events-none select-none"
        draggable="false"
      />

     {/* Top-left frame */}
      <img
        src={top_left_frame}
        alt=""
        className="absolute bottom-100 right-0 w-51 pointer-events-none select-none"
        draggable="false"
      />

      
    
      <motion.h2
        className="text-3xl mt-30 md:text-4xl font-semibold text-[#c35b18] text-left mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Packaging Process
      </motion.h2>

      <motion.p
        className="text-left text-gray-700 max-w-full text-md mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Every order you place goes through a strict quality check, hygienic packing,
        and quick dispatch to ensure your customer receives their product on time and in perfect condition.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-[#c35b18] p-1 overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="mt-4 font-semibold text-sm md:text-base">{step.title}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-lg md:text-xl font-medium text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        “ With <span className="text-[#d55d29] font-bold">Sumaya</span>, it’s not just fashion—
        it’s a promise of quality from <span className="text-[#d55d29] font-bold">our hands to yours</span>.”
      </motion.p>

      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
      >
        <button className="bg-[#d55d29] hover:bg-[#b34d20] text-white px-6 py-2 rounded transition duration-300">
          Explore More
        </button>
      </motion.div>
    </section>
  );
};

export default PackagingProcess;
