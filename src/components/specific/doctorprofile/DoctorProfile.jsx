import React from 'react';
import './style.css';
import hp from '../../../assets/images/hp.png'

const DoctorProfile = () => {
  return (
    <div className="doctor-profile">
      <div className="doctor-image-placeholder">
        <img src={hp} alt="Doctor" />
      </div>
      <h2>Dr. Harsha</h2>

      <div className="doctor-stats">
        <div className="stat">
          <p>Appointment</p>
          <h3>500</h3>
        </div>
        <div className="stat">
          <p>Total Patients</p>
          <h3>3k</h3>
        </div>
        <div className="stat">
          <p>Rate</p>
          <h3>4.8</h3>
        </div>
      </div>

      <div className="upcoming-appointments">
        <hr className="divider" />
        <h4>Upcoming Appointment</h4>
        <div className="date-line">
          <span className="appointment-date">July 30, 2022</span>
        </div>
        <ul>
          <li>
            <div className="appointment-info">
              <span className="time">08:30 am - 09:00 am</span>
              <div className="appointment-details">
                <p className="patient-name">Harikesh A</p>
                <p className="doctor-name">Dr. Shiva</p>
              </div>
            </div>
          </li>
          <hr className="appointment-divider" />
          <li>
            <div className="appointment-info">
              <span className="time">09:00 am - 09:30 am</span>
              <div className="appointment-details">
                <p className="patient-name">Surya A</p>
                <p className="doctor-name">Dr. Venkat</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorProfile;
