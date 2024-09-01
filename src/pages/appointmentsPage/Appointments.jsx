import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices/titleSlice";
import UpcomingAppointment from "../../components/common/upcomingAppointment/UpcomingAppointment";
import "./Appointments.css";
import PatientData from "../../components/specific/appointments/patientData/PatientData";
import DoctorGrid from "../../components/specific/doctorgride/DoctorGride";

const Appointments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Appointments"));
  }, [dispatch]);

  return (
    <div className="appointment-page-container">
      <PatientData/>
      <DoctorGrid/>
      <UpcomingAppointment size="2rem"/>
    </div>
  );
};

export default Appointments;
