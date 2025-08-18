import Queen from "../../Queen";
import Cross from "./Cross";

interface SquareProps {
  row: number;
  col: number;
  value: string | null;
  region: string;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerEnter: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: () => void;
  boardSize: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
  isClashing: boolean;
  showLetter: boolean;
  queenSize?: string;
  [key: string]: any; // For additional props
}

// Square component with color regions and toggling between 'X', 'Q', and empty
const Square = ({
  row,
  col,
  value,
  region,
  onPointerDown,
  onPointerEnter,
  onPointerUp,
  boardSize,
  colorRegions,
  regionColors,
  isClashing,
  showLetter,
  queenSize = "24",
  ...props
}: SquareProps) => {
  // Function to determine border classes
  const getBorderClasses = () => {
    const borderClasses: string[] = [];
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
      className={`square hover:brightness-75 ${borderClasses}`}
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
      {value === "Q" ? (
        <Queen size={queenSize} />
      ) : value === "X" ? (
        <Cross />
      ) : showLetter ? (
        region
      ) : (
        value
      )}
    </div>
  );
};

export default Square;
