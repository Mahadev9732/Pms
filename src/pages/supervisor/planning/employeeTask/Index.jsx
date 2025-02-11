import React, { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Q1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="text-base text-white bg-[#679c66] p-2.5 w-full">
        <strong className="text-lg"> SECTION 3 : </strong>
        EMPLOYEE'S TASKS (70%)
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full bg-white min-w-[900px]">
          <thead>
            <tr>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[6%] bg-gray-50 p-2 text-sm"
              >
                S/N
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[20%] bg-gray-50 p-2 text-sm"
              >
                Key Result Areas
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[8%] bg-gray-50 p-2 text-sm"
              >
                Weight
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[20%] bg-gray-50 p-2 text-sm"
              >
                Objectives
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[8%] bg-gray-50 p-2 text-sm"
              >
                Weight
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[10%] bg-gray-50 p-2 text-sm"
              >
                Graded Weight
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[10%] bg-gray-50 p-2 text-sm"
              >
                Target Set
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[18%] bg-gray-50 p-2 text-sm"
              >
                KPIs
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[10%] bg-gray-50 p-2 text-sm"
              >
                Unit of Measurement
              </th>
              <th
                colSpan={5}
                className="border-2 border-[#166534] bg-gray-50 p-2 text-sm"
              >
                LEVEL OF ACHIEVEMENT
              </th>
            </tr>
            <tr>
              {["Q1", "Q2", "Q3", "Q4", "A"].map((tab) => (
                <th
                  key={tab}
                  className={`border border-dotted border-black w-[5%] p-2 text-sm ${
                    activeTab === tab ? "bg-green-500 text-white" : ""
                  }`}
                  onClick={() => handleTabChange(tab)}
                  style={{ cursor: "pointer" }}
                >
                  {tab}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Add your table data rows here */}
            <tr>
              <td className="border border-dotted border-black p-2 text-center">
                1
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                Sample Result Area
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                10%
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                Sample Objective
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                8.4
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                100
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                Sample KPI
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                Units
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                5
              </td>
              <td className="border border-dotted border-black p-2 text-center">
                4
              </td>
              <td className="border border-dotted border-black p-2 text-center"></td>
              <td className="border border-dotted border-black p-2 text-center"></td>
              <td className="border border-dotted border-black p-2 text-center"></td>
              <td className="border border-dotted border-black p-2 text-center"></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2} className="border-2 border-[#166534]">
                Total
              </th>
              <th className="border-2 border-[#166534]">0</th>
              <th className="border-2 border-[#166534]"></th>
              <th className="border-2 border-[#166534]">0</th>
              <th className="border-2 border-[#166534]">0</th>
              <th colSpan={8} className="border-2 border-[#166534]"></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="w-full text-right mb-2.5">
        <button className="mt-2.5 border-0 w-24 h-9 text-base rounded-md bg-[#166534] text-white font-semibold">
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Index;
