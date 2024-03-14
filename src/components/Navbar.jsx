import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar({ setToken }) {

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const isLoggedIn = localStorage.getItem('token'); // fix typo here from getItme to getItem
  
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isLoggedIn && (
          <li><Link to="/login">Login</Link></li>
        )}
        {/* Ensure these Links render only when isLoggedIn is true */}
        {isLoggedIn && (
          <>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">My Cart</Link></li>
            <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;