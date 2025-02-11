import Introduction from "../pages/supervisor/introduction/Introduction";
import Dashboard from "../pages/supervisor/dashboard/Dashboard";
import Department from "../pages/supervisor/department/Department";
import Planning from "../pages/supervisor/planning/Planning";

export const supervisorRoutes = [
  {
    path: "/supervisor/introduction/:year",
    element: <Introduction />,
  },
  {
    path: "/supervisor/dashboard/:year",
    element: <Dashboard />,
  },
  {
    path: "/supervisor/department/:year",
    element: <Department />,
  },
  {
    path: "/supervisor/planning/:year",
    element: <Planning />,
  },
];
