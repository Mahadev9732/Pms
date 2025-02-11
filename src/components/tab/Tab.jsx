import React from "react";

const Tabs = ({ headerText, tabs, selectedTab, onTabChange }) => {
  return (
    <thead>
      <tr>
        <td
          colSpan={tabs.length}
          className="border-b border-green-700 text-xs text-center md:text-base"
        >
          {headerText}
        </td>
      </tr>
      <tr>
        {tabs.map((tab) => (
          <td
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`cursor-pointer px-2 md:px-4 py-1 text-xs md:text-sm ${
              tab !== "A" ? "border-r border-green-700" : ""
            } ${
              selectedTab === tab
                ? "bg-green-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {tab}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default Tabs;
