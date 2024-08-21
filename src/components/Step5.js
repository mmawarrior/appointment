import React from 'react';
import { useNavigate } from 'react-router-dom'; // Gebruik voor navigatie
import './Step5.css'; // Zorg ervoor dat je een bijbehorend CSS-bestand hebt
import { db } from './firebase'; // Importeer de Firestore database
import { doc, setDoc } from 'firebase/firestore'; // Importeer Firestore functies

const Step5 = ({ onNext }) => {
  const [selectedDate, setSelectedDate] = React.useState(null); // State om de geselecteerde datum bij te houden
  const navigate = useNavigate(); // Gebruik useNavigate voor navigatie

  // Functie om de geselecteerde datum bij te houden
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Functie om door te gaan naar de volgende stap
  const handleNext = async () => {
    if (selectedDate) {
      try {
        // Voeg de geselecteerde datum toe aan Firestore
        const appointmentRef = doc(db, "appointments", "your_document_id"); // Gebruik een specifieke ID voor het document
        await setDoc(appointmentRef, { selectedDate: selectedDate }, { merge: true });

        // Ga naar de volgende stap met de geselecteerde datum
        navigate('/step6', { state: { selectedDate } }); // Passeer de geselecteerde datum naar Step6
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Selecteer een datum voordat je doorgaat.");
    }
  };

  // Datumopties voor de gebruiker
  const dates = [
    'dinsdag 25 juni 2024',
    'donderdag 27 juni 2024',
    'vrijdag 28 juni 2024',
  ];

  return (
    <div className="step5-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: '70%' }}></div> {/* 70% voltooid voor deze stap */}
      </div>
      <h2 className="step5-title">5. Wanneer gaan wij het oplossen?</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Terug</button>
      <div className="date-options">
        {dates.map((date) => (
          <div 
            key={date} 
            className={`date-option ${selectedDate === date ? 'selected' : ''}`} 
            onClick={() => handleDateClick(date)}
          >
            <input 
              type="radio" 
              checked={selectedDate === date} 
              readOnly 
            />
            <label>{date}</label>
          </div>
        ))}
      </div>
      <button className="more-dates-button" onClick={() => alert('Meer datums tonen...')}>Meer datums tonen</button>
      <button className="next-button" onClick={handleNext}>Volgende</button> {/* Voeg de "Volgende" knop toe */}
    </div>
  );
};

export default Step5;
