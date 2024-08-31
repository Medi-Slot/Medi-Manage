import React from 'react';
import "./style.css"; 

const BedSelector = ({ beds, onBedSelect }) => {
  return (
    <div className="bed-selector-container">
      <h4>Beds</h4>
      <div className="bed-buttons">
        {beds.map((bed, index) => (
          <button key={index} onClick={() => onBedSelect(bed)} className="bed-button">
            {bed}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BedSelector;
