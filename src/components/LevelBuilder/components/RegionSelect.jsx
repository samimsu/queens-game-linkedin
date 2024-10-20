import React from "react";

const RegionSelect = ({
  regionColors,
  selectedRegion,
  colorOptions,
  handleColorChange,
  handleRegionSelect,
}) => {
  return (
    <div className="region-select">
      {Object.keys(regionColors).map((region) => (
        <div
          key={region}
          className="region-control grid grid-cols-10 items-center justify-items-center w-[250px] py-0.5"
        >
          <input
            type="radio"
            name="selectedRegion"
            value={region}
            checked={selectedRegion === region}
            onChange={() => handleRegionSelect(region)}
          />
          <label>{region}</label>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: regionColors[region],
            }}
          ></div>
          <select
            value={regionColors[region]}
            onChange={(e) => handleColorChange(region, e.target.value)}
            className="col-span-7 border rounded border-slate-500 w-full"
          >
            {colorOptions.map((color) => (
              <option key={color.name} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default RegionSelect;
