// src/components/FeatureCard.js
import React from 'react';
import './../css/FeatureCard.css';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
