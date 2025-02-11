import React from "react";
import Loader from "../loader/Loader";
import OfficerInformation from "./OfficerInformation";

const SupervisorInformation = ({ supervisorDetails = [], officerDetails }) => {
  // Ensure supervisorDetails is an array and safely access the first element
  const data =
    Array.isArray(supervisorDetails) && supervisorDetails.length > 0
      ? supervisorDetails[0]
      : null;

  const fields = data
    ? [
        { label: "Firstname", value: data.F_name || "N/A" },
        { label: "Surname", value: data.L_name || "N/A" },
        { label: "Othername", value: data.M_name || "N/A" },
        { label: "Designation", value: data.designation || "N/A" },
        { label: "IPPIS No", value: data.ippis_no || "N/A" },
        { label: "Email", value: data.email || "N/A" },
        { label: "Phone No", value: data.phone || "N/A" },
        { label: "Department", value: data.user_details?.org_name || "N/A" },
      ]
    : [];

  return (
    <div className="mt-8 md:w-[59%] w-full">
      <div className="text-base text-white bg-[#679c66] p-2 w-full">
        <strong className="text-lg">SECTION 1 :</strong> EMPLOYEE INFORMATION
      </div>
      <div className="text-lg my-4 mx-7 font-semibold">
        Supervisor Information
      </div>

      <div className="relative overflow-x-auto bg-white p-2.5 rounded-lg shadow-sm">
        {fields.length > 0 ? (
          fields.map(
            (field, index) =>
              // Render rows in pairs (two fields per row)
              index % 2 === 0 && (
                <div
                  key={index}
                  className="flex flex-wrap border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex w-1/2 p-2 border-r border-gray-200">
                    <span className="font-semibold text-[14px] w-1/2">
                      {field.label}
                    </span>
                    <span className="w-1/2">{field.value}</span>
                  </div>
                  {fields[index + 1] && (
                    <div className="flex w-1/2 p-2">
                      <span className="font-semibold text-[14px] w-1/2">
                        {fields[index + 1].label}
                      </span>
                      <span className="w-1/2">{fields[index + 1].value}</span>
                    </div>
                  )}
                </div>
              )
          )
        ) : (
          <div className="text-center py-4">
            <Loader />
          </div>
        )}
      </div>
      <OfficerInformation officerDetails={officerDetails} />
    </div>
  );
};

export default SupervisorInformation;
