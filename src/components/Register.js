import React, { useState } from "react";
import "./Register.css";

const Register = ({ account }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const registerIdentity = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, user_address: account }),
      });
      const data = await response.json();
      alert("Transaction Hash: " + data.transaction);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register identity.");
    }
  };

  return (
    <div className="parent-register">
      <div className="register">
        <h2>Register Identity</h2>
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
        <button onClick={registerIdentity}>Register</button>
      </div>
    </div>
  );
};

export default Register;
