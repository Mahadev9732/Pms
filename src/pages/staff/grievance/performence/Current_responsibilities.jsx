import React, { useState } from "react";
import DateField from "../../../../components/dateField/DateField";

const CurrentResponsibilities = () => {
  // State for managing dates
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  return (
    <div className="mt-6">
      <div className="text-base text-white bg-[#679c66] p-2.5 w-full">
        <strong className="text-lg">SECTION 3:</strong> CURRENT RESPONSIBILITIES
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full bg-white min-w-[900px] border-collapse">
          <thead>
            <tr>
              <th
                className="border-2 border-gray-400 w-[20%] p-2 text-sm"
                rowSpan={2}
              >
                Kpi
              </th>
              <th
                className="border-2 border-gray-400 w-[20%] p-2 text-sm"
                rowSpan={2}
              >
                Performance Expectations
              </th>
              <th
                className="border-2 border-gray-400 w-[15%] p-2 text-sm"
                rowSpan={2}
              >
                Start Date
              </th>
              <th
                className="border-2 border-gray-400 w-[15%] p-2 text-sm"
                rowSpan={2}
              >
                Due Date
              </th>
              <th
                className="border-2 border-gray-400 w-[15%] p-2 text-sm"
                rowSpan={2}
              >
                Output Status
              </th>
              <th
                className="border-2 border-gray-400 w-[15%] p-2 text-sm"
                rowSpan={2}
              >
                Issues
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 text-center">
                Number of Stakeholders workshops organized
              </td>
              <td className="border border-gray-300 text-center">1</td>
              <td className="border border-gray-300 text-center p-0.5">
                <DateField
                  selectedDate={startDate}
                  onDateChange={setStartDate}
                  editable={true}
                />
              </td>
              <td className="border border-gray-300 text-center p-0.5">
                <DateField
                  selectedDate={dueDate}
                  onDateChange={setDueDate}
                  editable={true}
                />
              </td>
              <td className="border border-gray-300 text-center">N/A</td>
              <td className="border border-gray-300 text-center">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentResponsibilities;
