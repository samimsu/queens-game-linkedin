import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Square from "./Square";
import useGridSize from "../../../hooks/useGridSize";

interface BoardProps {
  board: string[][];
  handleSquareClick: (row: number, col: number) => void;
  handleSquareDrag: (squares: number[][]) => void;
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
  handleSquareDrag,
  level,
  boardSize,
  colorRegions,
  regionColors,
  showClashingQueens,
  clashingQueens,
}) => {
  const [initialSquare, setInitialSquare] = useState<string | undefined>(
    undefined
  );
  const [previousSquare, setPreviousSquare] = useState<string | undefined>(
    undefined
  );
  const [initialSquareHandled, setInitialSquareHandled] = useState(false);

  // Calculate grid size based on the device screen width
  const screenWidth = Dimensions.get('window').width;
  const gridSize = Math.floor((screenWidth - 32) / board.length); // 32 for padding

  // Handle touch start
  const handleTouchStart = (rowIndex: number, colIndex: number) => {
    const currentSquare = `${rowIndex},${colIndex}`;
    setInitialSquare(currentSquare);
    setInitialSquareHandled(false);
  };

  // Handle touch move (dragging)
  const handleTouchMove = (rowIndex: number, colIndex: number) => {
    const currentSquare = `${rowIndex},${colIndex}`;
    
    // Only process if we have an initial square and this is a new square
    if (initialSquare && currentSquare !== previousSquare) {
      const squares = [[rowIndex, colIndex]];
      
      // Add the initial square to the squares array if it hasn't been handled yet
      if (!initialSquareHandled) {
        squares.push(initialSquare.split(",").map(Number));
        setInitialSquareHandled(true);
      }

      handleSquareDrag(squares);
      setPreviousSquare(currentSquare);
    }
  };

  // Handle touch end
  const handleTouchEnd = (rowIndex: number, colIndex: number) => {
    const currentSquare = `${rowIndex},${colIndex}`;
    const isBasicTouch = initialSquare === currentSquare && !previousSquare;
    
    // Only process as a tap if it was a basic touch (not a drag)
    if (isBasicTouch) {
      handleSquareClick(rowIndex, colIndex);
    }
    
    // Reset state
    setPreviousSquare(undefined);
    setInitialSquare(undefined);
    setInitialSquareHandled(false);
  };

  // Create rows of squares
  const renderRows = () => {
    return board.map((row, rowIndex) => (
      <View key={`row-${rowIndex}`} style={styles.row}>
        {row.map((square, colIndex) => (
          <Square
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={square}
            region={colorRegions[rowIndex][colIndex]}
            onTouchStart={() => handleTouchStart(rowIndex, colIndex)}
            onTouchMove={() => handleTouchMove(rowIndex, colIndex)}
            onTouchEnd={() => handleTouchEnd(rowIndex, colIndex)}
            level={level}
            boardSize={boardSize}
            colorRegions={colorRegions}
            regionColors={regionColors}
            isClashing={
              showClashingQueens &&
              clashingQueens.has(`${rowIndex},${colIndex}`)
            }
            size={gridSize}
          />
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.board}>
      {renderRows()}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;
