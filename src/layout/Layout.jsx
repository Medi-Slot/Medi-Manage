import React, { useState } from "react";
import Navbar from "../components/common/navbar/Navbar";
import { Outlet } from "react-router-dom";
import DoctorProfile from "../components/specific/doctorprofile/DoctorProfile";
import NewPatient from "../components/specific/patientPage/newPatient/NewPatient";
import NewMedicine from "../components/specific/inventory/pharmaceuticals/NewMedicine"; // Import NewMedicine component
 // Import NewMedicine component

const Layout = () => {
  const [activeForm, setActiveForm] = useState(null); // Track which form is active

  const handleNewPatientClick = () => {
    setActiveForm("patient");
  };

  const handleNewMedicineClick = () => {
    setActiveForm("medicine");
  };

  return (
    <>
      <div className="layoutmain" style={{ display: "flex", flexDirection: "row" }}>
        <Navbar />
        <div className="layout-container" style={{ width: "67%" }}>
          {/* Pass both handlers to Outlet context */}
          <Outlet context={{ handleNewPatientClick, handleNewMedicineClick }} /> 
        </div>
        <section
          style={{
            width: "300px",
            backgroundColor: "white",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          {activeForm === "patient" && <NewPatient />}
          {activeForm === "medicine" && <NewMedicine />}
        </section>
      </div>
    </>
  );
};

export default Layout;
