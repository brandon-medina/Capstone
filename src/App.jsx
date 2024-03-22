import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import MyCart from "./components/MyCart";
import Login from "./components/Login";
import BillingInfo from "./components/BillingInfo";
import CartProvider from "./providers/CartProvider";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };
  
  return (
    <CartProvider token={token}>
      <Router>
        <Navbar setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          {/* Applying ProtectedRoute component for routes that require authentication */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<ProtectedRoute><MyCart /></ProtectedRoute>} />
          <Route path="/billing-info" element={<ProtectedRoute><BillingInfo /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CartProvider> 
  );
  }
  export default App;