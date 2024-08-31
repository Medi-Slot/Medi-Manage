import React from "react";
import "./style.css";
import hp from "../../../assets/images/hp.png";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { LuPlusCircle } from "react-icons/lu";
import { MdInsertChartOutlined } from "react-icons/md";
import { BiFirstAid } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { PiGridFourFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";
import { logout } from "../../../redux/slices/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      dispatch(logout()); 
      toast.success("Successfully logged out"); 
      navigate("/login"); 
    } catch (error) {
      console.error("Logout Error:", error); 
      toast.error("Failed to log out"); 
    }
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <h2 className="logo">Medi-Manage</h2>
      </div>
      <div className="nav-items">
        <div className="nav-item active">
          <i className="fas fa-th-large">
            <PiGridFourFill />
          </i>
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-calendar-alt">
            <TbReportAnalytics />
          </i>
          <span>Appointments</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-user-md">
            <BiFirstAid />
          </i>
          <span>Doctor</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-users">
            <IoIosPeople />
          </i>
          <span>Patient</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-boxes">
            <MdInsertChartOutlined />
          </i>
          <span>Inventory</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-edit">
            <LuPlusCircle />
          </i>
          <span>Update</span>
        </div>
        <div
          className="nav-item"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-sign-out-alt"><HiOutlineLogout /></i>
          <span>Logout</span>
        </div>
      </div>
      <div className="Nav-hospital">
        <img src={hp} alt="Hospital" className="hospital-image" />
        <div className="hospital-info">
          <div className="hospital-name">Harsha Hospital</div>
          <div className="hospital-location">Bhimavaram</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
