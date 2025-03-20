import React from "react";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import LevelBuilder from "@/components/LevelBuilder/LevelBuilder";

const PageLevelBuilder = () => {
  return (
    <RootLayout className="!overflow-auto">
      <PageTitle title="Level Builder" />
      <LevelBuilder />
    </RootLayout>
  );
};

export default PageLevelBuilder;
