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
import { useNavigate, NavLink } from "react-router-dom";
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

  const navItems = [
    { label: "Dashboard", icon: <PiGridFourFill />, route: "/dashboard" },
    { label: "Appointments", icon: <TbReportAnalytics />, route: "/appointments" },
    { label: "Doctor", icon: <BiFirstAid />, route: "/doctor" },
    { label: "Patient", icon: <IoIosPeople />, route: "/patient" },
    { label: "Inventory", icon: <MdInsertChartOutlined />, route: "/inventory" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <h2 className="sidebar-logo">Medi-Manage</h2>
      </div>
      <div className="sidebar-nav-items">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            className={({ isActive }) => `sidebar-nav-item ${isActive ? "active" : ""}`}
          >
            <i className="sidebar-fas">{item.icon}</i>
            <span>{item.label}</span>
          </NavLink>
        ))}

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
      <div
        className="sidebar-Nav-hospital"
        onClick={() => navigate("/dashboard")}
      >
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
