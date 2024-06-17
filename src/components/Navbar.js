import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Identity Management DApp</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/getIdentity">Get Identity</Link></li>
        <li><Link to="/updateIdentity">Update Identity</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
