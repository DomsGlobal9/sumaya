import React, { useState } from 'react';
import { User, Scissors, UserCheck, ArrowLeft } from 'lucide-react';
import bottom_left_frame from "../assets/AboutUs_frame_down.svg";
import down_frame from "../assets/downFrame_aboutUs.svg"
import { useNavigate } from 'react-router-dom';

export default function LoginTypePage() {
  const [currentView, setCurrentView] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

   const handleLoginTypeSelect = (type) => {
    setSelectedType(type);
    if (type === 'user') {
      setCurrentView('user');
    } else if (type === 'agent') {
      setCurrentView('agent');
    } else if (type === 'tailor'){
      setCurrentView('tailor');
    }
  };

  const handleBackToLogin = () => {
    setCurrentView('login');
    setSelectedType(null);
  };

  // if (currentView === 'user') {
  //   return (
  //     <div>
  //       <button
  //         onClick={handleBackToLogin}
  //         className="absolute top-4 left-4 z-10 flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
  //       >
  //         <ArrowLeft className="w-5 h-5" />
  //         <span>Back to Login</span>
  //       </button>
  //       <SignupForm userType="user" />
  //     </div>
  //   );
  // }

  // if (currentView === 'agent') {
  //   return (
  //     <div>
  //       <button
  //         onClick={handleBackToLogin}
  //         className="absolute top-4 left-4 z-10 flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
  //       >
  //         <ArrowLeft className="w-5 h-5" />
  //         <span>Back to Login</span>
  //       </button>
  //       <SignupForm userType="agent" />
  //     </div>
  //   );
  // }



  return (
    <div className="min-h-[93vh] bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
      {/* Decorative corner elements */}
    <img
            src={down_frame}
            alt="Corner Frame Bottom Left"
            className="absolute bottom-1 left-0 w-45"
          />

    {/* Bottom-right frame */}
          <img
            src={bottom_left_frame}
            alt=""
            className="absolute bottom-1 right-1 rotate-272 w-45"
            draggable="false"
          />
     

      {/* Main login card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 relative z-10 backdrop-blur-sm border border-orange-100">
        <div className=" mb-8">
          <h1 className="text-4xl font-serif font-medium text-[#D4793D] mb-2">Login</h1>
          <p className="text-gray-800 text-md font-semibold">Choose Login Type:</p>
        </div>

        <div className="space-y-4">
          {/* User Login Button */}
          <button
            onClick={() => navigate('/login?role=user')}
            className={`w-full py-4 px-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-3 group ${
              selectedType === 'user'
                ? 'bg-[#D4793D] border-[#D4793D] text-white shadow-lg transform scale-105'
                : 'bg-white border-[#D4793D] text-[#D4793D] hover:bg-orange-50 hover:shadow-md hover:transform hover:scale-102'
            }`}
            
          >
            <User className="w-5 h-5" />
            <span className="font-semibold">User Login</span>
          </button>

          {/* Tailor Login Button */}
          <button
            onClick={() => navigate('/login?role=tailor')}
            className={`w-full py-4 px-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-3 group ${
              selectedType === 'tailor'
                ? 'bg-[#D4793D] border-[#D4793D] text-white shadow-lg transform scale-105'
                : 'bg-white border-[#D4793D] text-[#D4793D] hover:bg-orange-50 hover:shadow-md hover:transform hover:scale-102'
            }`}
          >
            <Scissors className="w-5 h-5" />
            <span className="font-semibold">Tailor Login</span>
          </button>

          {/* Agent Login Button */}
          <button
            onClick={() => navigate('/login?role=agent')}
            className={`w-full py-4 px-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-3 group ${
              selectedType === 'agent'
                ? 'bg-[#D4793D] border-[#D4793D] text-white shadow-lg transform scale-105'
                : 'bg-white border-[#D4793D] text-[#D4793D] hover:bg-orange-50 hover:shadow-md hover:transform hover:scale-102'
            }`}
          >
            <UserCheck className="w-5 h-5" />
            <span className="font-semibold">Agent Login</span>
          </button>
        </div>

        {/* Additional elements */}
        {/* <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{' '}
            <button className="text-[#D4793D] hover:text-orange-600 font-semibold transition-colors">
              Sign Up
            </button>
          </p>
        </div> */}
      </div>
    </div>
  );
}

