import React from "react";
import Queen from "../../Queen";
import Cross from "./Cross";
import { levels } from "../../../utils/levels";

// Square component with color regions and toggling between 'X', 'Q', and empty
const Square = ({
  row,
  col,
  value,
  region,
  onClick,
  onPointerDown,
  onPointerEnter,
  onPointerUp,
  level,
  isClashing,
  opacity,
  ...props
}) => {
  const boardSize = levels[level].size;
  const colorRegions = levels[level].colorRegions;
  const regionColors = levels[level].regionColors;

  // Function to determine border classes
  const getBorderClasses = () => {
    const borderClasses = [];
    const adjacentSquares = [
      { position: "top", value: row > 0 ? colorRegions[row - 1][col] : null },
      {
        position: "right",
        value: col < boardSize - 1 ? colorRegions[row][col + 1] : null,
      },
      {
        position: "bottom",
        value: row < boardSize - 1 ? colorRegions[row + 1][col] : null,
      },
      { position: "left", value: col > 0 ? colorRegions[row][col - 1] : null },
    ];

    adjacentSquares.forEach(({ position, value: adjValue }) => {
      if (adjValue === null) {
        borderClasses.push(`thick-border-${position[0]}`); // Add thick border if adjacent square is empty
        borderClasses.push(`thick-outer-border-${position[0]}`);
      } else if (adjValue !== region) {
        borderClasses.push(`thick-border-${position[0]}`); // Add thick border if adjacent square has a different color
      }
    });

    return borderClasses;
  };

  const borderClasses = getBorderClasses().join(" "); // Get the border classes

  return (
    <div
      className={`square hover:brightness-75 ${opacity ? 'opacity-50' : ''} ${borderClasses}`}
      onClick={onClick}
      onPointerDown={onPointerDown}
      onPointerEnter={onPointerEnter}
      onPointerUp={onPointerUp}
      style={{
        backgroundColor: regionColors[region],
        color: isClashing ? "red" : "black",
      }}
      draggable="false"
      {...props}
    >
      {value === "Q" ? <Queen /> : value === "X" ? <Cross /> : value}
    </div>
  );
};

export default Square;
