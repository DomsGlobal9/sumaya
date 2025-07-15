import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Filters() {
  const [openSections, setOpenSections] = useState({
    dressType: false,
    size: false,
    colors: false,
    designPatterns: false
  });

  const [selectedFilters, setSelectedFilters] = useState({
    dressType: ['Kurtis', 'Sarees'],
    size: [],
    colors: [],
    designPatterns: ['Printed', 'Embroidery', 'Kalankari']
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCheckboxChange = (section, item) => {
    setSelectedFilters(prev => ({
      ...prev,
      [section]: prev[section].includes(item)
        ? prev[section].filter(i => i !== item)
        : [...prev[section], item]
    }));
  };

  const colors = [
    { name: 'Red', bg: 'bg-red-500' },
    { name: 'Orange', bg: 'bg-orange-500' },
    { name: 'Yellow', bg: 'bg-yellow-400' },
    { name: 'Green', bg: 'bg-green-500' },
    { name: 'Cyan', bg: 'bg-cyan-400' },
    { name: 'Sky', bg: 'bg-sky-300' },
    { name: 'Blue', bg: 'bg-blue-600' },
    { name: 'Indigo', bg: 'bg-indigo-600' },
    { name: 'Purple', bg: 'bg-purple-600' },
    { name: 'Black', bg: 'bg-black' },
    { name: 'Pink', bg: 'bg-pink-400' }
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  return (
    <div className=" w-80 min-h-screen">
      {/* Header */}
      <div className="p-2 border-b border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-medium  text-[#D4793D]">Indian Wear</h1>
        </div>
        <div className="text-lg text-gray-600 mb-4">
          <span>Home</span> <span className="mx-2">›</span> 
          <span>Collection</span> <span className="mx-2">›</span> 
          <span>Kurtis</span>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Filters</h2>
          <button className="text-base text-gray-600 hover:text-gray-700">
            Clear All
          </button>
        </div>
      </div>

      {/* Dress Type Filter */}
      <div className="border-b p-2 border-gray-400">
        <button
          onClick={() => toggleSection('dressType')}
          className="w-full flex justify-between items-center pt-4 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium">Dress Type</span>
          {openSections.dressType ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openSections.dressType ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-4 space-y-2 p-2">
            {['Kurtis', 'Sarees'].map(item => (
              <label key={item} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.dressType.includes(item)}
                  onChange={() => handleCheckboxChange('dressType', item)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Size Filter */}
      <div className="border-b p-2 border-gray-400">
        <button
          onClick={() => toggleSection('size')}
          className="w-full flex justify-between items-center pt-4 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium">Size</span>
          {openSections.size ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openSections.size ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-4 p-2">
            <div className="grid grid-cols-3 gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleCheckboxChange('size', size)}
                  className={`py-2 px-3 border rounded text-sm transition-colors ${
                    selectedFilters.size.includes(size)
                      ? 'border-orange-500 bg-orange-50 text-orange-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Colors Filter */}
      <div className="border-b p-2 border-gray-400">
        <button
          onClick={() => toggleSection('colors')}
          className="w-full flex justify-between items-center ptS-4 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium">Colors</span>
          {openSections.colors ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openSections.colors ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-4 p-2">
            <div className="grid grid-cols-6 gap-2">
              {colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => handleCheckboxChange('colors', color.name)}
                  className={`w-8 h-8 rounded-full ${color.bg} border-2 transition-all ${
                    selectedFilters.colors.includes(color.name)
                      ? 'border-gray-800 scale-110'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Design Patterns Filter */}
      <div className="border-b p-2 border-gray-400">
        <button
          onClick={() => toggleSection('designPatterns')}
          className="w-full flex justify-between items-center pt-4 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium">Design Patterns</span>
          {openSections.designPatterns ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openSections.designPatterns ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-4 p-2 space-y-2">
            {['Printed', 'Embroidery', 'Kalankari'].map(item => (
              <label key={item} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.designPatterns.includes(item)}
                  onChange={() => handleCheckboxChange('designPatterns', item)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}