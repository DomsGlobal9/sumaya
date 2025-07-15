import React, { useState } from 'react';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import Logo from '../assets/Sumaya_Logo.png';
import forgetImg from '../assets/LoginImg.png'

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Password reset link sent to:', email);
  };

  const handleSignIn = () => {
    onBack(); // Go back to sign-in screen
  };

  return (
    <div className=" relative min-h-screen bg-white flex flex-col lg:flex-row items-center justify-cente">
      {/* Back Button */}
      {/* {!isSubmitted && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 z-10 flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        )} */}
      {/* Left side */}
      <div className="w-full lg:w-1/2 p-6 mt-10 lg:p-20">

        {/* Logo */}
        <img src={Logo} alt="Sumaya Logo" className="absolute top-5 left-5 h-10" />

        {/* Submitted State */}
        {isSubmitted ? (
          <>
            <div className="text-center mb-8 mt-20">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Check Your Email</h2>
              <p className="text-gray-600">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">What's next?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Check your email inbox (and spam folder)',
                  'Click the reset link in the email',
                  'Create a new password',
                ].map((step, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleSignIn}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
            >
              Back to Sign In
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Didn't receive the email?{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  Resend link
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Form Header */}
            <div className="mb-8 mt-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-2  font-serif">Forgot Password</h2>
              <p className="text-gray-600">Hey User! We'll email you a link to reset it :)</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg  transition-all duration-200 placeholder-gray-400"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4793D]  text-white py-3 rounded-md  transition"
              >
                Send Link
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Remember your password?{' '}
                <button
                  onClick={handleSignIn}
                  className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>

          </>
        )}

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400">© 2025 ALL RIGHTS RESERVED</p>
        </div>
      </div>

      {/* Right side image */}
      <div className="hidden lg:block lg:w-1/3 ">
        <img
          src={forgetImg}
          alt="Model"
          className="w-full h-[80vh] rounded object-contain"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
