import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Board from "./components/Board";
import { createEmptyBoard } from "../../utils/board";
import { checkWinCondition, getClashingQueens } from "../../utils/gameLogic";
import { levels } from "../../utils/levels";
import getAvailableLevels from "../../utils/getAvailableLevels";
import BackIcon from "../icons/BackIcon";
import PreviousIcon from "../icons/PreviousIcon";
import NextIcon from "../icons/NextIcon";
import ResetIcon from "../icons/ResetIcon";
import WinningScreen from "./components/WinningScreen";
import Queen from "../Queen";
import HowToPlay from "./components/HowToPlay";
import SettingsDialog from "./components/SettingsDialog";
import {
  getClashingQueensPreference,
  getShowInstructionsPreference,
  isLevelCompleted,
  markLevelAsCompleted,
  setClashingQueensPreference,
  setShowInstructionsPreference,
} from "../../utils/localStorage";

const Level = ({ id, level }) => {
  const [board, setBoard] = useState(createEmptyBoard(levels[level].size));
  const [hasWon, setHasWon] = useState(false);
  const [showWinningScreen, setShowWinningScreen] = useState(false);
  const [clashingQueens, setClashingQueens] = useState(new Set());
  const [showClashingQueens, setShowClashingQueens] = useState(
    getClashingQueensPreference
  );
  const [showInstructions, setShowInstructions] = useState(
    getShowInstructionsPreference
  );

  const availableLevels = getAvailableLevels();
  const previousDisabled = !availableLevels.includes(Number(id) - 1);
  const nextDisabled = !availableLevels.includes(Number(id) + 1);

  const boardSize = levels[level].size;
  const colorRegions = levels[level].colorRegions;

  const completed = isLevelCompleted(Number(id));

  // Handle click on square
  const handleClick = (row, col) => {
    const currentValue = board[row][col];

    // Toggle between empty, 'X', and 'Q'
    const newBoard = board.map((r, rowIndex) =>
      r.map((square, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          if (currentValue === null) return "X"; // First click - place 'X'
          if (currentValue === "X") return "Q"; // Second click - place queen
          if (currentValue === "Q") return null; // Third click - clear the square
        }
        return square;
      })
    );

    setBoard(newBoard);

    // Check for win condition after updating the board
    if (checkWinCondition(newBoard, boardSize, colorRegions)) {
      if (!hasWon) {
        setShowWinningScreen(true);
      }
      setHasWon(true);
      markLevelAsCompleted(Number(id));
    } else {
      setHasWon(false);
      setShowWinningScreen(false);
    }

    // Update clashing queens
    const clashingPositions = getClashingQueens(
      newBoard,
      boardSize,
      colorRegions
    );
    const clashingSet = new Set(
      clashingPositions.map(({ row, col }) => `${row},${col}`)
    );
    setClashingQueens(clashingSet);
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

  const PreviousLevelButton = ({ children, className }) => {
    return (
      <Link
        to={previousDisabled ? "#" : `/level/${Number(id) - 1}`}
        className="flex"
      >
        <button
          disabled={previousDisabled}
          onClick={() => {
            setBoard(createEmptyBoard(levels[`level${Number(id) - 1}`].size));
          }}
          className={className}
        >
          {children}
        </button>
      </Link>
    );
  };

  const NextLevelButton = ({ children, className }) => {
    return (
      <Link
        to={nextDisabled ? "#" : `/level/${Number(id) + 1}`}
        className="flex"
      >
        <button
          disabled={nextDisabled}
          onClick={() => {
            setBoard(createEmptyBoard(levels[`level${Number(id) + 1}`].size));
          }}
          className={className}
        >
          {children}
        </button>
      </Link>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Update clashing queens
    const clashingPositions = getClashingQueens(board, boardSize, colorRegions);
    const clashingSet = new Set(
      clashingPositions.map(({ row, col }) => `${row},${col}`)
    );
    setClashingQueens(clashingSet);
  }, [board]);

  return (
    <div key={id} className="flex flex-col justify-center items-center pt-4">
      <div className="flex flex-col items-center">
        <div>
          <div className="flex items-center mb-2 space-x-4 sm:space-x-0 sm:justify-between py-1 w-full">
            <Link to="/" className="flex-none">
              <button className="border border-slate-500 rounded-full p-2">
                <BackIcon />
              </button>
            </Link>

            <div className="flex items-center space-x-2">
              <PreviousLevelButton className="disabled:opacity-50">
                <PreviousIcon />
              </PreviousLevelButton>

              <h2 className="text-xl text-center">Level {id}</h2>

              <NextLevelButton className="disabled:opacity-50">
                <NextIcon />
              </NextLevelButton>
            </div>

            <div className="flex flex-1 sm:flex-none justify-end">
              <div className="relative flex items-center">
                {completed && (
                  <Queen
                    size="24"
                    className="absolute right-full top-1/2 transform -translate-y-1/2 fill-yellow-400 mr-2"
                  />
                )}
                <button
                  onClick={() => {
                    setBoard(createEmptyBoard(levels[level].size));
                    setHasWon(false);
                    setShowWinningScreen(false);
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
                />
              </div>
            </div>
          </div>

          <div className="game relative">
            {showWinningScreen && (
              <WinningScreen
                PreviousLevelButton={PreviousLevelButton}
                NextLevelButton={NextLevelButton}
                close={() => setShowWinningScreen(false)}
              />
            )}
            <Board
              board={board}
              handleClick={handleClick}
              level={level}
              showClashingQueens={showClashingQueens}
              clashingQueens={clashingQueens}
            />
          </div>
        </div>

        {showInstructions && <HowToPlay />}
      </div>
    </div>
  );
};

export default Level;
