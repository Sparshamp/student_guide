import React, { useState } from 'react';
import './index1.css';
import {useNavigate} from 'react-router-dom'
const HealthChainLogin = () => {
  const [role, setRole] = useState('patient');
  const navigate=useNavigate()
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    console.log(`Role set to: ${newRole}`);
   
  if (newRole === 'patient') {
    navigate('/patientsignup');
  } else if (newRole === 'provider') {
    navigate('/doctersignup'); // Adjust based on the actual route
  }
  };

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected:', accounts[0]);
        alert(`Connected with MetaMask: ${accounts[0]}`);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        alert('Failed to connect MetaMask. Please try again.');
      }
    } else {
      alert('MetaMask is not installed. Please install it to continue.');
    }
  };

  return (
    <div id="root">
    <div className="container">
      <div className="hero-section">
        <h1>HealthChain: Own Your Medical Records</h1>
        <p>Securely share encrypted health data using blockchain technology</p>
      </div>

      <div className="role-toggle">
        <button
          className={role === 'patient' ? 'active' : ''}
          onClick={() => handleRoleChange('patient')}
        >
          I'm a Patient
        </button>
        <button
          className={role === 'provider' ? 'active' : ''}
          onClick={() => handleRoleChange('provider')}
        >
          I'm a Provider
        </button>
      </div>

      <div className="auth-box">
        <button onClick={connectMetaMask}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
            alt="MetaMask Logo"
          />
          Connect with MetaMask
        </button>
        <p>
          or <a href="#" className="mail">continue with email</a>
        </p>
      </div>

      <div className="footer">
        <div className="footer-item">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/lock.png"
            alt="Lock Icon"
          />
          Encrypted
        </div>
        <div className="footer-item">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/link.png"
            alt="Chain Icon"
          />
          Immutable Records
        </div>
        <div className="footer-item">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/hospital.png"
            alt="Hospital Icon"
          />
          Global Access
        </div>
      </div>
    </div>
    </div>
  );
};

export default HealthChainLogin;
