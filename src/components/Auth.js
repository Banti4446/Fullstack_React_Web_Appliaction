import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const AuthComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await Auth.signUp({ username: email, password });
            alert('Signup successful!');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const handleLogin = async () => {
        try {
            await Auth.signIn(email, password);
            alert('Login successful!');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await Auth.signOut();
            alert('Logout successful!');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div>
            <h2>Authentication</h2>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default AuthComponent;
