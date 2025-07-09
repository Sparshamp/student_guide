import React from 'react';
import { Button } from "@mui/material";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { FileText, Share2, Trash2 } from "lucide-react";
import './pdashboard1.css';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function PatientDashboard() {
  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <span>HealthChain</span>
        </div>
        <div className="navbar-links">
          <a href="/my-records" className="navbar-link" aria-label="My Records">My Records</a>
          
          <Link to="/patientsignup" className="navbar-link"aria-label="Access Logs>Access Logs</Link>
          <a href="/profile" className="navbar-link" aria-label="Profile">Profile</a>
        </div>
      </nav>

      <div className="dashboard-content">
        {/* Main Content Area */}
        <div className="main-content">
          <div className="records-grid">
            {/* Record Card 1 */}
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

            {/* Record Card 2 */}
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

        {/* Quick Stats Sidebar */}
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
