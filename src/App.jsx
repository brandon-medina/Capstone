import {BrowserRouter, Routes, Route} from 'react-router-dom'
//styles
import './App.css';
//components
import Home from './components/Home'
import Login from './components/Login'
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
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App
