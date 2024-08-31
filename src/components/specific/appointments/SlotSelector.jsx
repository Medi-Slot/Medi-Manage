import React from 'react';
import "../../../style.css"; 

const SlotSelector = ({ slots, onSlotSelect }) => {
  return (
    <div className="slot-selector-container">
      <h4>Set Slots</h4>
      <div className="slot-buttons">
        {slots.map((slot, index) => (
          <button key={index} onClick={() => onSlotSelect(slot)} className="slot-button">
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlotSelector;
