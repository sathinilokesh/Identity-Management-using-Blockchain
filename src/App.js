import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import GetIdentity from './components/GetIdentity';
import UpdateIdentity from './components/UpdateIdentity';
import MetaMaskLogin from './components/MetaMaskLogin';
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  useEffect(() => {
    connectMetaMask();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <MetaMaskLogin account={account} />
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
