import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Voeg useLocation toe voor het ophalen van doorgestuurde gegevens
import './Step6.css'; // Vergeet niet om je CSS-bestand aan te passen voor de nieuwe stijlen
import { db } from './firebase'; // Importeer de Firestore database
import { doc, setDoc } from 'firebase/firestore'; // Importeer Firestore functies

const Step6 = () => {
  const [selectedTime, setSelectedTime] = React.useState(null); // Houd de geselecteerde tijd bij
  const navigate = useNavigate(); // Gebruik de navigate hook voor navigatie
  const location = useLocation(); // Gebruik useLocation om de doorgestuurde state op te halen
  const { selectedDate } = location.state || {}; // Haal de geselecteerde datum op uit de doorgestuurde state

  // Functie om de geselecteerde tijd bij te houden
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // Functie om naar de volgende stap te gaan
  const handleNext = async () => {
    if (selectedTime && selectedDate) {
      try {
        // Voeg de geselecteerde tijd toe aan Firestore onder dezelfde document_id
        const appointmentRef = doc(db, "appointments", "your_document_id");
        await setDoc(appointmentRef, { selectedTime: selectedTime }, { merge: true });

        // Ga naar Step7
        navigate('/step7');
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Selecteer een tijd en datum voordat je doorgaat.");
    }
  };

  const times = [
    '14:00 - 16:00',
    '14:30 - 16:30',
    '15:00 - 17:00',
  ];

  return (
    <div className="step6-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: '85%' }}></div> {/* 85% voor deze stap */}
      </div>
      <h2 className="step6-title">Hoe laat op {selectedDate}?</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Terug</button>

      <div className="time-options">
        {times.map((time) => (
          <div 
            key={time} 
            className={`time-option ${selectedTime === time ? 'selected' : ''}`} 
            onClick={() => handleTimeClick(time)}
          >
            <input 
              type="radio" 
              checked={selectedTime === time} 
              readOnly 
            />
            <label>{time}</label>
          </div>
        ))}
      </div>
      <div className="step6-buttons">
         <button className="next-button" onClick={handleNext}>Volgende</button>
      </div>
    </div>
  );
};

export default Step6;
