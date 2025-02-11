import React from "react";
import newlogoIcon from "../../assets/images/new-logo.png";

const AppraisalPeriod = () => {
  return (
    <>
      <div className="text-center">
        <img src={newlogoIcon} className="w-52 mx-auto" alt="Logo" />
        <div className="text-3xl text-[#444444] py-2">
          EMPLOYEE PERFORMANCE CONTRACT
        </div>
      </div>

      <div className="bg-green-600 h-6"></div>
      <div className="overflow-x-auto">
        <div className="min-w-[768px] grid grid-cols-3 bg-white">
          <div className="p-4 border-r border-gray-400">
            <span className="text-[13px] md:text-base text-gray-600">
              PERFORMANCE APPRAISAL PERIOD:
            </span>
          </div>
          <div className="p-4 border-r border-gray-400">
            <div className="flex items-center">
              <span className="mr-3 text-gray-600">From:</span>
              <span className="ml-3">1st Jan 2024</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <span className="mr-3 text-gray-600">To:</span>
              <span className="ml-3">31st Dec 2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppraisalPeriod;
