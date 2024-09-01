import React from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">Appointments</h2>
      <div className="header-search-container">
        <input
          type="text"
          placeholder="Search type of keywords"
          className="header-search-input"
        />
        <button className="header-search-button">
          <FaSearch className="header-search-icon" />
        </button>
      </div>
    </div>
  ); 
};

export default Header;
