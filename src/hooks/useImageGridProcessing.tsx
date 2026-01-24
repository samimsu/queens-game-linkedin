import { useEffect } from "react";
import { colorNames } from "../utils/colors";

interface UseImageGridProcessingProps {
  setBoardSize: React.Dispatch<React.SetStateAction<number>>;
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  setRegionColors: React.Dispatch<
    React.SetStateAction<Record<string, keyof typeof colorNames>>
  >;
  levelImg: string | null;
  setVerticalLines: React.Dispatch<React.SetStateAction<number[]>>;
  setHorizontalLines: React.Dispatch<React.SetStateAction<number[]>>;
  tolerance: number;
  minLineHeight: number;
  minLineWidth: number;
}

const useImageGridProcessing = ({
  setBoardSize,
  setBoard,
  setRegionColors,
  levelImg,
  setVerticalLines,
  setHorizontalLines,
  tolerance,
  minLineHeight,
  minLineWidth,
}: UseImageGridProcessingProps) => {
  useEffect(() => {
    if (!levelImg) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const img = new Image();
    img.src = levelImg;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);

      // Step 1: Detect grid lines
      const { verticalLines, horizontalLines } = detectGridLinesInRegion(
        imageData,
        img.width,
        img.height,
      );

      // Correct detected vertical and horizontal lines
      const correctedVerticalLines = insertMissingLines(verticalLines);
      const correctedHorizontalLines = insertMissingLines(horizontalLines);

      setVerticalLines(correctedVerticalLines);
      setHorizontalLines(correctedHorizontalLines);

      // Step 2: Extract colors from each cell based on detected grid boundaries
      const { board, regionColors } = detectColorsInGrid(
        imageData,
        correctedVerticalLines,
        correctedHorizontalLines,
      );

      setBoardSize(board.length);
      setBoard(board);
      setRegionColors(regionColors as Record<string, keyof typeof colorNames>);
    };
  }, [levelImg, tolerance, minLineHeight, minLineWidth]);

  // Convert a hex color to RGB
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  // Calculate the Euclidean distance between two colors
  const colorDistance = (
    color1: { r: number; g: number; b: number },
    color2: { r: number; g: number; b: number },
  ) => {
    return Math.sqrt(
      Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2),
    );
  };

  // Find the closest color in colorNames
  const closestColorHex = (r: number, g: number, b: number) => {
    let closestHex = "";
    let minDistance = Infinity;

    Object.keys(colorNames).forEach((hex) => {
      const color = hexToRgb(hex);
      const distance = colorDistance(color, { r, g, b });
      if (distance < minDistance) {
        minDistance = distance;
        closestHex = hex;
      }
    });

    return closestHex;
  };

  const detectGridLinesInRegion = (
    imageData: ImageData,
    width: number,
    height: number,
  ) => {
    const verticalLines = [];
    const horizontalLines = [];

    // Scan for potential grid start
    let gridStartX = null;
    let gridStartY = null;

    // Search the image to locate the first vertical line as the left bound of the grid
    for (let x = 0; x < width; x++) {
      let darkPixelCount = 0;
      let isLine = true;
      for (let y = 0; y < height; y++) {
        const index = (y * width + x) * 4;
        const [r, g, b] = [
          imageData.data[index],
          imageData.data[index + 1],
          imageData.data[index + 2],
        ];
        if (r < 30 && g < 30 && b < 30) {
          darkPixelCount++;
        }
      }
      if (isLine && darkPixelCount / height >= minLineHeight) {
        gridStartX = x;
        break;
      }
    }

    // Similarly, locate the top bound of the grid by finding the first horizontal line
    for (let y = 0; y < height; y++) {
      let darkPixelCount = 0;
      let isLine = true;
      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4;
        const [r, g, b] = [
          imageData.data[index],
          imageData.data[index + 1],
          imageData.data[index + 2],
        ];
        if (r < 30 && g < 30 && b < 30) {
          darkPixelCount++;
        }
      }
      if (isLine && darkPixelCount / width >= minLineWidth) {
        gridStartY = y;
        break;
      }
    }

    // If grid start is found, search for remaining lines within the grid region
    if (gridStartX !== null && gridStartY !== null) {
      // Detect vertical lines within grid
      for (let x = gridStartX; x < width; x++) {
        let darkPixelCount = 0;
        let isLine = true;
        for (let y = gridStartY; y < height; y++) {
          const index = (y * width + x) * 4;
          const [r, g, b] = [
            imageData.data[index],
            imageData.data[index + 1],
            imageData.data[index + 2],
          ];
          if (r < 30 && g < 30 && b < 30) {
            darkPixelCount++;
          }
        }
        if (isLine && darkPixelCount / height >= minLineHeight) {
          verticalLines.push(x);
          x += tolerance; // Skip ahead to account for line thickness
        }
      }

      // Detect horizontal lines within grid
      for (let y = gridStartY; y < height; y++) {
        let darkPixelCount = 0;
        let isLine = true;
        for (let x = gridStartX; x < width; x++) {
          const index = (y * width + x) * 4;
          const [r, g, b] = [
            imageData.data[index],
            imageData.data[index + 1],
            imageData.data[index + 2],
          ];
          if (r < 30 && g < 30 && b < 30) {
            darkPixelCount++;
          }
        }
        if (isLine && darkPixelCount / width >= minLineWidth) {
          horizontalLines.push(y);
          y += tolerance; // Skip ahead to account for line thickness
        }
      }
    }

    return { verticalLines, horizontalLines };
  };

  const detectColorsInGrid = (
    imageData: ImageData,
    verticalLines: number[],
    horizontalLines: number[],
  ) => {
    const board = [];
    const regionColors: { [key: string]: string } = {};
    const colorMapping: { [key: string]: string } = {};
    let currentRegionCode = "A".charCodeAt(0);

    for (let row = 0; row < horizontalLines.length - 1; row++) {
      const boardRow = [];

      const top = horizontalLines[row];
      const bottom = horizontalLines[row + 1];

      for (let col = 0; col < verticalLines.length - 1; col++) {
        const left = verticalLines[col];
        const right = verticalLines[col + 1];

        // Dominant color within this square, skipping line areas based on tolerance
        const uniqueColors: { [key: string]: number } = {};

        for (let y = top + tolerance; y < bottom - tolerance; y++) {
          for (let x = left + tolerance; x < right - tolerance; x++) {
            const index = (y * imageData.width + x) * 4;
            const color = {
              r: imageData.data[index],
              g: imageData.data[index + 1],
              b: imageData.data[index + 2],
            };

            const colorKey = `${color.r},${color.g},${color.b}`;
            if (uniqueColors[colorKey]) {
              uniqueColors[colorKey]++;
            } else {
              uniqueColors[colorKey] = 1;
            }
          }
        }

        // Find the color with the highest count
        let maxCount = 0;
        let dominantColor = { r: 0, g: 0, b: 0 };
        Object.keys(uniqueColors).forEach((key) => {
          if (uniqueColors[key] > maxCount) {
            maxCount = uniqueColors[key];
            const [r, g, b] = key.split(",").map(Number);
            dominantColor = { r, g, b };
          }
        });

        const { r, g, b } = dominantColor;

        const closestHex = closestColorHex(r, g, b);

        // Assign color to region if not already mapped
        if (!colorMapping[closestHex]) {
          const region = String.fromCharCode(currentRegionCode);
          colorMapping[closestHex] = region;
          regionColors[region] = closestHex || "";
          currentRegionCode++;
        }

        const region = colorMapping[closestHex];
        boardRow.push(region);
      }
      board.push(boardRow);
    }

    return { board, regionColors };
  };

  // Helper function to find missing lines by checking spacing
  const insertMissingLines = (lines: number[]) => {
    const differences: number[] = [];
    for (let i = 1; i < lines.length; i++) {
      differences.push(lines[i] - lines[i - 1]);
    }

    // Get the smallest spacing or average small spacing
    let smallDifferences = differences.filter(
      (diff) => diff < Math.max(...differences) / 2,
    );

    if (!smallDifferences.length) {
      smallDifferences = [differences[0]];
    }

    const avgSpacing =
      smallDifferences.reduce((a, b) => a + b, 0) / smallDifferences.length;

    // Check for gaps and insert lines where needed
    const correctedLines = [];
    for (let i = 1; i < lines.length; i++) {
      const gap = lines[i] - lines[i - 1];
      correctedLines.push(lines[i - 1]);

      if (gap > avgSpacing * 1.8 && gap < avgSpacing * 2.2) {
        // Insert a line in the middle if gap is roughly double the average spacing
        correctedLines.push(lines[i - 1] + Math.round(avgSpacing));
      }
    }
    correctedLines.push(lines[lines.length - 1]);

    return correctedLines;
  };
};

export default useImageGridProcessing;
