import React from "react";


type TooltipProps = {
  tooltipText: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({
  disabled = false,
  children,
  tooltipText,
}) => {
  return (
    <span className="group">
      {children}
      {!disabled && (
        <span className="absolute top-5 right-0 text-xs min-w-40 bg-white dark:bg-gray-800 p-2 rounded-md border-2 border-slate-300 z-10 hidden group-hover:flex">
          {tooltipText}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
