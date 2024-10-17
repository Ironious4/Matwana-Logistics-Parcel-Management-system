import React from 'react';
import GetQuote from './Getquote';
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Matwana Logistics Parcel Tracking System</h1>
      <p>Efficiently manage your parcels with ease!</p>
      <GetQuote/>
    </div>
  );
};

export default HomePage;
