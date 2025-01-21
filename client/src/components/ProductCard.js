import React from 'react';
import './../css/ProductCard.css';

const ProductCard = ({ category }) => {
  return (
    <div className="product-card">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{category.name}</h3>
        <p className="product-id">Category ID: {category.id}</p>
        <button className="product-button">View Products</button>
      </div>
    </div>
  );
};

export default ProductCard;
