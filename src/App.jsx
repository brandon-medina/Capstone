import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext.jsx"; // Adjust the path as necessary
import Home from "./components/Home"; // Adjust the path as necessary
import ProductList from "./components/ProductList"; // Adjust the path as necessary
import ProductDetail from "./components/ProductDetail"; // Adjust the path as necessary
import MyCart from "./components/MyCart"; // Adjust the path as necessary
import Login from "./components/Login"; // Adjust the path as necessary

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
          <Route path="/products/:productId" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
          <Route path="/my-cart" element={<ProtectedRoute><MyCart /></ProtectedRoute>} />
          {/* Add other routes as necessary */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
