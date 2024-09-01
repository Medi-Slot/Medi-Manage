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
      <div className="sidebar-logo-container">
        <h2 className="sidebar-logo">Medi-Manage</h2>
      </div>
      <div className="sidebar-nav-items">
        <div className="sidebar-nav-item active">
          <i className="sidebar-fas fa-th-large">
            <PiGridFourFill />
          </i>
          <span>Dashboard</span>
        </div>
        <div className="sidebar-nav-item">
          <i className="sidebar-fas fa-calendar-alt">
            <TbReportAnalytics />
          </i>
          <span>Appointments</span>
        </div>
        <div className="sidebar-nav-item">
          <i className="sidebar-fas fa-user-md">
            <BiFirstAid />
          </i>
          <span>Doctor</span>
        </div>
        <div className="sidebar-nav-item">
          <i className="sidebar-fas fa-users">
            <IoIosPeople />
          </i>
          <span>Patient</span>
        </div>
        <div className="sidebar-nav-item">
          <i className="sidebar-fas fa-boxes">
            <MdInsertChartOutlined />
          </i>
          <span>Inventory</span>
        </div>
        {/* <div className="sidebar-nav-item">
          <i className="sidebar-fas fa-edit">
            <LuPlusCircle />
          </i>
          <span>Update</span>
        </div> */}
        <div
          className="sidebar-nav-item"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          <i className="sidebar-fas fa-sign-out-alt">
            <HiOutlineLogout />
          </i>
          <span>Logout</span>
        </div>
      </div>
      <div className="sidebar-Nav-hospital">
        <img src={hp} alt="Hospital" className="sidebar-hospital-image" />
        <div className="sidebar-hospital-info">
          <div className="sidebar-hospital-name">Harsha Hospital</div>
          <div className="sidebar-hospital-location">Bhimavaram</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
