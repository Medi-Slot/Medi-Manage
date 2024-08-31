import React from "react";
import MediManage from "../../../../assets/images/Medi-Manage_logo.png";
import "./style.css";

export default function Navbar() {
  return (
    <div className="landing-page-navbar">
      <div className="landing-page-navbar-logo">
        <img src={MediManage} alt="Medi-Manage logo" />
        <h2>Medi-Manage</h2>
      </div>
    </div>
  );
}
