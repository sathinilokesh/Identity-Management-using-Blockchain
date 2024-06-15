// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register'
import GetIdentity from './components/GetIdentity';
import UpdateIdentity from './components/UpdateIdentity';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/getIdentity" element={<GetIdentity />} />
          <Route path="/updateIdentity" element={<UpdateIdentity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
