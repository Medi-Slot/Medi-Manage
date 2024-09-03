import React from "react";
import MediManage from "../../../../assets/images/Medi-Manage_logo.png";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="landing-page-navbar">
      <div className="landing-page-navbar-logo">
        <img src={MediManage} alt="Medi-Manage logo" />
        <h2>Medi-Manage</h2>
      </div>
      <div className="landing-page-navbar-list">
        <h3>
          <a href="#chooseus">About</a>
        </h3>
        <h3>
          <a href="#facilities">Features</a>
        </h3>
        <h3>
          <a href="#trust">Testimonials</a>
        </h3>
      </div>
      <div className="landing-page-navbar-login-box">
        <button className="landing-page-navbar-login-box-button-1">
          <span className="landing-page-navbar-login-box-button-1-txt">
            <Link
              to="/login"
              className="landing-page-navbar-login-box-button-1-txt-link"
            >
              {" "}
              Sign In
            </Link>
          </span>
        </button>
        <Link
          to="/signup"
          className="landing-page-navbar-login-box-button-1-txt-link"
        >
          <button className="landing-page-navbar-login-box-button-2">
            <span className="landing-page-navbar-login-box-button-2-txt">
              {" "}
              Sign Up
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
