import React from 'react';
import SharedProductCard from '../components/afterSharePage/SharedProductCard';
import BrandInfo from '../components/afterSharePage/BrandInfo';
import MoreFromBrandCarousel from '../components/afterSharePage/MoreFromBrandCarousel';
import Footer from '../components/afterSharePage/shareFooter';
import {BrandProducts} from '../data/products'

const AfterSharePage = () => {
  const sampleProduct = {
    name: "Blue Anarkali Kurti",
    price: 1499,
    stock: 9,
    image: "/assets/blue-anarkali.png",
    colors: ["#000000", "#192C53", "#F4CBD6"]
  };

//   const moreProducts = [
//     { name: "Red Printed Kurti", price: 1299, brand: "Bonita Boutique", image: "/assets/red.png" },
//     { name: "Purple Kurti", price: 1699, brand: "Bonita Boutique", image: "/assets/purple.png" },
//     { name: "Yellow Kurti", price: 1799, brand: "Bonita Boutique", image: "/assets/yellow.png" },
//     { name: "Green Embroidery Kurti", price: 1899, brand: "Bonita Boutique", image: "/assets/green.png" },
//   ];

  return (
    <div className="bg-white text-black">
      <BrandInfo />
        <SharedProductCard product={sampleProduct} />
      <MoreFromBrandCarousel products={BrandProducts} />
      <Footer />
    </div>
  );
};

export default AfterSharePage;
