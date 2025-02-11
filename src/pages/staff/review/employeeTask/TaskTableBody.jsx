import React from "react";

const TaskTableBody = () => {
  return (
    <tbody>
      <tr>
        <td className="border-2 border-[#166534] p-2 text-center w-[4%]">1</td>

        <td className="border-2 border-[#166534] p-2">2</td>
        <td className="border-2 border-[#166534] p-2 w-[98px] text-center">
          3
        </td>
        <td colSpan={12} className="border-2 border-[#166534]">
          <table className="w-full">
            <tbody>
              <tr className="w-full">
                <td className="border-2 border-[#166534] h-[55px] w-[11.1%]">
                  4
                </td>
                <td className="border-2 border-[#166534] w-[9.4%]">5</td>
                <td className="border-2 border-[#166534] w-[11.3%] text-center">
                  6
                </td>
                <td className="border-2 border-[#166534] w-[11.4%] text-center">
                  7
                </td>
                <td className="border-2 border-[#166534] w-[11.3%]">8</td>
                <td className="border-2 border-[#166534] w-[11.3%]">9</td>
                <td className="border-2 border-[#166534] w-[5%]">10</td>
                <td className="border-2 border-[#166534] w-[4.9%]">11</td>
                <td className="border-2 border-[#166534] w-[4.8%]">12</td>
                <td className="border-2 border-[#166534] w-[4.7%]">13</td>
                <td className="border-2 border-[#166534] w-[5.9%]">14</td>
                <td className="border-2 border-[#166534] w-[8.9%]">15</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  );
};

export default TaskTableBody;
