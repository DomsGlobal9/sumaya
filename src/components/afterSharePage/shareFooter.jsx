import { ArrowRight, Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5ede5] py-8 mt-12 text-sm text-gray-600">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 px-6">
        <div>
          <h4 className="text-4xl text-[#D4793D] font-serif font-semibold mb-6">Bounita Boutique</h4>
          <div className='bg-[#f5ede9] m-10 shadow p-6'>
            <div className="flex items-center bg-white rounded-lg p-1 shadow w-72">
            <input
              type="text"
              placeholder="WhatsApp Number"
              className="w-full px-3 py-2 outline-none text-sm"
            />
            <button className="text-white text-2xl bg-orange-500 px-3 py-2 rounded"><ArrowRight /></button>
          </div>
          <p className="mt-2">Get latest products and commission updates via WhatsApp.</p>
          </div>
        </div>
        <div className="flex gap-9 mt-20">
          <div>
            <h5 className="font-bold text-[#D4793D] mb-2">Company</h5>
            <ul>
              <li>Contact Us</li>
              <li>Our Mission</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#D4793D] mb-2">Quick Links</h5>
            <ul>
              <li>Home</li>
              <li>Become a Seller</li>
              <li>Browse Dresses</li>
            </ul>
          </div>
        </div>
      </div>

       {/* Divider */}
      <div className="border-t border-gray-300 mt-20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div className="flex gap-4 ml-4">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
        <div className="flex gap-3 mr-4">
          <a href="#"><Linkedin size={16} className="text-[#D4793D] hover:text-[#d55d29]" /></a>
          <a href="#"><Facebook size={16} className="text-[#D4793D] hover:text-[#d55d29]" /></a>
          <a href="#"><Twitter size={16} className="text-[#D4793D] hover:text-[#d55d29]" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
