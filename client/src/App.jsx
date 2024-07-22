



import React from 'react';
import './App.css';
import { Header, HeroSection, Services, Stylists, Location, Footer } from './components/landing/landing.jsx';
    



function App() {
     Header()
     HeroSection()
     Services()
     Stylists()
     Location()
     Footer()
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
