import React from "react";
import Tabs from "../../../../components/tab/Tab";

const TaskTableHeader = ({ selectedTab, onTabChange }) => {
  const tabsData = ["Q1", "Q2", "Q3", "Q4", "Raw", "Weighted"];
  const headerText = "Score";
  return (
    <thead>
      <tr>
        <th className="w-[60px] border-2 border-[#166534] p-2 text-center">
          S/N
        </th>
        <th className="min-w-[180px] border-2 border-[#166534] p-2 text-center">
          Key Result Areas
        </th>
        <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
          Weight
        </th>
        <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
          Objectives
        </th>
        <th className="min-w-[100px] border-2 border-[#166534] p-2 text-center">
          Graded Weight
        </th>
        <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
          KPIs
        </th>
        <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
          Unit of Measurement
        </th>
        <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
          Target Set
        </th>
        <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
          Target Achieved
        </th>

        <th className="min-w-[184px] border-2 border-[#166534] text-center">
          <table className="w-full">
            <Tabs
              selectedTab={selectedTab}
              onTabChange={onTabChange}
              headerText={headerText}
              tabs={tabsData}
            />
          </table>
        </th>
      </tr>
    </thead>
  );
};

export default TaskTableHeader;
