import React from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

export default function Review({ Image, Name, Location, Rating, Review }) {
  return (
    <div className="landing-page-review">
      <div className="landing-page-review-section-1">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={Image} alt="Person" />
          <div>
            <h3>{Name}</h3>
            <p>{Location}</p>
          </div>
        </div>
        <div className="landing-page-review-section-1-rating">
          <h3>{Rating}</h3>
          <FaStar
            style={{
              marginLeft: "0.5rem",
              marginTop: "-0.2rem",
              color: "#FEA250",
            }}
          />
        </div>
      </div>
      <p
        className="landing-page-review-section-p"
        style={{ textAlign: "left", lineHeight: "1.5rem", marginTop: "1.3rem" }}
      >
        {Review}
      </p>
    </div>
  );
}
