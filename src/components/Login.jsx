import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection after login
import { useLoginUserMutation } from '../api';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginUser] = useLoginUserMutation(); // Using the loginUser mutation

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Corrected: Properly calling loginUser with { username, password } object
            const result = await loginUser({ username, password }).unwrap();

            // Checking result and storing token in session storage
            if (result && result.token) {
                sessionStorage.setItem('token', result.token); // Storing token in session storage
                navigate('/'); // Redirect on success
            }
        } catch (error) {
            console.error('Login failed:', error);
            // Optionally handle login failure (e.g., show an error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Login</h2>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;