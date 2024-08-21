import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Gebruik voor navigatie
import './Step7.css'; // Zorg ervoor dat je een bijbehorend CSS-bestand hebt
import { db } from './firebase'; // Importeer de Firestore database
import { doc, setDoc } from 'firebase/firestore'; // Importeer Firestore functies

const Step7 = () => {
  // State voor het bijhouden van formuliergegevens
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const navigate = useNavigate(); // Initialiseer useNavigate voor navigatie

  // Functie om formulierwijzigingen bij te houden
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Functie die wordt uitgevoerd bij het voltooien van het formulier
  const handleFinishClick = async () => {
    if (formData.name && formData.email && formData.phone) {
      try {
        // Verwijs naar het specifieke document waar je de gegevens wilt opslaan
        const appointmentRef = doc(db, "appointments", "your_document_id");

        // Sla de ingevulde gegevens op in Firestore
        await setDoc(appointmentRef, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }, { merge: true }); // Gebruik merge om alleen de nieuwe velden bij te werken

        // Navigeer naar Step8 wanneer alles is ingevuld en opgeslagen
        navigate('/step8');
      } catch (e) {
        console.error("Error adding document: ", e);
        alert('Er is een fout opgetreden bij het opslaan van uw gegevens. Probeer het opnieuw.');
      }
    } else {
      alert('Vul alstublieft alle verplichte velden in.');
    }
  };

  return (
    <div className="step7-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: '100%' }}></div> {/* Zet op 100% voor deze stap */}
      </div>
      <h2 className="step7-title">6. Wat zijn uw gegevens?</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Terug</button>
      
      {/* Formulier voor gebruikersgegevens */}
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Voor en achternaam"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="E-mailadres"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Telefoonnummer"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Opmerking voor de monteur (optioneel)"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
        />
      </div>

      {/* Voltooien knop */}
      <div className="step7-buttons">
        <button className="finish-button" onClick={handleFinishClick}>Voltooien</button>
      </div>
    </div>
  );
};

export default Step7;
