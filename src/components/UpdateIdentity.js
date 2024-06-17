// UpdateIdentity.js

import React, { useState, useEffect } from 'react';
import MetaMaskLogin from './MetaMaskLogin';
import './UpdateIdentity.css';

const UpdateIdentity = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [account, setAccount] = useState(null);

  // Fetch user data based on user address
  const fetchUserData = async (address) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/identity/${address}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch user data.');
    }
  };

  const updateIdentity = async () => {
    if (!account) {
      alert('Please connect MetaMask first');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, user_address: account }),
      });
      const data = await response.json();
      alert('Transaction Hash: ' + data.transaction);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update identity.');
    }
  };

  useEffect(() => {
    if (account) {
      fetchUserData(account);
    }
  }, [account]);

  return (
    <div className='update-identity'>
      <MetaMaskLogin setAccount={setAccount} />
      <h2>Update Identity</h2>
      <input type="text" placeholder="Name" className='input-field' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" className='input-field' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Phone" className='input-field' value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button className='btn-update' onClick={updateIdentity}>Update</button>
    </div>
  );
};

export default UpdateIdentity;
