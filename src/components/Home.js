// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Identity Management</h2>
      <Link to="/register" className="register-link">
        <button className="register-button">Register Identity</button>
      </Link>
    </div>
  );
};

export default Home;
