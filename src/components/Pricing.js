import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-card">
        <h3>Basic Plan</h3>
        <p className="price">$49/month</p>
        <ul>
          <li>24/7 Support</li>
          <li>Access to all features</li>
          <li>Free updates</li>
        </ul>
        <button>Select Plan</button>
      </div>
      <div className="pricing-card">
        <h3>Standard Plan</h3>
        <p className="price">$99/month</p>
        <ul>
          <li>All features in Basic</li>
          <li>Priority Support</li>
          <li>Extended Usage</li>
        </ul>
        <button>Select Plan</button>
      </div>
      <div className="pricing-card">
        <h3>Premium Plan</h3>
        <p className="price">$199/month</p>
        <ul>
          <li>All features in Standard</li>
          <li>Dedicated Account Manager</li>
          <li>Custom Solutions</li>
        </ul>
        <button>Select Plan</button>
      </div>
    </div>
  );
};

export default Pricing;
