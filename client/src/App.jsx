import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
/* import Header from "./components/LandingPage/headers/headers";
import HeroSection from "./components/LandingPage/heroSection/heroSection";
import Services from "./components/LandingPage/services/services";
import Stylists from "./components/LandingPage/stylist/stylist";
import Location from "./components/LandingPage/location/location";
import Footer from "./components/LandingPage/footer/footer"; */

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
