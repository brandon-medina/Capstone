import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar({ setToken }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    // Retrieve the current user's cart items.
  const currentUserCartKey = `cart_${localStorage.getItem('token')}`;
  const currentUserCartItems = JSON.parse(localStorage.getItem(currentUserCartKey)) || [];
  
  // Check if there are items to migrate.
  if (currentUserCartItems.length > 0) {
    // Optionally, merge with existing 'cart_generic' items or simply replace them.
    localStorage.setItem('cart_generic', JSON.stringify(currentUserCartItems));
  }
  // Proceed with logout.
  localStorage.removeItem('token');
  setToken(null);
  navigate('/');
};

  const isLoggedIn = localStorage.getItem('token');
  
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}><button onClick={() => navigate('/')}>Home</button></li>
        {!isLoggedIn && (
          <li className={location.pathname === '/login' ? 'active' : ''}><button onClick={() => navigate('/login')}>Login</button></li>
        )}
        {isLoggedIn && (
          <>
            <li className={location.pathname.startsWith('/products') ? 'active' : ''}><button onClick={() => navigate('/products')}>Products</button></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
      {isLoggedIn && (
        <ul className="nav-cart">
          <li className={location.pathname === '/cart' ? 'active' : ''}><button onClick={() => navigate('/cart')}>My Cart</button></li>
        </ul>
      )}
    </nav>
 );
}

export default Navbar;