import React, { useState } from "react";
import Square from "./Square";
import useGridSize from "../../../hooks/useGridSize";

interface BoardProps {
  board: string[][];
  handleSquareClick: (row: number, col: number) => void;
  handleSquareMouseEnter: (squares: number[][]) => void;
  handleDrags?: (isClear: boolean, squares: number[][]) => void | undefined;
  boardSize: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
  showClashingQueens: boolean;
  clashingQueens: Set<string>;
  zoomLevel: number;
  showLetters: boolean;
}

const Board: React.FC<BoardProps> = ({
  board,
  handleSquareClick,
  handleSquareMouseEnter,
  handleDrags,
  boardSize,
  colorRegions,
  regionColors,
  showClashingQueens,
  clashingQueens,
  zoomLevel,
  showLetters,
}) => {
  const [initialSquare, setInitialSquare] = useState<string | undefined>(
    undefined,
  );
  const [initialSquareWasClear, setInitialSquareWasClear] = useState<
    boolean | undefined
  >(undefined);
  const [previousSquare, setPreviousSquare] = useState<string | undefined>(
    undefined,
  );
  const [initialSquareHandled, setInitialSquareHandled] = useState(false);

  const { gridSize } = useGridSize(board.length);

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${board.length}, ${
          parseFloat(gridSize) * zoomLevel
        }px)`,
        gridTemplateRows: `repeat(${board.length}, ${
          parseFloat(gridSize) * zoomLevel
        }px)`,
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
              setInitialSquareWasClear(board[rowIndex][colIndex] !== "X");
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

                if (!handleDrags) {
                  handleSquareMouseEnter(squares);
                }

                if (handleDrags && initialSquareWasClear !== undefined) {
                  handleDrags(!initialSquareWasClear, squares);
                }
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
              setInitialSquareWasClear(undefined);
            }}
            boardSize={boardSize}
            colorRegions={colorRegions}
            regionColors={regionColors}
            isClashing={
              showClashingQueens &&
              clashingQueens.has(`${rowIndex},${colIndex}`)
            }
            data-row={rowIndex} // Add data attributes for touch handling
            data-col={colIndex}
            queenSize={(24 * zoomLevel).toString()}
            showLetter={showLetters}
          />
        )),
      )}
    </div>
  );
};

export default Board;
