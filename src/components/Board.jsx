import React, { useEffect, useState } from "react";
import Square from "./Square";
// import { colorRegions } from "../utils/board";
import { levels } from "../utils/levels";

const Board = ({ board, handleClick, level }) => {
  const colorRegions = levels[level].colorRegions;
  const extraSmallScreenGridSize = "35px";
  const smallScreenGridSize = "40px";
  const largeScreenGridSize = "50px";

  const getInitialGridSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 480) {
      return largeScreenGridSize; // For larger screens (>= 480px)
    } else if (windowWidth >= 345) {
      return smallScreenGridSize; // For smaller screens (>= 345px but < 480px)
    } else {
      return extraSmallScreenGridSize; // For extra small screens (< 345px)
    }
  };

  const [gridSize, setGridSize] = useState(getInitialGridSize);

  useEffect(() => {
    // Media query lists for different screen widths
    const largeScreenQuery = window.matchMedia("(min-width: 480px)");
    const smallScreenQuery = window.matchMedia(
      "(min-width: 345px) and (max-width: 479px)"
    );
    const extraSmallScreenQuery = window.matchMedia("(max-width: 344px)");

    // Function to handle screen width changes
    const handleResize = () => {
      if (largeScreenQuery.matches) {
        setGridSize(largeScreenGridSize);
      } else if (smallScreenQuery.matches) {
        setGridSize(smallScreenGridSize);
      } else if (extraSmallScreenQuery.matches) {
        setGridSize(extraSmallScreenGridSize);
      }
    };

    // Add listeners to handle screen width changes
    largeScreenQuery.addEventListener("change", handleResize);
    smallScreenQuery.addEventListener("change", handleResize);
    extraSmallScreenQuery.addEventListener("change", handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      largeScreenQuery.removeEventListener("change", handleResize);
      smallScreenQuery.removeEventListener("change", handleResize);
      extraSmallScreenQuery.removeEventListener("change", handleResize);
    };
  }, []);

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
