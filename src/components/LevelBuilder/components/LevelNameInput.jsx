import React from "react";

const LevelName = ({ levelName, setLevelName }) => {
  return (
    <div className="mb-3 flex items-center space-x-3 text-lg">
      <label>Level name</label>
      <input
        value={levelName}
        onChange={(e) => setLevelName(e.target.value)}
        className="font-bold border rounded border-slate-500 px-2 py-0.5 w-28"
      />
    </div>
  );
};

export default LevelName;
