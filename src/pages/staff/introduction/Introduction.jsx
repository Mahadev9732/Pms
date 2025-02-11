import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../layouts/MainLayout";
import HeaderSection from "../../../components/introduction/HeaderSection";
import TemplateList from "../../../components/introduction/TemplateList";
import DownloadsSection from "../../../components/introduction/DownloadsSection";
import { getRole } from "../../../_helper/authentication";

const Introduction = () => {
  const role = getRole();
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <div className="main p-4 ">
        <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg">
          {/* Left Side */}
          <div className="w-full lg:w-3/4 bg-white p-4 shadow-md">
            <HeaderSection />
            <div className="flex flex-col items-start mt-4 sm:px-20 px-4">
              <TemplateList />
            </div>
            <div className="flex flex-col items-center mt-8 px-4">
              <Link
                to={`/${role.toLowerCase()}/dashboard/${currentYear}`}
                className="sm:text-xl text-[#0d6efd] flex items-center"
              >
                Continue to Dashboard
                <img
                  src="https://fmepms.org/public/frontend/assets/images/arrow.png"
                  alt="arrow"
                  className="ml-2"
                  style={{ height: "31px" }}
                />
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/4 bg-[#e9ecf5a4] p-4 shadow-md lg:mt-0">
            <DownloadsSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Introduction;
