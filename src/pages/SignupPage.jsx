import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Logo from '../assets/Sumaya_Logo.png'
import SignupImg from '../assets/LoginImg.png'

export default function SignupPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role") || "user";

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { username, email, password, confirmPassword } = formData;

    if (!username) newErrors.username = "Username is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email required";
    if (password.length < 8) newErrors.password = "Minimum 8 characters";
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) newErrors.password = "Must include uppercase & lowercase";
    if (!/\d|[!@#$%^&*]/.test(password)) newErrors.password = "Include a number or symbol";
    if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Signup complete as:", role, formData);
      navigate(`/login?role=${role}`);
    }, 1500);
  };

  const roleHeadings = {
    user: {
      title: "User Signup",
      tagline: "Join us and get started✨"
    },
    tailor: {
      title: "Tailor Signup",
      tagline: "Turn your tailoring passion into profit ✂️"
    },
    agent: {
      title: "Agent Signup",
      tagline: "Earn by sharing fashion. No inventory, no hassle✨"
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center">
      {/* Background for mobile */}
      <div className="block lg:hidden absolute inset-0 opacity-10 -z-10">
        <img src={SignupImg} alt="Background" className="w-full h-full object-cover" />
      </div>
    <img src={Logo} alt="Logo" className="h-10 absolute top-4 left-4" />
      {/* Left Panel - Form */}
      <div className=" w-full lg:w-1/2 p-6 mt-10 lg:p-20">

        <h2 className="text-2xl font-bold text-gray-800 font-serif">{roleHeadings[role]?.title || "Signup"}</h2>
        <p className="text-sm text-gray-600 mb-6 pt-1">{roleHeadings[role]?.tagline}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter Username"
              className={`w-full px-4 py-3 rounded border ${errors.username ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username}</p>}
          </div>

          <div>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded border ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              className={`w-full px-4 py-3 rounded border ${errors.password ? "border-red-500" : "border-gray-300"}`}
            />
            <ul className="text-xs text-gray-500 mt-1 ml-1 list-disc pl-4">
              <li>Atleast 8 characters</li>
              <li>One uppercase and one lowercase letter</li>
              <li>One number or symbol</li>
            </ul>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className={`w-full px-4 py-3 rounded border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D4793D] text-white py-3 rounded-md  transition"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate(`/login?role=${role}`)}
            className="text-orange-500 hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>

      {/* Right Panel - Model Image */}
      <div className="hidden lg:block lg:w-1/3 ">
        <img src={SignupImg} alt="Model" className="w-full h-[80vh] rounded object-contain" />
      </div>
    </div>
  );
}
