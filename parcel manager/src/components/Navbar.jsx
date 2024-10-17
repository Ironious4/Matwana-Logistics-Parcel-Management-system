import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='navbar-logo'>
        <img src='logo.webp' alt='logo'></img>
        </div>
      
        <h2 className='heading'>Parcel Management System</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
