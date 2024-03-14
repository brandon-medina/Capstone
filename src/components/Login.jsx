import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../api';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser] = useLoginUserMutation();

  // const [token, setToken] = useState(localStorage.getItem('token') || '');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ username, password }).unwrap();
          // Here, we set the token in localStorage directly upon successful login
              localStorage.setItem('token', response.token);
              // Optionally set the token state if managing it locally
              // setToken(response.token);
              navigate('/'); // Navigate to homepage or dashboard as desired
            } catch (error) {
              console.error('Failed to log in:', error);
              // Handle login error here
            }
          };

    return (
        <div>
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
              <button type="submit" disabled={isLoading}>Login</button>
              </form>
            </div>
    );
};

export default Login;