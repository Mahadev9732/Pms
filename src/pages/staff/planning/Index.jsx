import React, { useState, useEffect } from "react";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { getRole } from "../../../_helper/authentication";
import PlanningLayout from "../../../layouts/PlanningLayout";
import { getProfileInfo } from "../../../api/apiPersonalInfo";
import AppraisalPeriod from "../../../components/planning/AppraisalPeriod";
import EmployeeInformation from "../../../components/planning/EmployeeInformation";
import SupervisorInformation from "../../../components/planning/SupervisorInformation";
import CustomProgressBar from "../../../components/planning/Progressbar";
import PerformanceScoring from "../../../components/planning/PerformanceScoring";
import Competencies from "../../../components/planning/Competencies";
import Table5 from "./employeetask/Table5";
import CompetenciesTable from "../../../components/planning/CompetenciesTable";
import Opretation_Process from "../../../components/planning/Opretation_Process";
import Acknowledgement from "../../../components/planning/Acknowledgement";
import AppraiseesDeclaration from "./AppraiseesDeclaration/Index";
import AppraisersDeclaration from "./Appraiser'sDeclaration/AppraisersDeclaration";
import OfficersDeclaration from "./Officer'sDeclaration/OfficersDeclaration";

const Index = () => {
  const role = getRole();
  const navigate = useNavigate();
  const { departmentId, year } = useParams();

  const [staffDetails, setStaffDetails] = useState([]);
  const [supervisorDetails, setSupervisorDetails] = useState([]);
  const [officerDetails, setOfficerDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!departmentId) {
      console.error("Department ID is missing or invalid");
      return;
    }

    const fetchProfileInfo = async () => {
      setLoading(true);
      try {
        const response = await getProfileInfo(
          `api/planning?departmentid=${departmentId.trim()}`
        );
        if (response?.data) {
          setStaffDetails(response.data.staffDetails || []);
          setSupervisorDetails(response.data.supervisorDetails || []);
          setOfficerDetails(response.data.officerDetails || []);
        } else {
          console.error("Invalid response format", response);
        }
      } catch (error) {
        console.error("Error fetching profile info", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileInfo();
  }, [departmentId]);

  const handleNavigation = (direction) => {
    const targetPath =
      direction === "next"
        ? `/${role}/review/${year}/${departmentId}`
        : `/${role}/previous/${year}/${departmentId}`;
    navigate(targetPath);
  };

  const acknowledgementData = {
    sectionNumber: "6",
    sectionTitle: "CONFIRMATION AND ACKNOWLEDGEMENTS",
    appraiseeComments: {
      label: "Appraisee's Comments:",
      placeholder: "Enter your comments...",
      content: "First form submitted by staff",
      isEditable: true,
    },
    appraiserComments: {
      label: "Appraiser's Comments:",
      content: "1str",
      isEditable: false,
    },
    countersigningOfficerComments: {
      label: "Countersigning Officer's Comments:",
      content: "",
      isEditable: false,
    },
  };
  return (
    <PlanningLayout>
      <div className="ml-0 md:ml-3.5 lg:ml-3.5">
        {/* Appraisal Period */}
        <AppraisalPeriod />

        {/* Employee and Supervisor Information */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <EmployeeInformation
            informationData={staffDetails}
            loading={loading}
          />
          <SupervisorInformation
            supervisorDetails={supervisorDetails}
            officerDetails={officerDetails}
            loading={loading}
          />
        </div>

        {/* Progress Bar */}
        <CustomProgressBar
          completed={70}
          bgColor="#3498db"
          label="Task Progress"
        />

        {/* Task and Scoring Tables */}
        <Table5 />
        <PerformanceScoring />
        <Competencies />
        <CompetenciesTable />
        <Opretation_Process />
        <Acknowledgement {...acknowledgementData} />

        {/* Declarations */}
        <AppraiseesDeclaration />
        <AppraisersDeclaration />
        <OfficersDeclaration />

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center bg-white p-4">
          {/* Back Button */}
          <button
            onClick={() => handleNavigation("back")}
            type="button"
            className="flex items-center justify-center space-x-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <ArrowLeftFromLine className="text-white" />
            <span className="text-lg font-semibold">Back</span>
          </button>

          {/* Next Button */}
          <button
            onClick={() => handleNavigation("next")}
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
