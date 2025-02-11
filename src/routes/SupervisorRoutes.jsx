import React, { lazy } from "react";

const Introduction = lazy(() =>
  import("../pages/supervisor/introduction/Introduction")
);
const Dashboard = lazy(() => import("../pages/supervisor/dashboard/Dashboard"));
const Department = lazy(() =>
  import("../pages/supervisor/department/Department")
);
const Planning = lazy(() => import("../pages/supervisor/planning/Planning"));

const supervisorRoutes = [
  { path: "/supervisor/introduction/:year", element: <Introduction /> },
  { path: "/supervisor/dashboard/:year", element: <Dashboard /> },
  { path: "/supervisor/department/:year", element: <Department /> },
  { path: "/supervisor/planning/:year", element: <Planning /> },
];

export default supervisorRoutes;
