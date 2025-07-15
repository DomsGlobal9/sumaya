import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage.jsx';
import ProductCategoryPage from '../pages/ProductCategoryPage.jsx';
import HowItWorks from '../pages/HowSumayaWorksPage.jsx';
import LoginTypePage from '../pages/LoginTypePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import SignupPage from '../pages/SignupPage.jsx';
import ForgotPassword from '../pages/ForgotPasswordPage.jsx';




function RoutesPage() {  
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginTypePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forget-password" element={<ForgotPassword/>} />

        <Route path="/product-category" element={<ProductCategoryPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      
    </BrowserRouter>
    
  );
} 

export default RoutesPage;