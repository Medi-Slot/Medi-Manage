import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices/titleSlice";
import "./InventoryOverview.css";
import { MdModeEdit } from "react-icons/md";
import { useParams, useOutletContext } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../../Firebase"; // Ensure auth is correctly imported

export default function InventoryOverview() {
  const dispatch = useDispatch();
  const { category, productId } = useParams(); // Extract category and productId from the URL
  const { handleEditClick } = useOutletContext();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(setTitle("Inventory Overview"));

    const fetchProductDetails = async () => {
      const db = getFirestore();
      const user = auth.currentUser;

      if (!user || !user.uid) {
        setError("User not authenticated!");
        setLoading(false);
        return;
      }

      try {
        const productDoc = await getDoc(
          doc(db, "Inventory", user.uid, category, productId)
        );
        if (productDoc.exists()) {
          setProduct({ id: productDoc.id, ...productDoc.data() });
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to fetch product details");
        console.error("Error fetching product details: ", err);
      }

      setLoading(false);
    };

    fetchProductDetails();
  }, [dispatch, category, productId]);

  if (loading)
    return (
      <div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "80vh",
            }}
          >
            <div className="boxes">
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

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
      {product && (
        <div className="inventory-overview-content">
          <h2 className="inventory-overview-section-title">Primary Details</h2>
          <div className="inventory-overview-grid">
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Product name</p>
              <p>{product.productName}</p>
            </div>
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Product ID</p>
              <p>{product.id}</p>
            </div>
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Product category</p>
              <p>{category}</p>
            </div>
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Expiry Date</p>
              <p>{product.expiryDate || "N/A"}</p>
            </div>
          </div>

          <h2 className="inventory-overview-section-title">Supplier Details</h2>
          <div className="inventory-overview-grid">
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Supplier name</p>
              <p>{product.supplierName || "N/A"}</p>
            </div>
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Contact Number</p>
              <p>{product.contactNumber || "N/A"}</p>
            </div>
          </div>

          <h2 className="inventory-overview-section-title">Stock</h2>
          <div className="inventory-overview-grid">
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Opening Stock</p>
              <p>{product.openingStock || "N/A"}</p>
            </div>
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Remaining Stock</p>
              <p>{product.remainingStock || "N/A"}</p>
            </div>
            <div className="inventory-overview-info-container">
              <p className="inventory-overview-label">Threshold Value</p>
              <p>{product.thresholdValue || "N/A"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
