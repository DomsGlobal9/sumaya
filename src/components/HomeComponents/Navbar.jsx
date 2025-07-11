// "use client";

// import React from "react";
// import { Link } from "react-router-dom";
// import { Search, ShoppingBag, User } from "lucide-react";
// import logo_icon from "../../src/assets/sumaya_logo.svg";
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// const Navbar = () => {
//   return (
//     <header
//       className="w-full bg-[#f5f3ef] py-4 static h-20 bg-white shadow-[0px_4px_46px_0px_#0000000D]
// "
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-green-800 animate__animated animate__fadeInLeft">
//           <img src={logo_icon} alt="logo_img" className="inline" />
//           Sumaya
//         </div>

//         {/* Navigation Links */}
//         <nav className="bg-white px-8 py-1 mt-1  flex gap-10 text-sm font-medium animate__animated animate__fadeInDown">
//           <Menu as="div" className="relative inline-block text-left">
//             <div>
//               <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
//                 Options
//                 <ChevronDownIcon
//                   aria-hidden="true"
//                   className="-mr-1 size-5 text-gray-400"
//                 />
//               </MenuButton>
//             </div>

//             <MenuItems
//               transition
//               className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//             >
//               <div className="py-1">
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//                   >
//                     Edit
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//                   >
//                     Duplicate
//                   </a>
//                 </MenuItem>
//               </div>
//               <div className="py-1">
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//                   >
//                     Archive
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//                   >
//                     Move
//                   </a>
//                 </MenuItem>
//               </div>
//               <div className="py-1">
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//                   >
//                     Share
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//                   >
//                     Add to favorites
//                   </a>
//                 </MenuItem>
//               </div>
//               <div className="py-1">
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//                   >
//                     Delete
//                   </a>
//                 </MenuItem>
//               </div>
//             </MenuItems>
//           </Menu>
//         </nav>

//         {/* Icons */}
//         <div className="flex items-center gap-4 animate__animated animate__fadeInRight">
//           <button className="p-2 rounded-full bg-white">
//             <Search size={18} />
//           </button>
//           <button className="p-2 rounded-full bg-white">
//             <ShoppingBag size={18} />
//           </button>
//           <button className="p-2 rounded-full bg-white">
//             <User size={18} />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// components/Navbar.jsx
import React from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo_icon from "../../assets/Sumaya_Logo.png";
import search_icon from "../../assets/search_icon_btn.svg";
import shop_icon from "../../assets/shop_icon.svg";
import profile_icon from "../../assets/profile_icon.svg";
const dropdownItems = {
  trends: ["Trending Now", "Seasonal Picks", "Top Rated"],
  collection: ["New Arrivals", "Festive Wear", "Casuals"],
};

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 lg:px-16 py-4 shadow-sm bg-white z-50 relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-800 animate__animated animate__fadeInLeft">
        <img src={logo_icon} alt="logo_img" className="inline w-30" />
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
        <div className="relative hidden md:block">
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

        {/* Other icons */}
        <div>
          <img src={shop_icon} width={20} alt="shop_icon" />
        </div>
        <div>
          <img src={profile_icon} width={26} alt="profile_icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
