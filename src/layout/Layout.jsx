import React, { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Header from "../components/common/header/Header";
import HospitalProfile from "../components/specific/dashboard/hospitalprofile/HospitalProfile";
import NewPatient from "../components/specific/patientPage/newPatient/NewPatient";
import NewMedicine from "../components/specific/inventory/pharmaceuticals/NewMedicine";
import SetSlot from "../components/specific/appointments/setSlot/SetSlot";
import UpdateProduct from "../components/specific/inventory/updateProduct/updateProduct";
import DoctorForm from "../components/specific/doctorform/DoctorForm";

const Layout = () => {
  // Single state variable to track which component is active
  const [activeComponent, setActiveComponent] = useState(null);

  const location = useLocation();

  // Reset the activeComponent state when the route changes
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActiveComponent("hospitalProfile");
    } else {
      setActiveComponent(null);
    }
  }, [location.pathname]);

  // Event handlers that set the active component
  const handleNewMedicineClick = () => {
    setActiveComponent("newMedicine");
  };

  const handleNewDoctorClick = () => {
    setActiveComponent("newDoctor");
  };

  const handleDoctorProfileClick = () => {
    setActiveComponent("hospitalProfile");
  };

  const handleIconClick = () => {
    setActiveComponent("newPatient");
  };

  const handleEditClick = () => {
    setActiveComponent("editInventory");
  };

  const handleAppointmentClick = () => {
    setActiveComponent((prev) => (prev === "setSlot" ? null : "setSlot"));
  };

  return (
    <div
      className="layoutmain"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Navbar />
      <div className="layout-container" style={{ width: "67%" }}>
        <Header />
        <Outlet
          context={{
            handleIconClick,
            handleNewDoctorClick,
            handleNewMedicineClick,
            handleEditClick,
            handleAppointmentClick,
            handleDoctorProfileClick,
          }}
        />
      </div>
      <section
        style={{
          width: "300px",
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        {/* Conditionally render the component based on the activeComponent state */}
        {activeComponent === "hospitalProfile" && <HospitalProfile />}
        {activeComponent === "setSlot" && <SetSlot />}
        {activeComponent === "newPatient" && <NewPatient />}
        {activeComponent === "newMedicine" && <NewMedicine />}
        {activeComponent === "editInventory" && <UpdateProduct />}
        {activeComponent === "newDoctor" && <DoctorForm />}
      </section>
    </div>
  );
};

export default Layout;
