import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import Step7 from './components/Step7';
import Step8 from './components/Step8';
import Homepage from './components/Homepage';  
import './components/HomePage.css';
import { db } from './components/firebase'; // Importeer Firestore
import { collection, addDoc } from 'firebase/firestore'; // Importeer Firestore functies

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    postcode: '',
    huisnummer: '',
    problem: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFinish = async () => {
    try {
      const docRef = await addDoc(collection(db, "appointments"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert('Appointment saved successfully!');
    } catch (error) {
      console.error('Error saving appointment: ', error);
    } finally {
      setStep(step + 1);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage onStart={() => setStep(1)} />} />
          <Route path="/step1" element={<Step1 onNext={handleNextStep} />} />
          <Route path="/step2" element={<Step2 onNext={handleNextStep} onBack={handlePreviousStep} />} />
          <Route path="/step3" element={<Step3 onNext={handleNext} onBack={handleBack} />} />
          <Route path="/step4" element={<Step4 onNext={handleNext} onBack={handleBack} />} />
          <Route path="/step5" element={<Step5 onNext={handleNext} onBack={handleBack} />} />
          <Route path="/step6" element={<Step6 onNext={handleNext} onBack={handleBack} />} />
          <Route path="/step7" element={<Step7 onNext={handleNext} onBack={handleBack} />} />
          <Route path="/step8" element={<Step8 onFinish={handleFinish} />} /> {/* Aanpassing hier */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
