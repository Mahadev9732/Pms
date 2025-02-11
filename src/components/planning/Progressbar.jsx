import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const CustomProgressBar = ({
  completed = 0, // default completion percentage
  bgColor = "#008300", // default progress bar color
  label = "Progress", // default label
  labelBgColor = "#679c66", // background color of the label section
  labelTextColor = "white", // text color of the label
}) => {
  return (
    <div className="md:mt-8 mt-4">
      <div
        className={`text-base p-2 w-full`}
        style={{ backgroundColor: labelBgColor, color: labelTextColor }}
      >
        <strong className="text-lg"> {label.toUpperCase()} :</strong> COMPLETE
      </div>
      <div className="mt-5">
        <ProgressBar completed={completed} bgColor={bgColor} />
      </div>
    </div>
  );
};

export default CustomProgressBar;
