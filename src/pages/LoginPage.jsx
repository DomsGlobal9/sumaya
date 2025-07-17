import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import ForgotPassword from './ForgotPasswordPage'
import Logo from '../assets/Sumaya_Logo.png'
import loginImg from '../assets/LoginImg.png'

export default function LoginPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    // Valid roles and role validation
    const validRoles = ['seller', 'tailor'];
    const urlRole = searchParams.get('role');
    const role = validRoles.includes(urlRole) ? urlRole : 'seller';
    
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [imageLoadErrors, setImageLoadErrors] = useState({
        logo: false,
        loginImg: false
    });

    // Check for signup success message
    useEffect(() => {
        if (searchParams.get('signup') === 'success') {
            setSuccessMessage('Account created successfully! Please log in.');
            // Clean up URL
            const newParams = new URLSearchParams(searchParams);
            newParams.delete('signup');
            navigate(`/login?${newParams.toString()}`, { replace: true });
        }
    }, [searchParams, navigate]);

    // Redirect to correct URL if invalid role was provided
    useEffect(() => {
        if (urlRole && !validRoles.includes(urlRole)) {
            navigate(`/login?role=seller`, { replace: true });
        }
    }, [urlRole, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        setSubmitError('');
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitError('');
        setSuccessMessage('');

        try {
            // Replace with your actual API endpoint
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email.trim().toLowerCase(),
                    password: formData.password,
                    role: role
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed. Please check your credentials.');
            }

            const data = await response.json();
            
            // Store auth token if provided
            if (data.token) {
                localStorage.setItem('authToken', data.token);
            }

            console.log('Logged in as:', role, data);
            
            // Navigate based on role
            const dashboardRoute = role === 'seller' ? '/seller-dashboard' : '/tailor-dashboard';
            navigate(dashboardRoute, { replace: true });

        } catch (error) {
            console.error('Login error:', error);
            setSubmitError(error.message || 'An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleImageError = (imageType) => {
        setImageLoadErrors(prev => ({ ...prev, [imageType]: true }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleForgotPasswordBack = () => {
        setShowForgotPassword(false);
        setSubmitError('');
        setSuccessMessage('');
    };

    // Show forgot password component
    if (showForgotPassword) {
        return <ForgotPassword onBack={handleForgotPasswordBack} />;
    }

    const roleHeadings = {
        seller: {
            title: "Seller Login",
            welcome: "Welcome back, seller! 👋"
        },
        tailor: {
            title: "Tailor Login", 
            welcome: "Welcome back, tailor! 👋"
        }
    };

    return (
        <div className="relative min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center">
            {/* Logo with navigation */}
            {!imageLoadErrors.logo && (
                <img 
                    src={Logo} 
                    alt="Sumaya Logo" 
                    className="absolute top-5 left-5 h-10 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => navigate('/home')}
                    onError={() => handleImageError('logo')}
                />
            )}
            
            {/* Left Panel - Form */}
            <div className="w-full lg:w-1/2 p-6 mt-10 lg:p-20">
                <h1 className="text-4xl font-serif font-medium text-[#D4793D] mb-2">
                    {roleHeadings[role]?.title || "Login"}
                </h1>
                <p className="text-sm text-gray-600 mb-8 pt-1">
                    {roleHeadings[role]?.welcome || "Welcome back! 👋"}
                </p>

                {/* Success message */}
                {successMessage && (
                    <div 
                        className="mb-6 p-3 bg-green-100 border border-green-400 text-green-700 rounded"
                        role="alert"
                        aria-live="polite"
                    >
                        {successMessage}
                    </div>
                )}

                {/* Error message */}
                {submitError && (
                    <div 
                        className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded"
                        role="alert"
                        aria-live="polite"
                    >
                        {submitError}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Email field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400 pointer-events-none" />
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Example@email.com"
                                className={`w-full pl-10 pr-4 py-2 border rounded-lg transition-colors ${
                                    errors.email 
                                        ? 'border-red-500 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-[#D4793D]'
                                } focus:outline-none focus:ring-2 focus:ring-[#D4793D]/20`}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                disabled={isSubmitting}
                                autoComplete="email"
                            />
                        </div>
                        {errors.email && (
                            <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 h-5 w-5 text-gray-400 pointer-events-none" />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                className={`w-full pl-10 pr-12 py-2 border rounded-lg transition-colors ${
                                    errors.password 
                                        ? 'border-red-500 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-[#D4793D]'
                                } focus:outline-none focus:ring-2 focus:ring-[#D4793D]/20`}
                                aria-describedby={errors.password ? "password-error" : undefined}
                                disabled={isSubmitting}
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-3 right-3 h-5 w-5 text-gray-400 hover:text-gray-600 focus:outline-none"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                disabled={isSubmitting}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.password && (
                            <p id="password-error" className="text-red-500 text-sm mt-1" role="alert">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Forgot password link */}
                    <div className="text-right">
                        <button
                            type="button"
                            onClick={() => setShowForgotPassword(true)}
                            className="text-sm text-[#D4793D] hover:underline cursor-pointer focus:outline-none focus:underline"
                            disabled={isSubmitting}
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#D4793D] text-white py-2 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#c16a35] focus:outline-none focus:ring-2 focus:ring-[#D4793D]/50 focus:ring-offset-2"
                        aria-describedby={isSubmitting ? "submitting-status" : undefined}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : (
                            'Sign in'
                        )}
                    </button>

                    {/* Screen reader status */}
                    {isSubmitting && (
                        <p id="submitting-status" className="sr-only" aria-live="polite">
                            Form is being submitted, please wait
                        </p>
                    )}
                </form>

                {/* Sign up link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                        onClick={() => navigate(`/signup?role=${role}`)}
                        className="text-[#D4793D] hover:underline cursor-pointer bg-none border-none p-0 font-medium focus:outline-none focus:underline"
                        type="button"
                        disabled={isSubmitting}
                    >
                        Sign up
                    </button>
                </p>

                {/* Copyright */}
                <p className="text-xs text-center mt-10 text-gray-400">
                    © 2025 ALL RIGHTS RESERVED
                </p>
            </div>

            {/* Right Panel - Image */}
            <div className="hidden lg:block lg:w-1/3">
                {!imageLoadErrors.loginImg && (
                    <img
                        src={loginImg}
                        alt="Fashion showcase"
                        className="w-full h-[80vh] rounded object-contain"
                        onError={() => handleImageError('loginImg')}
                    />
                )}
            </div>
        </div>
    );
}