// src/components/LandingPage.js
import React from 'react';
import Header from './Header';
import Features from './Features';
import Footer from './Footer';
import ProductsList from './ProductsList';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <ProductsList />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
