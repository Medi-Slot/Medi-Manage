import React, { useState, useEffect } from "react";
import "./style.css";
import { useOutletContext } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../../../Firebase";

const DoctorGrid = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleNewDoctorClick, handleDoctorProfileClick } = useOutletContext();
  const [activeDoctorId, setActiveDoctorId] = useState(null);

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
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchDoctors(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleCardClick = (doctorId) => {
    setActiveDoctorId(doctorId); // Set the active card ID
    handleDoctorProfileClick(doctorId);
  };

  if (loading) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "80vh",
          }}
        >
          <div className="boxes">
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="doctor-grid">
      <div className="doctor-card add-doctor" onClick={handleNewDoctorClick}>
        <div className="doctor-grid-plus-icon">+</div>
        <div className="doctor-name">Add Dr</div>
      </div>
      {doctors.map((doctor) => (
        <div
          className={`doctor-card doctor-card-${
            activeDoctorId === doctor.id ? "active" : ""
          }`} // Add active class conditionally
          key={doctor.id}
          onClick={() => handleCardClick(doctor.id)}
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
          <div className="doctor-qualification">{doctor.qualification} </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorGrid;
