// src/components/Features.js
import React from 'react';
import FeatureCard from './FeatureCard';
import './../css/Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="feature-cards">
        <FeatureCard title="Wide Selection" description="Browse through a wide variety of clothes from different sellers." />
        <FeatureCard title="Secure Transactions" description="We ensure secure payment and delivery for all your transactions." />
        <FeatureCard title="Easy Selling" description="Sell your clothes easily with just a few clicks and reach thousands of buyers." />
      </div>
    </section>
  );
};

export default Features;
