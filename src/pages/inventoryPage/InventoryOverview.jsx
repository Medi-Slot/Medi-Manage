import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices/titleSlice";
import "./InventoryOverview.css";
import { MdModeEdit } from "react-icons/md";
import { useOutletContext } from "react-router-dom";

export default function InventoryOverview() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Inventory"));
  }, [dispatch]);
  const { handleEditClick } = useOutletContext();

  return (
    <div className="inventory-overview-container">
      <div className="inventory-overview-header">
        <h1 className="inventory-overview-title">Overview</h1>
        <button
          className="inventory-overview-edit-btn"
          onClick={handleEditClick}
        >
          <MdModeEdit style={{ paddingRight: "0.5rem" }} />
          Edit
        </button>
      </div>
      <hr />
      <div className="inventory-overview-content">
        <h2 className="inventory-overview-section-title">Primary Details</h2>
        <div className="inventory-overview-grid">
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Product name</p>
            <p>Paracetamol</p>
          </div>
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Product ID</p>
            <p>455567</p>
          </div>
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Product category</p>
            <p>Pharmaceuticals</p>
          </div>
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Expiry Date</p>
            <p>13/4/23</p>
          </div>
        </div>

        <h2 className="inventory-overview-section-title">Supplier Details</h2>
        <div className="inventory-overview-grid">
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Supplier name</p>
            <p>Ronald</p>
          </div>
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Contact Number</p>
            <p>98789 86757</p>
          </div>
        </div>

        <h2 className="inventory-overview-section-title">Stock</h2>
        <div className="inventory-overview-grid">
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Opening Stock</p>
            <p>40</p>
          </div>
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Remaining Stock</p>
            <p>34</p>
          </div>
          <div className="inventory-overview-info-container">
            <p className="inventory-overview-label">Threshold Value</p>
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
