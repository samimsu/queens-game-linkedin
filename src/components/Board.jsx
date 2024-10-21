import React from "react";
import Square from "./Square";
import useGridSize from "../hooks/useGridSize";
import { levels } from "../utils/levels";

const Board = ({ board, handleClick, level }) => {
  const { gridSize } = useGridSize(board.length);

  const colorRegions = levels[level].colorRegions;

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${board.length}, ${gridSize})`,
        gridTemplateRows: `repeat(${board.length}, ${gridSize})`,
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((square, colIndex) => (
          <Square
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={square}
            region={colorRegions[rowIndex][colIndex]}
            onClick={() => handleClick(rowIndex, colIndex)}
            level={level}
          />
        ))
      )}
    </div>
  );
};

export default Board;
