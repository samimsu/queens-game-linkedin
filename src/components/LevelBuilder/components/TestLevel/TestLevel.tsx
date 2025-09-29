import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  StopCircle,
} from "lucide-react";
import Board from "./components/Board";
import WinningScreen from "./components/WinningScreen";
import { TestLevel as TestLevelType } from "@/utils/types";
import useGameLogic from "@/hooks/useGameLogic";
import { createEmptyBoard } from "@/utils/board";
import Button from "@/components/Button";
import { Button as Button2 } from "@/components/ui/button";
import useVisibility from "@/hooks/useVisibility";

interface TestLevelProps {
  title: string;
  level: TestLevelType;
}

const TestLevel = ({ level }: TestLevelProps) => {
  const { t } = useTranslation();
  const isVisible = useVisibility();

  const [puzzleSolutions, setPuzzleSolutions] = useState([]);
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(-1);
  const [fetchingSolutions, setFetchingSolutions] = useState(false);

  const workerRef = useRef<Worker | null>(null);

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

  const handleGetSolutions = () => {
    setFetchingSolutions(true);
    const worker = new Worker(
      new URL("@/workers/solveQueensWorker.ts", import.meta.url),
    );
    workerRef.current = worker;
    worker.onmessage = (e) => {
      if (e.data.type === "solution") {
        const solution = e.data.data;
        setPuzzleSolutions((prev) => [...prev, solution]);
        const tempBoard = board.map((row) => [...row]);
        solution.forEach(([r, c]: [number, number]) => {
          tempBoard[r][c] = "Q";
        });
        setBoard(tempBoard);
        setCurrentSolutionIndex((prev) => prev + 1);
      } else if (e.data.type === "done") {
        setFetchingSolutions(false);
        if (workerRef.current) {
          workerRef.current.terminate();
          workerRef.current = null;
        }
      }
    };
    worker.postMessage({ board: colorRegions });
  };

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

  useEffect(() => {
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between space-x-4 mb-2">
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
            {t("RESET")}
          </Button>
        </div>

        <div className="game relative w-fit mb-2">
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
        <div className="flex flex-col space-y-3 items-center">
          <div className="flex items-center space-x-2">
            <Button
              disabled={puzzleSolutions.length < 2}
              onClick={() => {
                if (puzzleSolutions.length === 0) return;
                const nextIndex = 0;
                setCurrentSolutionIndex(nextIndex);
                const solution = puzzleSolutions[nextIndex];
                const tempBoard = createEmptyBoard(levelSize);
                solution.forEach(([r, c]) => {
                  tempBoard[r][c] = "Q";
                });
                setBoard(tempBoard);
              }}
            >
              <ChevronFirst className="border border-gray-500" />
            </Button>
            <Button
              disabled={puzzleSolutions.length < 2}
              onClick={() => {
                if (puzzleSolutions.length === 0) return;
                const nextIndex =
                  (currentSolutionIndex - 1 + puzzleSolutions.length) %
                  puzzleSolutions.length;
                setCurrentSolutionIndex(nextIndex);
                const solution = puzzleSolutions[nextIndex];
                const tempBoard = createEmptyBoard(levelSize);
                solution.forEach(([r, c]) => {
                  tempBoard[r][c] = "Q";
                });
                setBoard(tempBoard);
              }}
            >
              <ChevronLeft className="border border-gray-500" />
            </Button>
            <span>{currentSolutionIndex + 1}</span>
            <Button
              disabled={puzzleSolutions.length < 2}
              onClick={() => {
                if (puzzleSolutions.length === 0) return;
                const nextIndex =
                  (currentSolutionIndex + 1) % puzzleSolutions.length;
                setCurrentSolutionIndex(nextIndex);
                const solution = puzzleSolutions[nextIndex];
                const tempBoard = createEmptyBoard(levelSize);
                solution.forEach(([r, c]) => {
                  tempBoard[r][c] = "Q";
                });
                setBoard(tempBoard);
              }}
            >
              <ChevronRight className="border border-gray-500" />
            </Button>
            <Button
              disabled={puzzleSolutions.length < 2}
              onClick={() => {
                if (puzzleSolutions.length === 0) return;
                const nextIndex = puzzleSolutions.length - 1;
                setCurrentSolutionIndex(nextIndex);
                const solution = puzzleSolutions[nextIndex];
                const tempBoard = createEmptyBoard(levelSize);
                solution.forEach(([r, c]) => {
                  tempBoard[r][c] = "Q";
                });
                setBoard(tempBoard);
              }}
            >
              <ChevronLast className="border border-gray-500" />
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <Button2
              onClick={handleGetSolutions}
              className="hover:bg-primary hover:opacity-90"
              disabled={fetchingSolutions}
            >
              {fetchingSolutions ? "Calculating..." : "Get solutions"}
            </Button2>
            <button
              onClick={() => {
                if (workerRef.current) {
                  workerRef.current.terminate();
                  workerRef.current = null;
                  setFetchingSolutions(false);
                }
              }}
              className="rounded px-1 py-1.5 text-red-500 disabled:opacity-50"
              disabled={!fetchingSolutions}
            >
              <div className="flex items-center space-x-2">
                <StopCircle /> <span>Stop</span>
              </div>
            </button>
          </div>
          <span className="text-sm text-gray-600">
            (Note: Search limited to first 100 solutions. Please submit levels
            with only 1 solution.)
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestLevel;
