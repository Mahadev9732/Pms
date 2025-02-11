import React from "react";
import Tabs from "../tab/Tab";

const Opretation_ProcessTable = ({ selectedTab, onTabChange }) => {
  const tabsData = ["Q1", "Q2", "Q3", "Q4", "A"];
  const headerText = "LEVEL OF ACHIEVEMENT";
  return (
    <div className="md:mt-8 mt-4 ">
      <div className="relative overflow-auto border border-green-500 rounded-md">
        <table className="w-full text-sm text-left rtl:text-right border-collapse bg-white">
          <thead>
            <tr>
              <th className="border-2 border-[#166534] text-center w-[300px]">
                Operations and Processes
              </th>
              <th className="border-2 border-[#166534] text-center">
                Describe Expectations
              </th>
              <th className="border-2 border-[#166534] text-center">
                Min Score
              </th>
              <th className="border-2 border-[#166534] text-center">
                Max Score
              </th>
              <th className="border-2 border-[#166534] text-center w-[250px]">
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
          <tbody>
            <tr>
              <td className="border-2 border-[#166534] text-center">
                Punctuality/Attendance
              </td>
              <td colSpan={8}>
                <table className="w-full">
                  <tbody>
                    <tr className="h-10">
                      <td className="border border-dotted border-black w-[35.1%] text-center">
                        sgsdh
                      </td>
                      <td className="border border-dotted border-black w-[16.7%] text-center">
                        2
                      </td>
                      <td className="border border-dotted border-black w-[17.2%] text-center">
                        5
                      </td>
                      <td className="border border-dotted border-black w-[6.7%]"></td>
                      <td className="border border-dotted border-black [6.7%]"></td>
                      <td className="border border-dotted border-black [6.7%]"></td>
                      <td className="border border-dotted border-black [6.7%]"></td>
                      <td className="border border-dotted border-black [5.4%]"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Opretation_ProcessTable;
