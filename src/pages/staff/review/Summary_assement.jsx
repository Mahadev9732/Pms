import React from "react";

const Summary_assement = () => {
  return (
    <div className="mt-8">
      <div className="text-base text-white bg-[#679c66] p-2.5 w-full">
        <strong className="text-lg">SECTION 6 :</strong> SUMMARY OF OVERALL
        ASSESSMENT
      </div>
      <div className="relative overflow-auto border border-green-500 rounded-md">
        <table className="w-full text-sm text-left rtl:text-right border-collapse bg-white">
          <thead>
            <tr>
              <th className="border-2 border-[#166534] p-2 w-4/5">
                Overall Assessment
              </th>
              <th className="border-2 border-[#166534] p-2 w-1/5">
                Appraiser Rating
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-dotted border-black p-2.5">
                SUB-TOTAL RATING OF APPRAISEE PERFORMANCE (EXPECTATIONS AND
                GOALS FROM )SECTION 3
              </td>
              <td className="border border-dotted border-black text-center">
                12.524
              </td>
            </tr>
            <tr>
              <td className="border border-dotted border-black p-2.5">
                SUB-TOTAL RATING OF APPRAISEE PERFORMANCE (COMPETENCIES) IN
                SECTION 4
              </td>
              <td className="border border-dotted border-black text-center">
                5.500
              </td>
            </tr>
            <tr>
              <td className="border border-dotted border-black p-2.5">
                SUB-TOTAL RATING OF APPRAISEE PERFORMANCE (OPERATIONS AND
                PROCESSES) SECTION 5
              </td>
              <td className="border border-dotted border-black text-center">
                8.400
              </td>
            </tr>
            <tr>
              <td className="border border-dotted border-black p-2.5">
                OVERALL RATING (SECTION 3 + 4 + 5)
              </td>
              <td className="border border-dotted border-black text-center">
                26.424
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Appraisee-Comment */}
      <div className="bg-white mt-8 p-3.5 ">
        <label>What are the employee’s strengths?</label>
        <p>bad.</p>
      </div>
      <div className="bg-white mt-8 p-3.5 ">
        <label>What are the employee’s areas for improvement?</label>
        <p>good</p>
      </div>
    </div>
  );
};

export default Summary_assement;
