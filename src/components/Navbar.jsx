import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cartLogo from '../assets/img/cart_logo.png';
import '../styles/navbar.css'
function Navbar({ setToken }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const updateCartCount = () => {
    const currentUserCartKey = `cart_${localStorage.getItem('token')}`;
    const currentUserCartItems = JSON.parse(localStorage.getItem(currentUserCartKey)) || [];
    setCartCount(currentUserCartItems.length); // Update cart count based on items
  };
  useEffect(() => {
    updateCartCount(); // Initial load/update from localStorage
  }, [location]); // Re-run when location changes
  useEffect(() => {
    // Listen for cart updates
    window.addEventListener('cartUpdated', updateCartCount);
    // Cleanup listener
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);
  const handleLogout = () => {
    const currentUserCartKey = `cart_${localStorage.getItem('token')}`;
    const currentUserCartItems = JSON.parse(localStorage.getItem(currentUserCartKey)) || [];
    if (currentUserCartItems.length > 0) {
      localStorage.setItem('cart_generic', JSON.stringify(currentUserCartItems));
    }
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
  };
  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}><button onClick={() => navigate('/')}>Home</button></li>
        <li className={location.pathname.startsWith('/products') ? 'active' : ''}><button onClick={() => navigate('/products')}>Products</button></li>
        {!isLoggedIn && (
          <li className={location.pathname === '/login' ? 'active' : ''}><button onClick={() => navigate('/login')}>Login</button></li>
        )}
        {isLoggedIn && (
          <>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
        {isLoggedIn && (
          <ul className="nav-cart">
            <li className={location.pathname === '/cart' ? 'active' : ''}>
              <button onClick={() => navigate('/cart')}>
                <img src={cartLogo} alt="Cart" />
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </button>
            </li>
          </ul>
        )}
    </nav>
  );
}
export default Navbar;