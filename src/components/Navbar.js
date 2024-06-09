import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Identity Management DApp</div>
      <ul className="navbar-links">
        <li><a href="#register">Register Identity</a></li>
        <li><a href="#get">Get Identity</a></li>
        <li><a href="#update">Update Identity</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
