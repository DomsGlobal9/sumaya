// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../components/ui/button'; 

// import saree from '../assets/greenSaree01.png';
// import blueDress from '../assets/blueDress.png';
// import pinkDress from '../assets/pinkDress.png';  
// import set1img1 from '../assets/set1_bangles.png';
// import set1img2 from '../assets/set1_footware.png';
// import set1img3 from '../assets/set1_bag.png';
// import set1img4 from '../assets/set1_set.png';
// import { s } from 'framer-motion/client';

// const styles = [
//   {
//     label: 'Festive Sparkle',
//     color: '#1ea463',
//     image: saree,
//     key: 'green',
//   },
//   {
//     label: 'Everyday Elegance',
//     color: '#2ca6a4',
//     image: blueDress,
//     key: 'blue',
//   },
//   {
//     label: 'Modern Muse',
//     color: '#e9004f',
//     image: pinkDress,
//     key: 'pink',
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const HeroSection = () => {
//   const [activeStyle, setActiveStyle] = useState('green');
//   const active = styles.find((style) => style.key === activeStyle);

//   return (
//     <div className='bg-[#f5f3ef] min-h-screen flex  ' style={{height: '95vh', overflow: 'hidden', position: 'relative'}}>
//     <motion.section
//       className="bg-[#f5f3ef] min-h-screen flex flex-col justify-left text-center px-4 py-10 pl-30 transition-all duration-300 relative"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className='animate__animated animate__fadeInLeftBig animation__duration-2s animate__delay-1s'>
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-black text-left "
//         variants={fadeUp}
//       >
//         Fall in{' '}
//         <span style={{ color: active.color }}>
//           Love
//         </span><br />
//         With Your{' '}
//         <span style={{ color: active.color }}>
//           Closet Again.
//         </span>
//       </motion.h1>

//       <motion.p
//         className="text-gray-700 mt-4 text-left font-bold "
//       >
//         Earn on Every Dress You Share.
//       </motion.p>

//       <motion.div className="flex gap-4 mt-4 " variants={fadeUp}>
//         <Button variant="outline" className="border border-gray-400 text-gray-700 hover:bg-gray-100">
//           Browse Collection
//         </Button>
//         <Button
//           className="text-white"
//           style={{ backgroundColor: active.color }}
//         >
//           Become a Seller
//         </Button>
//       </motion.div>

//       <motion.p
//         className="mt-9 text-gray-600 text-left "
//         variants={fadeUp}
//       >
//         Click Below Options to Explore by Style:
//       </motion.p>
//       </div>
//       <div >
//       <motion.div
//         className="flex flex-wrap justify-left gap-6 mt-6"
//         variants={containerVariants}
//       >
//         {styles.map((style, index) => (
//           <motion.div key={index} variants={fadeUp}  onClick={() => setActiveStyle(style.key)}>
//             <div className="w-32 h-10 rounded-full mt-16 flex items-center justify-center">
//               <img src={style.image} alt={style.label} className="h-32 object-contain focus:h-40 z-10" />
//             </div>
//             <motion.button
             
//               // whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`flex flex-col items-center p-2 w-30 h-25 rounded-xl transition-all duration-200 ${
//                 activeStyle === style.key ? 'ring-4 ring-offset-2 ring-white' : ''
//               }  focus:h-30`}
//               style={{
//                 backgroundColor: activeStyle === style.key ? style.color : style.color ,
//               }}
//             >
//               <p className="mt-8 font-medium text-white">{style.label}</p>
//             </motion.button>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         className="flex gap-6 mt-12 text-sm text-gray-600"
//         variants={fadeUp}
//       >
//         <div >
//           <span className="font-bold text-black">12k+</span> Business Started
//         </div>
//         <div>
//           <span className="font-bold text-black">25k+</span> People Onboarded
//         </div>
//         <div>
//           <span className="font-bold text-black">4.8★</span> Seller Rating
//         </div>
//       </motion.div>
//       </div>
//     </motion.section>
//     <motion.div
//       className="flex justify-right mt-10 "
//       variants={fadeUp}>
//         <img src={active.image} alt="model" className='pl-80 h-130 z-10' />
//         <div>
//           <img src={set1img1} alt="" className='absolute h-15 bottom-0 right-80 z-50 '/>
//           <img src={set1img2} alt="" className='absolute h-15 bottom-30 right-88 z-50 '/>
//           <img src={set1img3} alt="" className='absolute h-15 bottom-75 right-86 z-50 '/>
//           <img src={set1img4} alt="" className='absolute h-15 bottom-83 right-5 z-50 '/>
//         </div>
//         <div className='absolute h-120 w-120 rounded-full bg-gray-300  -bottom-18 -right-18' style={{ backgroundColor: active.color }}></div>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSection;

import React from 'react'
import HeroSection from '../components/HomeComponents/HeroSection'
import CategoryFrame from '../components/HomeComponents/CategoryFrame';
import AboutUs from '../components/HomeComponents/AboutUs';
import VirtualDressTryOn from '../components/HomeComponents/VirtualDressTryOn.jsx';
import HowItWorks from '../components/HomeComponents/HowItWorks.jsx';
import Testimonials from '../components/HomeComponents/Testimonials.jsx';
import SumayaFeatures from '../components/HomeComponents/SumayaFeatures.jsx';
import PackagingProcess from '../components/HomeComponents/PackagingProcess.jsx';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';



 const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoryFrame/>
    <AboutUs/>
    <VirtualDressTryOn/>
    <HowItWorks/>
    <Testimonials/>
    <SumayaFeatures/>
    <PackagingProcess/>
    <Footer/>
    </>
  )
}
export default HomePage;
