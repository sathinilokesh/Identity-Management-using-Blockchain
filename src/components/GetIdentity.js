// GetIdentity.js

import React, { useState } from 'react';
import MetaMaskLogin from './MetaMaskLogin';
import './GetIdentity.css';

const GetIdentity = () => {
  const [identity, setIdentity] = useState(null);
  const [error, setError] = useState(null);
  const [account, setAccount] = useState(null);

  const getIdentity = async () => {
    if (!account) {
      alert('Please connect MetaMask first');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:5000/identity/${account}`);
      if (!response.ok) {
        throw new Error('Failed to fetch identity.');
      }
      const data = await response.json();
      setIdentity(data);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch identity. Please check the address.');
    }
  };

  return (
    <div className='identity-info'>
      <MetaMaskLogin setAccount={setAccount} />
      <h2>Get Identity</h2>
      <button onClick={getIdentity} className="btn-get-identity">Get Identity</button>
      {error && <p className="error-message">{error}</p>}
      {identity && (
        <div className="identity-details">
          <p><strong>Name:</strong> {identity.name}</p>
          <p><strong>Email:</strong> {identity.email}</p>
          <p><strong>Phone:</strong> {identity.phone}</p>
        </div>
      )}
    </div>
  );
};

export default GetIdentity;
