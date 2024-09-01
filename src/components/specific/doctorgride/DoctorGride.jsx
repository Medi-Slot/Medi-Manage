import React from 'react';
import './style.css';

const DoctorGrid = () => {
  const doctors = Array(12).fill('Dr. Harsha');

  return (
    <div className="doctor-grid">
      <div className="doctor-card add-doctor">
        <div className="doctor-grid-plus-icon">+</div>
        <div className="doctor-name">Add Dr</div>
      </div>
      {doctors.map((doctor, index) => (
        <div className="doctor-card" key={index}>
          <div className="doctor-image"></div>
          <div className="doctor-name">{doctor}</div>
        </div>
      ))}
    </div>
  );
};

export default DoctorGrid;
