import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CloseIcon from "../../icons/CloseIcon";
import formatDuration from "@/utils/formatDuration";
import goldCrown from "@/assets/gold-crown.svg";
import goldenChicletBg from "@/assets/golden-chiclet-bg.svg";
import { getLevelsBySize } from "@/utils/getAvailableLevels";

interface LevelNavigationButtonProps {
  level: number | null;
  text: string;
  isTextSmall: boolean;
}

const LevelNavigationButton = ({
  level,
  text,
  isTextSmall,
}: LevelNavigationButtonProps) => (
  <Link to={!level ? "#" : `/level/${level}`} className="flex">
    <button
      disabled={!level}
      className={`${
        isTextSmall ? "text-lg" : "text-xl"
      } min-w-36 rounded border px-3 py-1 w-full border-white disabled:border-white/50 disabled:text-white/50`}
    >
      {text}
    </button>
  </Link>
);

interface WinningScreenProps {
  timer: number;
  previousLevel: number | number[] | null;
  nextLevel: number | number[] | null;
  level: string;
  close: () => void;
}

const WinningScreen = ({
  timer,
  previousLevel,
  nextLevel,
  level,
  close,
}: WinningScreenProps) => {
  const { t } = useTranslation();

  const isGroupedBySize = localStorage.getItem("groupBySize") === "true";

  let updatedPreviousLevel = previousLevel;
  let updatedNextLevel = nextLevel;
  let previousLevelText = t("PREVIOUS_LEVEL");
  let nextLevelText = t("NEXT_LEVEL");

  const updateLevelNavigation = () => {
    const levelsBySize = getLevelsBySize();

    for (let size in levelsBySize) {
      const levels = levelsBySize[size];

      const currentIndex = levels.indexOf(Number(level));
      const isValidCurrentIndex = currentIndex !== -1;
      if (isValidCurrentIndex) {
        if (!updatedNextLevel) {
          const nextSize = levelsBySize[Number(size) + 1];
          if (nextSize) {
            updatedNextLevel = nextSize[0];
            const playSize = `${Number(size) + 1}x${Number(size) + 1}`;
            nextLevelText = t("PLAY_SIZE", { playSize });
          }
        }
        if (!updatedPreviousLevel) {
          const previousSize = levelsBySize[Number(size) - 1];
          if (previousSize) {
            updatedPreviousLevel = previousSize[0];
            const playSize = `${Number(size) - 1}x${Number(size) - 1}`;
            previousLevelText = t("PLAY_SIZE", { playSize });
          }
        }
        break;
      }
    }
  };

  if (isGroupedBySize && (!updatedPreviousLevel || !updatedNextLevel)) {
    updateLevelNavigation();
  }

  return (
    <div
      className={`absolute flex flex-col items-center justify-center text-center rounded-lg bg-purple text-white text-xl w-72 ${
        timer ? "h-80" : "h-72"
      } max-h-full max-w-full font-bold p-2 select-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10`}
    >
      <button className="absolute right-3 top-3" onClick={close}>
        <CloseIcon />
      </button>
      <img
        src={goldCrown}
        alt="Crown"
        className={`align-items-center ${timer ? "mb-1" : "mb-3"}`}
        width={`${timer ? "52" : "64"}`}
        height={`${timer ? "52" : "64"}`}
      />
      <div className={`${timer ? "text-xl mb-3" : "text-2xl mb-6"}`}>
        {t("YOU_WIN")}
      </div>

      <div className="flex flex-col space-y-3">
        {timer > 0 && (
          <div className="relative flex justify-center">
            <img
              src={goldenChicletBg}
              alt="Golden chiclet background"
              className="rounded w-full h-16 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
              <div className="text-lg">{formatDuration(timer)}</div>
              <div className="font-medium text-sm">{t("SOLVE_TIME")}</div>
            </div>
          </div>
        )}
        <LevelNavigationButton
          level={Array.isArray(updatedPreviousLevel) ? updatedPreviousLevel[0] : updatedPreviousLevel}
          text={previousLevelText}
          isTextSmall={!!timer}
        />
        <LevelNavigationButton
          level={Array.isArray(updatedNextLevel) ? updatedNextLevel[0] : updatedNextLevel}
          text={nextLevelText}
          isTextSmall={!!timer}
        />
      </div>
    </div>
  );
};

export default WinningScreen;
