import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Header from './Header';
import './style3.css' ;

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        
        <section className="profile-info">
          <h2>Profile Information</h2>
          <p>Name: John Doe</p>
          <p>Birthdate: January 1, 1990</p>
          <p>Account Balance: $500.00</p>
        </section>

        <section className="orders">
          <h2>Recent Orders</h2>
         
        </section>

        <section className="addresses">
          <h2>Addresses</h2>
          <p>123 Gaming Street</p>
          <p>Postal Code: 12345</p>
          <p>Phone: (555) 123-4567</p>
        </section>

        <button onClick={handleLogout} className="signout-button">
          Sign Out
        </button>
      </div>
      
      <footer class="site-footer">
    <div class="footer-content">
        <p class="copyright">&copy; 2023 Merchy. All rights reserved</p>
        <button class="back-to-top" onclick="scrollToTop()">UP!</button>
    </div>
</footer>
      
    </div>
  );
};

export default Dashboard;