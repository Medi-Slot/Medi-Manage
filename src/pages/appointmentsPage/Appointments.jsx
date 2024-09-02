import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices/titleSlice";
import UpcomingAppointment from "../../components/common/upcomingAppointment/UpcomingAppointment";
import "./Appointments.css";
import PatientData from "../../components/specific/appointments/patientData/PatientData";
import DoctorGrid from "../../components/specific/doctorgride/DoctorGride";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Appointments = () => {
  const dispatch = useDispatch();
  const [bookSlotOpen, setBookSlotOpen] = useState(false);
  const [upcomingAppointmentOpen, setUpcomingAppointmentOpen] = useState(false);

  const handleBookOpen = () => {
    setBookSlotOpen(!bookSlotOpen);
  };

  const handleUpcomingAppointmentOpen = () => {
    setUpcomingAppointmentOpen(!upcomingAppointmentOpen);
  };

  useEffect(() => {
    dispatch(setTitle("Appointments"));
  }, [dispatch]);

  return (
    <div className="appointment-page-container">
      <button
        onClick={handleBookOpen}
        className={`appointment-page-dropdown-button ${
          bookSlotOpen ? "active" : ""
        }`}
      >
        <p>Book Slot</p>
        {!bookSlotOpen ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
      </button>
      {bookSlotOpen && (
        <div className="appointment-page-dropdown-content">
          <PatientData />
          <DoctorGrid />
        </div>
      )}
      <br />
      <button
        onClick={handleUpcomingAppointmentOpen}
        className={`appointment-page-dropdown-button ${
          upcomingAppointmentOpen ? "active" : ""
        }`}
      >
        <p>Upcoming Appointment</p>
        {!upcomingAppointmentOpen ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
      </button>
      {upcomingAppointmentOpen && (
        <div className="appointment-page-dropdown-content">
          <UpcomingAppointment size="2rem" />
        </div>
      )}
    </div>
  );
};

export default Appointments;
