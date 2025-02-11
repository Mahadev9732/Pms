import React from "react";
import Loader from "../loader/Loader";

const EmployeeInformation = ({ informationData }) => {
  // Ensure `informationData` is a valid array or set it to an empty array
  const Data =
    Array.isArray(informationData) && informationData.length > 0
      ? informationData[0]
      : null;
  const userDetails = Data?.user_details || {}; // Safely access `user_details`

  return (
    <div className="md:w-2/5 mt-8 w-full">
      <div className="text-base text-white bg-[#679c66] p-2 w-full">
        <strong className="text-lg">SECTION 1 :</strong> EMPLOYEE INFORMATION
      </div>
      <div className="text-lg my-4 mx-7 font-semibold">
        Employee Information
      </div>
      <div className="relative overflow-x-auto w-full bg-white p-2.5 rounded-lg shadow-sm">
        {Data ? (
          <>
            {[
              { label: "Firstname", value: Data.F_name },
              { label: "Surname", value: Data.L_name },
              { label: "Othername", value: Data.M_name || "N/A" },
              { label: "Gender", value: userDetails.gender },
              { label: "Grade Level", value: userDetails.grade_level },
              { label: "Designation", value: Data.designation },
              { label: "IPPIS No.", value: Data.ippis_no },
              { label: "Email", value: Data.email },
              { label: "Phone No", value: Data.phone },
              { label: "Department", value: userDetails.org_name || "N/A" },
              {
                label: "Date of Last Promotion",
                value: userDetails.date_of_last_promotion,
              },
              {
                label: "Date of Posting to MDA",
                value: userDetails.date_of_MDA_posting,
              },
              {
                label: "Date of Posting to Current Job",
                value: userDetails.date_of_current_posting,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-1.5 border-b border-gray-200 last:border-b-0"
              >
                <div className="font-semibold text-[14px] w-1/2">
                  {item.label}
                </div>
                <div className="text-neutral-900 w-1/2">{item.value}</div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center p-4">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeInformation;
