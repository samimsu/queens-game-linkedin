import React from "react";
import Square from "./Square";
import useGridSize from "../../../hooks/useGridSize";
import { levels } from "../../../utils/levels";

const Board = ({
  board,
  handleSquareClick,
  handleSquareMouseEnter,
  handleSquareTouchMove,
  level,
  showClashingQueens,
  clashingQueens,
}) => {
  const { gridSize } = useGridSize(board.length);

  const colorRegions = levels[level].colorRegions;

  const handleTouchMove = (e) => {
    handleSquareTouchMove(e);
  };

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${board.length}, ${gridSize})`,
        gridTemplateRows: `repeat(${board.length}, ${gridSize})`,
      }}
      onTouchMove={handleTouchMove}
    >
      {board.map((row, rowIndex) =>
        row.map((square, colIndex) => (
          <Square
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={square}
            region={colorRegions[rowIndex][colIndex]}
            onPointerDown={() => {
              handleSquareClick(rowIndex, colIndex);
            }}
            onPointerEnter={(e) => {
              if (e.buttons === 1) {
                console.log({rowIndex, colIndex});
                handleSquareMouseEnter(rowIndex, colIndex);
              } 
                
            }}
            level={level}
            isClashing={
              showClashingQueens &&
              clashingQueens.has(`${rowIndex},${colIndex}`)
            }
            data-row={rowIndex} // Add data attributes for touch handling
            data-col={colIndex} 
          />
        ))
      )}
    </div>
  );
};

export default Board;
