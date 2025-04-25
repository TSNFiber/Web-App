import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="header-container">
      <h2 className="logo"><Link to="/">Merchy</Link></h2>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Games</Link></li>
          <li><Link to="/fortnite">Drops</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li>
            <Link to={isLoggedIn ? "/dashboard" : "/login"}>
              {isLoggedIn ? (
                <img 
                  src="/assets/images/user-icon.png" 
                  alt="Profile" 
                  className="user-icon"
                />
              ) : (
                "Login"
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;