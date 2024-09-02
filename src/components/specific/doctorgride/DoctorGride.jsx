import React, { useState, useEffect } from "react";
import "./style.css";
import { useOutletContext } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../../../Firebase"; // Adjust the path to your Firebase config

const DoctorGrid = () => {
  const [doctors, setDoctors] = useState([]);
  const { handleNewDoctorClick, handleDoctorProfileClick } = useOutletContext();

  useEffect(() => {
    const fetchDoctors = async (userId) => {
      try {
        const doctorCollectionRef = collection(
          db,
          `Hospitals/${userId}/Doctors`
        );
        const doctorSnapshot = await getDocs(doctorCollectionRef);
        const doctorList = doctorSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctors(doctorList);
      } catch (error) {
        console.error("Error fetching doctors: ", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchDoctors(user.uid);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="doctor-grid">
      <div className="doctor-card add-doctor" onClick={handleNewDoctorClick}>
        <div className="doctor-grid-plus-icon">+</div>
        <div className="doctor-name">Add Dr</div>
      </div>
      {doctors.map((doctor) => (
        <div
          className="doctor-card"
          key={doctor.id}
          onClick={() => handleDoctorProfileClick(doctor.id)}
        >
          <div
            className="doctor-image"
            style={{
              backgroundImage: `url(${
                doctor.imageUrl ||
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              })`,
            }}
          ></div>
          <div className="doctor-name">{doctor.doctorName}</div>
        </div>
      ))}
    </div>
  );
};

export default DoctorGrid;
