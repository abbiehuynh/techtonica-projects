import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    // create initial states for username and password
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // useNavigate for directing users after login
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        // prevents submission before validation
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            });

            // logs the response - debugging
            console.log("Response:", response);

            if (!response.ok) {
                const errorData = await response.json(); // Attempt to read error data
                alert(errorData.error);
                return;
            }
    
            const data = await response.json(); // Parse response as JSON
            localStorage.setItem('token', data.token);
            // calls onLogin with userId
            onLogin(data.userId);

            // navigates user to home page after successful login
            navigate('/home');

        } catch (error) {
            console.error("Login error:", error);
        }
    };

  return (
    <div>Login
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>


    </div>
  )
}

export default Login;