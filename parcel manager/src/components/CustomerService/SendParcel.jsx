import React, { useState } from 'react';

const SendParcelForm = () => {
  const [parcelDetails, setParcelDetails] = useState({
    sender: '',
    recipient: '',
    weight: '',
    destination: '',
  });

  const handleInputChange = (e) => {
    setParcelDetails({
      ...parcelDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending parcel details
    console.log('Parcel sent:', parcelDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="send-parcel-form">
      <h2 className="form-heading">Send Parcel</h2> {/* Centered subheading */}
      <div className="form-group">
        <label htmlFor="sender">Sender</label>
        <input type="text" name="sender" id="sender" value={parcelDetails.sender} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="recipient">Recipient</label>
        <input type="text" name="recipient" id="recipient" value={parcelDetails.recipient} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight (kg)</label>
        <input type="number" name="weight" id="weight" value={parcelDetails.weight} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input type="text" name="destination" id="destination" value={parcelDetails.destination} onChange={handleInputChange} required />
      </div>
      <button type="submit" className="form-btn">Send Parcel</button>
    </form>
  );
};

export default SendParcelForm;
