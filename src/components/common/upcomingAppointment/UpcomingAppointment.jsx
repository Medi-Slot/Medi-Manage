import React from 'react'

const UpcomingAppointment = ({size}) => {
  return (
    <div className="doctor-profile-upcoming-appointments">
        <h4 style={{fontSize:size}}>Upcoming Appointment</h4>
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
                <p className="doctor-profile-patient-name">Surya A</p>
                <p className="doctor-profile-doctor-name">Dr. Venkat</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default UpcomingAppointment