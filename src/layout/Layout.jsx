import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Header from "../components/common/header/Header";
import DoctorProfile from "../components/specific/doctorprofile/DoctorProfile";
import NewPatient from "../components/specific/patientPage/newPatient/NewPatient";

const Layout = () => {
  const [newPatient, setNewPatient] = useState(false);
  const location = useLocation();

  const handleIconClick = () => {
    setNewPatient(true);
  };

  return (
    <>
      <div
        className="layoutmain"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Navbar />
        <div className="layout-container" style={{ width: "67%" }}>
          <Header />
          <Outlet context={{ handleIconClick }} />
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
          </section>
        )}
      </div>
    </>
  );
};

export default Layout;
