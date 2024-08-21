import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importeer useNavigate voor navigatie
import './Step4.css'; // Vergeet niet je CSS-bestand te importeren
import { db } from './firebase'; // Importeer de Firestore database
import { doc, setDoc } from 'firebase/firestore'; // Importeer de functies voor Firestore

const Step4 = ({ onBack }) => {
  const [description, setDescription] = useState(''); // State om de ingevoerde beschrijving bij te houden
  const navigate = useNavigate(); // Initialiseer useNavigate voor navigatie

  // Functie om naar de volgende stap te gaan en de beschrijving op te slaan
  const handleNext = async () => {
    if (description.trim() !== '') {
      try {
        // Sla de beschrijving op in Firestore
        await setDoc(doc(db, "appointments", "your_document_id"), {
          problemDescription: description,
          timestamp: new Date(),
        });

        navigate('/step5'); // Navigeer naar Step5 als de beschrijving is opgeslagen
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert('Beschrijf alstublieft het probleem.');
    }
  };

  return (
    <div className="step4-container">
      {/* Voortgangsbalk */}
      <div className="progress-bar1">
        <div className="progress" style={{ width: '60%' }}></div> {/* Stel de breedte in op 60% voor stap 4 */}
      </div>
      {/* Titel van de stap */}
      <h2 className="step4-title">AFSPRAAK MAKEN VERSTOPPING</h2>
      {/* Terugknop */}
      <button className="back-button" onClick={() => navigate(-1)}>Terug</button>
      {/* Formulier voor het invoeren van de probleemomschrijving */}
      <div className="form-group">
        <label className="form-label" htmlFor="description">Wat is het probleem?</label>
        <textarea
          id="description"
          className="form-textarea1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Beschrijf hier het probleem dat u ervaart. Bijvoorbeeld: Mijn toilet spoelt niet meer door sinds de hevige regenval van gisteren."
        />
      </div>
      {/* Knop om naar de volgende stap te gaan */}
      <button className="next-button1" onClick={handleNext}>Volgende</button>
    </div>
  );
};

export default Step4;
