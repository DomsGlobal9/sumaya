

// components/Navbar.jsx
import React from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo_icon from "../../assets/Sumaya_Logo.png";
import search_icon from "../../assets/search_icon_btn.svg";
import shop_icon from "../../assets/shop_icon.svg";
import profile_icon from "../../assets/profile_icon.svg";
import fav_heart_icon from "../../assets/heart.png";
const dropdownItems = {
  trends: ["Trending Now", "Seasonal Picks", "Top Rated"],
  collection: ["New Arrivals", "Festive Wear", "Casuals"],
};

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 lg:px-16 py-4 shadow-sm bg-white z-50 relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-800 animate__animated animate__fadeInLeft">
        <img src={logo_icon} alt="logo_img" className="inline w-33" />
      </div>
      {/* Nav links */}
      <nav className="hidden md:flex gap-8 font-medium text-gray-700">
        {/* Trends Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
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
        <Menu as="div" className="relative inline-block text-left">
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

      {/* Icons */}
      <div className="flex items-center gap-4 relative">
        {/* Wrapper for input and search icon */}
        <div className="relative hidden md:block mr-4 ">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-1 rounded-full text-sm w-40"
          />
          <img
            src={search_icon}
            width={29}
            alt="search_icon"
            className="absolute top-0 left-34"
          />
        </div>

        {/* Other icons */}
        <div>
          <img src={shop_icon} width={20} alt="shop_icon" />
        </div>
        <div>
          <img src={fav_heart_icon} width={28} alt="FAV_heart" />
        </div>
        <div>
          <img src={profile_icon} width={24} alt="profile_icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
