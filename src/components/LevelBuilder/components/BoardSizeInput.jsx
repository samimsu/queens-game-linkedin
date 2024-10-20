import React from "react";
import { createInitialBoardForBuilder } from "../../../utils/board";

const BoardSizeInput = ({ boardSize, setBoardSize, setBoard }) => {
  return (
    <div className="mb-3 flex items-center space-x-3 text-lg">
      <label className="whitespace-nowrap">Board size</label>
      <input
        type="number"
        value={boardSize}
        onChange={(e) => {
          const size = Number(e.target.value);
          if (size > 10 || size < 1) return;
          setBoardSize(size);
          setBoard(createInitialBoardForBuilder(size));
        }}
        className="font-bold border rounded border-slate-500 px-2 py-0.5 max-w-16"
      />
    </div>
  );
};

export default BoardSizeInput;
