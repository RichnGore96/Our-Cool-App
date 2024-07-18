<<<<<<< HEAD
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import { useEffect, useState } from "react";
=======
import React from 'react';
import './App.css';
import Header from './components/LandingPage/headers/headers';
import HeroSection from './components/LandingPage/heroSection/heroSection';
import Services from './components/LandingPage/services/services';
import Stylists from './components/LandingPage/stylist/stylist';
import Location from './components/LandingPage/location/location';
import Footer from './components/LandingPage/footer/footer';
>>>>>>> 0607cb69083c223b60431a4121a261873100e22f

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/login" element={<Auth />}></Route>
      </Routes>
=======
      <Header />
      <HeroSection />
      <Services />
      <Stylists />
      <Location />
      <Footer />
>>>>>>> 0607cb69083c223b60431a4121a261873100e22f
    </div>
  );
}

export default App;












/*import React from 'react';
import './App.css'
import Header from './components/headers/Headers'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
*/