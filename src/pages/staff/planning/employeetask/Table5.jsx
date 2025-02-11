import React, { useState, useEffect } from "react";
import { fetchTasks } from "../../../../Utility/fetchTasks";
import { EmployeeTask } from "../../../../Utility/EmployeeTask";
import TaskTableHeader from "./TaskTableHeader";
import TaskTableBody from "./TaskTableBody";
import TaskTableFooter from "./TaskTableFooter";

const Table5 = () => {
  const [selectedTab, setSelectedTab] = useState("Q1");
  const [loading, setLoading] = useState(false);
  const [tasksData, setTasksData] = useState([]);
  const [totalObjWeight, setTotalObjWeight] = useState(0); // State for total weight
  const [employeeTasks, setEmployeeTasks] = useState([]);
  const year = 2024;
  const departmentId = "DP422931";

  // Fetch tasks data based on the selected quarter
  const fetchTasksData = async (quarter) => {
    try {
      setLoading(true);
      const data = await fetchTasks(year, quarter, departmentId); // Fetch data
      const updatedData = data.map((task) => ({
        ...task,
        newlyAdded: false,
        objs: task.objs || [], // Ensure objs is initialized as an array
      }));
      setTasksData(updatedData); // Update the state
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    const quarter = parseInt(selectedTab.slice(-1));
    fetchTasksData(quarter);
  }, [selectedTab]);

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
  };

  // Add a new KRA row
  const addRow = async () => {
    try {
      // Call the EmployeeTask API
      setLoading(true);
      const fetchedTasks = await EmployeeTask(setLoading);

      // Log the API response
      console.log("Employee Tasks API Response:", fetchedTasks);

      // Save the API response to state
      setEmployeeTasks(fetchedTasks);
    } catch (err) {
      console.error("Error fetching employee tasks:", err);
    } finally {
      setLoading(false);
    }

    // Add a new row to the table (existing functionality)
    const newRow = {
      kra_title: "",
      kra_weight: 0,
      newlyAdded: true,
      objs: [], // Keep objs empty
    };
    setTasksData([...tasksData, newRow]);
  };

  // Remove a KRA row
  const handleRemoveRow = (index) => {
    const updatedData = tasksData.filter((_, i) => i !== index);
    setTasksData(updatedData);
  };

  // Handle the total weight received from child component
  const handleTotalWeightChange = (totalObjWeight) => {
    setTotalObjWeight(totalObjWeight);
  };

  // Save data and log it in the required format
  const handleSave = () => {
    // Format the data in the required structure
    const formattedData = {
      dept_id: departmentId,
      year,
      kras: tasksData.map((task) => ({
        kra_title: task.kra_title,
        kra_weight: task.kra_weight,
        objs: task.objs.map((obj) => ({
          obj_title: obj.obj_title,
          obj_weight: obj.obj_weight,
          grade_weight: obj.grade_weight,
          target: obj.target,
          kpi: obj.kpi,

          quarter: parseInt(selectedTab.slice(-1)),
        })),
      })),
    };

    // Log the formatted data to the console
    console.log(JSON.stringify(formattedData, null, 2));
  };

  return (
    <div className="md:mt-8 mt-4 px-2">
      <div className="text-base text-white bg-[#679c66] p-2 w-full">
        <strong className="text-lg">SECTION 3 :</strong> EMPLOYEE'S TASKS (70%)
      </div>
      <div className="text-right mb-2.5">
        <button
          onClick={addRow}
          className="mt-2.5 border-0 w-20 h-7 rounded-md bg-[#166534] text-white font-semibold"
        >
          Add Row
        </button>
      </div>
      <div className="relative overflow-auto border border-green-500 rounded-md">
        <table className="w-full text-sm text-left rtl:text-right border-collapse bg-white">
          <TaskTableHeader
            selectedTab={selectedTab}
            onTabChange={handleTabChange}
          />
          <TaskTableBody
            tasksData={tasksData}
            setTasksData={setTasksData}
            handleRemoveRow={handleRemoveRow}
            onTotalWeightChange={handleTotalWeightChange} // Pass function to child
            employeeTasks={employeeTasks}
          />
          <TaskTableFooter totalObjWeight={totalObjWeight} />
        </table>
      </div>
      <div className="w-full text-right mb-2.5">
        <button
          onClick={handleSave}
          className="mt-2.5 border-0 w-20 h-7 text-xs rounded-md bg-[#166534] text-white font-semibold"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Table5;
