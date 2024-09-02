import React from 'react';
import './style.css';
import hp from '../../../../assets/images/hp.png'
import PatientSatisfaction from '../../patientSatisfaction/PatientSatisfaction';
import UpcomingAppointment from '../../../common/upcomingAppointment/UpcomingAppointment';

const HospitalProfile = () => {
  return (
    <div className="hospital-profile">
      <div className="hospital-profile-hospital-image-placeholder">
        <img src={hp} alt="hospital" />
      </div>
      <h2>Harsha Hospital</h2>

      <div className="hospital-profile-hospital-stats">
        <div className="hospital-profile-stat">
          <p>Appointment</p>
          <h3>500</h3>
        </div>
        <div className="hospital-profile-stat">
          <p>Total Patients</p>
          <h3>3k</h3>
        </div>
        <div className="hospital-profile-stat">
          <p>Rate</p>
          <h3>4.8</h3>
        </div>
      </div>
      <hr className="hospital-profile-divider" />

      <UpcomingAppointment size="1rem"/>
    </div>
  );
};

export default HospitalProfile;
