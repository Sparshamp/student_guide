import React, { useState } from 'react';
import './doctorAuth1.css';
import {useNavigate} from 'react-router-dom'

const DoctorAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    licenseNumber: '',
    hospital: '',
  });
  const [error, setError] = useState('');
  const navigate=useNavigate()

  /*const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login validation: Email and password are required
      if (!formData.email || !formData.password) {
        setError('Please enter both email and password.');
        return;
      }
    } 
    else {
      // Registration validation: All fields are required
      if (!formData.name || !formData.licenseNumber || !formData.hospital || !formData.email || !formData.password) {
        setError('Please fill in all mandatory fields.');
        return;
      }
    }
    setError('');
    // Handle form submission logic here (e.g., API calls)
    console.log('Form submitted:', formData); 
    navigate('/DoctorDashboard');
  };
  */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = isLogin ? "/api/doctor/login" : "/api/doctor/signup";
    
    const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
        navigate("/DoctorDashboard");
    } else {
        setError(data.message);
    }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
// function fun()
// {
// navigate('/DoctorDashboard')
// }
  return (
    <div className="container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <span className="logo-text">HealthChain</span>
          </div>
          <h2>{isLogin ? 'Doctor Login' : 'Doctor Registration'}</h2>
        </div>

        <div className="auth-tabs">
          <button
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => {
              setIsLogin(false);
              setError('');
            }}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="licenseNumber">Medical License Number:</label>
                <input
                  type="text"
                  id="licenseNumber"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  placeholder="Enter your license number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="hospital">Hospital/Clinic Name:</label>
                <input
                  type="text"
                  id="hospital"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  placeholder="Enter your hospital/clinic name"
                  required
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {isLogin && (
            <div className="forgot-password">
              <a href="none">Forgot Password?</a>
            </div>
          )}

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorAuth;