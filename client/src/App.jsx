import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/auth/login/Login";

/* import Header from "./components/LandingPage/headers/headers";
import HeroSection from "./components/LandingPage/heroSection/heroSection";
import Services from "./components/LandingPage/services/services";
import Stylists from "./components/LandingPage/stylist/stylist";
import Location from "./components/LandingPage/location/location";
import Footer from "./components/LandingPage/footer/footer"; */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
