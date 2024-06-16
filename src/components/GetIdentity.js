import React, { useState } from 'react';
import './GetIdentity.css'; // Import the CSS file for styling

const GetIdentity = () => {
  const [userAddress, setUserAddress] = useState('');
  const [identity, setIdentity] = useState(null);
  const [error, setError] = useState(null);

  const getIdentity = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/identity/${userAddress}`);
      if (!response.ok) {
        throw new Error('Failed to fetch identity.');
      }
      const data = await response.json();
      setIdentity(data);
      setError(null); // Clear any previous error
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch identity. Please check the address.');
    }
  };

  return (
    <div className='identity-info'>
      <h2>Get Identity</h2>
      <input
        type="text"
        placeholder="Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
        className="input-address"
      />
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
