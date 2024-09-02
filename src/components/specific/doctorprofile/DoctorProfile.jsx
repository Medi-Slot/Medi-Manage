import React from 'react';
import './style.css';
import hp from '../../../assets/images/hp.png'
import PatientSatisfaction from '../patientSatisfaction/PatientSatisfaction';
import UpcomingAppointment from '../../common/upcomingAppointment/UpcomingAppointment';

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
      <hr className="doctor-profile-divider" />

      <UpcomingAppointment size="1rem"/>
    </div>
  );
};

export default DoctorProfile;
