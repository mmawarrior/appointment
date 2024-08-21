import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importeer useNavigate voor navigatie
import { FaToilet, FaSink, FaShower, FaBath, FaFaucet, FaTshirt, FaUtensils } from 'react-icons/fa';
import './Step3.css'; // Vergeet niet om een apart CSS-bestand te maken voor de stijlen
import { db } from './firebase'; // Importeer de Firestore database
import { doc, setDoc } from 'firebase/firestore'; // Importeer de functies voor Firestore

const Step3 = ({ onBack }) => {
  const [selectedOptions, setSelectedOptions] = useState([]); // State om geselecteerde opties bij te houden
  const navigate = useNavigate(); // Gebruik useNavigate voor navigatie

  // Functie om een optie te selecteren of deselecteren
  const handleSelection = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  // Functie om naar de volgende stap te gaan en geselecteerde opties op te slaan
  const handleNext = async () => {
    if (selectedOptions.length > 0) {
      try {
        // Sla de geselecteerde opties op in Firestore
        await setDoc(doc(db, "appointments", "your_document_id"), {
          blockageLocations: selectedOptions,
          timestamp: new Date(),
        });

        navigate('/step4'); // Navigeer naar Step4 als er opties zijn geselecteerd
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert('Selecteer minimaal één optie.');
    }
  };

  return (
    <div className="step3-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: '50%' }}></div> {/* 50% voltooiing voor deze stap */}
      </div>
      <h2 className="step3-title">AFSPRAAK MAKEN VERSTOPPING</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Terug</button>

      <div className="step3-content">
        <h3 className="step3-subtitle">Waar zit de verstopping?</h3>
        <div className="option-container">
          {/* Knoppen voor elke optie */}
          <button
            className={`option-button ${selectedOptions.includes('toilet') ? 'selected' : ''}`}
            onClick={() => handleSelection('toilet')}
          >
            <FaToilet size={40} />
            <p>Toilet</p>
          </button>
          <button
            className={`option-button ${selectedOptions.includes('keuken gootsteen') ? 'selected' : ''}`}
            onClick={() => handleSelection('keuken gootsteen')}
          >
            <FaUtensils size={40} />
            <p>Keuken Gootsteen</p>
          </button>
          <button
            className={`option-button ${selectedOptions.includes('douche') ? 'selected' : ''}`}
            onClick={() => handleSelection('douche')}
          >
            <FaShower size={40} />
            <p>Douche</p>
          </button>
          <button
            className={`option-button ${selectedOptions.includes('bad') ? 'selected' : ''}`}
            onClick={() => handleSelection('bad')}
          >
            <FaBath size={40} />
            <p>Bad</p>
          </button>
          <button
            className={`option-button ${selectedOptions.includes('wastafel') ? 'selected' : ''}`}
            onClick={() => handleSelection('wastafel')}
          >
            <FaSink size={40} />
            <p>Wastafel</p>
          </button>
          <button
            className={`option-button ${selectedOptions.includes('fonteintje') ? 'selected' : ''}`}
            onClick={() => handleSelection('fonteintje')}
          >
            <FaFaucet size={40} />
            <p>Fonteintje</p>
          </button>
          <button
            className={`option-button ${selectedOptions.includes('vaatwasmachine') ? 'selected' : ''}`}
            onClick={() => handleSelection('vaatwasmachine')}
          >
            <FaUtensils size={40} />
            <p>Vaatwasmachine</p>
          </button>
          <button
            className={`option-button ${selectedOptions.includes('wasmachine') ? 'selected' : ''}`}
            onClick={() => handleSelection('wasmachine')}
          >
            <FaTshirt size={40} />
            <p>Wasmachine</p>
          </button>
        </div>
        <button className="next-button" onClick={handleNext}>Volgende</button>
      </div>
    </div>
  );
};

export default Step3;
