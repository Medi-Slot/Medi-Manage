import React from 'react';
import Navbar from '../components/common/navbar/Navbar';



const Layout = ({ children }) => {
  return (
    <>
    <div className="layoutmain" style={{display:'flex',flexDirection:'row'}}>
      <Navbar />
      <div className='layout-container' style={{marginLeft:'1%'}}>
      {children}
      </div>
    </div>
    </>
  );
}

export default Layout;