import { axiosPrivate } from "../api/config";

export const fetchTasks = async (year, quarter, departmentId) => {
  try {
    const apiResponse = await axiosPrivate.get(
      `api/planning/data?year=${year}&quater=${quarter}&departmentid=${departmentId}`
    );
    const tasks = apiResponse.data;
    return tasks?.data?.[departmentId]?.kras || [];
  } catch (err) {
    console.error("Error fetching data:", err.response || err.message || err);
    throw err;
  }
};
