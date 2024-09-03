import React from "react";
import "./Logout.css";

const Logout = ({ onConfirm, onCancel }) => {
  return (
    <div className="logout-popup-card">
      <div className="logout-popup-header">
        <div className="logout-popup-image">
          <svg
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <div className="logout-popup-content">
          <span className="logout-popup-title">Logout account</span>
          <p className="logout-popup-message">
            Are you sure you want to Logout your account?
          </p>
        </div>
        <div className="logout-popup-actions">
          <button
            className="logout-popup-desactivate"
            type="button"
            onClick={onConfirm}
          >
            Logout
          </button>
          <button
            className="logout-popup-cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
