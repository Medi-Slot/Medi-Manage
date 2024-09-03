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
          const appointmentsRef = collection(
            db,
            "Hospitals",
            userId,
            "Appointments"
          );
          const snapshot = await getDocs(appointmentsRef);

          const appointmentsData = snapshot.docs.flatMap((doc) => {
            const data = doc.data();
            let parsedDetailsArray = [];

            // Iterate over all keys in the document
            Object.keys(data).forEach((key) => {
              if (data[key]?.appointmentDetail) {
                try {
                  const parsedDetails = JSON.parse(data[key].appointmentDetail);
                  parsedDetailsArray.push({
                    id: doc.id,
                    ...parsedDetails,
                  });
                } catch (error) {
                  console.error(
                    `Error parsing appointmentDetail for document ID: ${doc.id}`,
                    error
                  );
                }
              }
            });

            return parsedDetailsArray;
          });

          console.log(appointmentsData); // For debugging: check the structure of the parsed data
          setAppointments(appointmentsData || []); // Ensure appointments is an array
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="doctor-profile-upcoming-appointments">
      <h4 style={{ fontSize: size }}>Upcoming Appointment</h4>
      <div className="doctor-profile-date-line">
        <span className="doctor-profile-appointment-date">{date}</span>
      </div>
      <ul>
        {Array.isArray(appointments) && appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <React.Fragment key={appointment.id + index}>
              <li>
                <div className="doctor-profile-appointment-info">
                  <span className="doctor-profile-time">
                    {appointment.timeSlot?.timeSlot || "No Time Slot"}
                  </span>
                  <div className="doctor-profile-appointment-details">
                    <p className="doctor-profile-patient-name">
                      {appointment.patient?.patName || "Unknown Patient"}
                    </p>
                    <p className="doctor-profile-doctor-name">
                      {appointment.doctor?.docName || "Unknown Doctor"}
                    </p>
                  </div>
                </div>
              </li>
              {index < appointments.length - 1 && (
                <hr className="doctor-profile-appointment-divider" />
              )}
            </React.Fragment>
          ))
        ) : (
          <li>No upcoming appointments.</li>
        )}
      </ul>
    </div>
  );
};

export default UpcomingAppointment;
