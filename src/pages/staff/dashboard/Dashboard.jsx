import React from "react";
import DashbordComponent from "../../../components/dashboard/Dashboard";

const Dashboard = () => {
  const apiEndpoint = "api/department"; // API endpoint

  return <DashbordComponent apiEndpoint={apiEndpoint} />;
};

export default Dashboard;
