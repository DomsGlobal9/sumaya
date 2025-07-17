import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Logo from '../assets/Sumaya_Logo.png'
import SignupImg from '../assets/LoginImg.png'

export default function SignupPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Valid roles and role validation
  const validRoles = ['seller', 'tailor'];
  const urlRole = searchParams.get("role");
  const role = validRoles.includes(urlRole) ? urlRole : "seller";

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [imageLoadErrors, setImageLoadErrors] = useState({
    logo: false,
    signup: false
  });

  // Redirect to correct URL if invalid role was provided
  useEffect(() => {
    if (urlRole && !validRoles.includes(urlRole)) {
      navigate(`/signup?role=seller`, { replace: true });
    }
  }, [urlRole, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };

  const validateForm = () => {
    const newErrors = {};
    const { username, email, password, confirmPassword } = formData;

    // Username validation
    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (username.length > 30) {
      newErrors.username = "Username must not exceed 30 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      newErrors.username = "Username can only contain letters, numbers, and underscores";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation - improved logic
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must include at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Password must include at least one lowercase letter";
    } else if (!/\d/.test(password) && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password = "Password must include at least one number or symbol";
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          role: role
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed. Please try again.');
      }

      const data = await response.json();
      
      // Clear form on success
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      
      // Navigate to login with success message
      navigate(`/login?role=${role}&signup=success`, { replace: true });
      
    } catch (error) {
      console.error('Signup error:', error);
      setSubmitError(error.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const roleHeadings = {
    seller: {
      title: "Seller Signup",
      tagline: "Earn by sharing fashion. No inventory, no hassle✨"
    },
    tailor: {
      title: "Tailor Signup",
      tagline: "Turn your tailoring passion into profit ✂️"
    }
  };

  const handleImageError = (imageType) => {
    setImageLoadErrors(prev => ({ ...prev, [imageType]: true }));
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center">
      {/* Background for mobile - removed click handler for better UX */}
      <div className="block lg:hidden absolute inset-0 opacity-10 -z-10">
        {!imageLoadErrors.signup && (
          <img 
            src={SignupImg} 
            alt="Background" 
            className="w-full h-full object-cover"
            onError={() => handleImageError('signup')}
          />
        )}
      </div>
      
      {/* Logo with fallback */}
      {!imageLoadErrors.logo && (
        <img 
          src={Logo} 
          alt="Sumaya Logo" 
          className="absolute top-5 left-5 h-10 mb-6"
          onError={() => handleImageError('logo')}
        />
      )}
      
      {/* Left Panel - Form */}
      <div className="w-full lg:w-1/2 p-6 mt-10 lg:p-20">
        <h1 className="text-4xl font-serif font-medium text-[#D4793D] mb-2">
          {roleHeadings[role]?.title || "Signup"}
        </h1>
        <p className="text-sm text-gray-600 mb-6 pt-1">
          {roleHeadings[role]?.tagline || "Join our platform today"}
        </p>

        {/* Global error message */}
        {submitError && (
          <div 
            className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" 
            role="alert"
            aria-live="polite"
          >
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Username field */}
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter Username"
              className={`w-full px-4 py-3 rounded border transition-colors ${
                errors.username ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#D4793D]"
              } focus:outline-none focus:ring-2 focus:ring-[#D4793D]/20`}
              aria-describedby={errors.username ? "username-error" : undefined}
              disabled={isSubmitting}
              autoComplete="username"
            />
            {errors.username && (
              <p id="username-error" className="text-sm text-red-500 mt-1" role="alert">
                {errors.username}
              </p>
            )}
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded border transition-colors ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#D4793D]"
              } focus:outline-none focus:ring-2 focus:ring-[#D4793D]/20`}
              aria-describedby={errors.email ? "email-error" : undefined}
              disabled={isSubmitting}
              autoComplete="email"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500 mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password field */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              className={`w-full px-4 py-3 rounded border transition-colors ${
                errors.password ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#D4793D]"
              } focus:outline-none focus:ring-2 focus:ring-[#D4793D]/20`}
              aria-describedby="password-requirements"
              disabled={isSubmitting}
              autoComplete="new-password"
            />
            <ul id="password-requirements" className="text-xs text-gray-500 mt-1 ml-1 list-disc pl-4">
              <li>At least 8 characters</li>
              <li>One uppercase and one lowercase letter</li>
              <li>One number or symbol</li>
            </ul>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1" role="alert">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password field */}
          <div>
            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className={`w-full px-4 py-3 rounded border transition-colors ${
                errors.confirmPassword ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#D4793D]"
              } focus:outline-none focus:ring-2 focus:ring-[#D4793D]/20`}
              aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
              disabled={isSubmitting}
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <p id="confirm-password-error" className="text-sm text-red-500 mt-1" role="alert">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D4793D] text-white py-3 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#c16a35] focus:outline-none focus:ring-2 focus:ring-[#D4793D]/50 focus:ring-offset-2"
            aria-describedby={isSubmitting ? "submitting-status" : undefined}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
          
          {/* Screen reader status */}
          {isSubmitting && (
            <p id="submitting-status" className="sr-only" aria-live="polite">
              Form is being submitted, please wait
            </p>
          )}
        </form>

        {/* Login link */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate(`/login?role=${role}`)}
            className="text-[#D4793D] hover:underline cursor-pointer bg-none border-none p-0 font-medium focus:outline-none focus:underline"
            type="button"
            disabled={isSubmitting}
          >
            Sign in
          </button>
        </p>
      </div>

      {/* Right Panel - Model Image */}
      <div className="hidden lg:block lg:w-1/3">
        {!imageLoadErrors.signup && (
          <img 
            src={SignupImg} 
            alt="Fashion showcase" 
            className="w-full h-[80vh] rounded object-contain"
            onError={() => handleImageError('signup')}
          />
        )}
      </div>
    </div>
  );
}