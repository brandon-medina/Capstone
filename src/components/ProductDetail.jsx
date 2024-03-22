// In your ProductDetail.jsx or wherever needed
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductDetailQuery } from '../api'; // Adjust the import path as necessary
import { useCart } from '../hooks/useCart';
import '../styles/productdetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const { data: product, error, isLoading } = useGetProductDetailQuery(productId);
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = (product) => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      } else {
        addToCart(product);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        window.dispatchEvent(new CustomEvent('cartUpdated'));
      }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!product) return <div>Product not found.</div>;

    return (
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
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                {showPopup && (
                  <div className="popup-notification">
                    Item added to cart!
                  </div>
                )}
            </div>
        </div>
    );
};
export default ProductDetail;