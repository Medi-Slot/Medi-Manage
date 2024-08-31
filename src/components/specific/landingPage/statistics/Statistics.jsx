import React from "react";
import "./style.css";
import { CiHospital1 } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";

export default function Statistics() {
  return (
    <div className="landing-page-statistics">
      <div className="landing-page-statistics-inner">
        <div className="landing-page-statistics-inner-container">
          <div className="landing-page-statistics-inner-container-logo-container">
            <CiHospital1
              style={{ fontSize: "2rem", padding: "0", color: "#057DCD" }}
            />
          </div>
          <div className="landing-page-statistics-inner-container-text-container">
            <h3>90+</h3>
            <h4>Hospitals</h4>
          </div>
        </div>
        <div className="landing-page-statistics-inner-container">
          <div className="landing-page-statistics-inner-container-logo-container">
            <FaUserDoctor
              style={{ fontSize: "1.5rem", padding: "0", color: "#057DCD" }}
            />
          </div>
          <div className="landing-page-statistics-inner-container-text-container">
            <h3>300+</h3>
            <h4>Doctors</h4>
          </div>
        </div>
        <div className="landing-page-statistics-inner-container">
          <div className="landing-page-statistics-inner-container-logo-container">
            <GrUserManager
              style={{ fontSize: "1.5rem", padding: "0", color: "#057DCD" }}
            />
          </div>
          <div className="landing-page-statistics-inner-container-text-container">
            <h3>500+</h3>
            <h4>Patients</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
