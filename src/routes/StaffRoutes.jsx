import React, { lazy } from "react";

const Introduction = lazy(() =>
  import("../pages/staff/introduction/Introduction")
);
const Dashboard = lazy(() => import("../pages/staff/dashboard/Dashboard"));
const Department = lazy(() => import("../pages/staff/department/Department"));
const PersonalInfo = lazy(() => import("../pages/staff/profile/PersonalInfo"));
const Planning = lazy(() => import("../pages/staff/planning/Index"));
const Review = lazy(() => import("../pages/staff/review/Index"));
const Grievance = lazy(() => import("../pages/staff/grievance/Grievance"));
const Performance = lazy(() =>
  import("../pages/staff/grievance/performence/Index")
);

const staffRoutes = [
  { path: "/staff/introduction/:year", element: <Introduction /> },
  { path: "/staff/dashboard/:year", element: <Dashboard /> },
  { path: "/staff/department/:year/:departmentId", element: <Department /> },
  { path: "/staff/profile", element: <PersonalInfo /> },
  { path: "/staff/planning/:year/:departmentId", element: <Planning /> },
  { path: "/staff/review/:year/:departmentId", element: <Review /> },
  { path: "/staff/grievance/:year/:departmentId", element: <Grievance /> },
  {
    path: "/staff/grievance/performence/monthly/:departmentId",
    element: <Performance />,
  },
];

export default staffRoutes;
