import { useTranslation } from "react-i18next";
import Required from "@/components/Required";
import Tag from "@/components/Tag";

type LevelType = "linkedin" | "community";

interface LevelBuilderSelectorProps {
  levelType: "linkedin" | "community";
  setLevelType: (type: string) => void;
}

const LevelBuilderSelector = ({
  levelType,
  setLevelType,
}: LevelBuilderSelectorProps) => {
  const { t } = useTranslation();

  const handleSelection = (type: LevelType) => {
    setLevelType(type);
  };

  return (
    <div className="max-w-lg">
      <p className="mb-1">
        {t("LEVEL_TYPE")} <Required />
      </p>

      <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
        <button
          className={`flex bg-gray-50 dark:bg-gray-800 border ${
            levelType === "community"
              ? "border-primary bg-blue-50"
              : "border-gray-500"
          } rounded-lg p-2 w-56 text-left hover:border-primary transition-all duration-300 hover:-translate-y-1`}
          onClick={() => handleSelection("community")}
          data-testid="community-button"
        >
          <div>
            <h2
              className={`text-md font-semibold ${
                levelType === "community" ? "text-primary" : ""
              }`}
            >
              {t("COMMUNITY_LEVEL")}
            </h2>
            <p className="text-gray-600 dark:text-gray-100 text-sm">
              {t("COMMUNITY_LEVELS_DESCRIPTION")}
            </p>
            <Tag className="w-fit mt-2">{t("ONE_FREE_LEVEL")}</Tag>
          </div>
        </button>

        <button
          className={`flex bg-gray-50 dark:bg-gray-800 border ${
            levelType === "linkedin"
              ? "border-primary bg-blue-50"
              : "border-gray-500"
          } rounded-lg p-2 w-56 text-left hover:border-primary transition-all duration-300 hover:-translate-y-1`}
          onClick={() => handleSelection("linkedin")}
          data-testid="linkedin-button"
        >
          <div>
            <h2
              className={`text-md font-semibold 
            ${levelType === "linkedin" ? "text-primary" : ""}`}
            >
              {t("LINKEDIN_LEVEL")}
            </h2>
            <p className="text-gray-600 dark:text-gray-100 text-sm">
              {t("LINKEDIN_LEVELS_DESCRIPTION")}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LevelBuilderSelector;
