import React from "react";
import PlanningLayout from "../../../../layouts/PlanningLayout";
import AppraisalCover from "./AppraisalCover.JSX";
import Current_responsibilities from "./Current_responsibilities";

const Index = () => {
  return (
    <PlanningLayout>
      <AppraisalCover />
      <Current_responsibilities />
    </PlanningLayout>
  );
};

export default Index;
