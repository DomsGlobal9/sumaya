import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage.jsx';
import ProductCategoryPage from '../pages/ProductCategoryPage.jsx';
import HowItWorks from '../pages/HowSumayaWorksPage.jsx';
import LoginTypePage from '../pages/LoginTypePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import SignupPage from '../pages/SignupPage.jsx';
import ForgotPassword from '../pages/ForgotPasswordPage.jsx';
import AfterSharePage from '../pages/afterSharePage.jsx';
import CustomizePage from '../pages/customizePage.jsx';
import CheckoutFlow from '../pages/checkoutFlow.jsx';
import BecomeSeller from '../pages/BecomeSeller.jsx';
import BrowseCollection from '../pages/BrowseCollection.jsx';
import ProductDetail from '../pages/ProductDetailPage.jsx';
import CustomizePage from '../pages/CustomizePage.jsx';




function RoutesPage() {  
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginTypePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forget-password" element={<ForgotPassword/>} />
        <Route path='/become-seller' element={<BecomeSeller/>} />
        <Route path='/browse-collection' element={<BrowseCollection />}/>
        <Route path="/browse-collection/indian-wear" element={<ProductCategoryPage />} />
        <Route path='/product-detailed/:id' element={<ProductDetail/>}/>
        <Route path='/after-Share' element={<AfterSharePage/>}/>
        <Route path='/customize' element={<CustomizePage/>} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path='/checkout' element={<CheckoutFlow/>}/>
       
        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      
    </BrowserRouter>
    
  );
} 

export default RoutesPage;
