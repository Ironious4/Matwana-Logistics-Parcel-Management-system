import React, { useState } from 'react';

import Parcels from './ViewCustomerParcels';
import CompletedTransactions from './CompletedTransactions'; // Completed Transactions component

const CustomerDashboard = () => {
  const [activeSection, setActiveSection] = useState('parcels');

  const renderSection = () => {
    switch (activeSection) {
      case 'parcels':
        return <Parcels />;
      case 'completedTransactions':
        return <CompletedTransactions />;
      default:
        return <Parcels />;
    }
  };

  return (
    <div className="customer-dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-heading">Customer Dashboard</h2>
        <button onClick={() => setActiveSection('parcels')} className="sidebar-btn">Parcels</button>
        <button onClick={() => setActiveSection('completedTransactions')} className="sidebar-btn">Completed Transactions</button>
      </div>
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
};

export default CustomerDashboard;
