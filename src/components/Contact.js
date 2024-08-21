import React from 'react';
import './Contact.css'; // Stijlen voor de contactsectie

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-form1">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <label className="terms-checkbox">
            <input type="checkbox" required /> I accept the Terms of Service
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-details1">
        <h3>Call Us</h3>
        <p>1 (234) 567-891</p>
        <h3>Location</h3>
        <p>121 Rock Street, 21 Avenue, New York, NY 92103</p>
        <h3>Our Top Services</h3>
        <ul>
          <li>Local Transfers</li>
          <li>Airport Transfers</li>
          <li>Excursions and Tours</li>
        </ul>
      </div>
      <div className="contact-map">
      <iframe
  title="Google Maps Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9387178355854!2d-73.9790185845933!3d40.71272897932954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3173af8a4b%3A0x83b2a6f6a6da4e47!2s121%20Rock%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1635091833315!5m2!1sen!2s"
  allowFullScreen=""
  loading="lazy"
></iframe>

      </div>
    </div>
  );
};

export default Contact;
