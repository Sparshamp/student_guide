import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import './pdashboard1.css';

export default function PatientDashboard() {
  const [openPersonalInfo, setOpenPersonalInfo] = useState(false);
  const [openAccessData, setOpenAccessData] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    age: '',
    bloodGroup: '',
    contactNumber: '',
    patientKey: '',
    emergencyContact: '',
    address: ''
  });

  const navigate = useNavigate();

  // Load saved info from localStorage on mount
  useEffect(() => {
    const savedInfo = JSON.parse(localStorage.getItem('personalInfo'));
    if (savedInfo) {
      setPersonalInfo(savedInfo);
    }
  }, []);

  const handleSavePersonalInfo = () => {
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    alert("Information saved!");
    setOpenPersonalInfo(false);
  };

  const handleAccessData = () => {
    if (!secretKey.trim()) {
      alert("Please enter your secret key.");
      return;
    }
    navigate(`/access-data?key=${secretKey}`);
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">HealthChain</div>
        <div className="navbar-links">
          <a href="#" className="navbar-link" onClick={() => setOpenPersonalInfo(true)}>Personal Info</a>
          <a href="/AccessLogs" className="navbar-link">Login Info</a>
          <a href="#" className="navbar-link" onClick={() => setOpenAccessData(true)}>Access Data</a>
          <a href="#" className="navbar-link" onClick={() => navigate("/manage-permissions")}>Manage Permissions</a>
        </div>
      </nav>

      {/* Personal Info Form */}
      <Dialog open={openPersonalInfo} onClose={() => setOpenPersonalInfo(false)}>
        <DialogTitle>Personal Information</DialogTitle>
        <DialogContent>
          <TextField label="Full Name" fullWidth margin="dense"
            value={personalInfo.fullName} onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })} />
          <TextField label="Age" fullWidth margin="dense"
            value={personalInfo.age} onChange={(e) => setPersonalInfo({ ...personalInfo, age: e.target.value })} />
          <TextField label="Blood Group" fullWidth margin="dense"
            value={personalInfo.bloodGroup} onChange={(e) => setPersonalInfo({ ...personalInfo, bloodGroup: e.target.value })} />
          <TextField label="Contact Number" fullWidth margin="dense"
            value={personalInfo.contactNumber} onChange={(e) => setPersonalInfo({ ...personalInfo, contactNumber: e.target.value })} />
          <TextField label="Patient Key" fullWidth margin="dense"
            value={personalInfo.patientKey} onChange={(e) => setPersonalInfo({ ...personalInfo, patientKey: e.target.value })} />
          <TextField label="Emergency Contact" fullWidth margin="dense"
            value={personalInfo.emergencyContact} onChange={(e) => setPersonalInfo({ ...personalInfo, emergencyContact: e.target.value })} />
          <TextField label="Address" fullWidth margin="dense"
            value={personalInfo.address} onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPersonalInfo(false)}>Cancel</Button>
          <Button onClick={handleSavePersonalInfo}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Access Data Dialog */}
      <Dialog open={openAccessData} onClose={() => setOpenAccessData(false)}>
        <DialogTitle>Enter Secret Key</DialogTitle>
        <DialogContent>
          <TextField label="Secret Key" type="password" fullWidth margin="dense"
            value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAccessData(false)}>Cancel</Button>
          <Button onClick={handleAccessData}>Access</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}