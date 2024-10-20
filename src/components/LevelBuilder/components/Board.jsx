import React from "react";
import Square from "./Square";
import useGridSize from "../../../hooks/useGridSize";

const Board = ({
  size,
  board,
  regionColors,
  handleSquareClick,
  hideRegionValues,
}) => {
  const { gridSize } = useGridSize(size);

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${size}, ${gridSize})`,
        gridTemplateRows: `repeat(${board.length}, ${gridSize})`,
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((square, colIndex) => {
          return (
            <Square
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              value={square}
              region={board[rowIndex][colIndex]}
              onMouseDown={() => {
                handleSquareClick(rowIndex, colIndex);
              }}
              onMouseEnter={(e) => {
                if (e.buttons === 1) handleSquareClick(rowIndex, colIndex);
              }}
              boardSize={size}
              colorRegions={board}
              regionColors={regionColors}
              hideValues={hideRegionValues}
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
