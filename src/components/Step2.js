import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importeer useNavigate voor navigatie tussen routes
import { FaToilet, FaTint, FaVideo, FaDumpster } from 'react-icons/fa'; // Importeer iconen voor visuele representatie
import './Step2.css'; // Vergeet niet het CSS-bestand toe te voegen voor styling

const Step2 = () => {  // Dit component is verantwoordelijk voor het selecteren van het probleemtype
  const [selectedOption, setSelectedOption] = useState(''); // State voor het bijhouden van de geselecteerde optie
  const navigate = useNavigate();  // Initialiseer useNavigate voor het navigeren naar andere stappen

  // Functie voor het selecteren van een probleemoptie
  const handleProblemSelection = (problem) => {
    setSelectedOption(problem);
  };

  // Functie om naar de volgende stap te gaan als een optie is geselecteerd
  const handleNext = () => {
    if (selectedOption) {
      navigate('/step3');  // Navigeer naar Step3 als een optie is geselecteerd
    }
  };

  return (
    <div className="step2-container">
      {/* Voortgangsbalk */}
      <div className="progress-bar">
        <div className="progress" style={{ width: '30%' }}></div> {/* 30% voltooiing voor deze stap */}
      </div>
      
      {/* Titel van de stap */}
      <h2 className="step2-title">AFSPRAAK MAKEN VERSTOPPING</h2>
      
      {/* Terugknop om naar de vorige stap te gaan */}
      <div className="step2-back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>Terug</button>
      </div>
      
      {/* Inhoud van de stap, inclusief probleemopties */}
      <div className="step2-content">
        <h3 className="step2-subtitle">Wat is het probleem?</h3>
        <div className="option-container">
          {/* Optieknoppen met visuele iconen en tekst */}
          <button
            className={`option-button ${selectedOption === 'verstopping' ? 'selected' : ''}`}
            onClick={() => handleProblemSelection('verstopping')}
          >
            <FaToilet size={30} /> {/* Icon voor verstopping */}
            <p>Verstopping</p>
          </button>
          <button
            className={`option-button ${selectedOption === 'stank-of wateroverlast' ? 'selected' : ''}`}
            onClick={() => handleProblemSelection('stank-of wateroverlast')}
          >
            <FaTint size={30} /> {/* Icon voor stank- of wateroverlast */}
            <p>Stank- of wateroverlast</p>
          </button>
          <button
            className={`option-button ${selectedOption === 'camera-of rook inspectie' ? 'selected' : ''}`}
            onClick={() => handleProblemSelection('camera-of rook inspectie')}
          >
            <FaVideo size={30} /> {/* Icon voor camera- of rookinspectie */}
            <p>Camera- of rook inspectie</p>
          </button>
          <button
            className={`option-button ${selectedOption === 'vetafscheiders ledigen' ? 'selected' : ''}`}
            onClick={() => handleProblemSelection('vetafscheiders ledigen')}
          >
            <FaDumpster size={30} /> {/* Icon voor vetafscheiders ledigen */}
            <p>Vetafscheiders ledigen</p>
          </button>
        </div>

        {/* Knop om naar de volgende stap te gaan, alleen zichtbaar als een optie is geselecteerd */}
        {selectedOption && (
          <button className="next-button" onClick={handleNext}>Volgende</button>
        )}
      </div>
    </div>
  );
};

export default Step2;
