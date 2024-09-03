import React from "react";
import "./style.css";
import Hospital from "../../../../assets/images/6634380.png";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="landing-page-welcome">
      <div className="landing-page-welcome-left-section">
        <div className="landing-page-welcome-left-section-welcome-text">
          <h1>Welcome to</h1>
          <h1>Medi-Manage</h1>
        </div>
        <div className="landing-page-welcome-left-section-description">
          <p>
            We are committed to providing you with the best medical and
            healthcare services to help you live healthier and happier
          </p>
        </div>
        <Link
          to="/signup"
          className="landing-page-navbar-login-box-button-1-txt-link"
        >
          <button className="landing-page-welcome-left-section-button">
            Get Started
          </button>
        </Link>
      </div>
      <img src={Hospital} alt="Hospital-img" />
    </div>
  );
}
