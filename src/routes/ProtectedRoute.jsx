import React from "react";
import { Navigate } from "react-router-dom";
import { getauthToken } from "../_helper/authentication";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = Boolean(getauthToken());
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
