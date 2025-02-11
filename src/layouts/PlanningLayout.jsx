import React, { useState } from "react";
import Navbar from "../components/planningNavbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import CustomDrawer from "../components/drawer/CustomDrawer";

const PlanningLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="h-screen flex flex-col">
      <Navbar handleDrawerOpen={handleDrawerOpen} />

      {/* Sidebar and main content section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-[#ffca11] mt-16 p-0.5 sm:p-2 md:p-4 lg:p-6">
          {children}
        </main>
      </div>

      {/* Custom Drawer component for small screens */}
      <CustomDrawer isOpen={isDrawerOpen} onClose={handleDrawerOpen}>
        <Sidebar /> {/* Sidebar will be displayed inside the drawer */}
      </CustomDrawer>
    </div>
  );
};

export default PlanningLayout;
