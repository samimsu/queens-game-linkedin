import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import {
  Shuffle,
  Palette,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CaseUpper,
} from "lucide-react";
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
import Tag from "../Tag";
import { communityLevels } from "@/utils/communityLevels";
import {
  altoMain,
  anakiwa,
  atomicTangerine,
  bittersweet,
  celadon,
  chardonnay,
  coldPurple,
  emerald,
  halfBaked,
  lightGreen,
  lightOrchid,
  lightWisteria,
  macNCheese,
  nomad,
  periwinkle,
  saharaSand,
  turquoiseBlue,
} from "@/utils/colors";

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
  const [useDefaultColors, setUseDefaultColors] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [notification, setNotification] = useState<string | null>(null);
  const [showRegionLetters, setShowRegionLetters] = useState<boolean>(false);

  const previousPage = "/community-levels";

  const levelSize = level.size;

  const boardSize = levelSize;
  const colorRegions = level.colorRegions;
  const defaultRegionColors = level.regionColors;

  const alternateRegionColors = useMemo(() => {
    const colorMap: { [key: string]: string } = {
      A: lightWisteria,
      B: chardonnay,
      C: anakiwa,
      D: celadon,
      E: altoMain,
      F: bittersweet,
      G: saharaSand,
      H: nomad,
      I: lightOrchid,
      J: halfBaked,
      K: turquoiseBlue,
      L: atomicTangerine,
      M: lightGreen,
      N: emerald,
      O: periwinkle,
      P: coldPurple,
      Q: macNCheese,
    };
    const newColors: { [key: string]: string } = {};
    Object.keys(defaultRegionColors).forEach((region) => {
      newColors[region] = colorMap[region] || defaultRegionColors[region];
    });
    return newColors;
  }, [defaultRegionColors]);

  const areColorsEqual = useMemo(() => {
    const defaultKeys = Object.keys(defaultRegionColors);
    const alternateKeys = Object.keys(alternateRegionColors);
    if (defaultKeys.length !== alternateKeys.length) return false;
    return defaultKeys.every(
      (key) => defaultRegionColors[key] === alternateRegionColors[key]
    );
  }, [defaultRegionColors, alternateRegionColors]);

  const regionColors = useDefaultColors
    ? alternateRegionColors
    : defaultRegionColors;

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
    firstSolveTime,
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

  const getRandomLevel = (): CommunityLevelType | null => {
    const levelKeys = Object.keys(communityLevels);
    if (levelKeys.length > 1) {
      // Filter out the current level key
      const otherLevelKeys = levelKeys.filter((key) => key !== id);
      if (otherLevelKeys.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * otherLevelKeys.length);
      const randomKey = otherLevelKeys[randomIndex];
      return communityLevels[randomKey];
    }
    return null;
  };

  const randomLevel = useMemo(() => getRandomLevel(), [id]);

  const RandomLevelButton: React.FC<{
    children: React.ReactNode;
    className: string;
  }> = ({ children, className }) => {
    return (
      <Link to={randomLevel?.path || ""} className="flex">
        <button
          disabled={!randomLevel?.path}
          onClick={() => {
            if (randomLevel) {
              setBoard(createEmptyBoard(randomLevel.size));
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
    // Adjust zoom based on level size
    // zoom = 1 for level sizes up to 11, but subtract 0.1 for each increment above that down to a minimum of 0.5
    const autoZoom = Math.max(Math.min(1, 1 - (levelSize - 11) * 0.1), 0.5);

    setZoomLevel(autoZoom);

    setShowRegionLetters(false);
  }, [id]);

  useEffect(() => {
    if (!isVisible || hasWon) {
      setTimerRunning(false);
    }
    if (isVisible && !hasWon) {
      setTimerRunning(true);
    }
  }, [isVisible, hasWon]);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRegionLettersToggle = () => {
    setShowRegionLetters(!showRegionLetters);
  };

  const handleColorSchemeToggle = () => {
    if (!useDefaultColors && areColorsEqual) {
      // Trying to switch to alternate colors, but they are the same as default
      showNotification(t("DEFAULT_COLORS_ALREADY_USED"));
    } else {
      setUseDefaultColors(!useDefaultColors);
    }
  };

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
              <button className="border border-slate-500 rounded-full p-2 mr-2">
                <BackIcon />
              </button>
            </Link>

            <div className="flex items-center space-x-2">
              <PreviousLevelButton className="disabled:opacity-50">
                <PreviousIcon />
              </PreviousLevelButton>

              <h2 className="text-xl text-center">{title}</h2>

              <NextLevelButton className="disabled:opacity-50 mr-2">
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
                randomLink={{ path: randomLevel?.path || "" }}
                close={() => setShowWinningScreen(false)}
                levelId={id}
                levelName={title}
                firstSolveTime={firstSolveTime}
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
              zoomLevel={zoomLevel}
              showLetters={showRegionLetters}
            />
          </div>

          <div className="flex justify-between items-center mt-2">
            <Button
              className="border border-slate-500 rounded-full py-2 px-10 mr-4"
              onClick={handleUndo}
              disabled={hasWon || !history.current.length}
            >
              {t("UNDO")}
            </Button>
            <div className="flex space-x-2 mr-4">
              <button
                className="border border-slate-500 rounded-full p-2 disabled:opacity-50"
                onClick={handleZoomIn}
                title={t("ZOOM_IN")}
                disabled={zoomLevel >= 1.5}
              >
                <ZoomIn size="18" />
              </button>
              <button
                className="border border-slate-500 rounded-full p-2 disabled:opacity-50"
                onClick={handleZoomOut}
                title={t("ZOOM_OUT")}
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut size="18" />
              </button>
              <button
                className="border border-slate-500 rounded-full p-2 disabled:opacity-50"
                onClick={handleZoomReset}
                title={t("RESET_ZOOM")}
                disabled={zoomLevel === 1}
              >
                <RotateCcw size="18" />
              </button>
            </div>
            <div className="flex gap-2">
              <div>
                <button
                  onClick={handleRegionLettersToggle}
                  className="border border-slate-500 rounded-full p-2"
                  title={t("SHOW_HIDE_LETTERS")}
                >
                  <CaseUpper size="18" />
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={handleColorSchemeToggle}
                  className="border border-slate-500 rounded-full p-2"
                  title={t("CHANGE_COLOR_SCHEME")}
                >
                  <Palette size="18" />
                </button>
                {notification && (
                  <div
                    className="absolute top-full mt-2 right-0 bg-slate-800 text-white text-sm px-3 py-1 rounded shadow text-nowrap"
                    aria-live="polite"
                  >
                    {notification}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {showInstructions && <HowToPlay />}
      </div>
    </div>
  );
};

export default CommunityLevel;
