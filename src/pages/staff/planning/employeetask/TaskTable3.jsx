import React, { useState, useEffect } from "react";
import { fetchTasks } from "../../../../Utility/fetchTasks";
import TableHeader from "./TaskTableHeader";
import TableBody from "./InitalTableBody";
import TableFooter from "./TaskTableFooter";
import Table4 from "./Table4";

const TaskTable3 = () => {
  const [selectedTab, setSelectedTab] = useState("Q1");
  const [tasksData, setTasksData] = useState([]);
  const [rows, setRows] = useState([]);
  const year = 2024;
  const departmentId = "DP422931";

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    fetchTasksData(parseInt(tab.replace("Q", ""), 10));
  };

  const fetchTasksData = async (quarter) => {
    try {
      const data = await fetchTasks(year, quarter, departmentId);
      setTasksData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasksData(1);
  }, []);

  // Handle adding a new row
  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      nestedRows: [], // Initialize nested rows for the new row
    };
    console.log(`rowId:${newRow.id}`); // Log the row ID to the console
    setRows([...rows, newRow]); // Add new row to the state
  };

  // Handle adding a nested row for a specific row
  const handleAddNestedRow = (rowId) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              nestedRows: [
                ...row.nestedRows,
                { id: row.nestedRows.length + 1, weights: 0 },
              ],
            }
          : row
      )
    );
  };

  return (
    <div className="md:mt-8 mt-4 px-2">
      <div className="text-base text-white bg-[#679c66] p-2 w-full">
        <strong className="text-lg">SECTION 3 :</strong> EMPLOYEE'S TASKS (70%)
      </div>
      <div className="text-right mb-2.5">
        <button
          onClick={handleAddRow}
          className="mt-2.5 border-0 w-20 h-7 rounded-md bg-[#166534] text-white font-semibold"
        >
          Add Row
        </button>
      </div>
      <div className="relative overflow-auto border border-green-500 rounded-md">
        <table className="w-full text-sm text-left rtl:text-right border-collapse bg-white">
          <TableHeader
            selectedTab={selectedTab}
            onTabChange={handleTabChange}
          />
          <TableBody
            tasksData={tasksData}
            rows={rows}
            setRows={setRows}
            onAddNestedRow={handleAddNestedRow}
          />

          <TableFooter />
        </table>
      </div>
      <div class="w-full text-right mb-2.5">
        <button class="mt-2.5 border-0 w-20 h-7 text-xs rounded-md bg-[#166534] text-white font-semibold">
          SAVE
        </button>
      </div>
    </div>
  );
};

export default TaskTable3;
