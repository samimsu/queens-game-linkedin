import React from "react";
import QuestionIcon from "./icons/QuestionIcon";

type QuestionMarkTooltipProps = {
  tooltipText: string;
  disabled?: boolean;
};

const QuestionMarkTooltip: React.FC<QuestionMarkTooltipProps> = ({
  disabled = false,
  tooltipText,
}) => {
  return (
    <span className="group">
      <QuestionIcon />
      {!disabled && (
        <span className="absolute top-5 right-0 text-xs min-w-40 bg-white dark:bg-gray-800 p-2 rounded-md border-2 border-slate-300 z-10 hidden group-hover:flex">
          {tooltipText}
        </span>
      )}
    </span>
  );
};

export default QuestionMarkTooltip;
