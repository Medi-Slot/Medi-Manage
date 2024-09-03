import React, { useState, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { auth, db } from "../../../../Firebase"; // Adjust path as necessary
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import "./style.css";
import * as XLSX from "xlsx";

function PatientData() {
  const { handleIconClick } = useOutletContext();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check for current user and fetch patient data once the user is available
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setError("User not authenticated. Please log in.");
        setLoading(false);
      }
    });

    return () => unsubscribeAuth(); // Cleanup the subscription on unmount
  }, []);

  useEffect(() => {
    if (!userId) return;

    // Real-time listener for the Patients collection
    const unsubscribeFirestore = onSnapshot(
      collection(db, "Hospitals", userId, "Patients"),
      (snapshot) => {
        const patientsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatients(patientsData);
        setLoading(false);
      },
      (error) => {
        setError("Error fetching patients: " + error.message);
        setLoading(false);
      }
    );

    return () => unsubscribeFirestore(); // Cleanup the subscription on unmount
  }, [userId]);

  // Handle deleting a patient
  const deletePatient = async (id) => {
    try {
      await deleteDoc(doc(db, "Hospitals", userId, "Patients", id));
      setPatients(patients.filter((patient) => patient.id !== id));
    } catch (error) {
      console.error("Error deleting patient: ", error);
    }
  };

  // Calculate age from date of birth
  const calculateAge = (dob) => {
    if (!dob) return "N/A";
    try {
      const Dob = new Date(dob);
      const today = new Date();
      const ageInMilliseconds = today.valueOf() - Dob.valueOf();
      const ageInYears = Math.floor(
        ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25
      ); // 365.25 for leap years
      return ageInYears;
    } catch (error) {
      console.error("Error calculating age: ", error);
      return "Invalid Date";
    }
  };

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(patients);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "PatientData");
    XLSX.writeFile(wb, "PatientData.xlsx");
  };

  return (
    <div className="patient-data-container">
      <div className="patient-data-header">
        <h2 className="patient-data-h2" style={{ marginBottom: "0" }}>
          Patient Data
        </h2>
        <div className="patient-data-icon-container">
          <FaPlusCircle
            style={{
              fontSize: "1.5rem",
              color: "#4A4A4A",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
            onClick={handleIconClick}
          />
          <button
            className="patient-data-download-button"
            onClick={downloadExcel}
          >
            Download all
          </button>
        </div>
      </div>
      <table className="patient-data-table">
        <thead className="patient-data-table-head">
          <tr>
            <th className="patient-data-head">Patient Name</th>
            <th className="patient-data-head">Age</th>
            <th className="patient-data-head">Weight</th>
            <th className="patient-data-head">Gender</th>
            <th className="patient-data-head">Actions</th>
          </tr>
        </thead>

        <tbody className="patient-data-table-body">
          {loading ? (
            <tr>
              <td colSpan="5">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "50vh",
                  }}
                >
                  <div className="three-body">
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                  </div>
                </div>
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="5">{error}</td>
            </tr>
          ) : patients.length === 0 ? (
            <tr>
              <td colSpan="5">No patients found.</td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td className="patient-data-values-names">{patient.name}</td>
                <td className="patient-data-values">
                  {calculateAge(patient.dob)}
                </td>
                <td className="patient-data-values">{patient.weight}</td>
                <td className="patient-data-values">{patient.gender}</td>
                <td>
                  <button
                    onClick={() => deletePatient(patient.id)}
                    className="patient-data-delete-button"
                  >
                    <MdOutlineDeleteOutline
                      style={{
                        fontSize: "1.7rem",
                        marginTop: "0.5rem",
                        color: "#FF8E26",
                        cursor: "pointer",
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PatientData;
