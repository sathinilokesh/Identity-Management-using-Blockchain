import React, { useState, useEffect } from 'react';
import './UpdateIdentity.css';

const UpdateIdentity = ({ account }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (account) {
        try {
          const response = await fetch(`http://127.0.0.1:5000/identity/${account}`);
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
      }
    };

    fetchUserData();
  }, [account]);

  const updateIdentity = async () => {
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

  return (
    <div className='update-identity'>
      <h2>Update Identity</h2>
      <input type="text" placeholder="Name" className='input-field' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" className='input-field' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Phone" className='input-field' value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button className='btn-update' onClick={updateIdentity}>Update</button>
    </div>
  );
};

export default UpdateIdentity;
