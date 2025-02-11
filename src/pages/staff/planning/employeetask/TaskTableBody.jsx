import React, { useEffect, useState } from "react";
import { Plus, CircleX, X } from "lucide-react";

const TaskTableBody = ({
  tasksData,
  setTasksData,
  handleRemoveRow,
  onTotalWeightChange,
  employeeTasks,
}) => {
  const [selectedKras, setSelectedKras] = useState({});
  console.log(employeeTasks);
  // Add a nested row to an existing KRA row
  const handleAddNestedRow = (index) => {
    const newNestedRow = {
      obj_title: "",
      obj_weight: 0,
      gradeed_weight: 0,
      target: "",
      kpi: "",
      unit: "",
    };
    const updatedTasks = [...tasksData];
    updatedTasks[index].objs = [...updatedTasks[index].objs, newNestedRow];
    setTasksData(updatedTasks);
  };

  // Remove a nested row from a KRA row
  const handleRemoveNestedRow = (taskIndex, objIndex) => {
    const updatedTasks = [...tasksData];
    updatedTasks[taskIndex].objs = updatedTasks[taskIndex].objs.filter(
      (_, index) => index !== objIndex
    );
    setTasksData(updatedTasks);
  };

  useEffect(() => {
    // Calculate total weight
    const calculatedTotalObjWeight = tasksData.reduce((total, task) => {
      const nestedSum = task.objs.reduce((sum, obj) => sum + obj.obj_weight, 0);
      return total + nestedSum;
    }, 0);

    // Update  and parent component

    onTotalWeightChange(calculatedTotalObjWeight);

    // Calculate grade_weight and kra_weight
    const updatedTasks = tasksData.map((task) => {
      let kraWeightSum = 0; // To accumulate grade_weight for this KRA row

      const updatedObjs = task.objs.map((obj) => {
        const grade_weight = calculatedTotalObjWeight
          ? (70 / calculatedTotalObjWeight) * obj.obj_weight
          : 0; // Avoid division by zero
        kraWeightSum += grade_weight; // Add to kra_weight sum
        return { ...obj, grade_weight };
      });

      return { ...task, objs: updatedObjs, kra_weight: kraWeightSum };
    });

    // Only update tasksData if there's an actual change
    if (JSON.stringify(tasksData) !== JSON.stringify(updatedTasks)) {
      setTasksData(updatedTasks);
    }
  }, [tasksData, onTotalWeightChange]);

  // selectedKras
  const handleKraChange = (rowId, kraId) => {
    const selectedKra = employeeTasks
      .flatMap((task) => task.kras)
      .find((kra) => kra.kra_id === parseInt(kraId));

    if (selectedKra) {
      const updatedTasks = [...tasksData];
      updatedTasks[rowId] = {
        ...updatedTasks[rowId],
        kra_title: selectedKra.kra_title, // Update the KRA title
        newlyAdded: true, // Mark this row as newly added
      };
      setTasksData(updatedTasks);

      // Update `selectedKras` for additional fields like objectives and KPIs
      setSelectedKras((prevState) => ({
        ...prevState,
        [rowId]: {
          kra: selectedKra,
          objs: selectedKra.objs || [],
          selectedObjective: null,
          kpi: [],
        },
      }));
    }
  };

  //select objective
  const handleObjectiveChange = (rowId, objTitle) => {
    const selectedObjective = selectedKras[rowId]?.objs.find(
      (obj) => obj.obj_title === objTitle
    );

    if (selectedObjective) {
      // Update the tasksData for the corresponding objective
      const updatedTasks = [...tasksData];
      updatedTasks[rowId].objs = updatedTasks[rowId].objs.map((obj) =>
        obj.obj_title === "" // Update only the newly added objective
          ? {
              ...obj,
              obj_title: selectedObjective.obj_title,
              target: selectedObjective.target || "", // Add default target
              kpi: selectedObjective.kpi || "", // Add default KPI
            }
          : obj
      );

      setTasksData(updatedTasks);

      // Update `selectedKras` to reflect the selected objective
      setSelectedKras((prevState) => ({
        ...prevState,
        [rowId]: {
          ...prevState[rowId],
          selectedObjective,
          kpi: selectedObjective.kpi || [],
        },
      }));
    }
  };

  //kpi changes
  const handleKpiChange = (rowId, kpiValue) => {
    const selectedObjective = selectedKras[rowId]?.selectedObjective;

    if (selectedObjective) {
      const kpiIndex = selectedObjective.kpi.indexOf(kpiValue);
      const correspondingTarget =
        kpiIndex !== -1 ? selectedObjective.target[kpiIndex] : "";

      // Update the tasksData for the corresponding KPI
      const updatedTasks = [...tasksData];
      updatedTasks[rowId].objs = updatedTasks[rowId].objs.map((obj) =>
        obj.obj_title === selectedObjective.obj_title
          ? {
              ...obj,
              kpi: kpiValue, // Update KPI
              target: correspondingTarget, // Update corresponding target
            }
          : obj
      );

      setTasksData(updatedTasks);

      // Update `selectedKras` to reflect the selected KPI and target
      setSelectedKras((prevState) => ({
        ...prevState,
        [rowId]: {
          ...prevState[rowId],
          selectedKpi: kpiValue,
          selectedTarget: correspondingTarget,
        },
      }));
    }
  };

  return (
    <tbody>
      {tasksData.map((data, rowIndex) => {
        const { kra_title, kra_weight, newlyAdded } = data;
        return (
          <tr key={rowIndex}>
            <td className="border-2 border-[#166534] p-2 text-center w-[4%]">
              {rowIndex + 1}
              <CircleX
                className="cursor-pointer float-left p-1 bg-red-500 text-white h-5 w-5 rounded-xl top-0"
                onClick={() => handleRemoveRow(rowIndex)}
              />
            </td>
            <td className="border-2 border-[#166534] p-2">
              {newlyAdded ? (
                <>
                  <select
                    value={selectedKras[rowIndex]?.kra?.kra_id || ""}
                    onChange={(e) => handleKraChange(rowIndex, e.target.value)}
                    className="w-full"
                  >
                    <option value="">Select KRA</option>
                    {employeeTasks.map((task) => (
                      <optgroup key={task.heading} label={task.heading}>
                        {task.kras.map((kra) => (
                          <option key={kra.kra_id} value={kra.kra_id}>
                            {kra.kra_title}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>

                  <Plus
                    className="cursor-pointer float-right p-1 bg-green-700 text-white h-5 w-5 rounded-xl"
                    onClick={() => handleAddNestedRow(rowIndex)}
                  />
                </>
              ) : (
                kra_title
              )}
            </td>

            <td className="border-2 border-[#166534] p-2 w-[98px] text-center">
              {data.kra_weight ? data.kra_weight.toFixed(2) : "0"}
            </td>
            <td colSpan={11} className="border-2 border-[#166534]">
              <table className="w-full">
                <tbody>
                  {data.objs.map((obj, nestedIndex) => {
                    const {
                      obj_title,
                      obj_weight,
                      gradeed_weight,
                      target,
                      kpi,
                      unit,
                    } = obj;
                    return (
                      <tr className="w-full" key={nestedIndex}>
                        <td className="border-2 border-[#166534] h-[55px] w-[12.4%]">
                          {data.objs.length > 1 && (
                            <X
                              onClick={() =>
                                handleRemoveNestedRow(rowIndex, nestedIndex)
                              }
                              className="bg-red-500 text-white h-4 w-4 cursor-pointer"
                            />
                          )}
                          {newlyAdded ? (
                            <select
                              value={
                                selectedKras[rowIndex]?.selectedObjective
                                  ?.obj_title || ""
                              }
                              onChange={(e) =>
                                handleObjectiveChange(rowIndex, e.target.value)
                              }
                              className="w-full mt-2"
                              disabled={!selectedKras[rowIndex]?.objs?.length} // Disable if no objectives are available
                            >
                              <option value="">Select Objective</option>
                              {selectedKras[rowIndex]?.objs?.map(
                                (obj, index) => (
                                  <option key={index} value={obj.obj_title}>
                                    {obj.obj_title}
                                  </option>
                                )
                              )}
                            </select>
                          ) : (
                            <textarea
                              rows={2}
                              className="w-full text-center border-2 p-2"
                              value={obj_title}
                              onChange={(e) => {
                                const updatedTasks = [...tasksData];
                                updatedTasks[rowIndex].objs[
                                  nestedIndex
                                ].obj_title = e.target.value;
                                setTasksData(updatedTasks);
                              }}
                            />
                          )}
                        </td>
                        <td className="border-2 border-[#166534] w-[12.8%] text-center">
                          {newlyAdded ? (
                            <span>0</span>
                          ) : (
                            <input
                              type="number"
                              className="w-full text-center border-2 p-2"
                              value={obj_weight}
                              onChange={(e) => {
                                const updatedTasks = [...tasksData];
                                updatedTasks[rowIndex].objs[
                                  nestedIndex
                                ].obj_weight = parseFloat(e.target.value) || 0;
                                setTasksData(updatedTasks);
                              }}
                            />
                          )}
                        </td>
                        <td className="border-2 border-[#166534] w-[10.5%] text-center">
                          {obj.grade_weight ? obj.grade_weight.toFixed(2) : "0"}
                        </td>
                        <td className="border-2 border-[#166534] w-[12.7%] text-center">
                          {newlyAdded ? (
                            <>
                              {selectedKras[rowIndex]?.selectedTarget !==
                                undefined && (
                                <div className="mt-2">
                                  {selectedKras[rowIndex]?.selectedTarget}
                                </div>
                              )}
                            </>
                          ) : (
                            target
                          )}
                        </td>
                        <td className="border-2 border-[#166534] w-[12.7%]">
                          {newlyAdded ? (
                            <select
                              value={selectedKras[rowIndex]?.selectedKpi || ""}
                              onChange={(e) =>
                                handleKpiChange(rowIndex, e.target.value)
                              }
                              className="w-full mt-2"
                              disabled={!selectedKras[rowIndex]?.kpi?.length} // Disable if no KPIs are available
                            >
                              <option value="">Select KPI</option>
                              {selectedKras[rowIndex]?.kpi.map((kpi, index) => (
                                <option key={index} value={kpi}>
                                  {kpi}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <textarea
                              rows={2}
                              className="w-full text-center border-2 p-2"
                              value={kpi}
                              onChange={(e) => {
                                const updatedTasks = [...tasksData];
                                updatedTasks[rowIndex].objs[nestedIndex].kpi =
                                  e.target.value;
                                setTasksData(updatedTasks);
                              }}
                            />
                          )}
                        </td>
                        <td className="border-2 border-[#166534] w-[12.7%]">
                          {unit}
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
                    );
                  })}
                </tbody>
              </table>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TaskTableBody;
