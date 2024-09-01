import React from "react";
import "./style.css";

export default function NewPatient() {
  return (
    <div className="new-patient-layout">
      <h1>Add Details</h1>
      <form className="patient-form-new-patient-layout">
        <div className="form-group-new-patient-layout">
          <label htmlFor="name" className="label-new-patient-layout">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-new-patient-layout"
            placeholder="Enter name"
          />
        </div>

        <div className="form-group-new-patient-layout">
          <label htmlFor="dob" className="label-new-patient-layout">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="input-new-patient-layout"
          />
        </div>

        <div className="form-group-new-patient-layout">
          <label htmlFor="gender" className="label-new-patient-layout">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="input-new-patient-layout"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group-new-patient-layout">
          <label htmlFor="weight" className="label-new-patient-layout">
            Weight (kgs)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            className="input-new-patient-layout"
            placeholder="Enter weight"
          />
        </div>

        <button type="submit" className="submit-btn-new-patient-layout">
          Submit
        </button>
      </form>
    </div>
  );
}
