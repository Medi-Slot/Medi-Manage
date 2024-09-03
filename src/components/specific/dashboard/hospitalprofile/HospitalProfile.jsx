import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./style.css";
import hp from "../../../../assets/images/hp.png";
import UpcomingAppointment from "../../../common/upcomingAppointment/UpcomingAppointment";
import { FaLocationDot } from "react-icons/fa6";
import { CiHospital1 } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

const HospitalProfile = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalLocation, setHospitalLocation] = useState("");
  const [hospitalSpeciality, setHospitalSpeciality] = useState("");
  const [hospitalEmail, setHospitalEmail] = useState("");
  const [loading, setLoading] = useState(true);

  // Get user ID from Redux state
  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    const fetchHospitalDetails = async () => {
      if (userId) {
        try {
          const db = getFirestore();
          const hospitalDocRef = doc(db, "Hospitals", userId);
          const hospitalDocSnap = await getDoc(hospitalDocRef);

          if (hospitalDocSnap.exists()) {
            const data = hospitalDocSnap.data();
            setHospitalName(data.hospitalName);
            setHospitalLocation(data.location);
            setHospitalSpeciality(data.specialty);
            setHospitalEmail(data.email);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching hospital details:", error);
          toast.error("Failed to fetch hospital details");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchHospitalDetails();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="hospital-profile">
      <div className="hospital-profile-hospital-image-placeholder">
        <img src={hp} alt="hospital" />
      </div>
      <h2>{hospitalName}</h2>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="hospital-profile-hospital-info-group"
      >
        <FaLocationDot
          style={{ fontSize: "1.5rem", marginRight: "1rem", color: "#119BF8" }}
        />
        <p>{hospitalLocation}</p>
      </div>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="hospital-profile-hospital-info-group"
      >
        <CiHospital1
          style={{ fontSize: "1.5rem", marginRight: "1rem", color: "#119BF8" }}
        />
        <p>{hospitalSpeciality}</p>
      </div>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="hospital-profile-hospital-info-group"
      >
        <MdAlternateEmail
          style={{ fontSize: "1.5rem", marginRight: "1rem", color: "#119BF8" }}
        />
        <p>{hospitalEmail}</p>
      </div>

      {/* <div className="hospital-profile-hospital-stats">
        <div className="hospital-profile-stat">
          <p>Appointments</p>
          <h3>{appointments}</h3>
        </div>
        <div className="hospital-profile-stat">
          <p>Total Patients</p>
          <h3>{totalPatients}</h3>
        </div>
        <div className="hospital-profile-stat">
          <p>Rate</p>
          <h3>{rate}</h3>
        </div>
      </div> */}
      <hr className="hospital-profile-divider" />

      <UpcomingAppointment size="1rem" />
    </div>
  );
};

export default HospitalProfile;
