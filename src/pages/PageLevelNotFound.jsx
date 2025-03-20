import React from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { queensGameRepoNewIssue } from "@/data/links";

const PageLevelNotFound = ({ level }) => {
  const { t } = useTranslation();

  return (
    <RootLayout>
      <PageTitle title={`Level ${level} Not Found`} />
      <div className="flex flex-col items-center justify-center text-gray-600 pt-24 mx-2">
        <div className="text-4xl mb-4 font-bold text-primary">
          {t("LEVEL_NOT_FOUND")}
        </div>
        <div className="text-lg mb-6">
          <Trans i18nKey="SHARE_LEVEL_SCREENSHOT_LINK">
            -{" "}
            <a
              href={queensGameRepoNewIssue}
              className="text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
          </Trans>
        </div>
        <Link to="/">
          <Button className="hover:bg-primary hover:opacity-90">
            {t("GO_HOME")}
          </Button>
        </Link>
      </div>
    </RootLayout>
  );
};

export default PageLevelNotFound;
