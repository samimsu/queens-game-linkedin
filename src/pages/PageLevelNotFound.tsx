import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import RootLayout from "@/layouts/RootLayout";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { queensGameRepoNewIssue } from "@/data/links";
import { trackEvent, ANALYTICS_EVENTS } from "@/utils/analytics";

interface PageLevelNotFoundProps {
  level: string | undefined;
}

const PageLevelNotFound = ({ level }: PageLevelNotFoundProps) => {
  const { t } = useTranslation();

  return (
    <RootLayout>
      <PageTitle title={`Level ${level} Not Found`} />
      <div className="flex flex-col items-center justify-center text-gray-600 pt-24 mx-2">
        <div className="text-4xl mb-4 font-bold text-primary">
          {t("LEVEL_NOT_FOUND", { level })}
        </div>
        <div className="text-lg mb-6">
          <Trans i18nKey="SHARE_LEVEL_SCREENSHOT_LINK">
            If you have a screenshot of the level, please share it
            <a
              href={queensGameRepoNewIssue}
              className="text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(ANALYTICS_EVENTS.CLICK_EXTERNAL_LINK, {
                  link_url: queensGameRepoNewIssue,
                  link_name: "report_issue",
                })
              }
            >
              here
            </a>{" "}
            or reach out directly.
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
