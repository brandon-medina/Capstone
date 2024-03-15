// src/components/MyCart.jsx
import React from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import '../styles/mycart.css'; // Ensure CSS is imported

const MyCart = () => {
  const navigate = useNavigate();
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, calculateTotalPrice } = useCart();

  const handleCheckout = () => {
    navigate('/billing-info');
  };

  const shortenName = (name, maxLength = 20) => {
    return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
  };

  return (
    <div className="shopping-cart">
      <div className="title">My Cart</div>
      {cartItems.map((item) => (
        <div className="item" key={item.id}>
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="description">
            <span>{shortenName(item.title)}</span>
          </div>
          <div className="quantity">
            <button className="minus-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button className="plus-btn" onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <div className="item-price">${item.price}</div>
          <div className="remove-button">
              <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
      ))}
      <div className="checkout">
        <div className="total">Total: <strong>${calculateTotalPrice().toFixed(2)}</strong></div>
        <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default MyCart;