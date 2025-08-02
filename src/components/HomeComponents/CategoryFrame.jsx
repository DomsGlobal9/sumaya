import React from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imgKurti from "../../assets/Kurthi_set.png";
import imgSaree from "../../assets/saree.png";
import imgElegant from "../../assets/Everyday_Elegance.png";
import Fashion_film_video from "../../assets/Indian_Fashion_Film_video.mp4";
import sumaya_logo from "../../assets/Sumaya_Logo.png";
import { useNavigate } from "react-router-dom";
import imgWedding from "../../assets/weddingCollection.png";

const CategoryFrame = () => {
  const navigate = useNavigate();
  
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
        duration: 0.6,
         delay: 3
      }
    }
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: 3
      }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
         delay: 3
      }
    }
  };

  // Intersection Observer hook
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="w-full" ref={ref}>
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
        <motion.img
          src={sumaya_logo}
          alt="Sumaya Logo"
          className="absolute bottom-4 right-4 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </div>

      {/* Grid Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Column - Kurti */}
        <motion.div 
          className="relative h-64 md:h-[132vh] w-full overflow-hidden"
          variants={leftItemVariants}
        >
          <img
            src={imgKurti}
            alt="Kurti Set"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
            <motion.h3 
              className="absolute bottom-30 right-20 text-black bg-white px-4 py-2 rounded-md text-lg md:text-xl font-bold tracking-wider"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 3 ,duration: 1 }}
            >
              KURTI COLLECTION
            </motion.h3>
          </div>
        </motion.div>

        {/* Middle Column */}
        <div className="flex flex-col">
          {/* Wedding Dresses */}
          <motion.div 
            className="relative h-64 md:h-[44vh] w-full overflow-hidden"
            variants={itemVariants}
          >
            <img
              src={imgWedding}
              alt="Wedding Dresses"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
              <motion.h3 
                className="absolute left-40 top-40 text-black bg-white px-4 py-2 rounded-md text-lg md:text-xl font-bold tracking-wider"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 3 }}
              >
                WEDDING COLLECTION
              </motion.h3>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            className="bg-orange-50 h-64 md:h-[44vh] flex flex-col items-center justify-center p-4 text-center"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-black tracking-wider mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 4 , duration:2}}
            >
              CATEGORIES
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-[#D4793D] font-medium tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 4, duration:2 }}
            >
              YOUR STYLE
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl text-[#D4793D] font-bold tracking-widest mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 4 , duration:2}}
            >
              YOUR STORE
            </motion.p>
            <motion.button 
              className="bg-[#D4793D] hover:bg-[#b8652f] text-white px-6 py-2 md:px-8 md:py-3 rounded-sm shadow-lg transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 4 , duration:2}}
              onClick={()=>navigate("/product-category")}
            >
              Browse Collection
            </motion.button>
          </motion.div>

          {/* Sarees */}
          <motion.div 
            className="relative h-64 md:h-[44vh] w-full overflow-hidden"
            variants={itemVariants}
          >
            <img
              src={imgSaree}
              alt="Sarees"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
              <motion.h3 
                className="absolute left-45 top-40 text-black bg-white px-4 py-2 rounded-md text-lg md:text-xl font-bold tracking-wider"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 3, duration : 2 }}
              >
                SAREE COLLECTION
              </motion.h3>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Elegant */}
        <motion.div 
          className="relative h-64 md:h-[132vh] w-full overflow-hidden"
          variants={rightItemVariants}
        >
          <img
            src={imgElegant}
            alt="Everyday Elegance"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
            <motion.h3 
              className="absolute bottom-40 right-20 text-black bg-white px-4 py-2 rounded-md text-lg md:text-xl font-bold tracking-wider"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 3 }}
            >
              EVERYDAY ELEGANCE
            </motion.h3>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CategoryFrame;