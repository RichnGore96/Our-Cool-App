import React from 'react'
import Header from './LandingPage/headers/headers';
import HeroSection from './LandingPage/heroSection/heroSection';
import Services from './LandingPage/services/services';
import Stylists from './LandingPage/stylist/stylist';
import Location from './LandingPage/location/location';
import Footer from './LandingPage/footer/footer';


function Landing() {
  return (
  <>

  <Header />
  <HeroSection />
  <Services />
  <Stylists />
  <Location />
  <Footer />

  </>
  )
}

export default Landing