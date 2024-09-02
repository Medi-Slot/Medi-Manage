import React, { useEffect } from 'react'
import InventoryItem from '../../components/specific/inventory/InventoryItem';
import "./style.css"
import { BsCapsulePill } from "react-icons/bs";
import { FaBedPulse } from "react-icons/fa6";
import { RiSurgicalMaskLine } from "react-icons/ri";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdOutlineBloodtype } from "react-icons/md";
import { LiaXRaySolid } from "react-icons/lia";
import { TbDental } from "react-icons/tb";
import { FaHeadSideMask } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCylinderPlus } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { BsScissors } from "react-icons/bs";
import NewMedicine from '../../components/specific/inventory/pharmaceuticals/NewMedicine';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/slices/titleSlice';
import { NavLink } from 'react-router-dom';



const inventoryItems = [
    { name: 'Pharmaceuticals', icon: <BsCapsulePill />,path: "/inventory/medicine" },
    { name: 'Medical Equipment', icon: <FaBedPulse />,path: "/inventory/med" },
    { name: 'Consumables', icon: <RiSurgicalMaskLine />,path: "/inventory/me" },
    { name: 'Laboratory Supplies', icon: <RiMicroscopeLine /> ,path: "/inventory/medicine54"   },
    { name: 'Surgical Supplies', icon: <BsScissors /> ,path: "/inventory/medicinedds"},
    { name: 'Fluids and IV', icon: <MdOutlineBloodtype /> ,path: "/inventory/medicinesc"   },
    { name: 'Radiology and Imaging', icon: <LiaXRaySolid />  ,path: "/inventory/medicine12"  },
    { name: 'Dental', icon: <TbDental />,path: "/inventory/medicine" },
    { name: 'PPE', icon: <FaHeadSideMask /> ,path: "/inventory/medi"},
    { name: 'Waste Management', icon: <RiDeleteBinLine /> ,path: "/inventory/medic"},
    { name: 'Oxygen and Respiratory Supplies', icon: <TbCylinderPlus />,path: "/inventory/medici"},
    { name: 'Miscellaneous', icon: <CgNotes /> ,path: "/inventory/medicin"   }
  ];

const Inventory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Inventory")); 
  }, [dispatch]);


  return (
    <div className="inventory-page-container">
      {inventoryItems.map((item, index) => (
        <NavLink key={index} to={item.path}>
        <InventoryItem key={index} name={item.name} icon={item.icon} /></NavLink>
      ))}
    </div>
   
  )
}

export default Inventory
