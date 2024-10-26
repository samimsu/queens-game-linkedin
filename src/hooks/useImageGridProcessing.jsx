import { useEffect } from "react";
import { colorNames } from "../utils/colors";

const useImageGridProcessing = ({
  setBoardSize,
  setBoard,
  setRegionColors,
  levelImg,
}) => {
  useEffect(() => {
    if (!levelImg) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
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
        img.height
      );

      // Correct detected vertical and horizontal lines
      const correctedVerticalLines = insertMissingLines(verticalLines);
      const correctedHorizontalLines = insertMissingLines(horizontalLines);

      // Step 2: Extract colors from each cell based on detected grid boundaries
      const { board, regionColors } = detectColorsInGrid(
        imageData,
        correctedVerticalLines,
        correctedHorizontalLines
      );

      setBoardSize(board.length);
      setBoard(board);
      setRegionColors(regionColors);
    };
  }, [levelImg]);

  // Convert a hex color to RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  // Calculate the Euclidean distance between two colors
  const colorDistance = (color1, color2) => {
    return Math.sqrt(
      Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2)
    );
  };

  // Find the closest color in colorNames
  const closestColorHex = (r, g, b) => {
    let closestHex = null;
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
    imageData,
    width,
    height,
    tolerance = 10
  ) => {
    const verticalLines = [];
    const horizontalLines = [];

    const MIN_LINE_HEIGHT = 0.1; // Minimum proportion of dark pixels needed
    const MIN_LINE_WIDTH = 0.1; // Minimum proportion of dark pixels needed

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
      if (isLine && darkPixelCount / height >= MIN_LINE_HEIGHT) {
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
      if (isLine && darkPixelCount / width >= MIN_LINE_WIDTH) {
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
        if (isLine && darkPixelCount / height >= MIN_LINE_HEIGHT) {
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
        if (isLine && darkPixelCount / width >= MIN_LINE_WIDTH) {
          horizontalLines.push(y);
          y += tolerance; // Skip ahead to account for line thickness
        }
      }
    }

    return { verticalLines, horizontalLines };
  };

  const detectColorsInGrid = (
    imageData,
    verticalLines,
    horizontalLines,
    tolerance = 10
  ) => {
    const board = [];
    const regionColors = {};
    const colorMapping = {};
    let currentRegionCode = "A".charCodeAt(0);

    for (let row = 0; row < horizontalLines.length - 1; row++) {
      const boardRow = [];

      const top = horizontalLines[row];
      const bottom = horizontalLines[row + 1];

      for (let col = 0; col < verticalLines.length - 1; col++) {
        const left = verticalLines[col];
        const right = verticalLines[col + 1];

        // Average color within this square, skipping line areas based on tolerance
        let totalR = 0,
          totalG = 0,
          totalB = 0,
          count = 0;

        for (let y = top + tolerance; y < bottom - tolerance; y++) {
          for (let x = left + tolerance; x < right - tolerance; x++) {
            const index = (y * imageData.width + x) * 4;
            totalR += imageData.data[index];
            totalG += imageData.data[index + 1];
            totalB += imageData.data[index + 2];
            count++;
          }
        }

        const avgR = Math.round(totalR / count);
        const avgG = Math.round(totalG / count);
        const avgB = Math.round(totalB / count);

        const colorHex = `#${((1 << 24) + (avgR << 16) + (avgG << 8) + avgB)
          .toString(16)
          .slice(1)
          .toUpperCase()}`;

        const closestHex = closestColorHex(avgR, avgG, avgB);

        // Assign color to region if not already mapped
        if (!colorMapping[closestHex]) {
          const region = String.fromCharCode(currentRegionCode);
          colorMapping[closestHex] = region;
          regionColors[region] = closestHex;
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
  const insertMissingLines = (lines) => {
    const differences = [];
    for (let i = 1; i < lines.length; i++) {
      differences.push(lines[i] - lines[i - 1]);
    }

    // Get the smallest spacing or average small spacing
    let smallDifferences = differences.filter(
      (diff) => diff < Math.max(...differences) / 2
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
