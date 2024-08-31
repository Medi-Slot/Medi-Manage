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
      <div className="landing-page-navbar-list">
        <h3>About</h3>
        <h3>Features</h3>
        <h3>Testimonials</h3>
      </div>
      <div className="landing-page-navbar-login-box">
        <button className="landing-page-navbar-login-box-button-1">
          <span className="landing-page-navbar-login-box-button-1-txt">
            Sign In
          </span>
        </button>
        <button className="landing-page-navbar-login-box-button-2">
          <span className="landing-page-navbar-login-box-button-2-txt">
            Sign Up
          </span>
        </button>
      </div>
    </div>
  );
}
