import QuestionIcon from "@/components/icons/QuestionIcon";
import { Switch } from "@/components/ui/switch";
import React from "react";

const AvailableLevelsFilter = ({ checked, handleChange }) => {
  return (
    <div className="flex items-center self-start px-1">
      <Switch checked={checked} onCheckedChange={handleChange} />
      <label onClick={handleChange} className="pl-2">
        Available levels only
      </label>
      <div className="relative ml-2 group">
        <QuestionIcon />
        <span className="absolute top-5 right-0 text-xs min-w-40 bg-white p-2 rounded-md border-2 border-slate-300 z-10 hidden group-hover:flex">
          I've added as many levels as I could find. I'd appreciate any help in
          finding the rest.
        </span>
      </div>
    </div>
  );
};

export default AvailableLevelsFilter;
