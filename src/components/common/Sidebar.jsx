import React from 'react';
import '../../style.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-section">
        <h4 className="sidebar-title">Set Slots</h4>
        <button className="add-button">Add +</button>
      </div>
      <div className="sidebar-section">
        <h4 className="sidebar-title">Beds</h4>
        <button className="add-button">Add +</button>
      </div>
    </div>
  );
};

export default Sidebar;
