import React, { useState, useEffect } from "react";
import "./SetSlot.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setBedData,
  setTimeSlot,
} from "../../../../redux/slices/appointmentSlice";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  collection,
} from "firebase/firestore";
import { auth } from "../../../../Firebase";
import toast from "react-hot-toast";

const SetSlot = () => {
  const [selectedSlot, setSelectedSlot] = useState("2:00 PM");
  const [averageTime, setAverageTime] = useState("20"); // Default average time in minutes
  const [noOfBeds, setNoOfBeds] = useState("12"); // Default number of beds
  const [view, setView] = useState("slots");
  const [bedStatus, setBedStatus] = useState({});
  const [timeSlots, setTimeSlots] = useState([]);
  const [userId, setUserId] = useState();
  const dispatch = useDispatch();
  const appointmentDetails = useSelector((state) => state.appointment);

  useEffect(() => {
    // Check for current user and fetch patient data once the user is available
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setError("User not authenticated. Please log in.");
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);
  useEffect(() => {
    // Generate beds based on noOfBeds
    const beds = {};
    for (let i = 1; i <= Number(noOfBeds); i++) {
      beds[`00${i.toString().padStart(3, "0")}`] = "available";
    }
    setBedStatus(beds);
  }, [noOfBeds]);

  useEffect(() => {
    // Generate time slots based on averageTime
    const slots = [];
    const startTime = new Date("2024-01-01T10:00:00");
    const interval = Number(averageTime) * 60 * 1000;

    for (let i = 0; i < 20; i++) {
      const time = new Date(startTime.getTime() + i * interval);
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      slots.push(`${formattedHours}:${formattedMinutes} ${ampm}`);
    }
    setTimeSlots(slots);
  }, [averageTime]);

  const handleSlotClick = (time) => {
    setSelectedSlot(time);
    dispatch(
      setTimeSlot({
        timeSlot: time,
      })
    );
  };

  const handleBedClick = (bed) => {
    if (bedStatus[bed] === "available") {
      setBedStatus({ ...bedStatus, [bed]: "booked" });
      dispatch(
        setBedData({
          required: true,
          bedId: bed,
        })
      );
    } else if (bedStatus[bed] === "booked") {
      setBedStatus({ ...bedStatus, [bed]: "available" });
    }
  };

  const handleAverageTimeChange = (e) => {
    setAverageTime(e.target.value);
  };

  const handleNoOfBedsChange = (e) => {
    setNoOfBeds(e.target.value);
  };

  const handleKeyDown = (e, type) => {
    if (e.key === "Enter") {
      if (type === "averageTime") {
        setAverageTime(e.target.value);
      } else if (type === "noOfBeds") {
        setNoOfBeds(e.target.value);
      }
    }
  };

  const handleAllocateClick = () => {
    console.log(appointmentDetails);
    submitDataToFirebase();
  };

  const submitDataToFirebase = async () => {
    const db = getFirestore();
    const doctorId = appointmentDetails.doctor.docId; // Replace with the actual doctor ID
    const appointmentId = `appointments${Date.now()}`; // Generate a unique ID for the appointment
    const appointmentDetail = JSON.stringify(appointmentDetails);
    try {
      const appointmentRef = doc(
        db,
        `Hospitals/${userId}/Appointments/${doctorId}`
      );
      await setDoc(
        appointmentRef,
        {
          [appointmentId]: {
            appointmentDetail,
            // Add other appointment details if needed
          },
        },
        { merge: true }
      );
      toast.success("Appointment data saved successfully!");
    } catch (error) {
      toast.error("Error saving appointment data");
      console.error("Error saving appointment data:", error);
    }
  };

  return (
    <div className="setslot-main-container">
      <div className="setslot-header">
        <h1
          onClick={() => setView("slots")}
          className={`setslot-clickable-header ${
            view === "slots" ? "active" : ""
          }`}
        >
          Set Slots
        </h1>
        <div className="setslot-divider" />
        <h1
          onClick={() => setView("beds")}
          className={`setslot-clickable-header ${
            view === "beds" ? "active" : ""
          }`}
        >
          Beds
        </h1>
      </div>

      {view === "slots" ? (
        <>
          <label htmlFor="averageTime" className="setslot-average-time-header">
            Average Time For OP (minutes)
          </label>
          <input
            type="text"
            name="averageTime"
            id="averageTime"
            value={averageTime}
            onChange={handleAverageTimeChange}
            onKeyDown={(e) => handleKeyDown(e, "averageTime")}
            className="setslot-average-time-input"
          />
          <div className="setslot-slots-container">
            <h3>Morning slots</h3>
            <div className="setslot-slots">
              {timeSlots.slice(0, timeSlots.length / 2).map((time, index) => (
                <button
                  key={index}
                  className={`setslot-slot-button ${
                    selectedSlot === time ? "selected" : ""
                  }`}
                  onClick={() => handleSlotClick(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <h3>Evening slots</h3>
            <div className="setslot-slots">
              {timeSlots.slice(timeSlots.length / 2).map((time, index) => (
                <button
                  key={index}
                  className={`setslot-slot-button ${
                    selectedSlot === time ? "selected" : ""
                  }`}
                  onClick={() => handleSlotClick(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="setslot-beds-container">
            <label htmlFor="noOfBeds" className="setslot-average-time-header">
              Beds Count
            </label>
            <input
              type="text"
              name="noOfBeds"
              id="noOfBeds"
              value={noOfBeds}
              onChange={handleNoOfBedsChange}
              onKeyDown={(e) => handleKeyDown(e, "noOfBeds")}
              className="setslot-average-time-input"
              style={{ marginTop: "0" }}
            />
            {Object.keys(bedStatus).map((bed, index) => (
              <button
                key={index}
                className={`setslot-bed-button ${bedStatus[bed]}`}
                onClick={() => handleBedClick(bed)}
              >
                {bed}
              </button>
            ))}
          </div>
          <div className="setslot-legend">
            <span className="setslot-legend-item available">Available</span>
            <span className="setslot-legend-item booked">Booked</span>
            <span className="setslot-legend-item blocked">Blocked</span>
          </div>
          <div className="setslot-bed-buttons">
            <button
              className="setslot-allocate-button"
              onClick={handleAllocateClick}
            >
              Allocate
            </button>
            <button className="setslot-block-button">Block</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SetSlot;
