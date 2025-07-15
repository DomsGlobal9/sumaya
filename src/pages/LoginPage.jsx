import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import ForgotPassword from './ForgotPasswordPage'
import Logo from '../assets/Sumaya_Logo.png'
import loginImg from '../assets/LoginImg.png'

export default function LoginPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const role = searchParams.get('role') || 'user';

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';

        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'At least 6 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    if (showForgotPassword) {
  return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
}


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setTimeout(() => {
            console.log('Logged in as:', role, formData);
            navigate(`/${role}-dashboard`);
        }, 1000);
    };

    return (
        <div className=" relative min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center">
            {/* Left Panel */}
            <img src={Logo} alt="Sumaya Logo" className="absolute top-5 left-5 h-10 mb-6" />
            <div className=" w-full lg:w-1/2 p-6 mt-10 lg:p-20">
                <h2 className="text-2xl font-bold text-gray-800 font-serif">
                    {role.charAt(0).toUpperCase() + role.slice(1)} Login
                </h2>
                <p className="text-sm text-gray-600 mb-8 pt-1">Welcome back {role}! 👋</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Example@email.com"
                                className={`w-full pl-10 pr-4 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                className={`w-full pl-10 pr-4 py-2 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div className="text-right text-sm text-orange-500 hover:underline cursor-pointer"
                    onClick={() => setShowForgotPassword(true)}

                    >
                        Forgot Password?
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#D4793D]  text-white py-2 rounded-md  transition"
                    >
                        {isSubmitting ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{' '}
                    <span
                        onClick={() => navigate(`/signup?role=${role}`)}
                        className="text-orange-500 hover:underline cursor-pointer"
                    >
                        Sign up
                    </span>
                </p>

                <p className="text-xs text-center mt-10 text-gray-400">© 2025 ALL RIGHTS RESERVED</p>
            </div>

            {/* Right Panel */}
            <div className="hidden lg:block lg:w-1/3 ">
                <img
                    src={loginImg}
                    alt="Model"
                    className="w-full h-[80vh] rounded object-contain"
                />
            </div>
        </div>
    );
}
