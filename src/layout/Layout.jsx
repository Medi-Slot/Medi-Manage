import React from 'react';
import Navbar from '../components/common/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="layoutmain" style={{ display: 'flex', flexDirection: 'row' }}>
        <Navbar />
        <div className='layout-container' style={{ marginLeft: '1%', width: '100%' }}>
          <Outlet /> {/* This renders the nested routes (Inventory, Dashboard, etc.) */}
        </div>
      </div>
    </>
  );
}

export default Layout;
