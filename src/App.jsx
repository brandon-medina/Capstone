import {BrowserRouter, Routes, Route} from 'react-router-dom'
//styles
import './App.css';
//components
import Home from './components/Home'
import Login from './components/Login'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import { CartProvider } from './components/CartContext'
import { useState } from 'react';



function App() {
  const [token, setToken] = useState(null);

  console.log("token", token)
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login token={token} />} />
        <Route path="/products" element={<ProductList token={'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsI…gyNX0.p_hQG9Ty5Bh_G-8_oIz8wVS0OvioxFFIfOiQnkWKByg'} />} />
        <CartProvider>
          <Route path="/products/:productID" element={<ProductDetail token={token} />} />
        </CartProvider>
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App
