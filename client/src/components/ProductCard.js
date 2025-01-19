// src/components/ProductCard.js
import React from 'react';
import './../css/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="product-button">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
