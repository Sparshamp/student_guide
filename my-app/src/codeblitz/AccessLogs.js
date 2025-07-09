import React from 'react';
import './AccessLogs1.css'; // Import the CSS file

const AccessLogs = () => {
  return (
    <div className="access-logs-container">
      {/* Filters Section */}
      <div className="filters">
        <select>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Custom Range</option>
        </select>

        <select>
          <option>All Providers</option>
          <option>Hospitals</option>
          <option>Clinics</option>
        </select>

        <select>
          <option>All Statuses</option>
          <option>Active</option>
          <option>Revoked</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder="Search by Provider Address..."
        />

        <button className="export-btn" onClick={() => console.log('Exporting audit report...')}>
          📥 Download Audit Report (CSV)
        </button>
      </div>

      {/* Logs Table */}
      <div className="table-container">
        <table className="logs-table">
          <thead>
            <tr>
              <th>Provider</th>
              <th>Date</th>
              <th>Record Accessed</th>
              <th>Action</th>
              <th>Blockchain Proof</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td>
                <div>City General Hospital</div>
                <div className="provider-address">0x8f2e...a9b3</div>
              </td>
              <td>2023-10-05 14:30 IST</td>
              <td>2023_MRI_Scan.pdf</td>
              <td>
                <span className="status-indicator active"></span>
                <button
                  className="revoke-btn"
                  onClick={(e) => {
                    console.log('Revoking access...');
                    e.target.disabled = true;
                    e.target.textContent = 'Revoking...';
                  }}
                >
                  Revoke Access
                </button>
              </td>
              <td>
                <a href="#" className="tx-link">
                  0x9a3d...f7c2
                </a>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessLogs;