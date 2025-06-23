import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "@/utils/colors";

interface SquareProps {
  row: number;
  col: number;
  value: string;
  region?: string;
  onTouchStart: () => void;
  onTouchMove: () => void;
  onTouchEnd: () => void;
  level: string;
  boardSize: number;
  colorRegions: string[][];
  regionColors: { [key: string]: string };
  isClashing?: boolean;
  size: number;
}

const Square: React.FC<SquareProps> = ({
  row,
  col,
  value,
  region,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  level,
  boardSize,
  colorRegions,
  regionColors,
  isClashing,
  size,
}) => {
  const regionColor = region && regionColors[region] 
    ? regionColors[region] 
    : "#ffffff";

  let backgroundColor;
  
  if (isClashing && value === "Q") {
    backgroundColor = colors.clashing;
  } else {
    const isEven = (row + col) % 2 === 0;
    backgroundColor = isEven ? "#ffffff" : regionColor;
  }

  // Calculating border colors for each side
  const getBorderColors = () => {
    const borders = {
      top: "#000000",
      right: "#000000",
      bottom: "#000000",
      left: "#000000",
    };

    // Check top border
    if (row > 0 && colorRegions[row - 1][col] === region) {
      borders.top = "transparent";
    }

    // Check right border
    if (col < boardSize - 1 && colorRegions[row][col + 1] === region) {
      borders.right = "transparent";
    }

    // Check bottom border
    if (row < boardSize - 1 && colorRegions[row + 1][col] === region) {
      borders.bottom = "transparent";
    }

    // Check left border
    if (col > 0 && colorRegions[row][col - 1] === region) {
      borders.left = "transparent";
    }

    return borders;
  };

  const borderColors = getBorderColors();

  return (
    <TouchableOpacity
      style={[
        styles.square,
        {
          backgroundColor,
          width: size,
          height: size,
          borderTopColor: borderColors.top,
          borderRightColor: borderColors.right,
          borderBottomColor: borderColors.bottom,
          borderLeftColor: borderColors.left,
        },
      ]}
      onPressIn={onTouchStart}
      onPressOut={onTouchEnd}
      delayPressIn={0}
      activeOpacity={0.7}
      onTouchMove={(e) => {
        e.stopPropagation();
        onTouchMove();
      }}
    >
      {value === "Q" && (
        <Text style={styles.queen}>♕</Text>
      )}
      {value === "X" && (
        <Text style={styles.cross}>✕</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000",
  },
  queen: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "bold",
  },
  cross: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
  },
});

export default Square;
