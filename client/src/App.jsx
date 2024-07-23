<<<<<<< HEAD


import React from 'react';
import './App.css';
import Header from './components/landing/headers';
import HeroSection from './components/landing/heroSection';
import Services from './components/landing/services';
import Stylists from './components/landing/stylist';
import Location from './components/landing/location';
import Footer from './components/landing/footer';
import { useNavigate } from "react-router-dom";

    


=======
import React from "react";
import "./App.css";
import Landing from "./components/LandingPage/Landing";
import { Route, Routes } from "react-router-dom";
/* import Header from './components/LandingPage/headers/headers';
import HeroSection from './components/LandingPage/heroSection/heroSection';
import Services from './components/LandingPage/services/services';
import Stylists from './components/LandingPage/stylist/stylist';
import Location from './components/LandingPage/location/location';
import Footer from './components/LandingPage/footer/footer';
 */
>>>>>>> c5eb1d94fd2bb22a462d03dec614c0f06f2a399a

function App() {
     
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
