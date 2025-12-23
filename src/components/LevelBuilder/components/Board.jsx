import React, { useState } from "react";
import Square from "./Square";
import useGridSize from "../../../hooks/useGridSize";

const Board = ({
  size,
  board,
  regionColors,
  handleSquareClick,
  handleSquareMouseEnter,
  handleSquareTouchMove,
  hideRegionValues,
}) => {
  const { gridSize } = useGridSize(size, "small");

  const handleTouchMove = (e) => {
    handleSquareTouchMove(e);
  };

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${size}, ${gridSize})`,
        gridTemplateRows: `repeat(${board.length}, ${gridSize})`,
      }}
      onTouchMove={handleTouchMove}
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
              onPointerDown={() => {
                handleSquareClick(rowIndex, colIndex);
              }}
              onPointerEnter={(e) => {
                if (e.buttons === 1) handleSquareMouseEnter(rowIndex, colIndex);
              }}
              boardSize={size}
              colorRegions={board}
              regionColors={regionColors}
              hideValues={hideRegionValues}
              onContextMenu={(e) => {e.preventDefault();}} //prevents right click window from popping up
              data-row={rowIndex}
              data-col={colIndex} // Add data attributes for touch handling
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
