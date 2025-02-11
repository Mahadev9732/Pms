import React from "react";
import EmployeeTask from "./employeeTask/Index";
import PlanningLayout from "../../../layouts/PlanningLayout";
import CompetenciesTable from "./competenciesTable/Index";
import Opretation_ProcessTable from "./Operations_ProcessesTable/Index";

const Planning = () => {
  return (
    <PlanningLayout>
      <EmployeeTask />
      <CompetenciesTable />
      <Opretation_ProcessTable />
    </PlanningLayout>
  );
};

export default Planning;
