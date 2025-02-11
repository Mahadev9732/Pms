import React from "react";

const TaskTableFooter = ({ totalObjWeight }) => {
  return (
    <>
      <tfoot>
        <tr>
          <td colSpan="2" className="border-2 border-[#166534] p-2 text-center">
            Total
          </td>
          <td className="border-2 border-[#166534] p-2 text-center">70</td>
          <td className="border-2 border-[#166534] p-2 text-center"></td>
          <td className="border-2 border-[#166534] p-2 text-center">
            {totalObjWeight}
          </td>
          <td className="border-2 border-[#166534] p-2 text-center">70</td>
          <td
            colSpan="5"
            className="border-2 border-[#166534] p-2 text-center"
          ></td>
        </tr>
      </tfoot>
    </>
  );
};

export default TaskTableFooter;
