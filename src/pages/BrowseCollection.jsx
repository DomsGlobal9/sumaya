import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
// import img1 from '../assets/browseCollection/indianWear.png'
// import img2 from '../assets/browseCollection/westernWear.png'

const collections = [
  {
    title: "Indian Wear",
    image:"/browseCollection/indianWear.png" ,
    link: "/browse-collection/indian-wear",
  },
  {
    title: "Western Wear",
    image: "/browseCollection/westernWear.png", 
    link: "/browse-collection/western-wear",
  },
];

export default function BrowseCollection() {
  return (
    <section className="bg-white relative">
      <Navbar/>
      {/* Decorative corner pattern (optional) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-no-repeat bg-contain" style={{ backgroundImage: 'url(/images/corner-left.png)' }} />
      <div className="absolute top-0 right-0 w-32 h-32 bg-no-repeat bg-contain" style={{ backgroundImage: 'url(/images/corner-right.png)' }} />

      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-serif font-semibold text-[#D4793D] mb-2 tracking-widest">Browse Collection</h2>
        <p className="text-lg text-gray-800 mb-10">Explore from our handpicked collections</p>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          {collections.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group border border-gray-200 rounded-lg p-4 overflow-hidden transition-shadow hover:shadow-md hover:bg-[#D4793D] cursor-pointer max-w-xs mx-auto"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-74 object-cover transition-transform duration-300"
              />
              <div className="py-4 bg-white text-center group-hover:bg-[#D4793D]">
                <h3 className="text-lg font-medium text-gray-800 group-hover:bg-[#D4793D]">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
