import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Header from "../components/common/header/Header";
import DoctorProfile from "../components/specific/doctorprofile/DoctorProfile";
import NewPatient from "../components/specific/patientPage/newPatient/NewPatient";
import NewMedicine from "../components/specific/inventory/pharmaceuticals/NewMedicine";
import SetSlot from "../components/specific/appointments/SetSlot";
import UpdateProduct from "../components/specific/inventory/updateProduct/updateProduct";

const Layout = () => {
  const [newPatient, setNewPatient] = useState(false);
  const [newMedicine, setNewMedicine] = useState(false);
  const [editInventory, setEditInventory] = useState(false);
  const location = useLocation();

  const handleNewMedicineClick = () => {
    setNewMedicine(true);
  };

  const handleIconClick = () => {
    setNewPatient(true);
  };
  const handleEditClick = () => {
    setEditInventory(true);
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
          <Outlet
            context={{
              handleIconClick,
              handleNewMedicineClick,
              handleEditClick,
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
          {location.pathname === "/dashboard" && <DoctorProfile />}
          {location.pathname === "/appointments" && <SetSlot />}
          {newPatient && <NewPatient />}
          {newMedicine && <NewMedicine />}
          {editInventory && <UpdateProduct />}
        </section>
      </div>
    </>
  );
};

export default Layout;
