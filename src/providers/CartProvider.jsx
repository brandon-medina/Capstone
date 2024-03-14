import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedCartItems = token ? JSON.parse(localStorage.getItem(`cart_${token}`)) || [] : [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.setItem(`cart_${token}`, JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const found = currentItems.find((item) => item.id === product.id);
      if (found) {
        // If product is found, increase its quantity
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it's a new product, add it to the cart
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        // Decrease quantity, but if it's 1, don't decrease (or you can choose to remove it)
        if (item.id === productId) {
          return item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };
  
const calculateTotalPrice = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, calculateTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};