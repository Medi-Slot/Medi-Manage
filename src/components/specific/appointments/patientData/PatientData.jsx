import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { auth, db } from "../../../../Firebase"; // Adjust path as necessary
import { collection, getDocs } from "firebase/firestore";
import "./style.css";
import { useDispatch } from "react-redux";
import { setPatientData } from "../../../../redux/slices/appointmentSlice";

function PatientData() {
  const { handleIconClick, handleAppointmentClick } = useOutletContext();
  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check for current user and fetch patient data once the user is available
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setError("User not authenticated. Please log in.");
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  useEffect(() => {
    if (!userId) {
      console.error("User is not authenticated");
      return;
    }

    // Fetch patient data from Firestore
    const fetchPatients = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "Hospitals", userId, "Patients")
        );
        const patientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatients(patientsData);
      } catch (error) {
        console.error("Error fetching patients: ", error);
      }
    };

    fetchPatients();
  }, [userId]);

  // Handle selecting a patient
  const handleSelect = (id) => {
    const requiredUser = patients.reduce(()=>{
      return patients.find((patient) => patient.id === id);
    })
    setSelectedPatientId(id);
    dispatch(setPatientData({
      patId: requiredUser.id,
      patName: requiredUser.name,
    }));
    console.log(requiredUser)
    handleAppointmentClick(id);
    if (selectedPatientId === id) {
      setSelectedPatientId(null);
    }
  };

  // Calculate age from date of birth
  const calculateAge = (dob) => {
    const Dob = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today.valueOf() - Dob.valueOf();
    const ageInYears = Math.floor(
      ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25
    ); // 365.25 for leap years
    return ageInYears;
  };

  if (!userId) {
    return <p>User not authenticated. Please log in to see patient data.</p>;
  }

  return (
    <div className="patient-data-container">
      <div className="patient-data-header">
        <h2 className="patient-data-h2" style={{ marginBottom: "0" }}>
          Patient Data
        </h2>
        <FaPlusCircle
          style={{ fontSize: "1.5rem", color: "#4A4A4A", cursor: "pointer" }}
          onClick={handleIconClick}
        />
      </div>
      {patients.length > 0 ? (
        <table className="patient-data-table">
          <thead className="patient-data-table-head">
            <tr>
              <th className="patient-data-head">Patient Name</th>
              <th className="patient-data-head">Age</th>
              <th className="patient-data-head">Weight</th>
              <th className="patient-data-head">Gender</th>
              <th className="patient-data-head">Select</th>
            </tr>
          </thead>
          <tbody className="patient-data-table-body">
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="patient-data-values-names">{patient.name}</td>
                <td className="patient-data-values">
                  {calculateAge(patient.dob)}
                </td>
                <td className="patient-data-values">{patient.weight}</td>
                <td className="patient-data-values">{patient.gender}</td>
                <td>
                  <div
                    onClick={() => handleSelect(patient.id)}
                    className={`patient-data-select ${
                      selectedPatientId === patient.id ? "selected" : ""
                    }`}
                  >
                    {selectedPatientId === patient.id ? "•" : "○"}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patients found.</p>
      )}
    </div>
  );
}

export default PatientData;
