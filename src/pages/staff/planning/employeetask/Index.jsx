import { useState, useEffect } from "react";
import { axiosPrivate } from "../../../../api/config";
import Tasktable from "./Tasktable";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [employeeTasks, setEmployeeTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const apiResponse = await axiosPrivate.get("api/planning/employeetask");
        const tasksData = apiResponse.data.employeeTasks;
        setEmployeeTasks(tasksData); // Save data for rendering
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks(); // Call the function to fetch data
  }, []);

  return (
    <div>
      <Tasktable employeeTasks={employeeTasks} loading={loading} />
    </div>
  );
};

export default Index;
