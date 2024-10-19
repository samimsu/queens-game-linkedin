import React, { useState } from "react";
import { Link } from "react-router-dom";
import Board from "./Board";
import { createEmptyBoard } from "../utils/board";
import { checkWinCondition } from "../utils/gameLogic";
import { levels } from "../utils/levels";
import getAvailableLevels from "../utils/getAvailableLevels";
import goldCrown from "../assets/gold-crown.svg";
import CloseIcon from "./icons/CloseIcon";
import BackIcon from "./icons/BackIcon";
import PreviousIcon from "./icons/PreviousIcon";
import NextIcon from "./icons/NextIcon";
import WinningScreen from "./WinningScreen";

const Level = ({ id, level }) => {
  const [board, setBoard] = useState(createEmptyBoard(levels[level].size));
  const [hasWon, setHasWon] = useState(false);

  const availableLevels = getAvailableLevels();
  const previousDisabled = !availableLevels.includes(Number(id) - 1);
  const nextDisabled = !availableLevels.includes(Number(id) + 1);

  const boardSize = levels[level].size;
  const colorRegions = levels[level].colorRegions;

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
      setHasWon(true);
    } else {
      setHasWon(false);
    }
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

  return (
    <div key={id} className="flex flex-col justify-center items-center pt-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2 justify-between py-1 w-full">
          <Link to="/" className="flex-none">
            <button className="border border-slate-500 rounded p-2">
              <BackIcon />
            </button>
          </Link>

          <div className="flex items-center space-x-3">
            <PreviousLevelButton className="disabled:opacity-50">
              <PreviousIcon />
            </PreviousLevelButton>

            <h2 className="text-xl">Level {id}</h2>

            <NextLevelButton className="disabled:opacity-50">
              <NextIcon />
            </NextLevelButton>
          </div>

          <button
            onClick={() => {
              setBoard(createEmptyBoard(levels[level].size));
              setHasWon(false);
            }}
            className="border border-slate-500 rounded-full py-1 px-3"
          >
            Reset
          </button>
        </div>

        <div className="game relative">
          {hasWon && (
            <WinningScreen
              PreviousLevelButton={PreviousLevelButton}
              NextLevelButton={NextLevelButton}
              close={() => setHasWon(false)}
            />
          )}
          <Board board={board} handleClick={handleClick} level={level} />
        </div>
      </div>
    </div>
  );
};

export default Level;
