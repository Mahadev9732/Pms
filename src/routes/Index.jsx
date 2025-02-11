import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { publicRoutes } from "./publicRoutes";
import { staffRoutes } from "./StaffRoutes";
import { supervisorRoutes } from "./SupervisorRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}

      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      {/* Staff Protected Routes */}
      {staffRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<ProtectedRoute>{route.element}</ProtectedRoute>}
        />
      ))}

      {/* Supervisor Protected Routes */}
      {supervisorRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<ProtectedRoute>{route.element}</ProtectedRoute>}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
