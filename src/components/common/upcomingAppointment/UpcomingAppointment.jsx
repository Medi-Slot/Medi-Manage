import React, { useEffect, useState } from "react";
import "../../specific/doctorprofile/style.css";
import { db, auth } from "../../../Firebase"; 
import { collection, getDocs } from "firebase/firestore"; 

const UpcomingAppointment = ({ size }) => {
  const [appointments, setAppointments] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setError("User not authenticated. Please log in.");
        setLoading(false);
      }
    });

    return () => unsubscribe(); 
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchAppointments = async () => {
        try {
          const appointmentsRef = collection(db, "Hospitals", userId, "Appointments");
          const snapshot = await getDocs(appointmentsRef);

          const appointmentsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(appointmentsData)
          setAppointments(appointmentsData);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching appointments:", error);
          setError("Failed to load appointments.");
          setLoading(false);
        }
      };

      fetchAppointments();
    }
  }, [userId]);

  const today = new Date();
  const date = formatDate(today);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div className="doctor-profile-upcoming-appointments">
      <h4 style={{ fontSize: size }}>Upcoming Appointment</h4>
      <div className="doctor-profile-date-line">
        <span className="doctor-profile-appointment-date">{date}</span>
      </div>
      <ul>
        {appointments.map((appointment, index) => (
          <React.Fragment key={appointment.id}>
            <li>
              <div className="doctor-profile-appointment-info">
                <span className="doctor-profile-time">{appointment.timeSlot}</span>
                <div className="doctor-profile-appointment-details">
                  <p className="doctor-profile-patient-name">{appointment.patientName}</p>
                  <p className="doctor-profile-doctor-name">{appointment.doctorName}</p>
                </div>
              </div>
            </li>
            {index < appointments.length - 1 && <hr className="doctor-profile-appointment-divider" />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAppointment;
