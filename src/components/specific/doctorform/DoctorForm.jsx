import React from 'react';
import './style.css';

const DoctorForm = () => {
  return (
    <div className="doctor-form-container">
      <div className="form-header">
        <img
          src="https://via.placeholder.com/50"
          alt="Doctor"
          className="doctor-image"
        />
        <div className="form-title">
          <h2>Register</h2>
          <p>Enter doctor details</p>
        </div>
      </div>

      <form className="doctor-form">
        <div className="form-group">
          <label>Name of the Doctor</label>
          <input type="text" placeholder="Phani Kumar" />
        </div>

        <div className="form-group">
          <label>Speciality</label>
          <input type="text" placeholder="Cardiologist" />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Canal Gate, Bhimavaram" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="(454) 726-0592" />
        </div>

        <div className="form-group">
          <label>Short Description</label>
          <textarea placeholder="Completed more than 100 surgeries..."></textarea>
        </div>

        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
