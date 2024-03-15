// src/components/ProductList.jsx
import React, { useState, useMemo } from 'react';
import { useGetProductsQuery } from '../api';
import RatingStars from './RatingStars'
import { Link } from 'react-router-dom';
import '../styles/productList.css';


const ProductList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [sortKey, setSortKey] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const processedProducts = useMemo(() => {
    let result = products;

    if (filterCategory) {
      result = result?.filter(product => product.category === filterCategory);
    }

    if (sortKey) {
      result = [...result].sort((a, b) => {
        if (sortKey === 'priceLowHigh') {
          return a.price - b.price;
        } else if (sortKey === 'priceHighLow') {
          return b.price - a.price;
        } else if (sortKey === 'title') {
          return a.title.localeCompare(b.title);
        } else if (sortKey === 'rating') {
          return b.rating.rate - a.rating.rate;
        }
        return 0;
      });
    }

    return result;
  }, [products, sortKey, filterCategory]);

  const shortenName = (name, maxLength = 30) => {
    return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Products</h1>
      {/* Add the sort-filter-container here */}
      <div className="sort-filter-container">
        {/* filter-section for category filtering */}
        <div className="filter-section">
          <label htmlFor="filterCategory">Filter by category:</label>
          <select
            id="filterCategory"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Default</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        {/* sort-section for product sorting */}
        <div className="sort-section">
          <label>Sort by: </label>
          <select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
            <option value="">Default</option>
            <option value="title">Title</option>
            <option value="priceLowHigh">Price Low to High</option>
            <option value="priceHighLow">Price High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {processedProducts &&
            processedProducts.map(product => (
              <div key={product.id} className="product-card">
                <Link to= {`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <h5>{shortenName(product.title)}</h5>
                  <p>${product.price}</p>
                  <div>
                    <RatingStars rating={product.rating.rate} />
                    <span> ({product.rating.count} reviews)</span>
                  </div>
                </div>
                </Link>
              </div>
            ))}
        </div>
    </div>
  );
}

export default ProductList;