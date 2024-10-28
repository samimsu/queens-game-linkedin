import React from "react";

const AvailableLevelsFilter = ({ checked, handleChange }) => {
  return (
    <div className="flex items-center self-start px-1">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <label onClick={handleChange} className="pl-2">
        Available levels only
      </label>
    </div>
  );
};

export default AvailableLevelsFilter;
