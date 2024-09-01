import React, { useState } from "react";
import "./style.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

function PatientData() {
  // Initial data
  const { handleNewPatientClick } = useOutletContext();
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Jenny",
      dateIn: "Nov 18, 2024",
      symptoms: "pain",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Albert",
      dateIn: "Nov 18, 2024",
      symptoms: "pain",
      status: "Incoming",
    },
    {
      id: 3,
      name: "Floyd",
      dateIn: "Nov 18, 2024",
      symptoms: "pain",
      status: "Confirmed",
    },
    {
      id: 4,
      name: "Marvin",
      dateIn: "Nov 18, 2024",
      symptoms: "pain",
      status: "Cancelled",
    },
  ]);

  const [newPatient, setNewPatient] = useState({
    name: "",
    dateIn: "",
    symptoms: "",
    status: "",
  });

  // Handle adding a new patient
  const addPatient = () => {
    setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
    setNewPatient({ name: "", dateIn: "", symptoms: "", status: "" });
  };

  // Handle deleting a patient
  const deletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div className="patient-data-container">
      <div className="patient-data-header">
        <h2 className="patient-data-h2" style={{ marginBottom: "0" }}>
          Patient Data
        </h2>
        <FaPlusCircle
          style={{ fontSize: "1.5rem", color: "#4A4A4A", cursor: "pointer" }}
          onClick={handleNewPatientClick}
        />
      </div>
      <table className="patient-data-table">
        <thead className="patient-data-table-head">
          <tr>
            <th className="patient-data-head">Patient Name</th>
            <th className="patient-data-head">Date In</th>
            <th className="patient-data-head">Symptoms</th>
            <th className="patient-data-head">Status</th>
          </tr>
        </thead>

        <tbody className="patient-data-table-body">
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="patient-data-values-names">{patient.name}</td>
              <td className="patient-data-values">{patient.dateIn}</td>
              <td className="patient-data-values">{patient.symptoms}</td>
              <td className="patient-data-values">{patient.status}</td>
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
          ))}
        </tbody>
      </table>

      {/* <h3 className='patient-data-h2'>Add New Patient</h3>
      <input
        type="text"
        placeholder="Name"
        value={newPatient.name}
        onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Date In"
        value={newPatient.dateIn}
        onChange={(e) => setNewPatient({ ...newPatient, dateIn: e.target.value })}
      />
      <input
        type="text"
        placeholder="Symptoms"
        value={newPatient.symptoms}
        onChange={(e) => setNewPatient({ ...newPatient, symptoms: e.target.value })}
      />
      <input
        type="text"
        placeholder="Status"
        value={newPatient.status}
        onChange={(e) => setNewPatient({ ...newPatient, status: e.target.value })}
      />
      <button onClick={addPatient}>Add Patient</button> */}
    </div>
  );
}

export default PatientData;
