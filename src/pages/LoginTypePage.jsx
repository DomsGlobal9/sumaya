import React from 'react';
import { User, Scissors, ArrowLeft } from 'lucide-react';
import bottom_left_frame from "../assets/AboutUs_frame_down.svg";
import down_frame from "../assets/downFrame_aboutUs.svg";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function LoginTypePage() {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-[90vh] bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
        {/* Decorative corner elements */}
        <img
          src={down_frame}
          alt="Decorative frame bottom left"
          className="absolute bottom-1 left-0 w-45"
          role="presentation"
        />

        <img
          src={bottom_left_frame}
          alt="Decorative frame bottom right"
          className="absolute bottom-1 right-1 rotate-272 w-45"
          draggable="false"
          role="presentation"
        />

        {/* Main login card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 relative z-10 backdrop-blur-sm border border-orange-100">
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-medium text-[#D4793D] mb-2">Login</h1>
            <p className="text-gray-800 text-md font-semibold">Choose Login Type:</p>
          </div>

          <div className="space-y-4">
            {/* Seller Login Button */}
            <button
              onClick={() => navigate('/login?role=seller')}
              className="w-full py-4 px-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-3 group bg-white border-[#D4793D] text-[#D4793D] hover:bg-orange-50 hover:shadow-md hover:transform hover:scale-102"
              aria-label="Login as seller"
            >
              <User className="w-5 h-5" />
              <span className="font-semibold">Seller Login</span>
            </button>

            {/* Tailor Login Button */}
            <button
              onClick={() => navigate('/login?role=tailor')}
              className="w-full py-4 px-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-3 group bg-white border-[#D4793D] text-[#D4793D] hover:bg-orange-50 hover:shadow-md hover:transform hover:scale-102"
              aria-label="Login as tailor"
            >
              <Scissors className="w-5 h-5" />
              <span className="font-semibold">Tailor Login</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}