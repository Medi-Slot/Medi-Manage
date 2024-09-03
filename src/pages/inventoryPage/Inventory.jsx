import React, { useEffect } from "react";
import InventoryItem from "../../components/specific/inventory/InventoryItem";
import "./style.css";
import { BsCapsulePill } from "react-icons/bs";
import { FaBedPulse } from "react-icons/fa6";
import { RiSurgicalMaskLine } from "react-icons/ri";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdOutlineBloodtype } from "react-icons/md";
import { LiaXRaySolid } from "react-icons/lia";
import { TbDental } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCylinderPlus } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { BsScissors } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices/titleSlice";
import { NavLink } from "react-router-dom";
import { TbMedicalCrossOff } from "react-icons/tb";

const inventoryItems = [
  {
    name: "Pharmaceuticals",
    icon: <BsCapsulePill />,
    path: "/inventory/Pharmaceuticals",
  },
  {
    name: "Medical Equipment",
    icon: <FaBedPulse />,
    path: "/inventory/Medical Equipment",
  },
  {
    name: "Consumables",
    icon: <RiSurgicalMaskLine />,
    path: "/inventory/Consumables",
  },
  {
    name: "Laboratory Supplies",
    icon: <RiMicroscopeLine />,
    path: "/inventory/Laboratory Supplies",
  },
  {
    name: "Surgical Supplies",
    icon: <BsScissors />,
    path: "/inventory/Surgical Supplies",
  },
  {
    name: "Fluids and IV",
    icon: <MdOutlineBloodtype />,
    path: "/inventory/Fluids and IV",
  },
  {
    name: "Radiology and Imaging",
    icon: <LiaXRaySolid />,
    path: "/inventory/Radiology and Imaging",
  },
  { name: "Dental", icon: <TbDental />, path: "/inventory/Dental" },
  { name: "PPE", icon: <TbMedicalCrossOff />, path: "/inventory/PPE" },
  {
    name: "Waste Management",
    icon: <RiDeleteBinLine />,
    path: "/inventory/Waste Management",
  },
  {
    name: "Oxygen and Respiratory Supplies",
    icon: <TbCylinderPlus />,
    path: "/inventory/Oxygen and Respiratory Supplies",
  },
  {
    name: "Miscellaneous",
    icon: <CgNotes />,
    path: "/inventory/Miscellaneous",
  },
];

const Inventory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Inventory"));
  }, [dispatch]);

  return (
    <div className="inventory-page-container">
      {inventoryItems.map((item, index) => (
        <NavLink key={index} to={item.path} className="inventory-item-link">
          {/* Add className for styling if needed */}
          <InventoryItem name={item.name} icon={item.icon} />
        </NavLink>
      ))}
    </div>
  );
};

export default Inventory;
