import React, { useState, useEffect } from "react";
import { Plus, CircleX, View, ChevronDown } from "lucide-react";

const Tasktable = ({ employeeTasks, loading }) => {
  const [selectedTab, setSelectedTab] = useState("Q1");
  const [rows, setRows] = useState([]);
  const [weights, setWeights] = useState(0);
  const [gradeWeight, setGradeWeight] = useState(0);
  const [selectedKras, setSelectedKras] = useState({});
  const [selectedKpi, setSelectedKpi] = useState("");
  const [targetValue, setTargetValue] = useState(null);

  // Log weights whenever it changes
  useEffect(() => {
    console.log("Weights:", weights);
  }, [weights]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // Handle adding a new row
  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      nestedRows: [], // Initialize nested rows for the new row
    };
    console.log(`rowId:${newRow.id}`); // Log the row ID to the console
    setRows([...rows, newRow]); // Add new row to the state
  };

  // Handle Remove Row button click
  const handleRemoveRow = (indexToRemove) => {
    setRows(
      (prevRows) =>
        prevRows
          .filter((_, index) => index !== indexToRemove) // Remove the specified row
          .map((row, index) => ({ ...row, sn: index + 1 })) // Reassign serial numbers
    );
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

  // Handle input change for a specific nested row
  const handleInputChange = (rowId, nestedRowId, value) => {
    console.log(value);
    if (/^\d*\.?\d*$/.test(value)) {
      const numValue = parseFloat(value) || 0;
      // Update the weights object for the specific row and nested row
      setWeights((prevWeights) => ({
        ...prevWeights,
        [rowId]: {
          ...prevWeights[rowId],
          [nestedRowId]: numValue,
        },
      }));
    }
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
    setGradeWeight(total); // Update total weight
    console.log("Grade Weight:", total); // Log the grade weight to the console
  }, [weights]); // Run whenever `weights` changes

  //grade weight
  const calculateValue = (rowId, nestedRowId) => {
    const weight = weights[rowId]?.[nestedRowId] || 0; // Get the weight for the current row and nested row
    const calculatedValue = (70 / gradeWeight) * weight; // Apply the formula
    console.log(
      `Calculated Value for Row ${rowId} NestedRow ${nestedRowId}: ${calculatedValue}`
    );
    return isNaN(calculatedValue) ? 0 : calculatedValue; // Return the calculated value
  };

  // kra weight
  const calculateKraWeight = (rowId) => {
    const targetRow = rows.find((row) => row.id === rowId);
    const total = targetRow.nestedRows.reduce((sum, nestedRow) => {
      const value = calculateValue(rowId, nestedRow.id);
      return sum + (isNaN(value) ? 0 : value);
    }, 0);

    return total;
  };

  // Selected kra
  const handleKraChange = (rowId, kraId) => {
    // Find the selected KRA's details using kra_id
    const selectedKra = employeeTasks
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
    // Find the selected objective's details
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

  // kpi selected
  const handleKpiChange = (rowId, kpi) => {
    // Find the selected objective based on rowId
    const selectedObj = selectedKras[rowId]?.objs?.find((obj) =>
      obj.kpi.includes(kpi)
    );

    if (selectedObj) {
      // Update the target value for the selected KPI
      const targetValue = selectedObj.target[selectedObj.kpi.indexOf(kpi)];
      setSelectedKpi((prev) => ({
        ...prev,
        [rowId]: kpi,
      }));
      setTargetValue((prev) => ({
        ...prev,
        [rowId]: targetValue,
      }));
    }
  };

  console.log("Updated selectedKras:", selectedKras);
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
      {/* Scrollable Table Container */}
      <div className="relative overflow-auto border border-green-500 rounded-md">
        <table className="w-full text-sm text-left rtl:text-right border-collapse bg-white">
          <thead>
            <tr>
              <th className="w-[60px] border-2 border-[#166534] p-2 text-center">
                S/N
              </th>
              <th className="min-w-[180px] border-2 border-[#166534] p-2 text-center">
                Key Result Areas
              </th>
              <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
                KRAWeight
              </th>
              <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
                Objectives
              </th>
              <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
                Weight
              </th>
              <th className="min-w-[100px] border-2 border-[#166534] p-2 text-center">
                Graded Weight
              </th>
              <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
                Target Set
              </th>
              <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
                KPIs
              </th>
              <th className="min-w-[120px] border-2 border-[#166534] p-2 text-center">
                Unit of Measurement
              </th>
              <th className="min-w-[184px] border-2 border-[#166534] text-center">
                <table className="w-full">
                  <thead>
                    <tr>
                      <td
                        colSpan={5}
                        className="border-b border-green-700 text-xs text-center md:text-base"
                      >
                        LEVEL OF ACHIEVEMENT
                      </td>
                    </tr>
                    <tr>
                      {["Q1", "Q2", "Q3", "Q4", "A"].map((tab, index) => (
                        <td
                          key={tab}
                          onClick={() => handleTabChange(tab)}
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
                </table>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              return (
                <tr key={row.id}>
                  <td className="border-2 border-[#166534] p-2 text-center w-[4%]">
                    {index + 1}
                    <CircleX
                      className="cursor-pointer float-left p-1 bg-red-500 text-white h-5 w-5 rounded-xl top-0"
                      onClick={() => handleRemoveRow(index)}
                    />
                  </td>
                  <td className="border-2 border-[#166534] p-2">
                    <select
                      onChange={(e) => handleKraChange(index, e.target.value)}
                    >
                      <option value="">Select KRA</option>
                      {employeeTasks.map((task) => (
                        <optgroup key={task.heading} label={task.heading}>
                          {task.kras.map((kra) => (
                            <option
                              key={kra.kra_id}
                              value={kra.kra_id} // Use kra_id as the value
                              disabled={kra.objs.length === 0} // Disable if no objs
                            >
                              {kra.kra_title}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>

                    <Plus
                      className="cursor-pointer float-right p-1 bg-green-700 text-white h-5 w-5 rounded-xl"
                      onClick={() => handleAddNestedRow(row.id)}
                    />
                  </td>
                  <td className="border-2 border-[#166534] p-2 w-[98px] text-center">
                    {calculateKraWeight(row.id).toFixed(2) || 0}
                  </td>
                  <td colSpan={11} className="border-2 border-[#166534]">
                    <table className="w-full">
                      <tbody>
                        {row.nestedRows.map((nestedRow) => (
                          <tr key={nestedRow.id} className="w-full">
                            <td className="border-2 border-[#166534] h-[55px] w-[12.4%]">
                              <select
                                className="w-full"
                                onChange={(e) =>
                                  handleObjChange(index, e.target.value)
                                }
                              >
                                <option value="">Select Objective</option>
                                {selectedKras[index]?.objs?.map(
                                  (obj, index) => (
                                    <option key={index} value={obj.obj_title}>
                                      {obj.obj_title}
                                    </option>
                                  )
                                )}
                              </select>
                            </td>
                            <td className="border-2 border-[#166534] w-[12.8%]">
                              <input
                                type="number"
                                className="w-full text-center"
                                value={weights[row.id]?.[nestedRow.id] || 0} // Ensures the input reflects the stored weight
                                onChange={(e) =>
                                  handleInputChange(
                                    row.id,
                                    nestedRow.id,
                                    e.target.value
                                  )
                                }
                              />
                            </td>
                            <td className="border-2 border-[#166534] w-[10.5%] text-center">
                              {calculateValue(row.id, nestedRow.id).toFixed(
                                2
                              ) || 0}
                            </td>
                            <td className="border-2 border-[#166534] w-[12.7%] text-center">
                              {targetValue !== null && (
                                <span>{targetValue[index]}</span>
                              )}
                            </td>
                            <td className="border-2 border-[#166534] w-[12.7%]">
                              <select
                                className="w-full"
                                onChange={(e) =>
                                  handleKpiChange(index, e.target.value)
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
                            <td className="border-2 border-[#166534] w-[12.7%]">
                              7
                            </td>
                            <td className="border-2 border-[#166534] w-[5.5%]">
                              8
                            </td>
                            <td className="border-2 border-[#166534] w-[5.5%]">
                              9
                            </td>
                            <td className="border-2 border-[#166534] w-[5.5%]">
                              10
                            </td>
                            <td className="border-2 border-[#166534] w-[5.5%]">
                              11
                            </td>
                            <td className="border-2 border-[#166534]">12</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tr class="footer-text">
            <td
              colSpan="2"
              className="border-2 border-[#166534] p-2 text-center"
            >
              Total
            </td>
            <td className="border-2 border-[#166534] p-2 text-center">70</td>
            <td className="border-2 border-[#166534] p-2 text-center"></td>
            <td className="border-2 border-[#166534] p-2 text-center">
              {gradeWeight}
            </td>
            <td className="border-2 border-[#166534] p-2 text-center">70</td>
            <td
              colSpan="5"
              className="border-2 border-[#166534] p-2 text-center"
            ></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Tasktable;
