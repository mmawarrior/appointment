import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step8.css';
import mascotImage from '../assets/images/mario.png'; // Zorg ervoor dat het pad correct is

const Step8 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Navigeer naar de homepagina
  };

  return (
    <div className="step8-container">
      <div className="completion-icon">
        <img src={mascotImage} alt="Mascot" className="mascot-image" />  {/* Gebruik de geïmporteerde afbeelding hier */}
      </div>
      <h2 className="step8-title">Afspraak voltooid</h2>
      <p className="step8-message">Uw afspraak is succesvol ingepland!</p>
      <button className="home-button" onClick={handleGoHome}>
        Terug naar Home
      </button>
    </div>
  );
};

export default Step8;
