// In your ProductDetail.jsx or wherever needed
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductDetailQuery } from '../api'; // Adjust the import path as necessary
const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetProductDetailQuery(productId);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found.</div>;
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '200px' }} />
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
};
export default ProductDetail;