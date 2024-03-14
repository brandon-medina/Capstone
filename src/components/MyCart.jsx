// src/components/MyCart.jsx
import React from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
// import "../styles/mycart.css"

const MyCart = () => {
  const navigate = useNavigate();
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, calculateTotalPrice } = useCart();

  const handleCheckout = () => {
    navigate('/billing-info');
  };

  return (
    <div className="shopping-cart">
      <h2 className="cart-title">My Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="item">
            <img src={item.image} alt={item.title} className="image" />
            <h3 className="item-name">{item.title}</h3>
            <button className="minus-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
            <p className="quantity">{item.quantity}</p>
            <button className="plus-btn" onClick={() => increaseQuantity(item.id)}>+</button>
            <button className="delete-btn"onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            <p className="item-price">${item.price}</p>
          </li>
        ))}
      </ul>
      <h3 className="total-price">Total: ${calculateTotalPrice().toFixed(2)}</h3>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default MyCart;