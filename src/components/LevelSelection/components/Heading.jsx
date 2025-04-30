import React from "react";
import Queen from "@/components/Queen";
import { queensGameRepo } from "@/data/links";

const Heading = () => {
  return (
    <a
      href={queensGameRepo}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium group"
    >
      <div className="flex items-center space-x-3 mt-4 mb-6">
        <Queen className="dark:fill-yellow-400" />
        <h1 className="text-2xl text-blue-700 dark:text-blue-400 group-hover:underline">
          Queens
        </h1>
      </div>
    </a>
  );
};

export default Heading;
