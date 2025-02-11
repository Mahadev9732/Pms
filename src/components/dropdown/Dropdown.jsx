import React from "react";

const Dropdown = ({ label, options, onChange, disabled }) => (
  <div className="w-full sm:w-1/2 lg:w-[28%] p-2">
    <label htmlFor="dropdown" className="block mb-2 text-base font-medium">
      {label}
    </label>
    <select
      id="dropdown"
      className={`block w-full p-2 text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
        disabled ? "bg-gray-300 cursor-not-allowed" : "bg-white"
      }`}
      onChange={onChange}
      disabled={disabled}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
