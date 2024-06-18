// UpdateIdentity.js

import React, { useState, useEffect } from 'react';
import './UpdateIdentity.css';

const UpdateIdentity = ({ account }) => {
  const [userAddress, setUserAddress] = useState('');
  const [askerAddress, setAskerAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const fetchUserData = async (address) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/identity/${address}?account=${account}`);
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
    try {
      const response = await fetch("http://127.0.0.1:5000/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, user_address: account }),
      });
      const data = await response.json();
      alert("Transaction Hash: " + data.transaction);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update identity.');
    }
  };

  const authorizeAccess = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/authorize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_address: account, asker_address: askerAddress }),
      });
      const data = await response.json();
      alert("Transaction Hash: " + data.transaction);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to authorize access.');
    }
  };

  useEffect(() => {
    if (userAddress) {
      fetchUserData(userAddress);
    }
  }, [userAddress]);

  return (
    <div className='update-identity'>
      <h2>Update Identity</h2>
      <input
        type="text"
        placeholder="User Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
        className="input-address"
      />
      <button onClick={() => fetchUserData(userAddress)} className="btn-fetch-data">Fetch Data</button>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={updateIdentity} className="btn-update-identity">Update Identity</button>
      <input
        type="text"
        placeholder="Asker Address"
        value={askerAddress}
        onChange={(e) => setAskerAddress(e.target.value)}
        className="input-address"
      />
      <button onClick={authorizeAccess} className="btn-authorize-access">Authorize Access</button>
    </div>
  );
};

export default UpdateIdentity;
