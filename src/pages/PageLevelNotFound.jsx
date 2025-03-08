import React from "react";
import { Link } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { queensGameRepoNewIssue } from "@/data/links";

const PageLevelNotFound = () => {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center text-gray-600 pt-24 mx-2">
        <div className="text-4xl mb-4 font-bold text-primary">
          Level not found
        </div>
        <div className="text-lg mb-6">
          If you have a screenshot of the level, please share it{" "}
          <a
            href={queensGameRepoNewIssue}
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          or reach out directly.
        </div>
        <Link to="/">
          <Button className="hover:bg-primary hover:opacity-90">Go home</Button>
        </Link>
      </div>
    </RootLayout>
  );
};

export default PageLevelNotFound;
