import React, { useState } from "react";
import "./SetSlot.css";

const SetSlot = () => {
  const [selectedSlot, setSelectedSlot] = useState("2:00 PM");
  const [view, setView] = useState("slots");
  const [bedStatus, setBedStatus] = useState({
    "001": "available",
    "002": "blocked",
    "003": "booked",
    "004": "available",
    "005": "available",
    "006": "blocked",
    "007": "available",
    "008": "booked",
    "009": "available",
    "010": "available",
    "011": "available",
    "012": "blocked",
  });

  const timeSlots = [
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ];

  const bedNumbers = Object.keys(bedStatus);

  const handleSlotClick = (time) => {
    setSelectedSlot(time);
  };

  const handleBedClick = (bed) => {
    if (bedStatus[bed] === "available") {
      setBedStatus({ ...bedStatus, [bed]: "booked" });
    } else if (bedStatus[bed] === "booked") {
      setBedStatus({ ...bedStatus, [bed]: "available" });
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
            Average Time For OP
          </label>
          <input
            type="text"
            name="averageTime"
            id="averageTime"
            placeholder="5 min"
            className="setslot-average-time-input"
          />
          <div className="setslot-slots-container">
            <h3>Morning slots</h3>
            <div className="setslot-slots">
              {timeSlots.slice(0, 7).map((time, index) => (
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
              {timeSlots.slice(7).map((time, index) => (
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
            <label
              htmlFor="averageTime"
              className="setslot-average-time-header"
            >
              Beds Count
            </label>
            <input
              type="text"
              name="averageTime"
              id="averageTime"
              placeholder="Total Beds"
              className="setslot-average-time-input"
              style={{ marginTop: "0" }}
            />
            {bedNumbers.map((bed, index) => (
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
            <button className="setslot-allocate-button">Allocate</button>
            <button className="setslot-block-button">Block</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SetSlot;
