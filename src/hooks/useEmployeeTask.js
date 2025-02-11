import { useState, useEffect } from "react";
import { axiosPrivate } from "../api/config";

const useEmployeeTask = () => {
  const [employeeTasks, setEmployeeTasks] = useState([]);
  const [taskObjects, setTaskObjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axiosPrivate.get("api/planning/employeetask");

        setEmployeeTasks(response.data.employeeTasks);

        const allObjs = response.data.employeeTasks.flatMap((heading) =>
          heading.kras.flatMap((kra) => kra.objs)
        );

        setTaskObjects(allObjs);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { employeeTasks, taskObjects, loading };
};

export default useEmployeeTask;
