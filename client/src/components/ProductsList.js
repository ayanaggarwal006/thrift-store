// src/components/ProductsList.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './../css/ProductsList.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data.products); // Adjust based on your API response structure
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-list-container">
      <h2>Products</h2>
      {error && <p className="error-message">Failed to load products: {error}</p>}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
