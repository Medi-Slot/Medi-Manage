import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "../../../Firebase";
import hp from "../../../assets/images/hp.png";
import PatientSatisfaction from "../patientSatisfaction/PatientSatisfaction";
import UpcomingAppointment from "../../common/upcomingAppointment/UpcomingAppointment";

const DoctorProfile = ({ doctorId }) => {
  const [doctor, setDoctor] = useState(null);
  console.log(doctorId);
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const doctorDocRef = doc(
          db,
          `Hospitals/${auth.currentUser.uid}/Doctors/${doctorId}`
        );
        const doctorDoc = await getDoc(doctorDocRef);
        if (doctorDoc.exists()) {
          setDoctor(doctorDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching doctor: ", error);
      }
    };

    if (doctorId) {
      fetchDoctor();
    }
  }, [doctorId]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="doctor-profile">
      <div className="doctor-profile-doctor-image-placeholder">
        <img
          src={
            doctor.imageUrl ||
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Doctor"
        />
      </div>
      <h2>{doctor.doctorName}</h2>
      <hr className="doctor-profile-divider" />
      <div className="doctor-profile-details-group">
        <h3>Qualification</h3>
        <p>{doctor.qualification}</p>
      </div>
      <div className="doctor-profile-details-group">
        <h3>Speciality</h3>
        <p>{doctor.speciality}</p>
      </div>
      <div className="doctor-profile-details-group">
        <h3>Experience</h3>
        <p>{doctor.experience} yrs</p>
      </div>
      <div className="doctor-profile-details-group">
        <h3>Phone Number</h3>
        <p>{doctor.phoneNumber}</p>
      </div>
      <hr className="doctor-profile-divider" />

      <UpcomingAppointment size="1rem" />
    </div>
  );
};

export default DoctorProfile;
