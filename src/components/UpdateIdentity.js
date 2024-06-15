// UpdateIdentity.js

import React, { useState } from 'react';
import './UpdateIdentity.css'; // Import the CSS file for styling

const UpdateIdentity = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const updateIdentity = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await response.json();
      alert('Transaction Hash: ' + data.transaction);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update identity.');
    }
  };

  return (
    <div className="update-identity">
      <h2>Update Identity</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="input-field"
      />
      <button onClick={updateIdentity} className="btn-update">Update</button>
    </div>
  );
};

export default UpdateIdentity;
