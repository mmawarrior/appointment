import React, { useState } from 'react';
import './Navbar.css'; // Voeg je stijlen hier toe
import { useNavigate } from 'react-router-dom'; // Importeer useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialiseer useNavigate
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle

  const handleBookServiceClick = () => {
    navigate('/step1'); // Navigeer naar de Step1 pagina
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-details">
          <span className="location"><i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA</span>
          <span className="email"><i className="fas fa-envelope"></i> info@example.com</span>
        </div>
        <div className="emergency-and-service">
          <span className="emergency-text">Emergency 24/7</span>
          <button className="book-service-btn" onClick={handleBookServiceClick}>Book a service</button>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">RRS</a>
        </div>
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#pages">Pages</a></li>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
