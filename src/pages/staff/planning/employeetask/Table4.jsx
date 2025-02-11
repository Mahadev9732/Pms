import React, { useState, useEffect } from "react";
import { Plus, CircleX } from "lucide-react";
import { EmployeeTask } from "../../../../Utility/EmployeeTask";
import TaskTableFooter from "./TaskTableFooter";

const Table4 = ({ rows = [], setRows, onAddNestedRow }) => {
  const [loading, setLoading] = useState(false);
  const [employeetask, setEmployeetask] = useState();
  const [selectedKras, setSelectedKras] = useState({});
  const [targetValues, setTargetValues] = useState({});
  const [weights, setWeights] = useState({});
  const [totalGradeWeight, setTotalGradeWeight] = useState(0);

  // Handle Remove Row button click
  const handleRemoveRow = (indexToRemove) => {
    setRows(
      (prevRows) =>
        prevRows
          .filter((_, index) => index !== indexToRemove) // Remove the specified row
          .map((row, index) => ({ ...row, sn: index + 1 })) // Reassign serial numbers
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const employeeTasks = await EmployeeTask(setLoading); // Fetch the data
      setEmployeetask(employeeTasks); // Set the data to state
    };

    fetchData(); // Call the fetchData function to get the data on component mount
  }, []);

  // selectedKras
  const handleKraChange = (rowId, kraId) => {
    const selectedKra = employeetask
      .flatMap((task) => task.kras)
      .find((kra) => kra.kra_id === parseInt(kraId)); // Parse kraId to integer
    if (selectedKra) {
      // Update the selectedKras state to store objectives for the selected KRA
      setSelectedKras((prevState) => ({
        ...prevState,
        [rowId]: {
          kra: selectedKra,
          objs: selectedKra.objs,
          kpi: [], // Reset KPIs when selecting a new KRA
        },
      }));
    }
  };

  // selected objective
  const handleObjChange = (rowId, objTitle) => {
    const selectedObj = selectedKras[rowId]?.objs?.find(
      (obj) => obj.obj_title === objTitle
    );

    if (selectedObj) {
      // Update the KPIs for the selected objective
      setSelectedKras((prevState) => ({
        ...prevState,
        [rowId]: {
          ...prevState[rowId],
          kpi: selectedObj.kpi,
        },
      }));
    }
  };

  // Handle KPI Change and Set Target Value for each nested row independently
  const handleKpiChange = (rowId, nestedRowId, kpi) => {
    const selectedObj = selectedKras[rowId]?.objs?.find((obj) =>
      obj.kpi.includes(kpi)
    );
    if (selectedObj) {
      const targetIndex = selectedObj.kpi.indexOf(kpi);
      const targetValue = selectedObj.target[targetIndex];
      setTargetValues((prevState) => ({
        ...prevState,
        [rowId]: {
          ...prevState[rowId],
          [nestedRowId]: targetValue,
        },
      }));
    }
  };

  // Handle input change for a specific nested row
  const handleWeightChange = (rowId, nestedRowId, value) => {
    if (/^\d*\.?\d*$/.test(value)) {
      const numValue = value === "" ? "" : parseFloat(value);
      setWeights((prevWeights) => ({
        ...prevWeights,
        [rowId]: {
          ...prevWeights[rowId],
          [nestedRowId]: numValue,
        },
      }));
    }
  };

  //grade weight
  const calculateGradeWeight = (rowId, nestedRowId) => {
    const weight = weights[rowId]?.[nestedRowId] || 0; // Get the weight for the current row and nested row
    const calculatedValue = (70 / totalGradeWeight) * weight; // Apply the formula
    console.log(
      `Calculated Value for Row ${rowId} NestedRow ${nestedRowId}: ${calculatedValue}`
    );
    return isNaN(calculatedValue) ? 0 : calculatedValue; // Return the calculated value
  };

  // calculate total weights value
  const calculateTotalWeight = () => {
    let totalWeight = 0;
    for (const rowId in weights) {
      if (weights.hasOwnProperty(rowId)) {
        const nestedRows = weights[rowId];
        for (const nestedRowId in nestedRows) {
          if (nestedRows.hasOwnProperty(nestedRowId)) {
            totalWeight += nestedRows[nestedRowId];
          }
        }
      }
    }
    return totalWeight;
  };

  useEffect(() => {
    const total = calculateTotalWeight();
    setTotalGradeWeight(total); // Update total weight
    console.log("Grade Weight:", total); // Log the grade weight to the console
  }, [weights]); // Run whenever `weights` changes

  console.log(employeetask);
  console.log(totalGradeWeight);
  return (
    <>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id}>
            <td className="border-2 border-[#166534] p-2 text-center w-[4%]">
              {index + 1}
              <CircleX
                className="cursor-pointer float-left p-1 bg-red-500 text-white h-5 w-5 rounded-xl top-0"
                onClick={() => handleRemoveRow(index)}
              />
            </td>

            <td className="border-2 border-[#166534] p-2">
              <select onChange={(e) => handleKraChange(index, e.target.value)}>
                <option value="">Select KRA</option>
                {employeetask.map((task) => (
                  <optgroup key={task.heading} label={task.heading}>
                    {task.kras.map((kra) => (
                      <option
                        key={kra.kra_id}
                        value={kra.kra_id}
                        disabled={kra.objs.length === 0}
                      >
                        {kra.kra_title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <Plus
                className="cursor-pointer float-right p-1 bg-green-700 text-white h-5 w-5 rounded-xl"
                onClick={() => onAddNestedRow(row.id)}
              />
            </td>
            <td className="border-2 border-[#166534] p-2 w-[98px] text-center"></td>
            <td colSpan={11} className="border-2 border-[#166534]">
              <table className="w-full">
                <tbody>
                  {row.nestedRows.map((nestedRow, nestedIndex) => (
                    <tr key={nestedRow.id} className="w-full">
                      <td className="border-2 border-[#166534] h-[55px] w-[12.4%]">
                        <select
                          className="w-full"
                          onChange={(e) =>
                            handleObjChange(index, e.target.value)
                          }
                        >
                          <option value="">Select Objective</option>
                          {selectedKras[index]?.objs?.map((obj, index) => (
                            <option key={index} value={obj.obj_title}>
                              {obj.obj_title}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="border-2 border-[#166534] w-[12.8%]">
                        <input
                          type="number"
                          className="w-full text-center"
                          value={weights[row.id]?.[nestedRow.id] || ""} // Ensure the value is always defined (empty string if undefined)
                          onChange={(e) =>
                            handleWeightChange(
                              row.id,
                              nestedRow.id,
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td className="border-2 border-[#166534] w-[10.5%] text-center">
                        {calculateGradeWeight(row.id, nestedRow.id).toFixed(
                          2
                        ) || 0}
                      </td>
                      <td className="border-2 border-[#166534] w-[12.7%] text-center">
                        {targetValues[index]?.[nestedRow.id] || 0}
                      </td>
                      <td className="border-2 border-[#166534] w-[12.7%]">
                        <select
                          className="w-full"
                          onChange={(e) =>
                            handleKpiChange(index, nestedRow.id, e.target.value)
                          }
                        >
                          <option value="">Select KPI</option>
                          {selectedKras[index]?.kpi?.map((kpi, index) => (
                            <option key={index} value={kpi}>
                              {kpi}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="border-2 border-[#166534] w-[12.7%]"></td>
                      <td className="border-2 border-[#166534] w-[5.5%]">8</td>
                      <td className="border-2 border-[#166534] w-[5.5%]">9</td>
                      <td className="border-2 border-[#166534] w-[5.5%]">10</td>
                      <td className="border-2 border-[#166534] w-[5.5%]">11</td>
                      <td className="border-2 border-[#166534]">12</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        ))}
      </tbody>
    
    </>
  );
};

export default Table4;
