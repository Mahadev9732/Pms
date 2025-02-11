import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import generalRoute from "./PublicRoutes";
import staffRoutes from "./staffRoutes";
import supervisorRoutes from "./supervisorRoutes";
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
      {renderRoutes(generalRoute)}

      {/* Staff Protected Routes */}
      {renderRoutes(staffRoutes, true)}

      {/* Supervisor Protected Routes */}
      {renderRoutes(supervisorRoutes, true)}
    </Routes>
  );
};

export default AppRoutes;
