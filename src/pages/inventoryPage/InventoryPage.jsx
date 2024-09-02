import React, { useEffect, useState } from "react";
import "./Inventory.css"; // Import your styles
import { useOutletContext, useParams, useNavigate } from "react-router-dom"; // Add useNavigate
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices/titleSlice";
import {
  getFirestore,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth } from "../../Firebase"; // Ensure auth is correctly imported
import * as XLSX from "xlsx";
import { MdOutlineDeleteOutline } from "react-icons/md";

const InventoryPage = () => {
  const dispatch = useDispatch();
  const { handleNewMedicineClick } = useOutletContext();
  const { category } = useParams(); // Get the category from the route
  const navigate = useNavigate(); // Hook for navigation
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    dispatch(setTitle("Inventory"));

    const db = getFirestore();
    const user = auth.currentUser;

    if (!user || !user.uid) {
      setError("User not authenticated!");
      setLoading(false);
      return;
    }

    // Create a real-time listener for the selected category
    const unsubscribe = onSnapshot(
      collection(db, "Inventory", user.uid, category), // Use category from route
      (snapshot) => {
        const fetchedProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(fetchedProducts);
        setLoading(false);
      },
      (err) => {
        setError("Failed to fetch products");
        console.error("Error fetching products: ", err);
        setLoading(false);
      }
    );

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [dispatch, category]); // Dependency array now includes category

  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(products);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventory");
    XLSX.writeFile(wb, "Inventory.xlsx");
  };

  const deleteMedicine = async (id, category) => {
    const db = getFirestore();
    const user = auth.currentUser;

    if (!user || !user.uid) {
      setError("User not authenticated!");
      return;
    }

    try {
      await deleteDoc(doc(db, "Inventory", user.uid, category, id));
      console.log("Document successfully deleted!");
    } catch (err) {
      setError("Failed to delete product");
      console.error("Error deleting product: ", err);
    }
  };

  const handleRowClick = (productId) => {
    // Navigate to the InventoryOverview page for the clicked product
    navigate(`/inventory/${category}/${productId}`);
  };

  if (loading)
    return (
      <div>
        <div>
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
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="inventory-container">
      <div className="inventory-sub-container">
        <h1 className="inventory-medicine-header">{category}</h1>
        <div className="inventory-actions">
          <button className="inventory-button" onClick={handleNewMedicineClick}>
            Add Product
          </button>
          <button className="inventory-button">Filters</button>
          <button className="inventory-button" onClick={downloadExcel}>
            Download all
          </button>
        </div>
      </div>
      {products.length === 0 ? (
        <div className="no-inventory-items">No Inventory Items</div>
      ) : (
        <>
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Buying Price</th>
                <th>Quantity</th>
                <th>Threshold Value</th>
                <th>Expiry Date</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id} onClick={() => handleRowClick(product.id)}>
                  <td>{product.productName}</td>
                  <td>₹{product.buyingPrice}</td>
                  <td>{product.quantity} Packets</td>
                  <td>{product.thresholdValue} Packets</td>
                  <td>{product.expiryDate || "N/A"}</td>
                  <td
                    className={`inventory-availability ${
                      product.availability
                        ? product.availability
                            .replace(/\s+/g, "-")
                            .toLowerCase()
                        : "unknown"
                    }`}
                  >
                    {product.availability || "Unknown"}
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click event
                        deleteMedicine(product.id, category);
                      }}
                      className="patient-data-delete-button"
                    >
                      <MdOutlineDeleteOutline
                        style={{
                          fontSize: "1.7rem",
                          marginTop: "0.5rem",
                          color: "#FF8E26",
                          cursor: "pointer",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="inventory-pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of{" "}
              {Math.ceil(products.length / productsPerPage)}
            </span>
            <button
              onClick={handleNextPage}
              disabled={
                currentPage === Math.ceil(products.length / productsPerPage)
              }
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryPage;
