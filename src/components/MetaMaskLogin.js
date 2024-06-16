import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './MetaMaskLogin.css'; // Import the CSS file for styling

const MetaMaskLogin = ({ onLogin }) => {
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
      onLogin(accounts[0]);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <div className="metamask-login">
      {account ? (
        <p>Connected account: {account}</p>
      ) : (
        <button onClick={connectMetaMask} className="btn-connect-metamask">Connect MetaMask</button>
      )}
    </div>
  );
};

export default MetaMaskLogin;
