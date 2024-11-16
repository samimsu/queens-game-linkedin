import React, { useState } from "react";
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
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (rowIndex, colIndex) => {
    setIsDragging(true);
    handleSquareClick(rowIndex, colIndex); // Fill the initial square
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    // Get the target element
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);

    // Ensure the target is a Square and get its row/col attributes
    if (target && target.dataset.row && target.dataset.col) {
      const rowIndex = parseInt(target.dataset.row, 10);
      const colIndex = parseInt(target.dataset.col, 10);
      handleSquareClick(rowIndex, colIndex); // Fill square on touch move
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${size}, ${gridSize})`,
        gridTemplateRows: `repeat(${board.length}, ${gridSize})`,
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
              onTouchStart={() => handleTouchStart(rowIndex, colIndex)}
              boardSize={size}
              colorRegions={board}
              regionColors={regionColors}
              hideValues={hideRegionValues}
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
