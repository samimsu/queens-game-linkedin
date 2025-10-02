import { useEffect, useRef, useState } from "react";
import { createEmptyBoard } from "@/utils/board";
import {
  getAutoPlaceXsPreference,
  getClashingQueensPreference,
  getShowClockPreference,
  getShowInstructionsPreference,
  isCommunityLevelCompleted,
  markCommunityLevelAsCompleted,
  isRandomLevelCompleted,
  recordRandomLevelState,
  setAutoPlaceXsPreference,
  setClashingQueensPreference,
  setShowClockPreference,
  setShowInstructionsPreference,
} from "@/utils/localStorage";
import { checkWinCondition, getClashingQueens } from "@/utils/gameLogic";

interface useGameLogicProps {
  id?: string;
  boardSize: number;
  colorRegions: string[][];
  levelType?: "community" | "random";
}

const useGameLogic = ({
  id,
  boardSize,
  colorRegions,
  levelType,
}: useGameLogicProps) => {
  const isCommunityLevel = levelType === "community";
  const isRandomLevel = levelType === "random";

  const [board, setBoard] = useState(createEmptyBoard(boardSize));
  const [, setQueenGeneratedXs] = useState<Record<string, Set<string>>>({});
  const [hasWon, setHasWon] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showWinningScreen, setShowWinningScreen] = useState(false);
  const [clashingQueens, setClashingQueens] = useState<Set<string>>(new Set());
  const [showClashingQueens, setShowClashingQueens] = useState<boolean>(
    getClashingQueensPreference,
  );
  const [showInstructions, setShowInstructions] = useState<boolean>(
    getShowInstructionsPreference,
  );
  const [showClock, setShowClock] = useState<boolean>(getShowClockPreference);
  const [autoPlaceXs, setAutoPlaceXs] = useState<boolean>(
    getAutoPlaceXsPreference,
  );
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const history = useRef<{ row: number; col: number; symbol: string | null }[]>(
    [],
  );
  const completed = id
    ? isCommunityLevel && isCommunityLevelCompleted(id)
    : isRandomLevel
          ? isRandomLevelCompleted(id ?? "UNKNOWN")
          : false;

  const getQueenPositionForGivenX = (
    xRow: number,
    xCol: number,
    newBoard: (string | null)[][],
  ) => {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1], // Row and column
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1], // Diagonals
    ];

    // Check immediate row, column, and diagonal neighbors
    for (const [dRow, dCol] of directions) {
      const newRow = xRow + dRow;
      const newCol = xCol + dCol;
      if (
        newRow >= 0 &&
        newRow < newBoard.length &&
        newCol >= 0 &&
        newCol < newBoard[0].length &&
        newBoard[newRow][newCol] === "Q"
      ) {
        return { x: newRow, y: newCol }; // Another queen requires this 'X' cell
      }
    }

    // Check full row and column for any queens
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[xRow][i] === "Q") {
        return { x: xRow, y: i };
      }
      if (newBoard[i][xCol] === "Q") {
        return { x: i, y: xCol };
      }
    }

    // Check the color region for any queens
    const regionColor = colorRegions[xRow][xCol];
    for (let r = 0; r < newBoard.length; r++) {
      for (let c = 0; c < newBoard[0].length; c++) {
        if (
          colorRegions[r][c] === regionColor && // Same region
          newBoard[r][c] === "Q" // Queen present
        ) {
          return { x: r, y: c };
        }
      }
    }

    return null; // No queens require this 'X' cell
  };

  const handleSquareClick = (row: number, col: number) => {
    // Initialize newBoard as a copy of the current board
    const newBoard = structuredClone(board);

    const currentValue = board[row][col];

    if (currentValue === null) {
      newBoard[row][col] = "X";
      addToHistory({ row, col, symbol: "X" });
    } else if (currentValue === "X") {
      placeQueen(newBoard, row, col);
      addToHistory({ row, col, symbol: "Q" });
    } else if (currentValue === "Q") {
      removeQueen(newBoard, row, col);
      addToHistory({ row, col, symbol: null });
    }
    if (isRandomLevel && id) {
      recordRandomLevelState(id, timer, newBoard, false);
    }

    // Check for win condition after updating the board
    if (checkWinCondition(newBoard, boardSize, colorRegions)) {
      if (!hasWon) {
        setTimeout(() => setShowWinningScreen(true), 0);
      }
      setHasWon(true);

      if (id) {
        if (isCommunityLevel) {
          markCommunityLevelAsCompleted(id);
        } else if (isRandomLevel) {
          recordRandomLevelState(id, timer, board, true);
        } else {
          markLevelAsCompleted(Number(id));
        }
      }
    } else {
      setHasWon(false);
      setShowWinningScreen(false);
    }

    // Update clashing queens
    const clashingPositions = getClashingQueens(
      newBoard,
      boardSize,
      colorRegions,
    );
    const clashingSet = new Set(
      clashingPositions.map(({ row, col }) => `${row},${col}`),
    );
    setClashingQueens(clashingSet);

    setBoard(newBoard);
  };

  const handleDrag = (squares: number[][]) => {
    const newBoard = structuredClone(board);
    for (const [row, col] of squares) {
      if (newBoard[row][col] !== "Q") {
        newBoard[row][col] = "X";
        addToHistory({ row, col, symbol: "X" });
      }
    }
    setBoard(newBoard);
  };

  const handleDragToClear = (isClear: boolean, squares: number[][]) => {
    if (squares.length === 0) {
      return;
    }
    if (!isClear) {
      return handleDrag(squares);
    }

    console.log("handleDragToClear", squares);

    const newBoard = structuredClone(board);
    for (const [row, col] of squares) {
      if (newBoard[row][col] !== "Q") {
        newBoard[row][col] = null;
        addToHistory({ row, col, symbol: null });
      }
    }
    setBoard(newBoard);
    recordState();
  };

  const placeQueen = (
    newBoard: (string | null)[][],
    row: number,
    col: number,
  ) => {
    newBoard[row][col] = "Q"; // Place the queen

    if (!autoPlaceXs) return;

    const newXs: [number, number][] = [];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1], // Row and column
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1], // Diagonals
    ];

    // Add X's around the queen
    directions.forEach(([dRow, dCol]) => {
      const xRow = row + dRow;
      const xCol = col + dCol;
      if (
        xRow >= 0 &&
        xRow < newBoard.length &&
        xCol >= 0 &&
        xCol < newBoard[0].length &&
        newBoard[xRow][xCol] === null
      ) {
        newBoard[xRow][xCol] = "X";
        newXs.push([xRow, xCol]);
      }
    });

    // Add X's in the row and column
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[row][i] === null) {
        newBoard[row][i] = "X";
        newXs.push([row, i]);
      }
      if (newBoard[i][col] === null) {
        newBoard[i][col] = "X";
        newXs.push([i, col]);
      }
    }

    // Add X's in the same color region
    const queenRegion = colorRegions[row][col];
    for (let r = 0; r < newBoard.length; r++) {
      for (let c = 0; c < newBoard[0].length; c++) {
        if (
          colorRegions[r][c] === queenRegion && // Same region
          newBoard[r][c] === null // Empty square
        ) {
          newBoard[r][c] = "X";
          newXs.push([r, c]);
        }
      }
    }

    // Track the X's generated by this queen
    setQueenGeneratedXs((prev) => {
      const updated = { ...prev };
      newXs.forEach(([xRow, xCol]) => {
        const key = `${xRow},${xCol}`;
        if (!updated[key]) {
          updated[key] = new Set();
        }
        updated[key].add(`${row},${col}`);
      });
      return updated;
    });
  };

  const removeQueen = (
    newBoard: (string | null)[][],
    row: number,
    col: number,
  ) => {
    newBoard[row][col] = null; // Remove the queen

    if (!autoPlaceXs) return;

    const queenKey = `${row},${col}`;

    setQueenGeneratedXs((prev) => {
      const updated = { ...prev };

      // Check all cells generated by this queen to see if they are needed by other queens
      Object.keys(updated).forEach((xKey) => {
        if (updated[xKey].has(queenKey)) {
          // Temporarily remove this queen's ownership
          updated[xKey].delete(queenKey);

          // Parse the coordinates of the 'X' cell
          const [xRow, xCol] = xKey.split(",").map(Number);

          const queenPos = getQueenPositionForGivenX(xRow, xCol, newBoard);

          // Check if any other queen still needs this 'X' cell
          if (!queenPos) {
            newBoard[xRow][xCol] = null; // Remove X if no queens depend on it
            delete updated[xKey]; // Remove entry if no queens left
          } else {
            updated[xKey].add(`${queenPos.x},${queenPos.y}`);
          }
        }
      });
      return updated;
    });
  };

  const addToHistory = ({
    row,
    col,
    symbol,
  }: {
    row: number;
    col: number;
    symbol: string | null;
  }) => {
    history.current.push({
      row,
      col,
      symbol,
    });
  };

  const toggleClashingQueens = () => {
    const newSetting = !showClashingQueens;
    setShowClashingQueens(newSetting);
    setClashingQueensPreference(newSetting);
  };

  const toggleShowInstructions = () => {
    const newSetting = !showInstructions;
    setShowInstructions(newSetting);
    setShowInstructionsPreference(newSetting);
  };

  const toggleShowClock = () => {
    setShowClock((prev: boolean) => {
      setShowClockPreference(!prev);
      return !prev;
    });
  };

  const toggleAutoPlaceXs = () => {
    const newSetting = !autoPlaceXs;
    setAutoPlaceXs(newSetting);
    setAutoPlaceXsPreference(newSetting);
  };

  const handleTimeUpdate = (time: number) => {
    setTimer(time);
  };

  const recordState = () => {
    if (!isRandomLevel || !id) {
      return;
    }
    recordRandomLevelState(id, timer, board, hasWon);
  };

  const handleUndo = () => {
    const newBoard = structuredClone(board);
    const latest = history.current.pop();

    if (!latest) return;
    if (latest.symbol == "X") {
      newBoard[latest.row][latest.col] = null;
    } else if (latest.symbol == "Q") {
      removeQueen(newBoard, latest.row, latest.col);
      newBoard[latest.row][latest.col] = "X";
    } else if (latest.symbol == null) {
      placeQueen(newBoard, latest.row, latest.col);
    }
    setBoard(newBoard);
  };

  useEffect(() => {
    if (!id) return;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Update clashing queens
    const clashingPositions = getClashingQueens(board, boardSize, colorRegions);
    const clashingSet = new Set(
      clashingPositions.map(({ row, col }) => `${row},${col}`),
    );
    setClashingQueens(clashingSet);
  }, [board]);

  return {
    board,
    setBoard,
    hasWon,
    setHasWon,
    timer,
    showWinningScreen,
    setShowWinningScreen,
    clashingQueens,
    showClashingQueens,
    showInstructions,
    showClock,
    autoPlaceXs,
    timerRunning,
    setTimerRunning,
    completed,
    history,
    handleSquareClick,
    handleDrag,
    handleDragToClear,
    handleUndo,
    toggleClashingQueens,
    toggleShowInstructions,
    toggleShowClock,
    toggleAutoPlaceXs,
    handleTimeUpdate,
  };
};

export default useGameLogic;
