import React from "react";
import "./newMedicine.css";

export default function NewMedicine() {
  return (
    <div className="new-medicine-layout">
      <h1>Add New Product</h1>
      <form className="medicine-form-new-medicine-layout">
        <div className="form-group-new-medicine-layout">
          <label htmlFor="productName" className="label-new-medicine-layout">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="input-new-medicine-layout"
            placeholder="Enter product name"
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="productId" className="label-new-medicine-layout">
            Product ID
          </label>
          <input
            type="text"
            id="productId"
            name="productId"
            className="input-new-medicine-layout"
            placeholder="Enter product ID"
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="batchNumber" className="label-new-medicine-layout">
            Batch Number
          </label>
          <input
            type="text"
            id="batchNumber"
            name="batchNumber"
            className="input-new-medicine-layout"
            placeholder="Enter product Batch Number"
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="buyingPrice" className="label-new-medicine-layout">
            Buying Price
          </label>
          <input
            type="text"
            id="buyingPrice"
            name="buyingPrice"
            className="input-new-medicine-layout"
            placeholder="Enter buying price"
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="quantity" className="label-new-medicine-layout">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="input-new-medicine-layout"
            placeholder="Enter product quantity"
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="thresholdValue" className="label-new-medicine-layout">
            Threshold Value
          </label>
          <input
            type="number"
            id="thresholdValue"
            name="thresholdValue"
            className="input-new-medicine-layout"
            placeholder="Enter threshold value"
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="supplierName" className="label-new-medicine-layout">
            Supplier Name
          </label>
          <input
            type="text"
            id="supplierName"
            name="supplierName"
            className="input-new-medicine-layout"
            placeholder="Enter supplier name"
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="supplierContact" className="label-new-medicine-layout">
            Supplier Contact
          </label>
          <input
            type="text"
            id="supplierContact"
            name="supplierContact"
            className="input-new-medicine-layout"
            placeholder="Enter supplier contact"
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="stockLocations" className="label-new-medicine-layout">
            Stock Locations
          </label>
          <input
            type="text"
            id="stockLocations"
            name="stockLocations"
            className="input-new-medicine-layout"
            placeholder="Enter stock locations"
          />
        </div>

        <button type="submit" className="submit-btn-new-medicine-layout">
          Add Product
        </button>
      </form>
    </div>
  );
}
