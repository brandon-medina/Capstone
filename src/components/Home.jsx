import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../api'; // Adjust based on your actual API hooks
import capstoneLogo from '../assets/img/capstone_logo.jpg';
import '../styles/home.css'

function Home() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  
  // Assuming the API returns an array of products, we'll take the first 4 for our featured section
  const featuredProducts = products?.slice(0, 4);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="home-container">
      <div className="brand-section">
        <img src={capstoneLogo} alt="Capstone Logo" className="brand-logo" />
        <h1>Capstone Co.</h1>
      </div>
      <div className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Products</h1>
          <p>Find everything you need to make your life better.</p>
          <Link to="/products" className="hero-cta">Shop Now</Link>
        </div>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        {isLoading && <p>Loading products...</p>}
        {error && <p>An error occurred</p>}
        <div className="featured-grid">
          {featuredProducts?.map(product => (
            <div key={product.id} className="featured-item">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
export default Home;