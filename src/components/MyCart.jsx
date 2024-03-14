import React from 'react';
import { useCart } from '../useCart';
const MyCart = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} style={{ width: '50px', height: 'auto' }} />
            <div>{item.title}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
          </li>
        ))}
      </ul>
      {cartItems.length === 0 && <div>Your cart is empty.</div>}
    </div>
  );
};
export default MyCart;