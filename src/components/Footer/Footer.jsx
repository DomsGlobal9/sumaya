import React from 'react';
import { ArrowRight, Linkedin, Facebook, Twitter } from 'lucide-react';
import lotus from '../../assets/lotus.png';
import logo_icon from '../../assets/Sumaya_Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#fef6f0] h-[60vh] text-gray-700 pt-20 pb-6 px-4 md:px-16 relative overflow-hidden">

    {/* Logo */}
    <div className="absolute top-10 left-0 text-2xl font-bold text-green-800">
      <img src={logo_icon} alt="logo_img" className="inline w-40 ml-20" />
    </div>

      {/* Decorative Elements (top-right and bottom-right) */}
      <img className="absolute bottom-40 right-8 w-36 h-32 bg-no-repeat bg-contain" src={lotus} alt="" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-10 relative">

        {/* Column 1 - Logo & Subscribe */}
        <div>
          <div className="bg-white shadow-md p-4 rounded-lg max-w-xs">
            <p className="text-sm font-semibold mb-2 text-gray-800">Subscribe</p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="WhatsApp Number"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#d55d29] hover:bg-[#b34d20] p-2 rounded-r-md">
                <ArrowRight className="text-white w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Get latest products and commission updates via WhatsApp.
            </p>
          </div>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h3 className="font-semibold text-[#c35b18] mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Our Mission</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="font-semibold text-[#c35b18] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Become a Seller</a></li>
            <li><a href="#" className="hover:underline">Browse Dresses</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-30 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
        <div className="flex gap-3">
          <a href="#"><Linkedin size={16} className="text-gray-500 hover:text-[#d55d29]" /></a>
          <a href="#"><Facebook size={16} className="text-gray-500 hover:text-[#d55d29]" /></a>
          <a href="#"><Twitter size={16} className="text-gray-500 hover:text-[#d55d29]" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
