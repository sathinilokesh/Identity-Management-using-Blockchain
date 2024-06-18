// MetaMaskLogin.js

import React from 'react';
import './MetaMaskLogin.css';

const MetaMaskLogin = ({ account }) => {
  return (
    <div className="metamask-login">
      {account ? (
        <div className="connected-account">Connected Account: {account}</div>
      ) : (
        <button className="btn-connect-metamask">Connect MetaMask</button>
      )}
    </div>
  );
};

export default MetaMaskLogin;
