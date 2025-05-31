import { Trans } from "react-i18next";
import { patreon } from "@/data/links";

const Note = () => {
  return (
    <div className="text-gray-900 dark:text-gray-100 flex justify-between items-center max-w-lg">
      <span className="text-sm font-medium">
        <Trans i18nKey="COMMUNITY_LEVEL_NOTE">
          Note: You can create <span className="font-bold">1 free level</span>.
          Want more? Get <span className="font-bold">5 levels/month</span> for
          $5 on Patreon
          <a
            href={patreon}
            target="_blank"
            rel="noopener noreferrer"
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
