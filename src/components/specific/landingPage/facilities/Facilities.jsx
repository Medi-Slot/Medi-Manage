import React from "react";
import "./style.css";
import Schedule from "../../../../assets/images/Schedule-rafiki.png";
import Bed from "../../../../assets/images/Hospital-bed.png";
import Visual from "../../../../assets/images/Visual-data-.png";
export default function Facilities() {
  return (
    <div className="landing-page-facilities">
      <h1>Our Facilities</h1>
      <div className="landing-page-facilities-container">
        <div className="landing-page-facilities-card">
          <img src={Schedule} alt="Slot Booking" />
          <h2>Slot Management</h2>
          <p>Manage Appointments, Streamline Patient Flow.</p>
        </div>
        <div className="landing-page-facilities-card">
          <img src={Bed} alt="Slot Booking" />
          <h2>Beds Management</h2>
          <p>Efficient Bed Management for Optimal Patient Care</p>
        </div>
        <div className="landing-page-facilities-card">
          <img src={Visual} alt="Slot Booking" />
          <h2>Inventory Management</h2>
          <p>Smart Inventory, Seamless Operations.</p>
        </div>
      </div>
    </div>
  );
}
