/*import React from 'react';
import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { FileText, Share2, Trash2 } from "lucide-react";
import './pdashboard1.css';

export default function PatientDashboard() {
  return (
    <div className="dashboard-container">
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <span>HealthChain</span>
        </div>
        <div className="navbar-links">
          <a href="/my-records" className="navbar-link" aria-label="My Records">My Records</a>
          <a href="/access-logs" className="navbar-link" aria-label="Access Logs">Access Logs</a>
          <a href="/profile" className="navbar-link" aria-label="Profile">Profile</a>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="main-content">
          <div className="records-grid">
            <Card className="record-card">
              <CardHeader
                title={<Typography variant="h6">2023_Lab_Report.pdf</Typography>}
                subheader={<Typography variant="body2">Jan 5, 2023</Typography>}
              />
              <CardContent>
                <div className="record-encrypted-badge">Encrypted</div>
                <div className="record-actions">
                  <Button className="record-action-button record-share-button" startIcon={<Share2 />}>
                    Share
                  </Button>
                  <Button className="record-action-button record-delete-button" startIcon={<Trash2 />}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card className="record-card">
              <CardHeader
                title={<Typography variant="h6">MRI_Scan_2023.pdf</Typography>}
                subheader={<Typography variant="body2">Mar 15, 2023</Typography>}
              />
              <CardContent>
                <div className="record-encrypted-badge">Encrypted</div>
                <div className="record-actions">
                  <Button className="record-action-button record-share-button" startIcon={<Share2 />}>
                    Share
                  </Button>
                  <Button className="record-action-button record-delete-button" startIcon={<Trash2 />}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="sidebar">
          <Card className="stats-card">
            <CardHeader title={<Typography variant="h6">Quick Stats</Typography>} />
            <CardContent>
              <div className="stat-item">
                <Typography variant="body2">Providers Accessed Your Data</Typography>
                <Typography variant="h6">3</Typography>
              </div>
              <div className="stat-item">
                <Typography variant="body2">Files Securely Stored</Typography>
                <Typography variant="h6">12</Typography>
              </div>
              <div className="stat-item">
                <Typography variant="body2">Last Access</Typography>
                <Typography variant="h6">ER Hospital, Mumbai (2 hrs ago)</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
  */
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
