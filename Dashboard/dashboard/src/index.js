import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from '../src/public/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>    
      <Route path="/*" element={<Home/>} />
  </Routes>

  // </BrowserRouter>
);


