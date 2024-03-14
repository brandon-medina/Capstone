import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home"; // Adjust the path as necessary
import ProductList from "./components/ProductList"; // Adjust the path as necessary
import ProductDetail from "./components/ProductDetail"; // Adjust the path as necessary
import MyCart from "./components/MyCart"; // Adjust the path as necessary
import Login from "./components/Login"; // Adjust the path as necessary

function App() {
  const [token, setToken] = useState(null);

  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };
  
  return (
    <Router>
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
