import React from "react";
import "../../specific/doctorprofile/style.css";

const UpcomingAppointment = ({ size }) => {
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const today = new Date();
  const date = formatDate(today);

  // Array of appointment data
  const appointments = [
    {
      time: "08:30 am - 09:00 am",
      patientName: "Harikesh A",
      doctorName: "Dr. Shiva"
    },
    {
      time: "09:00 am - 09:30 am",
      patientName: "Surya A",
      doctorName: "Dr. Venkat"
    }
  ];

  return (
    <div className="doctor-profile-upcoming-appointments">
      <h4 style={{ fontSize: size }}>Upcoming Appointment</h4>
      <div className="doctor-profile-date-line">
        <span className="doctor-profile-appointment-date">{date}</span>
      </div>
      <ul>
        {appointments.map((appointment, index) => (
          <React.Fragment key={index}>
            <li>
              <div className="doctor-profile-appointment-info">
                <span className="doctor-profile-time">{appointment.time}</span>
                <div className="doctor-profile-appointment-details">
                  <p className="doctor-profile-patient-name">{appointment.patientName}</p>
                  <p className="doctor-profile-doctor-name">{appointment.doctorName}</p>
                </div>
              </div>
            </li>
            {index < appointments.length - 1 && <hr className="doctor-profile-appointment-divider" />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAppointment;
