import React from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import { useSelector } from "react-redux";

const Header = () => {
  const title = useSelector((state) => state.title.value);


  return (
    <div className="header-container">
      <h2 className="header-title">{title}</h2>
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
