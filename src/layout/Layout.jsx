import React from 'react';
import Navbar from '../components/common/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import DoctorProfile from '../components/specific/doctorprofile/DoctorProfile';

const Layout = () => {
  return (
    <>
      <div className="layoutmain" style={{ display: 'flex', flexDirection: 'row' }}>
        <Navbar />
        <div className='layout-container' style={{ width: '67%' }}>
          <Outlet /> {/* This renders the nested routes (Inventory, Dashboard, etc.) */}
        </div>
        <DoctorProfile />
      </div>
    </>
  );
}

export default Layout;
