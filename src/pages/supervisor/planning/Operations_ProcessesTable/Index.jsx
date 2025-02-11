import React, { useState } from "react";
import { CirclePlus } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Q1");
  // Initialize state with the initial row data
  const [rows, setRows] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      id: rows.length,
      description: "New Description",
      min: 0,
      max: 0,
    };
    setRows([...rows, newRow]);
  };

  return (
    <>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full bg-white min-w-[900px]">
          <thead>
            <tr>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[20%] text-sm"
              >
                Operations and Processes
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[26%] text-sm"
              >
                Describe Expectations
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[10%] text-sm"
              >
                Min score
              </th>
              <th
                rowSpan={2}
                className="border-2 border-[#166534] w-[10%] text-sm"
              >
                Max score
              </th>
              <th
                colSpan={5}
                className="border-2 border-[#166534] w-[25%] text-sm"
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
            <tr className="border border-dotted border-black">
              <th className="border-2 border-[#166534] w-[30%]">
                <div className="flex justify-center items-center w-full gap-x-12">
                  <span> Punctuality/Attendance</span>
                  <span
                    onClick={addRow}
                    className="bg-green-700 rounded-full text-white cursor-pointer"
                  >
                    <CirclePlus />
                  </span>
                </div>
              </th>
              <td
                colSpan={8}
                className="border border-dotted border-black w-[70%]"
              >
                <table className="w-full">
                  <tbody>
                    {rows.map((row, index) => (
                      <tr
                        key={index}
                        className="border border-dotted border-black"
                      >
                        <td className="border border-dotted border-black w-[25.8%] text-center h-7"></td>
                        <td className="border border-dotted border-black w-[10%] text-center"></td>
                        <td className="border border-dotted border-black w-[10%] text-center"></td>
                        <td className="border border-dotted border-black w-[5%]"></td>
                        <td className="border border-dotted border-black w-[5%]"></td>
                        <td className="border border-dotted border-black w-[5%]"></td>
                        <td className="border border-dotted border-black w-[5%]"></td>
                        <td className="border border-dotted border-black w-[3.8%]"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2} className="border-2 border-[#166534]">
                Total
              </th>
              <th className="border-2 border-[#166534]">0</th>
              <th className="border-2 border-[#166534]">0</th>
              <th colSpan={5} className="border-2 border-[#166534]"></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="w-full text-right mb-2.5">
        <button className="mt-2.5 border-0 w-24 h-9 text-base rounded-md bg-[#166534] text-white font-semibold">
          SAVE
        </button>
      </div>
    </>
  );
};

export default Index;
