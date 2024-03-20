import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../api';
import '../styles/login.css';

function Login({ setToken }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser] = useLoginUserMutation(); 
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await loginUser({ username, password }).unwrap();
            localStorage.setItem('token', response.token);
            setToken(response.token);
    
            // Retrieve generic cart items
            const genericCartItems = JSON.parse(localStorage.getItem('cart_generic') || '[]');
    
            // Check if there are generic cart items to be migrated
            if (genericCartItems.length > 0) {
              // Create or overwrite the user-specific cart with generic cart items
              localStorage.setItem(`cart_${response.token}`, JSON.stringify(genericCartItems));
              // Optionally, clear the generic cart
              // localStorage.removeItem('cart_generic');
            }
    
            navigate('/'); // Navigate to the homepage or dashboard as desired
          } catch (error) {
            console.error('Failed to log in:', error);
          }

        setIsLoading(false);


    };


    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
    
};


export default Login;