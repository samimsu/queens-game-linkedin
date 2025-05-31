import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Board from "./components/Board";
import WinningScreen from "./components/WinningScreen";
import { TestLevel as TestLevelType } from "@/utils/types";
import useGameLogic from "@/hooks/useGameLogic";
import { createEmptyBoard } from "@/utils/board";
import Button from "@/components/Button";
import useVisibility from "@/hooks/useVisibility";

interface TestLevelProps {
  title: string;
  level: TestLevelType;
}

const TestLevel = ({ level }: TestLevelProps) => {
  const { t } = useTranslation();
  const isVisible = useVisibility();

  const levelSize = level.size;

  const boardSize = levelSize;
  const colorRegions = level.colorRegions;
  const regionColors = level.regionColors;

  const {
    board,
    hasWon,
    showWinningScreen,
    clashingQueens,
    showClashingQueens,
    history,
    setBoard,
    setHasWon,
    setShowWinningScreen,
    setTimerRunning,
    handleSquareClick,
    handleDrag,
    handleUndo,
  } = useGameLogic({
    boardSize,
    colorRegions,
  });

  useEffect(() => {
    setBoard(createEmptyBoard(levelSize));
    setHasWon(false);
    setShowWinningScreen(false);
  }, [level]);

  useEffect(() => {
    if (!isVisible || hasWon) {
      setTimerRunning(false);
    }
    if (isVisible && !hasWon) {
      setTimerRunning(true);
    }
  }, [isVisible, hasWon]);

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <div className="flex flex-col items-center">
        <div>
          <div className="flex justify-between space-x-4 mb-2">
            <Button
              className="border border-slate-500 rounded px-3 py-1 w-fit"
              onClick={handleUndo}
              disabled={hasWon || !history.current.length}
            >
              {t("UNDO")}
            </Button>
            <Button
              onClick={() => {
                setBoard(createEmptyBoard(levelSize));
                setHasWon(false);
                setShowWinningScreen(false);
                history.current = [];
              }}
              className="border border-slate-500 rounded px-3 py-1 w-fit"
            >
              Reset
            </Button>
          </div>

          <div className="game relative">
            {showWinningScreen && (
              <WinningScreen close={() => setShowWinningScreen(false)} />
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
        </div>
      </div>
    </div>
  );
};

export default TestLevel;
