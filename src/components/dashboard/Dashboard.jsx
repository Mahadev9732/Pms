import React, { useEffect, useState } from "react";
import { axiosPrivate } from "../../api/config";
import { Link } from "react-router-dom";
import Layout from "../../layouts/MainLayout";
import Loader from "../../components/loader/Loader";
import { getRole } from "../../_helper/authentication";

const Index = ({ apiEndpoint }) => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const role = getRole(); // Get user role

  const [loading, setLoading] = useState(true);
  const [departmentData, setDepartmentData] = useState({});
  const [departments, setDepartments] = useState([]);
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [years, setYears] = useState([]);

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setDepartments(departmentData[year] || []);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const cachedData = localStorage.getItem("departmentData");
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setDepartmentData(parsedData.departmentNames);
          setYears(Object.keys(parsedData.departmentNames));
          setDepartments(
            parsedData.departmentNames[currentYear.toString()] || []
          );
        } else {
          const response = await axiosPrivate.get(apiEndpoint);
          const departmentNames = response.data.departmentNames || {};
          setDepartmentData(departmentNames);
          setYears(Object.keys(departmentNames));
          localStorage.setItem(
            "departmentData",
            JSON.stringify({ departmentNames })
          );
          setDepartments(departmentNames[currentYear.toString()] || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return (
    <Layout>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
          <Loader />
        </div>
      )}

      <div className="text-center bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-4xl text-[#020048] mb-5 font-bold">Welcome</h1>
        <p className="text-base mb-4 text-[#3f3f3f]">
          Select your assessment year and click on your department to access
          your Performance Appraisal Forms
        </p>

        <select
          className="mt-4 w-full sm:w-1/3 p-2.5 border rounded-md focus:ring-1 focus:ring-blue-400"
          id="dashboard_assessment_year"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="" disabled>
            Select Year
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="max-w-7xl mx-auto mt-5">
        {selectedYear && (
          <div>
            {departments.length > 0 ? (
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {departments.map((dept) => (
                  <div
                    key={dept.department_id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-4"
                  >
                    <Link
                      to={`/${role.toLowerCase()}/department/${selectedYear}/${
                        dept.department_id
                      }`}
                      state={{
                        departmentName: dept.department_name,
                        selectedYear,
                      }}
                    >
                      <div className="department mx-auto text-center bg-green-700 text-white text-xl p-6 rounded h-28 font-bold cursor-pointer hover:bg-green-500 hover:border-l-[16px] hover:border-green-600 w-[250px] flex items-center justify-center">
                        {dept.department_name}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-5 font-semibold">
                No departments available for this year
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
