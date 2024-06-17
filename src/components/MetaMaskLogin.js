// MetaMaskLogin.js

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './MetaMaskLogin.css'; // Import the CSS file for styling

const MetaMaskLogin = ({ setAccount }) => {
  const [error, setError] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const checksummedAddress = web3.utils.toChecksumAddress(accounts[0]);
        setAccount(checksummedAddress);
        setError(null);
      } catch (error) {
        setError('Failed to connect to MetaMask');
      }
    } else {
      setError('MetaMask is not installed');
    }
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      const web3 = new Web3(window.ethereum);
      const checksummedAddress = web3.utils.toChecksumAddress(window.ethereum.selectedAddress);
      setAccount(checksummedAddress);
    }
  }, [setAccount]);

  return (
    <div className="metamask-login">
      {window.ethereum && window.ethereum.selectedAddress ? (
        <p className="connected-account">Connected account: {window.ethereum.selectedAddress}</p>
      ) : (
        <button onClick={connectMetaMask} className="btn-connect-metamask">Connect MetaMask</button>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default MetaMaskLogin;
