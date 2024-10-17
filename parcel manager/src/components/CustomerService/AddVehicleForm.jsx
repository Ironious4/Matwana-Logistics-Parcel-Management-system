import React, { useState } from 'react';

const AddVehicleForm = () => {
  const [vehicleDetails, setVehicleDetails] = useState({
    vehicleNumber: '',
    driverName: '',
  });

  const handleInputChange = (e) => {
    setVehicleDetails({
      ...vehicleDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for adding vehicle
    console.log('Vehicle added:', vehicleDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="add-vehicle-form">
      <h2 className="form-heading">Add Vehicle</h2> {/* Centered subheading */}
      <div className="form-group">
        <label htmlFor="vehicleNumber">Vehicle Number</label>
        <input type="text" name="vehicleNumber" id="vehicleNumber" value={vehicleDetails.vehicleNumber} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="driverName">Driver Name</label>
        <input type="text" name="driverName" id="driverName" value={vehicleDetails.driverName} onChange={handleInputChange} required />
      </div>
      <button type="submit" className="form-btn">Add Vehicle</button>
    </form>
  );
};

export default AddVehicleForm;
