import React from "react";

const Opretation_Process = () => {
  return (
    <div className="mt-8 ">
      <div className="text-base text-white bg-[#679c66] p-2.5 w-full">
        <strong className="text-lg">SECTION 5 :</strong> OPERATIONS AND
        PROCESSES (10%)
      </div>
      <div className="mt-2.5 pt-0 px-4 pb-5 bg-white border border-dashed border-black md:px-8">
        <div className="text-lg my-3.5 text-black uppercase font-medium">
          PERFORMANCE RATING SCALE:
        </div>
        <table className="border-collapse w-full">
          <tbody>
            {[
              {
                title: "Greatly Exceeds Expectations (5)",
                description:
                  "Performance far exceeded agreed target(s) on all critical parameters on a consistent basis; overall quality of work and performance is excellent.",
              },
              {
                title: "Exceeds Expectations (4)",
                description:
                  "Performance exceeded agreed target(s) on all critical parameters; overall quality of work and performance is very good.",
              },
              {
                title: "Meets Expectations (3)",
                description:
                  "Performance target(s) achieved on all critical parameters; overall quality of work and performance is good.",
              },
              {
                title: "Occasionally Meets Expectations (2)",
                description:
                  "Performance failed to meet expectations on agreed target(s) and on some critical parameters; performance deficiencies can however be addressed with support through guidance, coaching, mentoring and/or training.",
              },
              {
                title: "Unsatisfactory (1)",
                description:
                  "Performance failed to meet expectations on agreed target(s) and on most critical parameters; definite and significant corrective action needs to be taken immediately.",
              },
              {
                title: "Not Applicable (N/A):",
                description:
                  "The activity(s) is not being carried out within the Assessment Quarter.",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-400 py-2 px-3 w-full md:w-[30%] text-sm font-semibold">
                  {item.title}
                </td>
                <td className="border border-gray-400 py-2 px-3 text-sm">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Opretation_Process;
