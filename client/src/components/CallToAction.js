// src/components/CallToAction.js
import React from 'react';
import './../css/CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-buttons">
      <button className="cta-button buy-button">Shop Now</button>
      <button className="cta-button sell-button">Sell Your Clothes</button>
    </div>
  );
};

export default CallToAction;
