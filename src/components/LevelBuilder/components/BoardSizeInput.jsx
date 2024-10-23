import React from "react";
import { createInitialBoardForBuilder } from "../../../utils/board";

const BoardSizeInput = ({ boardSize, handleBoardSizeChange }) => {
  // const handleBoardSizeChange = (size) => {
  //   setBoardSize(size);
  //   setBoard(createInitialBoardForBuilder(size));
  // };

  return (
    <div className="mb-3 flex items-center space-x-3 text-lg">
      <label className="whitespace-nowrap">Board size</label>
      <input
        type="number"
        value={boardSize}
        onChange={(e) => {
          const size = Number(e.target.value);
          handleBoardSizeChange(size);
        }}
        onFocus={(event) => event.target.select()}
        className="font-bold border rounded border-slate-500 px-2 py-0.5 max-w-16"
      />
      <button onClick={() => handleBoardSizeChange(boardSize - 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-dash-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
        </svg>
      </button>
      <button onClick={() => handleBoardSizeChange(boardSize + 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </div>
  );
};

export default BoardSizeInput;
