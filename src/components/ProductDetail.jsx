import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductDetailQuery } from '../api';
import { useCart } from '../hooks/useCart';
import '../styles/productdetail.css'

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetProductDetailQuery(productId);
  const { addToCart } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <h1> Product Details </h1>
      <div className="product-detail">
        <img src={product.image} alt={product.title} />
        <div className="detail-actions">
          {/* Product Name */}
          <h2>{product.title}</h2>
          {/* Product Rating */}
          <p className="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
          {/* Product Price */}
          <p className="product-price">Price: ${product.price}</p>
          {/* Product Description */}
          <p className="product-description">{product.description}</p>
          {/* 'Add to Cart' Button */}
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;