import React, { useState } from "react";
import Navbar from "../components/common/navbar/Navbar";
import { Outlet } from "react-router-dom";
import DoctorProfile from "../components/specific/doctorprofile/DoctorProfile";
import NewPatient from "../components/specific/patientPage/newPatient/NewPatient";
import Header from "../components/common/header/Header";

const Layout = () => {
  const [newPatient, setnewPatient] = useState(false);

  const handleIconClick = () => {
    setnewPatient(true);
  };
  return (
    <>
      <div
        className="layoutmain"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Navbar />
        <div className="layout-container" style={{ width: "67%" }}>
          <Header/>
          <Outlet context={{ handleIconClick }} />{" "}
          {/* This renders the nested routes (Inventory, Dashboard, etc.) */}
        </div>
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
      </div>
    </>
  );
};

export default Layout;
