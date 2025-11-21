import { useTranslation } from "react-i18next";

const Note = () => {
  const { t } = useTranslation();

  return (
    <div className="text-gray-900 dark:text-gray-100 flex justify-between items-center max-w-lg">
      <span className="text-sm font-medium">
        {t("COMMUNITY_LEVEL_NOTE_FREE") ||
          "Note: Create unlimited levels! Share your puzzles with the community."}
      </span>
    </div>
  );
};

export default Note;
