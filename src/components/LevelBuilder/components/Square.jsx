import React from "react";

const Square = ({
  row,
  col,
  value,
  region,
  onClick,
  onMouseDown,
  onMouseEnter,
  boardSize,
  colorRegions,
  regionColors,
  hideValues,
}) => {
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
      className={`square hover:bg-slate-300 hover:brightness-75 select-none ${borderClasses}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      style={{ backgroundColor: regionColors[region] }}
    >
      {!hideValues && value}
    </div>
  );
};

export default Square;
