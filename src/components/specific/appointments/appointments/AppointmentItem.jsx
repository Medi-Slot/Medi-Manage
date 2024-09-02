import './style.css';

const AppointmentItem = () => {
  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h2>Upcoming Appointment</h2>
      </div>
      <div className="appointment-date">
        <span>July 30, 2022</span>
      </div>
    </div>
  );
};

export default AppointmentItem;
