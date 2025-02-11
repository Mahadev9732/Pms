import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/Index";
import useNetworkStatus from "./hooks/useNetworkStatus";
import useInactivityLogout from "./hooks/useInactivityLogout";
import { getauthToken } from "./_helper/authentication";

const App = () => {
  const navigate = useNavigate();

  // Handle logout on inactivity
  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); // Redirect to the login page
  };

  // Use custom hook for inactivity logout
  useInactivityLogout(handleLogout, 15 * 60 * 1000);

  // Online/Offline status alert
  const { isOnline } = useNetworkStatus();
  const previousStatus = useRef(isOnline);

  useEffect(() => {
    if (previousStatus.current !== isOnline) {
      alert(isOnline ? "Connection restored 🎉" : "No network connection 😢");
    }
    previousStatus.current = isOnline;
  }, [isOnline]);

  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
