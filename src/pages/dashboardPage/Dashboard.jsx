import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StatCard from "../../components/specific/dashboard/statcard/StatCard";
import patient from "../../assets/images/newpatient.png";
import bag from "../../assets/images/bag.png";
import "./style.css";
import PatientVisitChart from "../../components/specific/dashboard/patientvisitchart/PatientVisitChart";
import PatientData from "../../components/specific/dashboard/patientdata/PatientData";
import { setTitle } from "../../redux/slices/titleSlice";
import { db } from "../../Firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Dashboard = () => {
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = useSelector((state) => state.auth.user.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Dashboard"));
  }, [dispatch]);

  useEffect(() => {
    if (!userId) return;

    const patientCollectionRef = collection(
      db,
      "Hospitals",
      userId,
      "Patients"
    );

    const appointmentCollectionRef = collection(
      db,
      "Hospitals",
      userId,
      "Appointments"
    );

    // Set up the listener for Patients
    const unsubscribePatients = onSnapshot(
      patientCollectionRef,
      (querySnapshot) => {
        setPatientCount(querySnapshot.size);
      },
      (err) => {
        setError("Error fetching patient data: " + err.message);
      }
    );

    // Set up the listener for Appointments
    const unsubscribeAppointments = onSnapshot(
      appointmentCollectionRef,
      (querySnapshot) => {
        setAppointmentCount(querySnapshot.size);
        setLoading(false);
      },
      (err) => {
        setError("Error fetching appointment data: " + err.message);
        setLoading(false);
      }
    );

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribePatients();
      unsubscribeAppointments();
    };
  }, [userId]);

  if (loading) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "80vh",
          }}
        >
          <div className="boxes">
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    ); // or a spinner component
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-sub-container">
        <StatCard />
        <StatCard
          name="New Patient"
          image1={patient}
          value={patientCount} // Display patient count here
          change={1} // Example value, adjust as needed
        />
        <StatCard
          name="New Appointment"
          image1={bag}
          value={appointmentCount} // Display appointment count here
          change={1} // Example value, adjust as needed
        />
      </div>
      <div>
        <PatientVisitChart />
      </div>
      <div>
        <PatientData />
      </div>
    </div>
  );
};

export default Dashboard;
