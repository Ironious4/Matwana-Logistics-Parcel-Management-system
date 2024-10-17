import React, { useState } from 'react';
import UsersList from './ManageUsers';
import CustomersList from './ManageParcels';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('users');

  const renderSection = () => {
    switch (activeSection) {
      case 'users':
        return <UsersList />;
      case 'customers':
        return <CustomersList />;
      default:
        return <UsersList />;
    }
  };

  return (
    <div className="admin-dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-heading">Admin Dashboard</h2>
        <button onClick={() => setActiveSection('users')} className="sidebar-btn">All Users</button>
        <button onClick={() => setActiveSection('customers')} className="sidebar-btn">All Customers</button>
      </div>
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
