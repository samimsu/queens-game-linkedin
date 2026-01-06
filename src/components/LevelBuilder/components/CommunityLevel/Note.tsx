import { Trans } from "react-i18next";
import { patreonLevelPacks } from "@/data/links";
import { trackEvent, ANALYTICS_EVENTS } from "@/utils/analytics";

const Note = () => {
  return (
    <div className="text-gray-900 dark:text-gray-100 flex justify-between items-center max-w-lg">
      <span className="text-sm font-medium">
        <Trans i18nKey="COMMUNITY_LEVEL_NOTE">
          Note: You can create <span className="font-bold">1 free level</span>.
          Want more? Check out the{" "}
          <span className="font-bold">level packs</span> on Patreon
          <a
            href={patreonLevelPacks}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent(ANALYTICS_EVENTS.CLICK_EXTERNAL_LINK, {
                link_url: patreonLevelPacks,
                link_name: "patreon_level_packs",
              })
            }
            className="text-blue-500 text-nowrap"
          >
            here
          </a>
          .
        </Trans>
      </span>
    </div>
  );
};

export default Note;
