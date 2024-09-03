import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { auth } from "../../../../Firebase"; // Ensure auth is correctly imported
import toast from "react-hot-toast";
import "./style.css";

export default function UpdateProduct({ refreshProductDetails }) {
  const { category, productId } = useParams(); // Extract category and productId from the URL
  const [productName, setProductName] = useState("");
  const [productCount, setProductCount] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [remainingStock, setRemainingStock] = useState("");

  const db = getFirestore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "productName") setProductName(value);
    if (name === "productCount") setProductCount(value);
    if (name === "expiryDate") setExpiryDate(value);
    if (name === "remainingStock") setRemainingStock(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user || !user.uid) {
      toast.error("User not authenticated!");
      return;
    }

    try {
      const productRef = doc(db, "Inventory", user.uid, category, productId);
      const updates = {};

      if (productName) updates.productName = productName;
      if (productCount) updates.productCount = parseInt(productCount, 10);
      if (expiryDate) updates.expiryDate = expiryDate;
      if (remainingStock) updates.remainingStock = parseInt(remainingStock, 10);

      if (Object.keys(updates).length > 0) {
        await updateDoc(productRef, updates);
        toast.success("Product updated successfully!");
        if (refreshProductDetails) {
          refreshProductDetails(); // Call the refresh callback
        }
      } else {
        toast.info("No fields to update.");
      }
    } catch (err) {
      toast.error("Failed to update product");
      console.error("Error updating product: ", err);
    }
  };

  return (
    <div className="update-product-layout">
      <h1>Update Product</h1>
      <form className="product-form-update-product-layout" onSubmit={handleSubmit}>
        <div className="form-group-update-product-layout">
          <label htmlFor="productName" className="label-update-product-layout">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="input-update-product-layout"
            placeholder="Enter product name"
            value={productName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-update-product-layout">
          <label htmlFor="productCount" className="label-update-product-layout">
            Product Count
          </label>
          <input
            type="number"
            id="productCount"
            name="productCount"
            className="input-update-product-layout"
            placeholder="Enter product count"
            value={productCount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-update-product-layout">
          <label htmlFor="expiryDate" className="label-update-product-layout">
            Expiry Date
          </label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            className="input-update-product-layout"
            placeholder="Enter expiry date"
            value={expiryDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-update-product-layout">
          <label htmlFor="remainingStock" className="label-update-product-layout">
            Remaining Stock
          </label>
          <input
            type="number"
            id="remainingStock"
            name="remainingStock"
            className="input-update-product-layout"
            placeholder="Enter remaining stock"
            value={remainingStock}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn-update-product-layout">
          Submit
        </button>
      </form>
    </div>
  );
}
