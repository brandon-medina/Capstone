// src/components/ProductList.jsx
import React, { useState, useMemo } from 'react';
import { useGetProductsQuery } from '../api';
import '../styles/productList.css';
import RatingStars from './RatingStars'

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

  const shortenName = (name, maxLength = 40) => {
    return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Products</h2>
      <div>
        Sort by: 
        <select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
          <option value="">Default</option>
          <option value="title">Title</option>
          <option value="priceLowHigh">Price Low to High</option>
          <option value="priceHighLow">Price High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div>
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
          // Add more categories as needed
        </select>
      </div>
      <div className="product-grid">
        {processedProducts &&
            processedProducts.map(product => (
              <div key={product.id} className="product-card">
                <link to= {`ProductDetail`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <h5>{shortenName(product.title)}</h5>
                  <p>${product.price}</p>
                  <p><RatingStars rating={product.rating.rate} /></p>
                </div>
                </link>
              </div>
            ))}
        </div>
    </div>
  );
}

export default ProductList;