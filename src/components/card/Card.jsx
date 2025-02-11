import React from "react";
import contractIcon from "../../assets/images/contract.png";

const Card = ({
  title = "Form - A",
  description = "Employee Performance Contract",
  imageSrc = contractIcon,
  bgColor = "bg-blue-500", // Default background color
}) => {
  return (
    <div
      className={`max-w-sm sm:h-64 h-[17rem] relative overflow-hidden rounded-lg ${bgColor} p-2.5 transition-transform duration-300 ease-in-out transform hover:scale-110`}
    >
      <h2 className="text-white text-[23px] font-bold uppercase mb-5 text-center">
        {title}
      </h2>

      <div className="flex justify-center mb-4">
        <img
          src={imageSrc}
          alt="Contract Icon"
          className="w-28 h-28 object-contain"
        />
      </div>
      <hr className="border-t border-white mb-4" />
      <h3 className="text-lg font-medium text-center text-white">
        {description}
      </h3>
    </div>
  );
};

export default Card;
