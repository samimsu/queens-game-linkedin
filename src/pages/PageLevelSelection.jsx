import React from "react";
import RootLayout from "@/layouts/RootLayout";
import LevelSelection from "@/components/LevelSelection/LevelSelection";
import PageTitle from "@/components/PageTitle";

const PageLevelSelection = () => {
  return (
    <RootLayout>
      <PageTitle />
      <LevelSelection />
    </RootLayout>
  );
};

export default PageLevelSelection;
