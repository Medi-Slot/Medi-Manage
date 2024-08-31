import React from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import '../../style.css';



const SetSlotsPage = () => {
  const morningSlots = ['9:00 AM', '10:00 AM', '11:00 AM'];
  const eveningSlots = ['5:00 PM', '6:00 PM', '7:00 PM'];

  return (
    <div className="page-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <div className="set-slots-content">
          <h3>Set Slots</h3>
          <div className="slot-section">
            <h4>Morning Slots</h4>
            <div className="slots">
              {morningSlots.map((slot, index) => (
                <button key={index} className="slot-button">{slot}</button>
              ))}
            </div>
          </div>
          <div className="slot-section">
            <h4>Evening Slots</h4>
            <div className="slots">
              {eveningSlots.map((slot, index) => (
                <button key={index} className="slot-button">{slot}</button>
              ))}
            </div>
          </div>
          <button className="block-button">Block</button>
        </div>
      </div>
    </div>
  );
};

export default SetSlotsPage;