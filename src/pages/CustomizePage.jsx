import React, { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';

const CustomizePage = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPattern, setSelectedPattern] = useState('');
  const [selectedPantType, setPantType] = useState('');
  const [selectedTailor, setSelectedTailor] = useState('');
  const [pocketPreference, setPocketPreference] = useState('Yes');

  const handleBackClick = () => {
    // Using window.history for browser back navigation
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback: redirect to a default page
      window.location.href = '/';
    }
  };

  const sizeChart = [
    { measurement: 'CHEST', XS: 34, S: 36, M: 38, L: 40, XL: 42 },
    { measurement: 'WAIST', XS: 28, S: 30, M: 32, L: 34, XL: 36 },
    { measurement: 'HIP', XS: 34, S: 36, M: 38, L: 40, XL: 42 },
    { measurement: 'SHOULDER', XS: 15.5, S: 16, M: 16.5, L: 17, XL: 17.5 },
    { measurement: 'SLEEVE LENGTH', XS: 24, S: 24.5, M: 25, L: 25.5, XL: 26 },
    { measurement: 'LENGTH', XS: 28, S: 29, M: 30, L: 31, XL: 32 }
  ];

  const fabrics = [
    { id: 'cotton', name: 'Cotton Lining', image: '/api/placeholder/120/100', color: 'bg-blue-200' },
    { id: 'crepe', name: 'Crepe Lining', image: '/api/placeholder/120/100', color: 'bg-blue-400' },
    { id: 'rayon', name: 'Rayon Lining', image: '/api/placeholder/120/100', color: 'bg-blue-300' }
  ];

  const pantTypes = [
    { id: 'straight', name: 'Straight Pant', image: '/api/placeholder/80/120', color: 'bg-gray-900' },
    { id: 'churidar', name: 'Churidar Pant', image: '/api/placeholder/80/120', color: 'bg-amber-100' },
    { id: 'palazzo', name: 'Palazzo Pant', image: '/api/placeholder/80/120', color: 'bg-gray-800' },
    { id: 'sharara', name: 'Sharara Pant', image: '/api/placeholder/80/120', color: 'bg-teal-200' },
    { id: 'dhoti', name: 'Dhoti Pant', image: '/api/placeholder/80/120', color: 'bg-pink-200' },
    { id: 'bell', name: 'Bell Bottom Pant', image: '/api/placeholder/80/120', color: 'bg-yellow-600' }
  ];

  const tailors = [
    { id: 'ravi', name: 'S.Ravi Kumar', rating: 4.2, location: 'Super Bazar Guntur', specialty: 'Specializes in daily kurtis', delivery: '2-4 days' },
    { id: 'suresh', name: 'Suresh Goud', rating: 4.1, location: 'Vijayawada', specialty: 'Specializes in traditional kurtis', delivery: '4-6 days' },
    { id: 'imran', name: 'Imran Khan', rating: 4.3, location: 'Hyderabad', specialty: 'Specializes in fashionable kurtis', delivery: '6-10 days' },
    { id: 'meghana', name: 'Meghana', rating: 4.4, location: 'Bangalore', specialty: 'Specializes in Anarkali Kurtis', delivery: '4-7 days' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleBackClick}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Back</span>
            </button>
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mt-10 text-start ">Customize</h1>
          <div className="bg-white rounded-lg shadow-sm p-3">
            <select 
              className="border-none outline-none text-gray-700"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              <option>Select Area</option>
              <option>Guntur</option>
              <option>Vijayawada</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
            </select>
          </div>
        </div>

        {/* Size Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
            Types of Customization
          </h2>
          <p className="text-sm text-gray-600 mb-4">Standard Measurement Chart for Kurtis</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left font-medium">Measurement</th>
                  <th className="border border-gray-300 p-3 text-center font-medium">XS</th>
                  <th className="border border-gray-300 p-3 text-center font-medium">S</th>
                  <th className="border border-gray-300 p-3 text-center font-medium">M</th>
                  <th className="border border-gray-300 p-3 text-center font-medium">L</th>
                  <th className="border border-gray-300 p-3 text-center font-medium">XL</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 p-3 font-medium">{row.measurement}</td>
                    <td className="border border-gray-300 p-3 text-center">{row.XS}</td>
                    <td className="border border-gray-300 p-3 text-center">{row.S}</td>
                    <td className="border border-gray-300 p-3 text-center">{row.M}</td>
                    <td className="border border-gray-300 p-3 text-center">{row.L}</td>
                    <td className="border border-gray-300 p-3 text-center">{row.XL}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Pattern */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
            Design / Pattern*
          </h2>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg mb-6"
            value={selectedPattern}
            onChange={(e) => setSelectedPattern(e.target.value)}
          >
            <option>Select Design / Pattern</option>
            <option>Cotton Lining</option>
            <option>Crepe Lining</option>
            <option>Rayon Lining</option>
          </select>

          <div className="grid grid-cols-3 gap-6">
            {fabrics.map((fabric) => (
              <div key={fabric.id} className="text-center">
                <div className="relative">
                  <div className={`w-full h-24 ${fabric.color} rounded-lg mb-2`}></div>
                  <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                    <Check size={12} className="text-gray-400" />
                  </button>
                </div>
                <p className="text-sm text-gray-700">{fabric.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pant Type */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
            Pant Type*
          </h2>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg mb-6"
            value={selectedPantType}
            onChange={(e) => setPantType(e.target.value)}
          >
            <option>Select Pant Type</option>
            {pantTypes.map((pant) => (
              <option key={pant.id} value={pant.id}>{pant.name}</option>
            ))}
          </select>

          <div className="grid grid-cols-6 gap-4 mb-6">
            {pantTypes.map((pant) => (
              <div key={pant.id} className="text-center">
                <div className="relative">
                  <div className={`w-full h-20 ${pant.color} rounded-lg mb-2`}></div>
                  <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center">
                    <Check size={10} className="text-gray-400" />
                  </button>
                </div>
                <p className="text-xs text-gray-700">{pant.name}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Pocket Preference:</span>
            <label className="flex items-center gap-2">
              <input 
                type="radio" 
                name="pocket" 
                value="Yes"
                checked={pocketPreference === 'Yes'}
                onChange={(e) => setPocketPreference(e.target.value)}
                className="text-blue-600"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input 
                type="radio" 
                name="pocket" 
                value="No"
                checked={pocketPreference === 'No'}
                onChange={(e) => setPocketPreference(e.target.value)}
                className="text-blue-600"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>

        {/* Tailor Selection */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
            Tailor*
          </h2>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg mb-6"
            value={selectedTailor}
            onChange={(e) => setSelectedTailor(e.target.value)}
          >
            <option>Select Tailor</option>
            {tailors.map((tailor) => (
              <option key={tailor.id} value={tailor.id}>{tailor.name}</option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-4">
            {tailors.map((tailor) => (
              <div key={tailor.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-800">{tailor.name}</h3>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-gray-600">{tailor.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{tailor.location}</p>
                    <p className="text-xs text-gray-500 mb-2">{tailor.specialty}</p>
                    <p className="text-xs text-gray-500">Delivery Date: {tailor.delivery}</p>
                    <button className="text-xs text-blue-600 hover:underline mt-1">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Items Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
            Selected Input
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-300 rounded-lg mb-2 mx-auto"></div>
              <p className="text-xs text-gray-600">Design / Pattern</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-200 rounded-lg mb-2 mx-auto"></div>
              <p className="text-xs text-gray-600">Pant Type</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-gray-600">Pocket Preference:</span>
                <span className="text-xs font-medium">YES</span>
              </div>
              <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm mt-2">
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-white border border-orange-500 text-orange-500 py-3 px-6 rounded-lg font-medium hover:bg-orange-50 transition-colors">
            Add to Shop
          </button>
          <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;