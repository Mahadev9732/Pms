import React from "react";

const Index = () => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full bg-white min-w-[800px]">
        <thead>
          <tr>
            <th rowSpan={2} className="border-2 border-[#166534] w-[30%]">
              Operations and Processes
            </th>
            <th rowSpan={2} className="border-2 border-[#166534] w-[35%]">
              Describe Officer's Achievement
            </th>
            <th rowSpan={2} className="border-2 border-[#166534] w-[10%]">
              Max score
            </th>
            <th colSpan={5} className="border-2 border-[#166534] w-[25%]">
              Score Achieved
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
            <th className="border-2 border-[#166534] w-[30%]">
              Punctuality/Attendance
            </th>
            <td
              colSpan={10}
              className="border border-dotted border-black w-[70%]"
            >
              <table className="w-full">
                <tbody>
                  <tr className="border border-dotted border-black">
                    <td className="border border-dotted border-black w-[50%] text-center">
                      sgsdh
                    </td>
                    <td className="border border-dotted border-black w-[14.3%] text-center">
                      5
                    </td>
                    <td className="border border-dotted border-black w-[7.2%] text-center">
                      4
                    </td>
                    <td className="border border-dotted border-black w-[7.2%]"></td>
                    <td className="border border-dotted border-black w-[7.2%]"></td>
                    <td className="border border-dotted border-black w-[7.1%]"></td>
                    <td className="border border-dotted border-black w-[7%]"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={2} className="border-2 border-[#166534]"></th>
            <th className="border-2 border-[#166534]">Sub Total</th>
            <th colSpan={4} className="border-2 border-[#166534]">
              8.400
            </th>
            <th className="border-2 border-[#166534]">-</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Index;
