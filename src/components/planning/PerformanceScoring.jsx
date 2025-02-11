import React from "react";

const PerformanceScoring = () => {
  return (
    <div className="mt-8">
      <div className="text-white bg-[#679c66]  w-full p-2.5">
        <strong className="text-lg uppercase">
          Performance Scoring Criteria Values:
        </strong>
      </div>
      <div class="overflow-x-auto">
        <table class="bg-white border-collapse w-full">
          <tbody>
            <tr class="border-b-2">
              <td class="px-3 py-1 max-w-[100px] small-heading-text-new border-r-2">
                O
              </td>
              <td class="px-3 py-1 border-r-2">Outstanding - 100%</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">G</td>
              <td class="px-3 py-1 border-r-2">Good - 70%</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">Q1</td>
              <td class="px-3 py-1 border-r-2">First Quarter</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">Q4</td>
              <td class="px-3 py-1">Fourth Quarter</td>
            </tr>
            <tr class="border-b-2">
              <td class="px-3 py-1 small-heading-text-new border-r-2">E</td>
              <td class="px-3 py-1 border-r-2">Excellent - 90%</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">F</td>
              <td class="px-3 py-1 border-r-2">Fair - 60%</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">Q2</td>
              <td class="px-3 py-1 border-r-2">Second Quarter</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">A</td>
              <td class="px-3 py-1">Aggregate</td>
            </tr>
            <tr>
              <td class="px-3 py-1 small-heading-text-new border-r-2">VG</td>
              <td class="px-3 py-1 border-r-2">Very Good - 80%</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">P</td>
              <td class="px-3 py-1 border-r-2">Poor - less than 60 %</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">Q3</td>
              <td class="px-3 py-1 border-r-2">Third Quarter</td>
              <td class="px-3 py-1 small-heading-text-new border-r-2">N/A</td>
              <td class="px-3 py-1">Not Applicable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceScoring;
