import React from "react";
import Queen from "@/components/Queen";

const Heading = () => {
  return (
    <a
      href="https://github.com/samimsu/queens-game-linkedin"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium group"
    >
      <div className="flex items-center space-x-3 mt-4 mb-6">
        <Queen />
        <h1 className="text-2xl text-blue-700 group-hover:underline">Queens</h1>
      </div>
    </a>
  );
};

export default Heading;
