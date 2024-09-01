import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Header from "../components/common/header/Header";
import DoctorProfile from "../components/specific/doctorprofile/DoctorProfile";
import NewPatient from "../components/specific/patientPage/newPatient/NewPatient";
import NewMedicine from "../components/specific/inventory/pharmaceuticals/NewMedicine"; // Import NewMedicine component
 // Import NewMedicine component

const Layout = () => {
  const [newPatient, setNewPatient] = useState(false);
  const location = useLocation();
  const [newMedicine , setNewMedicine]=useState(false);

  const handleNewMedicineClick = () =>{
    setNewMedicine(true);
  }

  const handleIconClick = () => {
    console.log("hdhgqkuefgqulfey");
    setNewPatient(true);
  };

  return (
    <>
      <div className="layoutmain" style={{ display: "flex", flexDirection: "row" }}>
        <Navbar />
        <div className="layout-container" style={{ width: "67%" }}>
          {/* Pass both handlers to Outlet context */}
          <Header />
          <Outlet context={{ handleIconClick , handleNewMedicineClick }} />
        </div>
        {location.pathname === "/dashboard" ? (
          <DoctorProfile />
        ) : (
          <section
            style={{
              width: "300px",
              backgroundColor: "white",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            {newPatient && <NewPatient />}
            {newMedicine && <NewMedicine />}
          </section>
        )}
      </div>
    </>
  );
};

export default Layout;
