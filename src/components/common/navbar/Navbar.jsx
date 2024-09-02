import React, { useEffect, useState } from "react";
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
import { auth, db } from "../../../Firebase";
import { signOut } from "firebase/auth";
import { logout } from "../../../redux/slices/authSlice";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions

const Navbar = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalLocation, setHospitalLocation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHospitalDetails = async () => {
      try {
        // Fetch the user's ID from the auth state
        const user = auth.currentUser;
        if (user) {
          // Reference to the hospital document in Firestore
          const hospitalDocRef = doc(db, "Hospitals", user.uid);
          const hospitalDocSnap = await getDoc(hospitalDocRef);

          if (hospitalDocSnap.exists()) {
            const data = hospitalDocSnap.data();
            setHospitalName(data.hospitalName);
            setHospitalLocation(data.location);
          } else {
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching hospital details:", error);
        toast.error("Failed to fetch hospital details");
      }
    };

    fetchHospitalDetails();
  }, []);

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
            {hospitalName || "Hospital Name"}
          </div>
          <div className="sidebar-hospital-location">
            {hospitalLocation || "Location"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
