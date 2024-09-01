import React from 'react';
import './style.css';
import hp from '../../../assets/images/hp.png'
import PatientSatisfaction from '../patientSatisfaction/PatientSatisfaction';

const DoctorProfile = () => {
  return (
    <div className="doctor-profile">
      <div className="doctor-profile-doctor-image-placeholder">
        <img src={hp} alt="Doctor" />
      </div>
      <h2>Dr. Harsha</h2>

      <div className="doctor-profile-doctor-stats">
        <div className="doctor-profile-stat">
          <p>Appointment</p>
          <h3>500</h3>
        </div>
        <div className="doctor-profile-stat">
          <p>Total Patients</p>
          <h3>3k</h3>
        </div>
        <div className="doctor-profile-stat">
          <p>Rate</p>
          <h3>4.8</h3>
        </div>
      </div>

      <div className="doctor-profile-upcoming-appointments">
        <hr className="doctor-profile-divider" />
        <h4>Upcoming Appointment</h4>
        <div className="doctor-profile-date-line">
          <span className="doctor-profile-appointment-date">July 30, 2022</span>
        </div>
        <ul>
          <li>
            <div className="doctor-profile-appointment-info">
              <span className="doctor-profile-time">08:30 am - 09:00 am</span>
              <div className="doctor-profile-appointment-details">
                <p className="doctor-profile-patient-name">Harikesh A</p>
                <p className="doctor-profile-doctor-name">Dr. Shiva</p>
              </div>
            </div>
          </li>
          <hr className="doctor-profile-appointment-divider" />
          <li>
            <div className="doctor-profile-appointment-info">
              <span className="doctor-profile-time">09:00 am - 09:30 am</span>
              <div className="doctor-profile-appointment-details">
                <p className="doctor-profile--name">Surya A</p>
                <p className="doctor-profile-doctor-name">Dr. Venkat</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <PatientSatisfaction />
      </div>
    </div>
  );
};

export default DoctorProfile;
