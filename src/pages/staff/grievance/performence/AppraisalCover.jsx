import React from "react";

const AppraisalCover = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-3xl text-[#444444] py-2">
          MONTHLY PERFORMANCE REVIEW
        </div>
      </div>
      <div className="bg-white my-4 p-3.5 ">
        <label>
          This form is used to keep track of appraisees’ monthly performance and
          is meant to support them in achieving their agreed targets by helping
          to identify areas where improvements may be required during the
          appraisal year.
        </label>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[768px] grid grid-cols-3 bg-white">
          <div className="p-4 border-r border-gray-400">
            <span className="text-[13px] md:text-base text-gray-600 font-semibold">
              Appraisal Period Covered:
            </span>
          </div>
          <div className="p-4 border-r border-gray-400">
            <div className="flex items-center">
              <span className="mr-3 text-gray-600">From:</span>
              <select className="bg-gray-50  border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 font-semibold ">
                <option selected>Choose Month</option>
                <option>January</option>
                <option>Fabuary</option>
                <option>March</option>
                <option>April</option>
              </select>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <span className="mr-3 text-gray-600">To:</span>
              <select className="bg-gray-50  border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 font-semibold ">
                <option selected>Choose Year</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppraisalCover;
