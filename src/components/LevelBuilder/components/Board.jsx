import React, { useState } from "react";
import Square from "./Square";
import useGridSize from "../../../hooks/useGridSize";

const Board = ({
  size,
  board,
  regionColors,
  handleSquareClick,
  handleSquareTouchStart,
  handleSquareTouchMove,
  hideRegionValues,
}) => {
  const { gridSize } = useGridSize(size);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const handleTouchStart = (rowIndex, colIndex) => {
    setIsDragging(true);
    handleSquareTouchStart(rowIndex, colIndex); // Fill the initial square
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleSquareTouchMove(e);
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
                if (isTouch) return;
                handleSquareClick(rowIndex, colIndex);
              }}
              onMouseEnter={(e) => {
                if (e.buttons === 1) handleSquareClick(rowIndex, colIndex);
              }}
              onTouchStart={(e) => {
                setIsTouch(true);
                handleTouchStart(rowIndex, colIndex);
              }}
              onTouchEnd={() => {
                setTimeout(() => setIsTouch(false), 0);
              }}
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
