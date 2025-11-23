import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Shuffle } from "lucide-react";
import CloseIcon from "@/components/icons/CloseIcon";
import goldCrown from "@/assets/gold-crown.svg";
import goldenChicletBg from "@/assets/golden-chiclet-bg.svg";
import formatDuration from "@/utils/formatDuration";
import ShareButton from "@/components/ShareButton";

interface WinningScreenProps {
  previousLink: {
    path: string;
    text: string;
  };
  nextLink: {
    path: string;
    text: string;
  };
  randomLink: {
    path: string;
  };
  close: () => void;
  timer: number;
  levelId: string;
  levelName?: string;
  firstSolveTime: number | null;
}

const WinningScreen = ({
  previousLink,
  nextLink,
  randomLink,
  close,
  timer,
  levelId,
  levelName,
  firstSolveTime,
}: WinningScreenProps) => {
  const { t } = useTranslation();

  return (
    <div className="absolute flex flex-col items-center justify-center text-center rounded-lg bg-purple text-white text-xl w-72 h-80 max-h-full max-w-full font-bold p-2 select-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <button className="absolute right-3 top-3" onClick={close}>
        <CloseIcon />
      </button>
      <img
        src={goldCrown}
        alt="Crown"
        className="align-items-center mb-1"
        width="52"
        height="52"
      />
      <div className="text-xl mb-3">{t("YOU_WIN")}</div>

      <div className="flex flex-col space-y-3">
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
        {firstSolveTime !== null && (
          <div className="text-sm font-medium">
            {t("FIRST_SOLVE")}: {formatDuration(firstSolveTime)}
          </div>
        )}
        <ShareButton
          levelType="bonus"
          levelId={levelId}
          timer={timer}
          levelName={levelName}
          firstSolveTime={firstSolveTime}
        />
        <LevelNavigationButton
          path={previousLink.path}
          text={previousLink.text}
          isTextSmall={true}
        />
        <LevelNavigationButton
          path={nextLink.path}
          text={nextLink.text}
          isTextSmall={true}
        />
        <Link to={randomLink?.path} className="absolute right-3 bottom-3">
          <button onClick={close}>
            <Shuffle />
          </button>
        </Link>
      </div>
    </div>
  );
};

interface LevelNavigationButtonProps {
  path: string;
  text: string;
  isTextSmall: boolean;
}

const LevelNavigationButton = ({
  path,
  text,
  isTextSmall,
}: LevelNavigationButtonProps) => (
  <Link to={path} className="flex">
    <button
      disabled={!path}
      className={`${
        isTextSmall ? "text-lg" : "text-xl"
      } min-w-36 rounded border px-3 py-1 w-full border-white disabled:border-white/50 disabled:text-white/50`}
    >
      {text}
    </button>
  </Link>
);

export default WinningScreen;
