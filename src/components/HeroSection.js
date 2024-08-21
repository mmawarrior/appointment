import React from 'react';
import './HeroSection.css';
import bgImage from '../assets/images/bg.png'; // Zorg ervoor dat het pad naar de afbeelding correct is

const HeroSection = () => {
  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${bgImage})` }}  // Gebruik de geïmporteerde afbeelding hier
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">We're The Neatest On-Site Plumbing Service</h1>
          <p className="hero-subtitle">
            Onze experts bieden de meest nauwkeurige en efficiënte loodgietersdiensten aan.
          </p>
          <div className="hero-buttons">
            <button className="discover-button">Discover More</button>
            <button className="services-button">Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
