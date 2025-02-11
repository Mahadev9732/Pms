import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Public from "./Public";
import Staff from "./Staff";
import Supervisor from "./Supervisor";
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
      {renderRoutes(Public)}

      {/* Staff Protected Routes */}
      {renderRoutes(Staff, true)}

      {/* Supervisor Protected Routes */}
      {renderRoutes(Supervisor, true)}
    </Routes>
  );
};

export default AppRoutes;
