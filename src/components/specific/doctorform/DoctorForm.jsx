import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import "./style.css";
import { db, auth } from "../../../Firebase";
const DoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    doctorName: "",
    speciality: "",
    qualification: "",
    experience: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setDoctorData({
      ...doctorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    try {
      // Add the doctor data under the Hospital collection -> specific docID -> Doctors subcollection
      const docRef = await addDoc(
        collection(db, "Hospitals", user.uid, "Doctors"),
        {
          ...doctorData,
        }
      );
      console.log("Doctor added with ID: ", docRef.id);
      // Optionally, reset the form
      setDoctorData({
        doctorName: "",
        speciality: "",
        qualification: "",
        experience: "",
        phoneNumber: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="doctor-form-container">
      <div className="doctor-form-header">
        <div className="doctor-form-doctor-image-input">
          <input type="file" accept="image/*" />
        </div>
        <div className="doctor-form-form-title">
          <h2>Register</h2>
          <p>Enter doctor details</p>
        </div>
      </div>

      <form className="doctor-form" onSubmit={handleSubmit}>
        <div className="doctor-form-group">
          <label>Name of the Doctor</label>
          <input
            type="text"
            name="doctorName"
            placeholder="Ex: Phani Kumar"
            value={doctorData.doctorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="doctor-form-group">
          <label>Speciality</label>
          <input
            type="text"
            name="speciality"
            placeholder="Ex: Cardiologist"
            value={doctorData.speciality}
            onChange={handleChange}
            required
          />
        </div>

        <div className="doctor-form-group">
          <label>Qualification</label>
          <input
            type="text"
            name="qualification"
            placeholder="Ex: MBBS, MD"
            value={doctorData.qualification}
            onChange={handleChange}
            required
          />
        </div>

        <div className="doctor-form-group">
          <label>Experience (in yrs)</label>
          <input
            type="number"
            name="experience"
            placeholder="Ex: 5"
            value={doctorData.experience}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="doctor-form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Ex: 9876543210"
            value={doctorData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="doctor-form-submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
