import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import CustomDrawer from "../components/drawer/CustomDrawer";

const MainLayout = ({ children }) => {
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
        <main className="flex-1 p-4 overflow-y-auto bg-gray-100 mt-16">
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

export default MainLayout;
