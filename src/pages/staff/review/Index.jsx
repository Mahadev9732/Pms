import React, { useState, useEffect } from "react";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import PlanningLayout from "../../../layouts/PlanningLayout";
import AppraisalPeriod from "../../../components/planning/AppraisalPeriod";
import EmployeeInformation from "../../../components/planning/EmployeeInformation";
import SupervisorInformation from "../../../components/planning/SupervisorInformation";
import CustomProgressBar from "../../../components/planning/Progressbar";
import PerformanceScoring from "../../../components/planning/PerformanceScoring";
import Competencies from "../../../components/planning/Competencies";
import Opretation_Process from "../../../components/planning/Opretation_Process";
import EmployeeTask from "./employeeTask/Index";
import Summary_assement from "./Summary_assement";
import Comments from "./Comments";
import AppraiseeDeclaration from "./AppraiseeDeclaration";
import AppraisersDeclaration from "./AppraisersDeclaration";
import CountersigningOfficer from "./CountersigningOfficer";
import Opretation_ProcessTable2 from "./Operations and Processes/Index";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [staffDetailsData, setStaffDetailsData] = useState(null);
  const [officerDetails, setOfficerDetails] = useState(null);
  const [supervisorDetails, setSupervisorDetails] = useState(null);

  useEffect(() => {
    const AppraisalPeriodData = localStorage.getItem("planningData");
    if (!AppraisalPeriodData) {
      console.error("No data found in localStorage for 'planningData'");
      setLoading(false);
      return;
    }

    try {
      const parsedData = JSON.parse(AppraisalPeriodData);
      setStaffDetailsData(parsedData?.data?.data?.staffDetails);
      setOfficerDetails(parsedData?.data?.data?.officerDetails);
      setSupervisorDetails(parsedData?.data?.data?.supervisorDetails);
    } catch (error) {
      console.error("Error parsing 'planningData':", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // const handleNavigation = (direction) => {
  //   const targetPath =
  //     direction === "next"
  //       ? `/${role}/review/${year}/${departmentId}`
  //       : `/${role}/previous/${year}/${departmentId}`;
  //   navigate(targetPath);
  // };

  return (
    <PlanningLayout>
      <div className="ml-0 md:ml-3.5 lg:ml-3.5">
        <AppraisalPeriod />
        <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-8">
          <EmployeeInformation informationData={staffDetailsData || []} />

          <SupervisorInformation
            supervisorDetails={supervisorDetails}
            officerDetails={officerDetails}
            loading={loading}
          />
        </div>
        <CustomProgressBar
          completed={70}
          bgColor="#3498db"
          label="Task Progress"
        />
        <EmployeeTask />
        <PerformanceScoring />
        <Competencies />

        <Opretation_Process />
        <Opretation_ProcessTable2 />
        <Summary_assement />
        <Comments />
        <AppraiseeDeclaration />
        <AppraisersDeclaration />
        <CountersigningOfficer />
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center bg-white p-4">
          {/* Back Button */}
          <button
            // onClick={() => handleNavigation("back")}
            type="button"
            className="flex items-center justify-center space-x-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <ArrowLeftFromLine className="text-white" />
            <span className="text-lg font-semibold">Back</span>
          </button>

          {/* Next Button */}
          <button
            // onClick={() => handleNavigation("next")}
            type="button"
            className="flex items-center justify-center space-x-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <span className="text-lg font-semibold">Next</span>
            <ArrowRightFromLine className="text-white" />
          </button>
        </div>
      </div>
    </PlanningLayout>
  );
};

export default Index;
