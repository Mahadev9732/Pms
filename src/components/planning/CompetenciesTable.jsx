import React from "react";
import { ChevronDown } from "lucide-react";

const CompetenciesTable = () => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full bg-white min-w-[800px]">
        <thead>
          <tr>
            <th rowSpan={2} className="border-2 border-[#166534] w-[25%]">
              Competencies
            </th>
            <th rowSpan={2} className="border-2 border-[#166534] w-[22%]">
              Describe Expectations
            </th>
            <th rowSpan={2} className="border-2 border-[#166534] w-[9%]">
              Min score
            </th>
            <th rowSpan={2} className="border-2 border-[#166534] w-[9%]">
              Max score
            </th>
            <th colSpan={5} className="border-2 border-[#166534] w-[21%]">
              LEVEL OF ACHIEVEMENT
            </th>
          </tr>
          <tr>
            <th className="border border-dotted border-black text-center w-[5%]">
              Q1
            </th>
            <th className="border border-dotted border-black text-center w-[5%]">
              Q2
            </th>
            <th className="border border-dotted border-black text-center w-[5%]">
              Q3
            </th>
            <th className="border border-dotted border-black text-center w-[5%]">
              Q4
            </th>
            <th className="border border-dotted border-black text-center w-[5%]">
              A
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-dotted border-black">
            <th className="border-2 border-[#166534] w-[29%]">
              Generic Competencies
              <div className="flex justify-center my-1.5">
                <button
                  type="button"
                  className="w-3/4 flex items-center justify-center gap-2 
             focus:outline-none text-white bg-[#008300] hover:bg-green-800 
             focus:ring-4 focus:ring-green-300 font-medium rounded-md 
             text-sm  px-4  transition-colors
             mx-auto md:mx-0 mb-2 md:mb-0"
                >
                  Select Cluster <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </th>
            <td colSpan={8} className="border-2 border-[#166534] w-[70%]"></td>
          </tr>
        </tbody>

        <tbody>
          <tr className="border border-dotted border-black">
            <td className="border border-dotted border-black text-center w-[29%]">
              Commitment (Ethics and Value Cluster)
            </td>
            <td className="border border-dotted border-black text-center w-[25%]">
              Demonstrates unwavering dedication to the mission and vision of
              the Ministry, ensuring alignment of personal and team goals with
              organizational priorities.
            </td>
            <td className="border border-dotted border-black text-center w-[10%]">
              0
            </td>
            <td className="border border-dotted border-black text-center w-[10%]">
              0
            </td>
            <td className="border border-dotted border-black text-center w-[5%]"></td>
            <td className="border border-dotted border-black text-center w-[5%]"></td>
            <td className="border border-dotted border-black text-center w-[5%]"></td>
            <td className="border border-dotted border-black text-center w-[5%]"></td>
            <td className="border border-dotted border-black text-center w-[5%]"></td>
          </tr>
        </tbody>

        <tbody>
          <tr className="border border-dotted border-black">
            <th className="border-2 border-[#166534] w-[29%]">
              Functional Competencies
              <div className="flex justify-center my-1.5">
                <button
                  type="button"
                  className="w-3/4 flex items-center justify-center gap-2 
             focus:outline-none text-white bg-[#008300] hover:bg-green-800 
             focus:ring-4 focus:ring-green-300 font-medium rounded-md 
             text-sm  px-4  transition-colors
             mx-auto md:mx-0 mb-2 md:mb-0"
                >
                  Select Cluster <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </th>
            <td colSpan={8} className="border-2 border-[#166534] w-[70%]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompetenciesTable;
