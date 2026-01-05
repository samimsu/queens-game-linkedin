import React, { useState } from "react";
import Square from "./Square";
import useGridSize from "../../../hooks/useGridSize";

interface BoardProps {
  board: string[][];
  handleSquareClick: (row: number, col: number) => void;
  handleSquareMouseEnter: (squares: number[][]) => void;
  level: string;
  boardSize: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
  showClashingQueens: boolean;
  clashingQueens: Set<string>;
}

const Board: React.FC<BoardProps> = ({
  board,
  handleSquareClick,
  handleSquareMouseEnter,
  level,
  boardSize,
  colorRegions,
  regionColors,
  showClashingQueens,
  clashingQueens,
}) => {
  const [initialSquare, setInitialSquare] = useState<string | undefined>(
    undefined,
  );
  const [previousSquare, setPreviousSquare] = useState<string | undefined>(
    undefined,
  );
  const [initialSquareHandled, setInitialSquareHandled] = useState(false);

  const { gridSize } = useGridSize(board.length, "small");

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
            onPointerDown={(e) => {
              const currentSquare = `${rowIndex},${colIndex}`;
              setInitialSquare(currentSquare);
              setInitialSquareHandled(false);
              // otherwise the PointerUp event will have the row and col of the initial PointerDown event
              (e.target as HTMLElement).releasePointerCapture(e.pointerId);
            }}
            onPointerEnter={(e) => {
              const currentSquare = `${rowIndex},${colIndex}`;
              // on mobile PointerEnter is fired once before PointerDown so check if there is already an initial square
              if (e.buttons === 1 && initialSquare) {
                const squares = [[rowIndex, colIndex]];
                // on desktop the initial drag cell stays empty (because click is triggered on pointer up)
                // since board state apparently can't be updated multiple times from a single event
                // we have to pass two coords (initial and current) to the handler
                if (!initialSquareHandled) {
                  squares.push(initialSquare.split(",").map(Number));
                  setInitialSquareHandled(true);
                }

                handleSquareMouseEnter(squares);
                setPreviousSquare(currentSquare);
              }
            }}
            onPointerUp={() => {
              const currentSquare = `${rowIndex},${colIndex}`;
              const isBasicClick =
                initialSquare === currentSquare && !previousSquare;
              // only do something if it was a regular click (and not the end of the drag)
              if (isBasicClick) {
                handleSquareClick(rowIndex, colIndex);
              }
              setPreviousSquare(undefined);
              setInitialSquare(undefined);
              setInitialSquareHandled(false);
            }}
            level={level}
            boardSize={boardSize}
            colorRegions={colorRegions}
            regionColors={regionColors}
            isClashing={
              showClashingQueens &&
              clashingQueens.has(`${rowIndex},${colIndex}`)
            }
            data-row={rowIndex} // Add data attributes for touch handling
            data-col={colIndex}
          />
        )),
      )}
    </div>
  );
};

export default Board;
