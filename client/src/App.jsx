

import React from 'react';
import './App.css';
import Header from './components/landing/headers';
import HeroSection from './components/landing/heroSection';
import Services from './components/landing/services';
import Stylists from './components/landing/stylist';
import Location from './components/landing/location';
import Footer from './components/landing/footer';
import { useNavigate } from "react-router-dom";

    



function App() {
     
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Stylists />
      <Location />
      <Footer />

    </div> 
  );  
}

export default App;
