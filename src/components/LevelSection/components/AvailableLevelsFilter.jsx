import React from "react";

const AvailableLevelsFilter = ({ checked, handleChange }) => {
  return (
    <div className="flex items-center space-x-2 self-start px-1">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <label>Available levels only</label>
    </div>
  );
};

export default AvailableLevelsFilter;
