import React, { useState, useEffect } from "react";
import Layout from "../../../layouts/MainLayout";
import Card from "../../../components/card/Card";
import { getUserDetails } from "../../../_helper/authentication";
import { axiosPrivateFormData } from "../../../api/config";

const Department = () => {
  const [data, setData] = useState();
  const [staff, setStaff] = useState("");
  useEffect(() => {
    const apiData = axiosPrivateFormData.get("api/supervisor/stafflist");
  }, []);

  const options = ["a", "b", "c", "d"];

  return (
    <Layout>
      <div className="text-center">
        <div className="text-4xl text-[#020048] mb-5 font-bold">Welcome</div>
        <div className="text-2xl text-[#242424] capitalize mb-4">
          {getUserDetails().F_name}
        </div>
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />

        <div className="mb-4 mt-3.5 uppercase text-2xl">Mahadev</div>
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
        {/* choose Staff */}
        <div className="max-w-xs mx-auto mb-8 mt-4">
          <label
            htmlFor="staff-select"
            className="block font-semibold text-lg mb-2"
          >
            Choose Staff
          </label>
          <select
            id="staff-select"
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
            className="w-full px-4 py-2 border bg-green-200 rounded-md shadow-sm 
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     transition duration-150 ease-in-out"
          >
            <option value="">Select a staff member</option>
            {options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <h4 class="text-[20px] text-[#454545] font-normal tracking-[0.5px] bg-[#dedede] p-2.5 mt-10">
          Individual Performance Database Section
        </h4>
        <p className="mt-3">Click On the Appropriate Section Below</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-8 justify-center">
        <>
          <Card
            title="Form - A"
            description="Employee Performance Contract"
            bgColor="bg-blue-500"
          />
        </>
        <Card
          title="Form - B"
          description="Employee Performance Contract"
          bgColor="bg-lime-600"
        />
        <Card
          title="Form - C"
          description="Employee Performance Contract"
          bgColor="bg-orange-700"
        />
        <Card
          title="Form - D"
          description="Employee Performance Contract"
          bgColor="bg-blue-500"
        />
        <Card
          title="Form - E"
          description="Employee Performance Contract"
          bgColor="bg-lime-600"
        />
      </div>
    </Layout>
  );
};

export default Department;
