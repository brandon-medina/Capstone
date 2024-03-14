// src/components/MyCart.jsx
import React from 'react';
import { useCart } from '../hooks/useCart';

const MyCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, calculateTotalPrice } = useCart();

  const handleCheckout = () => {
    // Here you will implement actual checkout logic
    alert("Proceeding to Checkout...");
    // For example: navigate('/checkout'); if you have a checkout route/page
  };

  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.title} - ${item.price} x {item.quantity}</h3>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            {/* Add a remove button for each item */}
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotalPrice().toFixed(2)}</h3>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default MyCart;