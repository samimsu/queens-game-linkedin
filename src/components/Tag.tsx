import React from "react";

type TagProps = {
  children: React.ReactNode;
};

const Tag = ({ children }: TagProps) => {
  return (
    <div className="rounded-full bg-[#FFC992] px-2 py-1 text-xs">
      {children}
    </div>
  );
};

export default Tag;
