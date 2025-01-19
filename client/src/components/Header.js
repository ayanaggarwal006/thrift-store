import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../css/Header.css';

const Header = () => {
  const navigate = useNavigate();

  // Navigate to the Signup page
  const handleSignUpClick = () => {
    navigate('/signup');
  };

  // Navigate to the Login page
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="landing-header">
      <nav className="navbar">
        <h1 className="logo">Fashion Marketplace</h1>
        <div className="auth-links">
          <button className="auth-button" onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button className="auth-button" onClick={handleLoginClick}>
            Log In
          </button>
        </div>
      </nav>
      <div className="header-content">
        <h2>Welcome to the Fashion Marketplace</h2>
        <p>Your one-stop platform to buy and sell clothes</p>
        <div className="cta-buttons">
          <button className="cta-button buy-button">Shop Now</button>
          <button className="cta-button sell-button">Sell Your Clothes</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
