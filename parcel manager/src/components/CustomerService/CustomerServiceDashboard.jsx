import React, { useState } from 'react';
import SendParcelForm from './SendParcel';
import DeliveredParcels from './ViewParcel';
import AddVehicleForm from './AddVehicleForm';

const CustomerService = () => {
  const [activeSection, setActiveSection] = useState('sendParcel');

  const renderSection = () => {
    switch (activeSection) {
      case 'sendParcel':
        return <SendParcelForm />;
      case 'deliveredParcels':
        return <DeliveredParcels />;
      case 'addVehicle':
        return <AddVehicleForm />;
      default:
        return <SendParcelForm />;
    }
  };

  return (
    <div className="customer-service-container">
      <div className="sidebar">
        {/* Sidebar Heading */}
        <h2 className="sidebar-heading">Customer Service</h2>

        {/* Sidebar Buttons */}
        <button onClick={() => setActiveSection('sendParcel')} className="sidebar-btn">
          Send Parcel
        </button>
        <button onClick={() => setActiveSection('deliveredParcels')} className="sidebar-btn">
          Delivered Parcels
        </button>
        <button onClick={() => setActiveSection('addVehicle')} className="sidebar-btn">
          Add Vehicle
        </button>
      </div>

      {/* Content Section */}
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
};

export default CustomerService;
