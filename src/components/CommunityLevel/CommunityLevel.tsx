import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import Board from "./components/Board";
import { createEmptyBoard } from "../../utils/board";
import BackIcon from "../icons/BackIcon";
import PreviousIcon from "../icons/PreviousIcon";
import NextIcon from "../icons/NextIcon";
import ResetIcon from "../icons/ResetIcon";
import WinningScreen from "./components/WinningScreen";
import Queen from "../Queen";
import HowToPlay from "./components/HowToPlay";
import SettingsDialog from "./components/SettingsDialog";
import Timer from "./components/Timer";
import Button from "../Button";
import useVisibility from "../../hooks/useVisibility";
import useGameLogic from "@/hooks/useGameLogic";
import { CommunityLevel as CommunityLevelType } from "@/utils/types";
import { getGiscusLanguage } from "@/utils/getGiscusLanguage";
import Tag from "../Tag";

interface CommunityLevelProps {
  id: string;
  title: string;
  level: CommunityLevelType;
  previousLevel?: CommunityLevelType | null;
  nextLevel?: CommunityLevelType | null;
}

const CommunityLevel = ({
  id,
  title,
  level,
  previousLevel,
  nextLevel,
}: CommunityLevelProps) => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const isVisible = useVisibility();

  const previousPage = "/community-levels";

  const levelSize = level.size;

  const boardSize = levelSize;
  const colorRegions = level.colorRegions;
  const regionColors = level.regionColors;

  const {
    board,
    hasWon,
    timer,
    showWinningScreen,
    clashingQueens,
    showClashingQueens,
    showInstructions,
    showClock,
    autoPlaceXs,
    timerRunning,
    completed,
    history,
    setBoard,
    setHasWon,
    setShowWinningScreen,
    setTimerRunning,
    handleSquareClick,
    handleDrag,
    handleUndo,
    handleTimeUpdate,
    toggleClashingQueens,
    toggleShowInstructions,
    toggleShowClock,
    toggleAutoPlaceXs,
  } = useGameLogic({
    id,
    boardSize,
    colorRegions,
    levelType: "community",
  });

  const PreviousLevelButton: React.FC<{
    children: React.ReactNode;
    className: string;
  }> = ({ children, className }) => {
    return (
      <Link to={previousLevel?.path || ""} className="flex">
        <button
          disabled={!previousLevel?.path}
          onClick={() => {
            if (previousLevel) {
              setBoard(createEmptyBoard(previousLevel.size));
            }
          }}
          className={className}
        >
          {children}
        </button>
      </Link>
    );
  };

  const NextLevelButton: React.FC<{
    children: React.ReactNode;
    className: string;
  }> = ({ children, className }) => {
    return (
      <Link to={nextLevel?.path || ""} className="flex">
        <button
          disabled={!nextLevel?.path}
          onClick={() => {
            if (nextLevel) setBoard(createEmptyBoard(nextLevel?.size));
          }}
          className={className}
        >
          {children}
        </button>
      </Link>
    );
  };

  useEffect(() => {
    setBoard(createEmptyBoard(levelSize));
    setHasWon(false);
    setShowWinningScreen(false);
  }, [id]);

  useEffect(() => {
    if (!isVisible || hasWon) {
      setTimerRunning(false);
    }
    if (isVisible && !hasWon) {
      setTimerRunning(true);
    }
  }, [isVisible, hasWon]);

  return (
    <div key={id} className="flex flex-col justify-center items-center pt-4">
      <div className="flex flex-col items-center">
        <div>
          <div
            className={`flex items-center space-x-0 justify-between py-1 w-full min-w-72 ${
              showClock ? "mb-0" : "mb-2"
            }`}
          >
            <Link to={previousPage} className="flex-none">
              <button className="border border-slate-500 rounded-full p-2">
                <BackIcon />
              </button>
            </Link>

            <div className="flex items-center space-x-2">
              <PreviousLevelButton className="disabled:opacity-50">
                <PreviousIcon />
              </PreviousLevelButton>

              <h2 className="text-xl text-center">{title}</h2>

              <NextLevelButton className="disabled:opacity-50">
                <NextIcon />
              </NextLevelButton>
            </div>

            <div className="flex flex-none justify-end">
              <div className="flex items-center">
                <Queen
                  size="24"
                  className={`fill-yellow-400 mr-2 ${
                    completed ? "visible" : "invisible"
                  }`}
                />
                <button
                  onClick={() => {
                    setBoard(createEmptyBoard(levelSize));
                    setHasWon(false);
                    setShowWinningScreen(false);
                    history.current = [];
                  }}
                  className="border border-slate-500 rounded-full p-2 mr-2"
                >
                  <ResetIcon size="18" />
                </button>
                <SettingsDialog
                  showClashingQueens={showClashingQueens}
                  toggleShowClashingQueens={toggleClashingQueens}
                  showInstructions={showInstructions}
                  toggleShowInstructions={toggleShowInstructions}
                  showClock={showClock}
                  toggleShowClock={toggleShowClock}
                  autoPlaceXs={autoPlaceXs}
                  toggleAutoPlaceXs={toggleAutoPlaceXs}
                />
              </div>
            </div>
          </div>

          <div
            className={`flex mb-1 ${
              level.solutionsCount > 1 ? "justify-between" : "justify-end"
            }`}
          >
            {level.solutionsCount > 1 && <Tag>{t("MULTIPLE_SOLUTIONS")}</Tag>}
            <Timer
              run={timerRunning}
              onTimeUpdate={handleTimeUpdate}
              showTimer={showClock}
            />
          </div>

          <div className="game relative flex justify-center">
            {showWinningScreen && (
              <WinningScreen
                timer={timer}
                previousLink={{
                  path: previousLevel?.path || "",
                  text: t("PREVIOUS_LEVEL"),
                }}
                nextLink={{
                  path: nextLevel?.path || "",
                  text: t("NEXT_LEVEL"),
                }}
                close={() => setShowWinningScreen(false)}
              />
            )}
            <Board
              board={board}
              handleSquareClick={handleSquareClick}
              handleSquareMouseEnter={handleDrag}
              boardSize={boardSize}
              colorRegions={colorRegions}
              regionColors={regionColors}
              showClashingQueens={showClashingQueens}
              clashingQueens={clashingQueens}
            />
          </div>
          <Button
            className="border border-slate-500 rounded-full p-2 mr-2 w-full mt-[16px]"
            onClick={handleUndo}
            disabled={hasWon || !history.current.length}
          >
            {t("UNDO")}
          </Button>
        </div>

        {showInstructions && <HowToPlay />}

        <div className="w-full px-2">
          <Giscus
            repo="samimsu/queens-game-linkedin"
            repoId="R_kgDONCfeAg"
            category="Announcements"
            categoryId="DIC_kwDONCfeAs4CnIas"
            mapping="pathname"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={theme}
            lang={getGiscusLanguage(i18n.language) || i18n.language}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityLevel;
