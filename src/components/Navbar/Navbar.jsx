import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import logo_icon from "../../assets/Sumaya_Logo.png";
import search_icon from "../../assets/search_icon_btn.svg";
import shop_icon from "../../assets/shop_icon.svg";
import profile_icon from "../../assets/profile_icon.svg";
import fav_heart_icon from "../../assets/heart.png";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const dropdownItems = {
  trends: ["Trending Now", "Seasonal Picks", "Top Rated"],
  collection: ["New Arrivals", "Festive Wear", "Casuals"],
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <>
      <header className="w-full flex justify-between items-center px-6 lg:px-16 py-4 shadow-sm bg-white z-50 sticky top-0">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="text-2xl font-bold text-green-800">
          <img 
            src={logo_icon} 
            alt="logo_img" 
            className="inline w-35 cursor-pointer" 
            onClick={() => navigate('/home')} 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          {/* Trends Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-1 cursor-pointer">
              TRENDS <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Menu.Items className="absolute z-20 mt-2 w-44 bg-white rounded-md shadow-lg py-1 text-sm">
              {dropdownItems.trends.map((item) => (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <button
                      className={`w-full text-left px-4 py-2 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      {item}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>

          {/* Collection Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-1 cursor-pointer">
              COLLECTION <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Menu.Items className="absolute z-20 mt-2 w-44 bg-white rounded-md shadow-lg py-1 text-sm">
              {dropdownItems.collection.map((item) => (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <button
                      className={`w-full text-left px-4 py-2 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      {item}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>

          <div className="cursor-pointer">ABOUT US</div>
        </nav>

        {/* Icons - Keeping your exact structure */}
        <div className="flex items-center gap-4 relative">
          {/* Search - Hidden on mobile */}
          <div className="relative hidden md:block mr-4">
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-1 rounded-full text-sm w-40"
            />
            <img
              src={search_icon}
              width={29}
              alt="search_icon"
              className="absolute top-0 left-33"
            />
          </div>

          {/* Your exact icon structure */}
          <div>
            <img src={shop_icon} width={20} alt="shop_icon" />
          </div>
          <div>
            <img 
              src={fav_heart_icon} 
              width={28} 
              alt="FAV_heart" 
              onClick={() => setIsWishlistOpen(true)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <img 
              src={profile_icon} 
              width={24} 
              alt="profile_icon" 
              onClick={() => navigate('/')}
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <div className="flex justify-end mb-4">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-2 rounded-full w-full"
            />
            <img
              src={search_icon}
              width={29}
              alt="search_icon"
              className="absolute right-3 top-2"
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-4">
            <Menu as="div" className="w-full">
              <Menu.Button className="flex items-center justify-between w-full py-2 border-b">
                TRENDS <ChevronDownIcon className="w-4 h-4" />
              </Menu.Button>
              <Menu.Items className="pl-4 py-2 space-y-2">
                {dropdownItems.trends.map((item) => (
                  <Menu.Item key={item}>
                    <div className="py-1">{item}</div>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>

            <Menu as="div" className="w-full">
              <Menu.Button className="flex items-center justify-between w-full py-2 border-b">
                COLLECTION <ChevronDownIcon className="w-4 h-4" />
              </Menu.Button>
              <Menu.Items className="pl-4 py-2 space-y-2">
                {dropdownItems.collection.map((item) => (
                  <Menu.Item key={item}>
                    <div className="py-1">{item}</div>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>

            <div className="py-2 border-b">ABOUT US</div>
          </nav>
        </div>
      )}

      {/* Wishlist Sidebar */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-opacity-50" onClick={() => setIsWishlistOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Your Wishlist</h2>
                    <button
                      onClick={() => setIsWishlistOpen(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <XMarkIcon className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Kurti Collection</h3>
                    {/* Wishlist items would go here */}
                    <div className="border-t border-gray-200 py-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Lehenga Collection</h3>
                      {/* Wishlist items would go here */}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 p-6">
                  <button
                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </button>
                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>SECURE PAYMENTS PROVIDED BY</p>
                    <div className="mt-2 flex justify-center space-x-4">
                      <span className="text-gray-700">ABC</span>
                      <span className="text-gray-700">Flow</span>
                      <span className="text-gray-700">VISA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;