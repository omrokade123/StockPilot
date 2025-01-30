import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Homepage from "./landing_page/home/Homepage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import  PricingPage from "./landing_page/Pricing/PricingPage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';
import Login from "./landing_page/Login/login.jsx";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
      <Footer/>
   </BrowserRouter>,
   

)
