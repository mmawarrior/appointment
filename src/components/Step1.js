import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step1.css';
import { db } from './firebase'; // Importeer Firestore
import { collection, addDoc } from 'firebase/firestore'; // Importeer Firestore functies

const Step1 = () => {
  const [postcode, setPostcode] = useState('');
  const [huisnummer, setHuisnummer] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verzamel de gegevens
    const data = {
      postcode: postcode,
      huisnummer: huisnummer,
    };

    try {
      // Sla de gegevens op in Firestore
      const docRef = await addDoc(collection(db, "appointments"), data);
      console.log("Document written with ID: ", docRef.id);

      // Navigeer naar de volgende stap na het succesvol opslaan
      navigate('/step2');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="step1-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: '20%' }}></div> {/* 20% voltooiing voor stap 1 */}
      </div>
      <h2 className="step1-title">AFSPRAAK MAKEN VERSTOPPING</h2>
      <form onSubmit={handleSubmit} className="step1-form">
        <div className="form-group">
          <label className="form-label">Wat is uw postcode?</label>
          <input
            type="text"
            className="form-input"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            required
            placeholder="Postcode"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Huisnummer</label>
          <input
            type="text"
            className="form-input"
            value={huisnummer}
            onChange={(e) => setHuisnummer(e.target.value)}
            required
            placeholder="Huisnummer"
          />
        </div>
        <button type="submit" className="submit-button">Volgende</button>
      </form>
    </div>
  );
};

export default Step1;
