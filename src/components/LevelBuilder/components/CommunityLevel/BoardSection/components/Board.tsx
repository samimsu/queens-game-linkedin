import React from "react";
import Square from "../../../Square";
import useGridSize from "../../../../../../hooks/useGridSize";

interface BoardProps {
  size: number;
  board: (string | null)[][];
  regionColors: Record<string, string>;
  handleSquareClick: (row: number, col: number) => void;
  handleSquareMouseEnter: (row: number, col: number) => void;
  handleSquareTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  hideRegionValues: boolean;
}

const Board = ({
  size,
  board,
  regionColors,
  handleSquareClick,
  handleSquareMouseEnter,
  handleSquareTouchMove,
  hideRegionValues,
}: BoardProps) => {
  const { gridSize } = useGridSize(size, "small");

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
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
              onPointerEnter={(e: React.PointerEvent) => {
                if (e.buttons === 1) handleSquareMouseEnter(rowIndex, colIndex);
              }}
              boardSize={size}
              colorRegions={board}
              regionColors={regionColors}
              hideValues={hideRegionValues}
              data-row={rowIndex}
              data-col={colIndex} // Add data attributes for touch handling
            />
          );
        }),
      )}
    </div>
  );
};

export default Board;
