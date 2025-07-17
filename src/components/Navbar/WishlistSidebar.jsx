import React, { useState } from 'react';
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';

const WishlistSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sample wishlist data
  const wishlistItems = {
    'Kurti Collection': [
      { id: 1, name: 'Floral Printed Kurti', price: '₹1,299', image: 'kurti1.jpg' },
      { id: 2, name: 'Silk Embroidered Kurti', price: '₹1,599', image: 'kurti2.jpg' }
    ],
    'Lehenga Collection': [
      { id: 3, name: 'Red Bridal Lehenga', price: '₹12,999', image: 'lehenga1.jpg' },
      { id: 4, name: 'Blue Party Lehenga', price: '₹8,999', image: 'lehenga2.jpg' }
    ]
  };

  return (
    <>
      {/* Heart Icon Button - Mobile and Desktop */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 relative hover:text-orange-500 transition-colors"
        aria-label="Wishlist"
      >
        <HeartIcon className="h-6 w-6" />
        {/* Optional badge for wishlist count */}
        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          4
        </span>
      </button>

      {/* Wishlist Sidebar */}
      <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar Content */}
        <div className={`absolute inset-y-0 right-0 max-w-full flex transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold text-gray-900">Your Wishlist</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Close wishlist"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Wishlist Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {Object.entries(wishlistItems).map(([collection, items]) => (
                  <div key={collection} className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{collection}</h3>
                    <div className="space-y-4">
                      {items.map(item => (
                        <div key={item.id} className="flex items-center gap-3 p-2 border rounded-lg">
                          <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                            {/* Replace with actual image */}
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              Image
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{item.name}</h4>
                            <p className="text-orange-500 font-medium">{item.price}</p>
                          </div>
                          <button className="text-gray-400 hover:text-red-500">
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer with Checkout Button */}
              <div className="border-t p-4">
                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md font-medium transition-colors"
                >
                  Checkout
                </button>
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>SECURE PAYMENTS PROVIDED BY</p>
                  <div className="mt-2 flex justify-center gap-4">
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
    </>
  );
};

export default WishlistSidebar;