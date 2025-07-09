/*import React from 'react';
import { Search, Link } from "lucide-react";
import './hdashboard1.css';

export default function DoctorDashboard() {
  return (
    <div className="doctor-dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-brand-icon" />
          <span>HealthChain</span>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link active">Dashboard</a>
          <a href="#" className="navbar-link">Access Logs</a>
          <a href="#" className="navbar-link">Profile</a>
        </div>
        <button className="upload-button">Upload New Record</button>
      </nav>

      <main className="dashboard-content">
        <div className="search-card card">
          <label className="search-label">Search for Patients</label>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search by Patient Wallet Address (0x...)"
              className="search-input"
            />
            <button className="search-button">
              <Search className="search-icon" /> Search
            </button>
          </div>
        </div>

        <div className="records-grid">
          {['0x4a3b...c7d8', '0x5b6c...d9e0'].map((address, index) => (
            <div className="record-card card" key={index}>
              <div className="card-header">
                <h3 className="card-title">{address}</h3>
                <p className="record-date">Updated {index === 0 ? '2 days' : '1 week'} ago</p>
              </div>
              <div className="card-content">
                <div className={`status-badge ${index === 0 ? 'pending' : 'granted'}`}>
                  {index === 0 ? 'Pending Access' : 'Access Granted'}
                </div>
                <div className="actions">
                  {index === 0 ? (
                    <button className="request">Request Access</button>
                  ) : (
                    <button className="view">View Records</button>
                  )}
                  <button className="delete">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
*/

/*import React, { useState, useEffect } from 'react';
import { Search } from "lucide-react";
import './hdashboard1.css';

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [doctorProfile, setDoctorProfile] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Fetch patients from the blockchain (mock API call for now)
    fetch('/api/getPatients')
      .then(res => res.json())
      .then(data => setPatients(data))
      .catch(err => console.error('Error fetching patients:', err));

    // Fetch doctor's profile data
    fetch('/api/getDoctorProfile')
      .then(res => res.json())
      .then(data => setDoctorProfile(data))
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  const requestAccess = (username) => {
    fetch(`/api/requestAccess/${username}`, { method: 'POST' })
      .then(() => {
        setPatients(prev => prev.map(p => p.username === username ? { ...p, status: 'pending' } : p));
      });
  };

  const addMedicalRecord = (username) => {
    console.log(`Adding medical record for ${username}`);
    // Implement the logic to add a new medical record
  };

  return (
    <div className="doctor-dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <span>HealthChain</span>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link active">Dashboard</a>
          <a href="#" className="navbar-link" onClick={() => setShowProfile(!showProfile)}>Profile</a>
        </div>
      </nav>

      <main className="dashboard-content">
        <div className="search-card card">
          <label className="search-label">Search for Patients</label>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search by Patient Username"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">
              <Search className="search-icon" /> Search
            </button>
          </div>
        </div>

        <div className="records-grid">
          {patients.filter(p => p.username.includes(searchQuery)).map((patient, index) => (
            <div className="record-card card" key={index}>
              <div className="card-header">
                <h3 className="card-title">{patient.username}</h3>
                <p className="record-date">Updated {patient.lastUpdated}</p>
              </div>
              <div className="card-content">
                <div className={`status-badge ${patient.status === 'granted' ? 'granted' : 'pending'}`}>
                  {patient.status === 'granted' ? 'Access Granted' : 'Pending Access'}
                </div>
                <div className="actions">
                  {patient.status === 'pending' ? (
                    <button className="request" onClick={() => requestAccess(patient.username)}>Request Access</button>
                  ) : (
                    <>
                      <button className="view">View Records</button>
                      <button className="add" onClick={() => addMedicalRecord(patient.username)}>Add Medical Record</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showProfile && doctorProfile && (
        <div className="profile-section">
          <h2>Doctor Profile</h2>
          <p><strong>Name:</strong> {doctorProfile.name}</p>
          <p><strong>License Number:</strong> {doctorProfile.licenseNumber}</p>
          <p><strong>Hospital:</strong> {doctorProfile.hospital}</p>
          <p><strong>Email:</strong> {doctorProfile.email}</p>
        </div>
      )}
    </div>
  );
}
  */

/*import React, { useState, useEffect } from "react";
import axios from "axios";
import "./hdashboard1.css";

export default function DoctorDashboard() {
  const [patientEmail, setPatientEmail] = useState("");
  const [patientRecords, setPatientRecords] = useState([]); // List of accessible patients
  const [doctorProfile, setDoctorProfile] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    fetchDoctorProfile();
    fetchAccessiblePatients();
  }, []);

  const fetchDoctorProfile = async () => {
    try {
      const response = await axios.get("/api/doctor/profile");
      setDoctorProfile(response.data);
    } catch (error) {
      console.error("Error fetching doctor profile:", error);
    }
  };

  const fetchAccessiblePatients = async () => {
    try {
      const response = await axios.get("/api/doctor/access-patients");
      setPatientRecords(response.data);
    } catch (error) {
      console.error("Error fetching accessible patients:", error);
    }
  };

  const handleRequestAccess = async () => {
    if (!patientEmail) return alert("Enter a patient email.");
    
    try {
      const response = await axios.post("/api/doctor/request-access", { email: patientEmail });
      alert(response.data.message);
      setPatientEmail("");
      fetchAccessiblePatients(); // Refresh the patient list
    } catch (error) {
      console.error("Error requesting access:", error);
    }
  };

  return (
    <div className="doctor-dashboard">
      <nav className="navbar">
        <span className="logo">HealthChain</span>
        <div className="nav-links">
          <button onClick={() => setShowProfile(!showProfile)}>Profile</button>
        </div>
      </nav>

      <div className="search-container">
        <input
          type="email"
          placeholder="Enter Patient Email"
          value={patientEmail}
          onChange={(e) => setPatientEmail(e.target.value)}
        />
        <button onClick={handleRequestAccess}>Request Access</button>
      </div>

      <h2>Accessible Patient Records</h2>
      <div className="records-container">
        {patientRecords.length === 0 ? (
          <p>No patient records available.</p>
        ) : (
          patientRecords.map((patient, index) => (
            <div key={index} className="record-card">
              <h3>{patient.name} ({patient.email})</h3>
              <p>Last Updated: {patient.lastUpdated}</p>
              <div className="actions">
                <button onClick={() => viewRecords(patient.email)}>View Records</button>
                <button onClick={() => addMedicalRecord(patient.email)}>Add Record</button>
              </div>
            </div>
          ))
        )}
      </div>

      {showProfile && doctorProfile && (
        <div className="profile-section">
          <h2>Doctor Profile</h2>
          <p><strong>Name:</strong> {doctorProfile.name}</p>
          <p><strong>License Number:</strong> {doctorProfile.licenseNumber}</p>
          <p><strong>Hospital:</strong> {doctorProfile.hospital}</p>
          <p><strong>Email:</strong> {doctorProfile.email}</p>
        </div>
      )}
    </div>
  );
}

// Function to handle viewing records
const viewRecords = (email) => {
  alert(`Viewing records for ${email}`);
  // Implement actual navigation logic
};

// Function to handle adding medical records
const addMedicalRecord = (email) => {
  alert(`Adding record for ${email}`);
  // Implement actual logic for adding records
};
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./hdashboard1.css";

export default function DoctorDashboard() {
  const [patientEmail, setPatientEmail] = useState("");
  const [patientRecords, setPatientRecords] = useState([]); // List of accessible patients
  const [doctorProfile, setDoctorProfile] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    fetchDoctorProfile();
    fetchAccessiblePatients();
  }, []);

  const fetchDoctorProfile = async () => {
    try {
      const response = await axios.get("/api/doctor/profile", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` // Ensure token is stored on login
        }
    });
      setDoctorProfile(response.data);
    } catch (error) {
      console.error("Error fetching doctor profile:", error);
    }
  };

  const fetchAccessiblePatients = async () => {
    try {
      const response = await axios.get("/api/doctor/access-patients");
      setPatientRecords(response.data);
    } catch (error) {
      console.error("Error fetching accessible patients:", error);
    }
  };

  const handleRequestAccess = async () => {
    if (!patientEmail) return alert("Enter a patient email.");
    
    try {
      const response = await axios.post("/api/doctor/request-access", { email: patientEmail });
      alert(response.data.message);
      setPatientEmail("");
      fetchAccessiblePatients(); // Refresh the patient list
    } catch (error) {
      console.error("Error requesting access:", error);
    }
  };

  return (
    <div className="doctor-dashboard">
      <nav className="navbar">
        <span className="logo">HealthChain</span>
        <div className="nav-links">
          <button onClick={() => setShowProfile(!showProfile)}>
            {showProfile ? "Hide Profile" : "View Profile"}
          </button>
        </div>
      </nav>

      {/* Profile Section (Toggle Visibility) */}
      {showProfile && doctorProfile && (
        <div className="profile-section">
          <h2>Doctor Profile</h2>
          <p><strong>Name:</strong> {doctorProfile.name}</p>
          <p><strong>License Number:</strong> {doctorProfile.licenseNumber}</p>
          <p><strong>Hospital:</strong> {doctorProfile.hospital}</p>
          <p><strong>Email:</strong> {doctorProfile.email}</p>
        </div>
      )}

      {/* Search & Request Access */}
      <div className="search-container">
        <input
          type="email"
          placeholder="Enter Patient Email"
          value={patientEmail}
          onChange={(e) => setPatientEmail(e.target.value)}
        />
        <button onClick={handleRequestAccess}>Request Access</button>
      </div>

      {/* Accessible Patient Records */}
      <h2>Accessible Patient Records</h2>
      <div className="records-container">
        {patientRecords.length === 0 ? (
          <p>No patient records available.</p>
        ) : (
          patientRecords.map((patient, index) => (
            <div key={index} className="record-card">
              <h3>{patient.name} ({patient.email})</h3>
              <p>Last Updated: {patient.lastUpdated}</p>
              <div className="actions">
                <button onClick={() => viewRecords(patient.email)}>View Records</button>
                <button onClick={() => addMedicalRecord(patient.email)}>Add Record</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Function to handle viewing records
const viewRecords = (email) => {
  alert(`Viewing records for ${email}`);
  // Implement actual navigation logic
};

// Function to handle adding medical records
const addMedicalRecord = (email) => {
  alert(`Adding record for ${email}`);
  // Implement actual logic for adding records
};


