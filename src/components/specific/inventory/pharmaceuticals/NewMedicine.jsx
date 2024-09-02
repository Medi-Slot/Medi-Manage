import React, { useState } from "react";
import "./newMedicine.css";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import { auth } from "../../../../Firebase"; // Ensure auth is correctly imported
import toast from "react-hot-toast";

export default function NewMedicine() {
  // Initialize state for each input field
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [thresholdValue, setThresholdValue] = useState("");
  const [category, setCategory] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [supplierContact, setSupplierContact] = useState("");
  const [stockLocations, setStockLocations] = useState("");

  const db = getFirestore();

  // Function to handle changes in input fields and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "productName":
        setProductName(value);
        break;
      case "productId":
        setProductId(value);
        break;
      case "batchNumber":
        setBatchNumber(value);
        break;
      case "buyingPrice":
        setBuyingPrice(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "thresholdValue":
        setThresholdValue(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "supplierName":
        setSupplierName(value);
        break;
      case "supplierContact":
        setSupplierContact(value);
        break;
      case "stockLocations":
        setStockLocations(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    // Validate if the user is authenticated and has a UID
    if (!user || !user.uid) {
      toast.error("User not authenticated!");
      console.error("User not authenticated or UID is missing.");
      return;
    }

    // Create a newMedicine object to store form data
    const newMedicine = {
      productName,
      productId,
      batchNumber,
      buyingPrice,
      quantity: parseInt(quantity, 10),
      thresholdValue: parseInt(thresholdValue, 10),
      category, // Include category in the document if needed
      supplierName,
      supplierContact,
      stockLocations,
      createdAt: new Date().toISOString(),
    };

    try {
      // Reference to the Medicines collection under the user's UID
      const medicineRef = doc(
        collection(db, "Inventory", user.uid, "Medicines"),
        productId // Use productId as the document ID
      );

      // Set the medicine data in Firestore
      await setDoc(medicineRef, newMedicine, { merge: true });

      console.log("Medicine item added with ID: ", productId);
      toast.success("Medicine item added successfully!");

      // Reset form fields after successful submission
      setProductName("");
      setProductId("");
      setBatchNumber("");
      setBuyingPrice("");
      setQuantity("");
      setThresholdValue("");
      setCategory("");
      setSupplierName("");
      setSupplierContact("");
      setStockLocations("");
    } catch (err) {
      toast.error("Failed to add medicine item");
      console.error("Error adding medicine item: ", err);
    }
  };

  return (
    <div className="new-medicine-layout">
      <h1>Add New Product</h1>
      <form className="medicine-form-new-medicine-layout" onSubmit={handleSubmit}>
        {/* Form fields */}
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
            value={productName}
            onChange={handleChange}
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
            value={productId}
            onChange={handleChange}
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
            value={batchNumber}
            onChange={handleChange}
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
            value={buyingPrice}
            onChange={handleChange}
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
            value={quantity}
            onChange={handleChange}
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
            value={thresholdValue}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-new-medicine-layout">
          <label htmlFor="category" className="label-new-medicine-layout">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="input-new-medicine-layout"
            placeholder="Enter Category"
            value={category}
            onChange={handleChange}
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
            value={supplierName}
            onChange={handleChange}
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
            value={supplierContact}
            onChange={handleChange}
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
            value={stockLocations}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn-new-medicine-layout">
          Add Product
        </button>
      </form>
    </div>
  );
}
