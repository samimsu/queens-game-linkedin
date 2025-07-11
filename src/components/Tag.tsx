import React from "react";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

const Tag = ({ children, className = "" }: TagProps) => {
  return (
    <div
      className={`rounded-full bg-[#FFC992] px-2 py-1 text-xs text-background ${className}`}
    >
      {children}
    </div>
  );
};

export default Tag;
