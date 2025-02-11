import React, { useState } from "react";
import TaskTableHeader from "./TaskTableHeader";
import TaskTableBody from "./TaskTableBody";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("Q1");
  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
  };
  return (
    <div className="md:mt-8 mt-4 px-2">
      <div className="text-base text-white bg-[#679c66] p-2 w-full">
        <strong className="text-lg">SECTION 3 :</strong> EMPLOYEE'S TASKS (70%)
      </div>
      <div className="relative overflow-auto border border-green-500 rounded-md">
        <table className="w-full text-sm text-left rtl:text-right border-collapse bg-white">
          <TaskTableHeader
            selectedTab={selectedTab}
            onTabChange={handleTabChange}
          />
          <TaskTableBody />
        </table>
      </div>
    </div>
  );
};

export default Index;
