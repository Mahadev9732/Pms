import React from "react";
import { getUserDetails } from "../../_helper/authentication";

const IpisInfo = ({ loading }) => {
  const ippisInfoData = getUserDetails();
  const fields = [
    {
      label: "IPPIS Number",
      value: ippisInfoData.ippis_no,
      id: "ippis-number",
    },
    { label: "Staff ID", value: ippisInfoData.staff_id, id: "staff-id" },
    { label: "Job Title", value: ippisInfoData.job_title, id: "job-title" },
    {
      label: "Designation",
      value: ippisInfoData.designation,
      id: "designation",
    },
    { label: "Cadre", value: ippisInfoData.cadre, id: "cadre" },
    {
      label: "Date of Current Posting",
      value: ippisInfoData.date_of_current_posting,
      id: "current-posting",
    },
    {
      label: "Date of MDA Posting",
      value: ippisInfoData.date_of_MDA_posting,
      id: "mda-posting",
    },
    {
      label: "Date of Last Promotion",
      value: ippisInfoData.date_of_last_promotion,
      id: "last-promotion",
    },
    { label: "Gender", value: ippisInfoData.gender, id: "gender" },
    {
      label: "Grade Level",
      value: ippisInfoData.grade_level,
      id: "grade-level",
    },
    {
      label: "Organization",
      value: ippisInfoData.organization,
      id: "organization",
    },
    { label: "Role", value: ippisInfoData.role, id: "role" },
  ];

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-10">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fields.map(({ label, value, id }) => (
          <div key={id} className="mb-4">
            <label htmlFor={id} className="block font-medium">
              {label}
            </label>
            <input
              type="text"
              id={id}
              className="bg-[#ECF3F9] mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder={value || ""}
              readOnly
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default IpisInfo;
