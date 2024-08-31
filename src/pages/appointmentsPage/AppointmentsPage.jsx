import React from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import '../../style.css';

const AppointmentsPage = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="main-container">
        <div className="content-area">
          <h3 className="content-title">Upcoming Appointment</h3>
          <p className="appointment-date">July 30, 2022</p>
          <div className="options-icon">...</div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default AppointmentsPage;
