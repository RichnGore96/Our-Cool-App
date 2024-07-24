import React from "react";

import Header from "../LandingPage/header/headers";
import HeroSection from "./heroSection/heroSection";
import Services from "../LandingPage/services/services";
import Stylists from "./stylist/stylist";
import Location from "./location/location";
import Footer from "./footer/footer";

function Landing() {
  return (
    <>
      <div className="App">
        <Header />
        <HeroSection />
        <Services />
        <Stylists />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
