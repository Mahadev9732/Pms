import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../../layouts/MainLayout";
import Card from "../../../components/card/Card";
import { getUserDetails, getRole } from "../../../_helper/authentication";

const Department = () => {
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
        <div className="my-4 mx-auto tracking-[0.5px] text-[#3f3f3f]">
          Click the Appropriate Form Below
        </div>

        {/* Department Name */}
        <div className="mb-4 mt-10 uppercase text-2xl">{departmentName}</div>

        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
        <h4 className="text-[20px] text-[#454545] font-normal tracking-[0.5px] bg-[#dedede] p-2.5 mt-10">
          Individual Performance Database Section
        </h4>
        <p className="mt-3">Click On the Appropriate Section Below</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-8 justify-center">
        <Link to={`/${role}/planning/${year}/${departmentId}`}>
          <Card
            title="Form - A"
            description="Employee Performance Contract"
            bgColor="bg-blue-500"
          />
        </Link>

        <Link to={`/${role}/review/${year}/${departmentId}`}>
          <Card
            title="Form - B"
            description="Employee Performance Contract"
            bgColor="bg-lime-600"
          />
        </Link>

        <Link to={`/${role}/planning/${year}/${departmentId}`}>
          <Card
            title="Form - C"
            description="Employee Performance Contract"
            bgColor="bg-orange-700"
          />
        </Link>

        <Link to={`/${role}/grievance/${year}/${departmentId}`}>
          <Card
            title="Form - D"
            description="Employee Performance Contract"
            bgColor="bg-blue-500"
          />
        </Link>

        <Link to={`/${role}/planning/${year}/${departmentId}`}>
          <Card
            title="Form - E"
            description="Employee Performance Contract"
            bgColor="bg-lime-600"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default Department;
