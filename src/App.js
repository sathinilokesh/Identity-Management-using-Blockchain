import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [identity, setIdentity] = useState(null);

  const registerIdentity = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
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
      alert('Failed to register identity.');
    }
  };

  const getIdentity = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/identity/${userAddress}`);
      const data = await response.json();
      setIdentity(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch identity.');
    }
  };

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
    <div>
      <Navbar />
      <div className="App">
        <section id="register" className="section">
          <h2>Register Identity</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={registerIdentity}>Register</button>
        </section>

        <section id="get" className="section">
          <h2>Get Identity</h2>
          <input type="text" placeholder="Address" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} />
          <button onClick={getIdentity}>Get Identity</button>
          {identity && (
            <div className="identity-info">
              <p><strong>Name:</strong> {identity.name}</p>
              <p><strong>Email:</strong> {identity.email}</p>
              <p><strong>Phone:</strong> {identity.phone}</p>
            </div>
          )}
        </section>

        <section id="update" className="section">
          <h2>Update Identity</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={updateIdentity}>Update</button>
        </section>
      </div>
    </div>
  );
}

export default App;
