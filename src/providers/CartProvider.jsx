// src/providers/CartProvider.jsx

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children, token }) => {
const [cartItems, setCartItems] = useState([]);
const storageKey = token ? `cart_${token}` : 'cart_generic';
  useEffect(() => {
    const initCartOnRefresh = () => {
      if (!token) {
        const genericCartItems = JSON.parse(localStorage.getItem('cart_generic') || '[]');
        if (genericCartItems.length > 0) {
          setCartItems(genericCartItems);
        }
      }
    };
    initCartOnRefresh();
  }, [token]);
  
  useEffect(() => {
  const storedCartItems = JSON.parse(localStorage.getItem(storageKey)) || [];
  setCartItems(storedCartItems);
}, [storageKey]);

  useEffect(() => {
    // const token = localStorage.getItem('token');
      localStorage.setItem(storageKey, JSON.stringify(cartItems));
  }, [cartItems, storageKey]);

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

export default CartProvider;