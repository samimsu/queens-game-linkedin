import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Shuffle } from "lucide-react";
import Board from "./components/Board";
import { createEmptyBoard } from "../../utils/board";
import { levels } from "../../utils/levels";
import BackIcon from "../icons/BackIcon";
import PreviousIcon from "../icons/PreviousIcon";
import NextIcon from "../icons/NextIcon";
import ResetIcon from "../icons/ResetIcon";
import WinningScreen from "./components/WinningScreen";
import Queen from "../Queen";
import HowToPlay from "./components/HowToPlay";
import SettingsDialog from "./components/SettingsDialog";
import Timer from "./components/Timer";
import getNavigationLevels from "@/utils/getNavigationLevels";
import Button from "../Button";
import useVisibility from "../../hooks/useVisibility";
import useGameLogic from "@/hooks/useGameLogic";
import { getGiscusLanguage } from "@/utils/getGiscusLanguage";
import { trackEvent } from "../../utils/analytics";

interface LevelProps {
  id: string;
  level: string;
}

const Level: React.FC<LevelProps> = ({ id, level }) => {
  const { theme } = useTheme();

  const levelSize = levels[level].size;

  const { t, i18n } = useTranslation();
  const isVisible = useVisibility();

  const { previousLevel, nextLevel, previousDisabled, nextDisabled } =
    getNavigationLevels(id, level);

  const boardSize = levelSize;
  const colorRegions = levels[level].colorRegions;
  const regionColors = levels[level].regionColors;

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
  });

  const getRandomLevel = (): string | null => {
    const levelKeys = Object.keys(levels);
    if (levelKeys.length > 1) {
      // Filter out the current level key
      const otherLevelKeys = levelKeys.filter((key) => key !== id);
      if (otherLevelKeys.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * otherLevelKeys.length);
      const randomKey = otherLevelKeys[randomIndex];
      return randomKey.replace(/level/, "");
    }
    return null;
  };

  const randomLevel = useMemo(() => getRandomLevel(), [id]);

  const RandomLevelButton: React.FC<{
    children: React.ReactNode;
    className: string;
  }> = ({ children, className }) => {
    return (
      <Link to={`/level/${randomLevel}` || ""} className="flex">
        <button
          disabled={!randomLevel}
          onClick={() => {
            if (randomLevel) {
              setBoard(createEmptyBoard(levels[`level${randomLevel}`].size));
              setHasWon(false);
              setShowWinningScreen(false);
              history.current = [];
            }
          }}
          className={className}
        >
          {children}
        </button>
      </Link>
    );
  };

  const PreviousLevelButton: React.FC<{
    children: React.ReactNode;
    className: string;
  }> = ({ children, className }) => {
    return (
      <Link
        to={previousDisabled ? "#" : `/level/${previousLevel}`}
        className="flex"
      >
        <button
          disabled={previousDisabled}
          onClick={() => {
            setBoard(createEmptyBoard(levels[`level${previousLevel}`].size));
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
      <Link to={nextDisabled ? "#" : `/level/${nextLevel}`} className="flex">
        <button
          disabled={nextDisabled}
          onClick={() => {
            setBoard(createEmptyBoard(levels[`level${nextLevel}`].size));
          }}
          className={className}
        >
          {children}
        </button>
      </Link>
    );
  };

  useEffect(() => {
    if (!isVisible || hasWon) {
      setTimerRunning(false);
    }
    if (isVisible && !hasWon) {
      setTimerRunning(true);
    }
  }, [isVisible, hasWon]);

  useEffect(() => {
    trackEvent("level_start", { level_name: id, level_type: "standard" });
  }, [id]);

  useEffect(() => {
    if (hasWon) {
      trackEvent("level_end", {
        level_name: id,
        level_type: "standard",
        success: true,
        time_taken: timer,
      });
    }
  }, [hasWon, id, timer]);

  return (
    <div key={id} className="flex flex-col justify-center items-center pt-4">
      <div className="flex flex-col items-center">
        <div>
          <div
            className={`flex items-center space-x-0 justify-between py-1 w-full ${
              showClock ? "mb-0" : "mb-2"
            }`}
          >
            <Link to="/" className="flex-none">
              <button className="border border-slate-500 rounded-full p-2">
                <BackIcon />
              </button>
            </Link>

            <div className="flex items-center space-x-2">
              <PreviousLevelButton className="disabled:opacity-50">
                <PreviousIcon />
              </PreviousLevelButton>

              <h2 className="text-xl text-center">
                {t("LEVEL")} {id}
              </h2>

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
                <RandomLevelButton className="border border-slate-500 rounded-full p-2 mr-2">
                  {<Shuffle size="18" />}
                </RandomLevelButton>
                <button
                  onClick={() => {
                    trackEvent("level_reset", {
                      level_name: id,
                      level_type: "standard",
                    });
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

          <div className="flex justify-end">
            <Timer
              run={timerRunning}
              onTimeUpdate={handleTimeUpdate}
              showTimer={showClock}
            />
          </div>

          <div className="game relative">
            {showWinningScreen && (
              <WinningScreen
                timer={timer}
                previousLevel={previousLevel}
                nextLevel={nextLevel}
                randomLink={{ path: `/level/${randomLevel}` || "" }}
                level={id}
                close={() => setShowWinningScreen(false)}
              />
            )}
            <Board
              board={board}
              handleSquareClick={handleSquareClick}
              handleSquareMouseEnter={handleDrag}
              level={level}
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

export default Level;
