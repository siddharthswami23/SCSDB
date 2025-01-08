import React from "react";

const DropDown = ({ title, options, onChange }) => {
  return (
    <div className="max-w-lg bg-[#1F1E24] p-2 rounded-md">
      <select
        name="format"
        id="format"
        className="block w-fit p-4 mt-2 border border-gray-500 bg-[#1F1E24] text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6556CD] focus:border-[#6556CD] hover:bg-[#27252D] transition-colors duration-300 ease-in-out"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="0" className="text-gray-300">
          {title}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="text-white bg-[#1F1E24]"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
