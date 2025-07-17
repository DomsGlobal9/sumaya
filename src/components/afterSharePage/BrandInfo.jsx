import React from 'react';
import Boutiqueimg from '../../assets/Boutique.png'

const BrandInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 p-10">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-[#D4793D] mb-4 font-serif">Bonita Boutique</h2>
        <p className="text-gray-900 text-md mb-4 ">
          Bonita Boutique is a modern celebration of timeless Indian fashion. From elegant kurtis and festive lehengas to exquisite bridal wear, Bonita curates styles that blend tradition with contemporary charm. Each piece is thoughtfully designed to reflect India’s rich textile heritage while embracing the needs of today’s confident, style-savvy woman. Whether it’s a wedding, a festival, or everyday elegance, Bonita Boutique brings you Indian wear that’s graceful, vibrant, and unmistakably you
        </p>
        <p className="text-gray-900 text-md">
         At Bonita, we believe that fashion is more than just clothing — it’s a reflection of culture, identity, and individuality. That’s why every garment is crafted with attention to detail, premium fabrics, and authentic craftsmanship. Our collections are inspired by the diverse beauty of India, offering something special for every age, season, and celebration. With Bonita Boutique, discover Indian wear that not only fits beautifully but tells your story with every stitch.
        </p>
      </div>
      <div>
        <img src={Boutiqueimg} alt="Bonita Logo" className="w-120 h-120 mt-15 rounded-md " />
      </div>
    </div>
  );
};

export default BrandInfo;
