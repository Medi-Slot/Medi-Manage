import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.isAuthenticated);

  if (!user) {
    // If user is not authenticated, redirect to home page
    return <Navigate to="/" />;
  }

  // If user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
