import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import '../../style.css';

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="header-title">Appointments</h2>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search type of keywords" className="search-input" />
          <AiOutlineSearch className="icon search-icon" />
        </div>
        <IoMdNotificationsOutline className="icon notification-icon" />
      </div>
    </header>
  );
};

export default Header;
