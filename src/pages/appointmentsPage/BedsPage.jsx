import React from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import '../../style.css';

const BedsPage = () => {
  const beds = ['001', '002', '003', '004', '005', '006'];

  return (
    <div className="page-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <div className="beds-content">
          <h3>Beds</h3>
          <div className="bed-grid">
            {beds.map((bed, index) => (
              <button key={index} className={`bed-button ${index % 3 === 0 ? 'blocked' : 'available'}`}>
                {bed}
              </button>
            ))}
          </div>
          <button className="block-button">Block</button>
        </div>
      </div>
    </div>
  );
};

export default BedsPage;