import React, { useEffect, useState } from "react";
import "./style.css";
import hp from "../../../assets/images/hp.png";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { MdInsertChartOutlined } from "react-icons/md";
import { BiFirstAid } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { PiGridFourFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { logout } from "../../../redux/slices/authSlice";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../Firebase";
import Logout from "./logout/Logout";

const Navbar = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalLocation, setHospitalLocation] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State for logout popup visibility
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get user ID from Redux state
  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    const fetchHospitalDetails = async () => {
      if (userId) {
        try {
          // Reference to the hospital document in Firestore
          const hospitalDocRef = doc(db, "Hospitals", userId);
          const hospitalDocSnap = await getDoc(hospitalDocRef);

          if (hospitalDocSnap.exists()) {
            const data = hospitalDocSnap.data();
            setHospitalName(data.hospitalName);
            setHospitalLocation(data.location);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching hospital details:", error);
          toast.error("Failed to fetch hospital details");
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      } else {
        setLoading(false); // Set loading to false if no userId
      }
    };

    fetchHospitalDetails();
  }, [userId]); // Add userId to dependency array

  const handleLogout = () => {
    setShowLogoutPopup(true); // Show the logout confirmation popup
  };

  const confirmLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      toast.success("Successfully logged out");
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Failed to log out");
    }
    setShowLogoutPopup(false); // Hide the popup after logout
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false); // Hide the popup if cancel is clicked
  };


  const navItems = [
    { label: "Dashboard", icon: <PiGridFourFill />, route: "/dashboard" },
    {
      label: "Appointments",
      icon: <TbReportAnalytics />,
      route: "/appointments",
    },
    { label: "Doctor", icon: <BiFirstAid />, route: "/doctor" },
    { label: "Patient", icon: <IoIosPeople />, route: "/patient" },
    {
      label: "Inventory",
      icon: <MdInsertChartOutlined />,
      route: "/inventory",
    },
  ];

  return (
    <>
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <h2 className="sidebar-logo">Medi-Manage</h2>
      </div>
      <div className="sidebar-nav-items">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
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
          <div className="sidebar-hospital-name">
            {loading ? "Loading..." : (hospitalName || "Hospital Name")}
          </div>
          <div className="sidebar-hospital-location">
            {loading ? "" : (hospitalLocation || "Location")}
          </div>
        </div>
      </div>
    </div>
     {showLogoutPopup && (
      <Logout onConfirm={confirmLogout} onCancel={cancelLogout} />
    )}
    </>

  );
};

export default Navbar;
