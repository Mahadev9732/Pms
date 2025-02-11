// src/components/TaskTable2.js
import React, { useState, useEffect } from "react";
import { axiosPrivate } from "../../../../api/config";
import Modal from "../../../../components/modal/Modal";

const TaskTable2 = () => {
  const [selectedTab, setSelectedTab] = useState("Q1");
  const [loading, setLoading] = useState(true);
  const [tasksData, setTasksData] = useState([]);

  const [rows, setRows] = useState([]);

  const year = 2024;
  const departmentid = "DP422931";

  const handleTabChange = async (tab) => {
    const newQuarter = parseInt(tab.replace("Q", ""), 10);
    setSelectedTab(tab);
    fetchTasks(newQuarter); // Fetch data when tab is changed
  };

  const fetchTasks = async (quater) => {
    setLoading(true);
    try {
      const apiResponse = await axiosPrivate.get(
        `api/planning/data?year=${year}&quater=${quater}&departmentid=${departmentid}`
      );
      const tasks = apiResponse.data;
      const dataForQuarter = tasks?.data?.DP422931?.kras || [];
      setTasksData(dataForQuarter);
    } catch (err) {
      console.error("Error fetching data:", err.response || err.message || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(1); // Fetch data for Q1 initially
  }, []);

  return (
    <div className="md:mt-8 mt-4 px-2">
      <div className="text-base text-white bg-[#679c66] p-2 w-full">
        <strong className="text-lg">SECTION 3 :</strong> EMPLOYEE'S TASKS (70%)
      </div>
      <div className="text-right mb-2.5">
        <button className="mt-2.5 border-0 w-20 h-7 rounded-md bg-[#166534] text-white font-semibold">
          Add Row
        </button>
      </div>
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
            {tasksData.map((data, index) => {
              const { kra_title, kra_weight } = data;
              return (
                <tr key={index}>
                  <td className="border-2 border-[#166534] p-2 text-center w-[4%]">
                    {index + 1}
                  </td>
                  <td className="border-2 border-[#166534] p-2">{kra_title}</td>
                  <td className="border-2 border-[#166534] p-2 w-[98px] text-center">
                    {kra_weight}
                  </td>
                  <td colSpan={11} className="border-2 border-[#166534]">
                    <table className="w-full">
                      <tbody>
                        {data.objs.map((obj, obIndex) => {
                          const {
                            obj_title,
                            obj_weight,
                            gradeed_weight,
                            target,
                            kpi,
                            unit,
                          } = obj;
                          return (
                            <tr className="w-full" key={obIndex}>
                              <td className="border-2 border-[#166534] h-[55px] w-[12.4%]">
                                {obj_title}
                              </td>
                              <td className="border-2 border-[#166534] w-[12.8%] text-center">
                                {obj_weight}
                              </td>
                              <td className="border-2 border-[#166534] w-[10.5%] text-center">
                                {gradeed_weight}
                              </td>
                              <td className="border-2 border-[#166534] w-[12.7%] text-center">
                                {target}
                              </td>
                              <td className="border-2 border-[#166534] w-[12.7%]">
                                {kpi}
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
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                <td className="border-2 border-[#166534] p-2 text-center w-[4%]">
                  {index + 1}
                </td>
                <td className="border-2 border-[#166534] p-2">2</td>
                <td className="border-2 border-[#166534] p-2 w-[98px] text-center">
                  1
                </td>
                <td colSpan={11} className="border-2 border-[#166534]">
                  <table className="w-full">
                    <tbody>
                      <tr className="w-full">
                        <td className="border-2 border-[#166534] h-[55px] w-[12.4%]">
                          2
                        </td>
                        <td className="border-2 border-[#166534] w-[12.8%] text-center">
                          3
                        </td>
                        <td className="border-2 border-[#166534] w-[10.5%] text-center">
                          4
                        </td>
                        <td className="border-2 border-[#166534] w-[12.7%] text-center">
                          5
                        </td>
                        <td className="border-2 border-[#166534] w-[12.7%]">
                          6
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
                    </tbody>
                  </table>
                </td>
              </tr>
            );
          })}

          <tr className="footer-text">
            <td
              colSpan="2"
              className="border-2 border-[#166534] p-2 text-center"
            >
              Total
            </td>
            <td className="border-2 border-[#166534] p-2 text-center">70</td>
            <td className="border-2 border-[#166534] p-2 text-center"></td>
            <td className="border-2 border-[#166534] p-2 text-center"></td>
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

export default TaskTable2;
