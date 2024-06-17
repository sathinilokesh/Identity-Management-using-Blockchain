// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import GetIdentity from './components/GetIdentity';
import UpdateIdentity from './components/UpdateIdentity';
import MetaMaskLogin from './components/MetaMaskLogin';

function App() {
  const [account, setAccount] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <MetaMaskLogin setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register account={account} />} />
          <Route path="/getIdentity" element={<GetIdentity account={account} />} />
          <Route path="/updateIdentity" element={<UpdateIdentity account={account} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
