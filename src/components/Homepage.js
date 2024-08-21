import React from 'react';
import HeroSection from './HeroSection';
import './HomePage.css';
import Contact from './Contact';
import Pricing from './Pricing';  // Zorg ervoor dat je Pricing importeert


const Homepage = () => {
  return (
    <div className="homepage">
       <HeroSection />
      <Pricing />  {/* Voeg de Pricing component toe aan de layout */}
      <Contact />
    </div>
  );
};

export default Homepage;
