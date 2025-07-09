import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './patientLogin1.css';

export default function PatientLogin() {
  const navigate = useNavigate(); 

  const [walletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /*const handleLogin = (event) => {
    event.preventDefault(); 

    if (!walletAddress || !password) {
      setError("Wallet Address and Password are required!");
      return;
    }

    setError("");  // Clear error if both fields are filled
    navigate("/PatientDashboard"); 
  };*/

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!walletAddress || !password) {
        setError("Wallet Address and Password are required!");
        return;
    }

    const response = await fetch("http://localhost:5000/api/patient/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: walletAddress, password }),
    });

    const data = await response.json();
    if (response.ok) {
        navigate("/PatientDashboard");
    } else {
        setError(data.message);
    }
};


  return (
    <div className="patient-login-container">
      <div className="login-card">
        <h2 className="login-title">Patient Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="wallet-address" className="login-label">Email Address</label>
          <input
            type="text"
            id="wallet-address"
            placeholder="Enter your email address"
            className="login-input"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
          />

          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>} {/*  Displays error if fields are empty */}

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="login-footer">
          {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
          <p>
            Don't have an account?{' '}
            <Link to="/patientsignup" className="register-link">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
