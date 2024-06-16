// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Web3 from 'web3';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import GetIdentity from './components/GetIdentity';
import UpdateIdentity from './components/UpdateIdentity';
import MetaMaskLogin from './components/MetaMaskLogin';
import './App.css';

function App() {
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }, []);

  const connectMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <MetaMaskLogin account={account} connectMetaMask={connectMetaMask} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register account={account} />} />
            <Route path="/getIdentity" element={<GetIdentity />} />
            <Route path="/updateIdentity" element={<UpdateIdentity account={account} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
