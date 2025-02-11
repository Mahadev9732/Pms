import React from "react";
import Layout from "../../../layouts/MainLayout";
import { getUserDetails, getRole } from "../../../_helper/authentication";
import { useParams, Link } from "react-router-dom";
import Card from "../../../components/card/Card";

const Grievance = () => {
  const role = getRole();
  const { departmentId, year } = useParams(); // Extract route parameters
  const { departmentName } = location.state || {}; // Extract additional data if available
  return (
    <Layout>
      <div className="text-center">
        <div className="text-4xl text-[#020048] mb-5 font-bold">Welcome</div>
        <div className="text-2xl text-[#242424] capitalize mb-4">
          {getUserDetails().F_name}
        </div>
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
        {/* Department Name */}
        <div className="mb-4 mt-10 uppercase text-2xl">{departmentName}</div>

        <h4 className="text-[20px] text-[#454545] font-normal tracking-[0.5px] bg-[#dedede] p-2.5 mt-10">
          Individual Performance Database Section
        </h4>
        <p className="mt-3">Click On the Appropriate Section Below</p>
        <div className="my-8 flex justify-center">
          <Link
            to={`/${role}/grievance/performence/monthly/${departmentId}`}
            class="block max-w-sm p-6 bg-blue-400 border border-gray-200 rounded-lg shadow-sm hover:scale-110 transition-transform duration-300 ease-in-out transform "
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white ">
              Monthly Performance Review Form (MPRF)
            </h5>
          </Link>
        </div>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-8 justify-center">
        <Link to={`/${role}/planning/${year}/${departmentId}`}>
          <Card
            title=""
            description="Performance Appraisal Dispute Form (PADF"
            bgColor="bg-blue-500"
          />
        </Link>

        <Link to={`/${role}/grievance/${year}/${departmentId}`}>
          <Card
            title=""
            description="Performance Appraisal Dispute Form (PADF)"
            bgColor="bg-lime-600"
          />
        </Link>

        <Link to={`/${role}/planning/${year}/${departmentId}`}>
          <Card
            title=""
            description="Individual Development Plans Form (IDPF)"
            bgColor="bg-orange-700"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default Grievance;
