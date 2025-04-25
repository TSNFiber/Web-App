import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Header from './Header';
import './style3.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'merchy@trial.com' && password === '123456789') {
      login();
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <Header />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="buy-button">Login</button>
        <p>Default credentials: <br/> merchy@trial.com / 123456789</p>
      </form>
      <footer class="site-footer">
    <div class="footer-content">
        <p class="copyright">&copy; 2023 Merchy. All rights reserved</p>
        <button class="back-to-top" onclick="scrollToTop()">UP!</button>
    </div>
</footer>
    </div>
  );
};

export default Login;