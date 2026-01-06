import GithubStarButton from "./GithubStarButton";
import { portfolioSite } from "@/data/links";
import { useTranslation } from "react-i18next";
import { trackEvent, ANALYTICS_EVENTS } from "@/utils/analytics";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="px-2 space-y-3">
      <div className="flex justify-center items-center space-x-3 mx-auto w-fit">
        <div className="h-7">
          <GithubStarButton />
        </div>
      </div>
      <div className="mx-auto w-fit flex items-center divide-x divide-slate-700 space-x-3">
        <div>
          {t("CREATED_BY")}{" "}
          <a
            href={portfolioSite}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
            onClick={() =>
              trackEvent(ANALYTICS_EVENTS.CLICK_EXTERNAL_LINK, {
                link_url: portfolioSite,
                link_name: "portfolio",
              })
            }
          >
            Sami
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
