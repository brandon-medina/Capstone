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
            console.log(response);
            localStorage.setItem('token', response.token); // Store token
            setToken(response.token);
            navigate('/'); // Navigate to the homepage or dashboard as desired
            console.log('Login response token:', response.token);
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