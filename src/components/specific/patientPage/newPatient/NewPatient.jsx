// NewPatient.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { auth, db } from "../../../../Firebase"; // Adjust path as necessary
import "./style.css";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";

export default function NewPatient() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    weight: "",
  });

  const userId= auth.currentUser.uid;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const patientRef = collection(db, "Hospitals", userId, "Patients");
      await addDoc(patientRef, formData);
      toast.success("Patient  added successfully!");
      setFormData({
        name: "",
        dob: "",
        gender: "",
        weight: "",
      });
    } catch (error) {
      console.error("Error adding patient: ", error);
      toast.error("Error adding patient.");
    }
  };

  return (
    <div className="new-patient-layout">
      <h1>Add Details</h1>
      <form className="patient-form-new-patient-layout" onSubmit={handleSubmit}>
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.dob}
            onChange={handleChange}
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
            value={formData.gender}
            onChange={handleChange}
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
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn-new-patient-layout">
          Submit
        </button>
      </form>
    </div>
  );
}
