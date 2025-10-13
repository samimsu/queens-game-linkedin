import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import {
  Shuffle,
  RefreshCw,
  CaseUpper,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  DiscAlbum,
} from "lucide-react";
import Board from "../components/CommunityLevel/components/Board";
import { createEmptyBoard, isCompletedBoard } from "../utils/board";
import BackIcon from "../components/icons/BackIcon";

import HowToPlay from "../components/GameLevel/components/HowToPlay";
import SettingsDialog from "../components/CommunityLevel/components/SettingsDialog";
import Timer from "../components/GameLevel/components/Timer";

import useVisibility from "../hooks/useVisibility";
import useGameLogic from "../hooks/useGameLogic";
import RootLayout from "@/layouts/RootLayout.tsx";
import PageTitle from "@/components/PageTitle.tsx";
import Giscus from "@giscus/react";
import { getGiscusLanguage } from "@/utils/getGiscusLanguage.ts";
import i18n from "i18next";
import { defaultColorMap } from "@/utils/colors.ts";
import { useTheme } from "next-themes";
import {
  decodeLevelRegions,
  fixLevelId,
} from "@/utils/generated/levelEncoder.ts";
import WinningScreen from "@/components/LevelBuilder/components/TestLevel/components/WinningScreen.tsx";
import { Button } from "@/components/ui/button.tsx";
import CopyLink from "@/components/GeneratedLevel/components/CopyLink.tsx";
import Queen from "@/components/Queen.tsx";
import {
  getRandomBoardState,
  getRandomLevelCompletionTimeWithLabel,
  markRandomBoardCompleted,
} from "@/utils/localStorage.ts";

interface RandomLevel {
  size: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
}

const PageGeneratedLevel = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { theme } = useTheme();
  const isVisible = useVisibility();
  const [level, setLevel] = useState<RandomLevel | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [loading, setLoading] = useState(true);
  const [levelSize, setLevelSize] = useState(8);
  const [timeOverride, setTimeOverride] = useState<number | undefined>(
    undefined,
  );
  const [showRegionLetters, setShowRegionLetters] = useState<boolean>(false);
  const hasSavedState = useMemo(() => {
    const state = getRandomBoardState(id ?? "UNKNOWN");
    return !!(state?.state && state.savedDataFound);
  }, [id]);

  const {
    board,
    hasWon,
    showWinningScreen,
    clashingQueens,
    showClashingQueens,
    showInstructions,
    showClock,
    autoPlaceXs,
    timerRunning,
    setBoard,
    setHasWon,
    setShowWinningScreen,
    setTimerRunning,
    handleSquareClick,
    handleDragToClear,
    handleUndo,
    handleTimeUpdate,
    toggleClashingQueens,
    toggleShowInstructions,
    toggleShowClock,
    toggleAutoPlaceXs,
    history,
    completed,
  } = useGameLogic({
    id: id,
    boardSize: level?.size || 9,
    colorRegions: level?.colorRegions || [],
    levelType: "random",
  });

  const completionTime = useMemo(
    () => (id ? getRandomLevelCompletionTimeWithLabel(id) : undefined),
    [id, completed],
  );

  useEffect(() => {
    try {
      if (id) {
        const levelRegions = decodeLevelRegions(id);
        const level = {
          regionColors: defaultColorMap,
          colorRegions: levelRegions,
          size: levelRegions.length,
        };
        const fixedId = fixLevelId(id);
        if (fixedId !== id) {
          window.history.pushState(null, "", `/random-level/${fixedId}`);
          window.location.reload();
        }
        setBoard(createEmptyBoard(level.size));
        setHasWon(false);
        setShowWinningScreen(false);
        setLevel(level);
        setLevelSize(levelRegions.length);
        setLoading(false);
        // Adjust zoom based on level size
        // zoom = 1 for level sizes up to 11, but subtract 0.1 for each increment above that down to a minimum of 0.5
        const autoZoom = Math.max(
          Math.min(1, 1 - (levelRegions.length - 12) * 0.1),
          0.5,
        );
        setZoomLevel(autoZoom);
      }
    } catch (e) {
      console.error("Error decoding level from path:", e);
    }
  }, []);

  useEffect(() => {
    if (hasSavedState) {
      const state = getRandomBoardState(id ?? "UNKNOWN");
      if (state.savedDataFound && !isCompletedBoard(state?.state)) {
        history.current = [];
        setBoard(state?.state || createEmptyBoard(levelSize));
        setTimeOverride(state?.timeInSeconds);
      }
    }
  }, [hasSavedState]);

  useEffect(() => {
    if (!isVisible || hasWon) {
      setTimerRunning(false);
    }
    if (isVisible && !hasWon && level) {
      setTimerRunning(true);
    }
  }, [isVisible, hasWon, level]);

  const handleRegionLettersToggle = () => {
    setShowRegionLetters(!showRegionLetters);
  };

  if (!level) {
    return (
      <div className="flex flex-col justify-center items-center pt-4 min-h-screen">
        <div className="flex flex-none justify-end">
          <div className="flex items-center space-x-2">
            Generating New {levelSize}x{levelSize} Level...
            <RefreshCw size="18" className={"animate-spin"} />
          </div>
        </div>
      </div>
    );
  }
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  return (
    <RootLayout>
      <PageTitle title="Generated Level" />
      <meta
        name="giscus:backlink"
        content="https://queensgame.vercel.app/random-level"
      />

      <div className="flex flex-col justify-center items-center pt-4">
        <div className="flex flex-col items-center">
          <div>
            <div
              className={`flex items-center space-x-0 justify-between py-1 w-full min-w-72 ${showClock ? "mb-0" : "mb-2"}`}
            >
              <Link to="/random-level" className="flex-none">
                <button className="border border-slate-500 rounded-full p-2 mr-2">
                  <BackIcon />
                </button>
              </Link>
              <div>
                <div className="text-lg text-gray-500">
                  {level.size > 6
                    ? t("GENERATED_TYPE", { size: level.size })
                    : `${level.size}x${level.size}`}
                </div>
              </div>

              <div className="flex flex-none justify-end">
                <div className="flex items-center space-x-2">
                  <Queen
                    title={
                      completed ? (completionTime ?? undefined) : undefined
                    }
                    size="18"
                    className={`fill-yellow-400 mr-2 ${
                      completed ? "visible" : "invisible"
                    }`}
                  />
                  <button
                    onClick={() => {
                      markRandomBoardCompleted(id || "UNKNOWN");
                    }}
                    hidden={!completed}
                    className="border border-slate-500 rounded-full p-2"
                    title="Mark Completed"
                  >
                    <DiscAlbum
                      size="18"
                      className={loading ? "animate-spin" : ""}
                    />
                  </button>

                  <Link
                    to={"/random-level?size=" + level.size}
                    className={
                      "flex items-center border border-slate-500 rounded-full p-2"
                    }
                    title="New Random Level"
                  >
                    {<Shuffle size="18" />}
                  </Link>

                  <button
                    onClick={() => {
                      setBoard(createEmptyBoard(levelSize));
                      setHasWon(false);
                      setShowWinningScreen(false);
                      history.current = [];
                      setTimeOverride(1);
                    }}
                    disabled={loading}
                    className="border border-slate-500 rounded-full p-2"
                    title="Restart"
                  >
                    <RefreshCw
                      size="18"
                      className={loading ? "animate-spin" : ""}
                    />
                  </button>

                  <div>
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
            </div>

            <div className="flex mb-1 justify-end">
              <Timer
                run={timerRunning}
                onTimeUpdate={handleTimeUpdate}
                showTimer={showClock}
                setTime={() => {
                  if (timeOverride) {
                    const tmpTime = timeOverride;
                    setTimeOverride(undefined);
                    return { newTime: tmpTime };
                  }
                  return { newTime: undefined };
                }}
              />
            </div>

            <div className="game relative flex justify-center">
              {showWinningScreen && (
                <WinningScreen close={() => setShowWinningScreen(false)} />
              )}
              <Board
                board={board}
                handleSquareClick={handleSquareClick}
                handleSquareMouseEnter={() => undefined}
                handleDrags={handleDragToClear}
                zoomLevel={zoomLevel}
                showLetters={showRegionLetters}
                boardSize={level.size}
                colorRegions={level.colorRegions}
                regionColors={defaultColorMap}
                showClashingQueens={showClashingQueens}
                clashingQueens={clashingQueens}
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
              </div>
            </div>
          </div>
        </div>

        {showInstructions && <HowToPlay />}

        <div className="self-start mt-6 mb-16 max-w-md md:max-w-lg mx-2">
          <div className="font-sm mb-2 text-gray-500">
            {t("SHARE_LINK_TO_LEVEL")}
            <CopyLink href={window.location.href} />
          </div>
        </div>
        <div className="w-full px-2">
          <Giscus
            repo="samimsu/queens-game-linkedin"
            repoId="R_kgDONCfeAg"
            category="Announcements"
            categoryId="DIC_kwDONCfeAs4CnIas"
            mapping="specific"
            term={"Generated Level Size " + level.size}
            strict="1"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="bottom"
            theme={theme}
            lang={getGiscusLanguage(i18n.language) || i18n.language}
            loading="lazy"
          />
        </div>
      </div>
    </RootLayout>
  );
};

export default PageGeneratedLevel;
