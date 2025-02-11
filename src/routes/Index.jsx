import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import publicRoutes from "@routes/publicRoutes";
import staffRoutes from "@routes/StaffRoutes";
import supervisorRoutes from "@routes/SupervisorRoutes";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const renderRoutes = (routes, isProtected = false) =>
    routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={
          isProtected ? (
            <ProtectedRoute>
              <Suspense fallback={<div>Loading...</div>}>
                {route.element}
              </Suspense>
            </ProtectedRoute>
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              {route.element}
            </Suspense>
          )
        }
      />
    ));

  return (
    <Routes>
      {/* Public Routes */}
      {renderRoutes(publicRoutes)}

      {/* Staff Protected Routes */}
      {renderRoutes(staffRoutes, true)}

      {/* Supervisor Protected Routes */}
      {renderRoutes(supervisorRoutes, true)}
    </Routes>
  );
};

export default AppRoutes;
