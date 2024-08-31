import React from "react";
import "./style.css";
import Question from "../../../../assets/images/Questions-rafiki.png";
export default function ChooseUs() {
  return (
    <div className="landing-page-choose-us">
      <img src={Question} alt="Why Choose us?" />
      <div className="landing-page-choose-us-desc">
        <h1>Why choose</h1>
        <h1>Medi-Manage?</h1>
        <p>
          Medi-Manage revolutionizes the way hospitals manage patient
          appointments, bed allocations, and inventory. Designed to streamline
          operations, Medi-Slot reduces patient wait times, optimizes resource
          usage, and enhances overall efficiency.
        </p>
      </div>
    </div>
  );
}
