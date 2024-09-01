import React from 'react'
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



const inventoryItems = [
    { name: 'Pharmaceuticals', icon: <BsCapsulePill /> },
    { name: 'Medical Equipment', icon: <FaBedPulse /> },
    { name: 'Consumables', icon: <RiSurgicalMaskLine /> },
    { name: 'Laboratory Supplies', icon: <RiMicroscopeLine />    },
    { name: 'Surgical Supplies', icon: <BsScissors /> },
    { name: 'Fluids and IV', icon: <MdOutlineBloodtype />    },
    { name: 'Radiology and Imaging', icon: <LiaXRaySolid />    },
    { name: 'Dental', icon: <TbDental /> },
    { name: 'PPE', icon: <FaHeadSideMask /> },
    { name: 'Waste Management', icon: <RiDeleteBinLine /> },
    { name: 'Oxygen and Respiratory Supplies', icon: <TbCylinderPlus />},
    { name: 'Miscellaneous', icon: <CgNotes />    }
  ];

const Inventory = () => {
  return (
    <div className="inventory-page-container">
      {inventoryItems.map((item, index) => (
        <InventoryItem key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
   
  )
}

export default Inventory
