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

  // Use custom hook for inactivity logout (15 minutes)
  useInactivityLogout(handleLogout, 15 * 60 * 1000); // Fixed the timer calculation

  // Online/Offline status alert
  const { isOnline } = useNetworkStatus();
  const previousStatus = useRef(isOnline);

  useEffect(() => {
    if (previousStatus.current !== isOnline) {
      alert(isOnline ? "Connection restored 🎉" : "No network connection 😢");
    }
    previousStatus.current = isOnline;
  }, [isOnline]);

  // Check authentication token on initial load
  useEffect(() => {
    const token = getauthToken();
    if (!token) {
      navigate("/"); // Redirect to login if no token is found
    }
  }, [navigate]);

  return (
    <div>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
