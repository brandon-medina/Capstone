import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import MyCart from "./components/MyCart";
import "./App.css"

function App() {
  const [token, setToken] = useState(null);
  
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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route path="/products" element={
          <ProtectedRoute>
            <ProductList token={token}/>
          </ProtectedRoute>
        } />
        <Route path="/products/:productId" element={
          <ProtectedRoute>
            <ProductDetail token={token}/>
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute>
            <MyCart token={token}/>
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
};

export default App;
