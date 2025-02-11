import Introduction from "../pages/staff/introduction/Introduction";
import Dashboard from "../pages/staff/dashboard/Dashboard";
import Department from "../pages/staff/department/Department";
import PersonalInfo from "../pages/staff/profile/PersonalInfo";
import Planning from "../pages/staff/planning/Index";
import Review from "../pages/staff/review/Index";
import Grievance from "../pages/staff/grievance/Grievance";
import Performance from "../pages/staff/grievance/performence/Index";

export const staffRoutes = [
  {
    path: "/staff/introduction/:year",
    element: <Introduction />,
  },
  {
    path: "/staff/dashboard/:year",
    element: <Dashboard />,
  },
  {
    path: "/staff/department/:year/:departmentId",
    element: <Department />,
  },
  {
    path: "/staff/profile",
    element: <PersonalInfo />,
  },
  {
    path: "/staff/planning/:year/:departmentId",
    element: <Planning />,
  },
  {
    path: "/staff/review/:year/:departmentId",
    element: <Review />,
  },
  {
    path: "/staff/grievance/:year/:departmentId",
    element: <Grievance />,
  },
  {
    path: "/staff/grievance/performence/monthly/:departmentId",
    element: <Performance />,
  },
];
