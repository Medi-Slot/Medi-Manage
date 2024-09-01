import React, { useState } from "react";
import "./style.css";
import { FaPlusCircle } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

function PatientData() {
  // Initial data
  const { handleAppointmentClick, handleIconClick } = useOutletContext();
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Jenny",
      dateofbirth: "18-11-1968",
      weight: "60kgs",
      gender: "Female",
    },
    {
      id: 2,
      name: "Albert",
      dateofbirth: "18-11-2004",
      weight: "60kgs",
      gender: "Male",
    },
    {
      id: 3,
      name: "Floyd",
      dateofbirth: "18-11-2005",
      weight: "60kgs",
      gender: "Male",
    },
    {
      id: 4,
      name: "Marvin",
      dateofbirth: "18-11-1994",
      weight: "60kgs",
      gender: "Male",
    },
  ]);

  const [selectedPatientId, setSelectedPatientId] = useState(null);

  // Calculate age from date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob.split("-").reverse().join("-"));
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  // Handle selecting a patient
  const handleSelect = (id) => {
    if (selectedPatientId === id) {
      // If the clicked patient is already selected, unselect it
      setSelectedPatientId(null);
    } else {
      // Otherwise, select the clicked patient
      setSelectedPatientId(id);
    }
    handleAppointmentClick();
  };
  

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
                {calculateAge(patient.dateofbirth)}
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

      {/* Uncomment to add a new patient */}
      {/* <h3 className='patient-data-h3'>Add New Patient</h3>
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
