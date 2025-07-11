
import React from 'react';
import './index.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar from './components/HomeComponents/Navbar';


function App() {

  return (
     <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
