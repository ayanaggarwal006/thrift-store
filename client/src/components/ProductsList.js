import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './../css/ProductsList.css';

const ProductsList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/category'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setCategories(data); // Adjusted to handle the array response
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="products-list-container">
      <h2>Categories</h2>
      {error && <p className="error-message">Failed to load categories: {error}</p>}
      <div className="products-grid">
        {categories.map((category) => (
          <ProductCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
