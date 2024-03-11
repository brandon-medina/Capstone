import {BrowserRouter, Routes, Route} from 'react-router-dom'
//styles
import './App.css';
//components
import Home from './components/Home'
import Login from './components/Login'
import ProductList from './components/ProductList'
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
        <Route path="/products" element={<ProductList token={'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsI…Q5NH0.B6oeYZFtENKGX-Zu6qgEMycz0huhz3DQwrmUn5iF2jQ'} />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App
