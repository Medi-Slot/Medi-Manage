import React from "react";
import "./style.css";
export default function UpdateProduct() {
  return (
    <div className="update-product-layout">
      <h1>Update Product</h1>
      <form className="product-form-update-product-layout">
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
          />
        </div>

        <div className="form-group-update-product-layout">
          <label htmlFor="productId" className="label-update-product-layout">
            Product ID
          </label>
          <input
            type="text"
            id="productId"
            name="productId"
            className="input-update-product-layout"
            placeholder="Enter product ID"
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
          />
        </div>

        <button type="submit" className="submit-btn-update-product-layout">
          Submit
        </button>
      </form>
    </div>
  );
}
