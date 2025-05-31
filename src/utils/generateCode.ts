import { colorNames } from "./colors";

type Board = (string | null | undefined)[][];

interface RegionColors {
  [region: string]: keyof typeof colorNames;
}

const generateLevelJSCode = (
  levelNumber: number,
  board: Board,
  regionColors: RegionColors
): string => {
  // Get the unique regions used in the board
  const usedRegions = new Set(board.flat().filter(Boolean));

  // Filter the regionColors based on used regions
  const usedRegionColors = Object.entries(regionColors).filter(([region]) =>
    usedRegions.has(region)
  );

  // Get the color variable names for the used colors
  const usedColorVariables = usedRegionColors
    .map(([, color]) => colorNames[color])
    .filter(Boolean);

  // Remove duplicate color variables
  const uniqueColorVariables = [...new Set(usedColorVariables)];

  // Create the import statement only with used colors
  const importStatement = `import {\n  ${uniqueColorVariables
    .sort()
    .join(",\n  ")},\n} from "../colors";`;

  // Format the board as single-line subarrays
  const colorRegionsFormatted = board
    .map((row) => `    [${row.map((cell) => `"${cell}"`).join(", ")}],`)
    .join("\n");

  // Create the regionColors content dynamically with the color variable names
  const regionColorsEntries = usedRegionColors
    .map(([region, color]) => `    ${region}: ${colorNames[color]}`)
    .join(",\n");

  // Generate the JS file content
  const jsContent = `${importStatement}

const level${levelNumber ? levelNumber : ""} = {
  size: ${board.length},
  colorRegions: [
${colorRegionsFormatted}
  ],
  regionColors: {
${regionColorsEntries},
  },
};

export default level${levelNumber ? levelNumber : ""};
`;

  return jsContent;
};

export default generateLevelJSCode;
