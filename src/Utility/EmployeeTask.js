import { axiosPrivate } from "../api/config";

export const EmployeeTask = async (setLoading) => {
  try {
    setLoading(true);
    const response = await axiosPrivate.get("api/planning/employeetask");

    const employeeTasks = response.data.employeeTasks;
    return employeeTasks;
  } catch (err) {
    console.error("Error fetching data:", err);
    return [];
  } finally {
    setLoading(false);
  }
};
