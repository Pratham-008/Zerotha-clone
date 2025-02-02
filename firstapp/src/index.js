import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "./landingpage/home/Homepage.js"
import Signup from "./landingpage/signup/Signup.js"
import Support from "./landingpage/support/SupportPage.js"
import About from "./landingpage/about/AboutPage.js"
import Pricing from "./landingpage/pricing/PricingPage.js"
import Product from "./landingpage/products/ProductsPage.js"
import Navbar from "./landingpage/Navbar.js"
import Footer from "./landingpage/Footer.js"
import Notfound from './landingpage/Notfound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/Signup' element={<Signup />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Products' element={<Product />}/>
    <Route path='/Pricing' element={<Pricing />}/>
    <Route path='/Support' element={<Support />}/>
    <Route path='*' element={<Notfound />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
);

