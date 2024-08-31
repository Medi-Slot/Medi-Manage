import React from 'react';
import { MdOutlineEventAvailable } from 'react-icons/md'; 
import "./style.css"; 

const AppointmentItem = ({ date, patientName, doctorName }) => {
  return (
    <div className="appointment-item-container">
      <div className="appointment-date">
        <MdOutlineEventAvailable />
        <span>{date}</span>
      </div>
      <div className="appointment-details">
        <p>{patientName}</p>
        <p>{doctorName}</p>
      </div>
    </div>
  );
};

export default AppointmentItem;
