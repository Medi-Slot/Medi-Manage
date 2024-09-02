import React from 'react';
import './style.css';
import { useOutletContext } from 'react-router-dom';

const DoctorGrid = () => {
  const doctors = Array(12).fill('Dr. Harsha');
  const { handleNewDoctorClick } = useOutletContext();
  const {handleDoctorProfileClick} = useOutletContext();

  return (
    <div className="doctor-grid">
      <div className="doctor-card add-doctor" onClick={handleNewDoctorClick}>
        <div className="doctor-grid-plus-icon">+</div>
        <div className="doctor-name" >Add Dr</div>
      </div>
      {doctors.map((doctor, index) => (
        <div className="doctor-card" key={index} onClick={handleDoctorProfileClick}>
          <div className="doctor-image"></div>
          <div className="doctor-name">{doctor}</div>
        </div>
      ))}
    </div>
  );
};

export default DoctorGrid;
