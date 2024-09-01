import React, { useState } from 'react';
import './Inventory.css'; // Import your styles

const InventoryPage = () => {
  // Sample inventory data
  const [products, setProducts] = useState([
    { name: 'paracetamol', price: 430, quantity: 43, threshold: 12, expiry: '11/12/22', availability: 'In-stock' },
    { name: 'paracetamol', price: 257, quantity: 22, threshold: 12, expiry: '21/12/22', availability: 'Out of stock' },
    { name: 'paracetamol', price: 405, quantity: 36, threshold: 9, expiry: '5/12/22', availability: 'In-stock' },
    // Add more sample data as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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

  return (
    <div className="inventory-container">
      <h1 className='inventory-medicine-header'>Pharmaceuticals</h1>
      <div className="inventory-actions">
        <button className="inventory-button">Add Product</button>
        <button className="inventory-button">Filters</button>
        <button className="inventory-button">Download all</button>
      </div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Buying Price</th>
            <th>Quantity</th>
            <th>Threshold Value</th>
            <th>Expiry Date</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity} Packets</td>
              <td>{product.threshold} Packets</td>
              <td>{product.expiry}</td>
              <td className={`inventory-availability ${product.availability.replace(/\s+/g, '-').toLowerCase()}`}>
                {product.availability}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="inventory-pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {Math.ceil(products.length / productsPerPage)}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>Next</button>
      </div>
    </div>
  );
};

export default InventoryPage;
