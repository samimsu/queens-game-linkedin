import * as fs from "fs";
import * as path from "path";

/**
 * Extracts the `colorRegions` 2D array from a TypeScript file.
 * This function uses a regular expression to find the `colorRegions` property
 * and then attempts to parse its array content as JSON.
 *
 * @param filePath The path to the TypeScript file.
 * @returns A 2D array of strings representing the color regions, or null if not found or parsing fails.
 */
function extractColorRegions(filePath: string): string[][] | null {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // This regex attempts to capture the full content of the colorRegions array.
    // It matches 'colorRegions:', then an opening '[', then captures everything
    // non-greedily (`[\s\S]*?`) until it encounters:
    // 1. A comma followed by whitespace and a known property name (e.g., 'regionColors:', 'size:').
    // 2. Or, whitespace followed by a closing curly brace '}' (end of the object).
    // 3. Or, the end of the string '$' (if colorRegions is the last property and file ends).
    const match = content.match(
      /colorRegions:\s*(\[[\s\S]*?)(?=(?:,\s*(?:size|path|regionColors|solutionsCount|createdBy|creatorLink):|\s*\})|$)/s
    );

    if (match && match[1]) {
      let jsonLikeString = match[1];

      // Append the closing bracket that was not part of the capture group but was asserted by the lookahead
      // This is necessary because the lookahead ensures the boundary but doesn't include the ']' itself.
      // We need to find the *last* ']' that balances the first '['.
      // A simpler approach for this specific case is to assume the lookahead correctly identifies the end.
      // If the lookahead works, `jsonLikeString` should contain the content *up to* the ']'
      // before the next property, or the end of the object.
      // We need to ensure the final ']' is present for JSON.parse.

      // Let's refine the match to include the final ']' if it's within the captured block.
      // The previous regex was trying to capture the content *inside* the outer brackets.
      // It's safer to capture the entire `[...]` block.

      // New regex: Capture the entire array block `[...]`
      const fullArrayBlockMatch = content.match(
        /colorRegions:\s*(\[[\s\S]*?\])(?=(?:,\s*(?:size|path|regionColors|solutionsCount|createdBy|creatorLink):|\s*\})|$)/s
      );

      if (fullArrayBlockMatch && fullArrayBlockMatch[1]) {
        let jsonLikeString = fullArrayBlockMatch[1];

        // Remove single-line comments (// ...)
        jsonLikeString = jsonLikeString.replace(/\/\/.*$/gm, "");
        // Remove multi-line comments (/* ... */)
        jsonLikeString = jsonLikeString.replace(/\/\*[\s\S]*?\*\//g, "");

        // Replace single quotes with double quotes
        jsonLikeString = jsonLikeString.replace(/'/g, '"');

        // Remove trailing commas from array elements (e.g., ["A", "B",])
        // This regex specifically targets a comma followed by whitespace and a closing bracket or curly brace.
        // This is crucial for valid JSON parsing as JSON does not allow trailing commas.
        jsonLikeString = jsonLikeString.replace(/,\s*([\]\}])/g, "$1");

        // Attempt to parse the cleaned string
        return JSON.parse(jsonLikeString);
      }
    }
  } catch (e) {
    console.error(`Error processing file ${filePath}:`, e);
    // console.error("Problematic string content (after initial regex match and cleanup):", jsonLikeString); // Uncomment for debugging
  }
  return null;
}

/**
 * Normalizes a `colorRegions` grid by assigning canonical numerical IDs to connected regions.
 * This ensures that grids with the same shape but different character labels (e.g., 'A' vs 'X')
 * will produce the same normalized representation.
 * It uses a Breadth-First Search (BFS) / Flood Fill algorithm.
 *
 * @param regions The original 2D array of string regions.
 * @returns A new 2D array where each cell contains the canonical ID (as a string) of its region.
 */
function normalizeColorRegions(regions: string[][]): string[][] {
  if (!regions || regions.length === 0 || regions[0].length === 0) {
    return [];
  }

  const rows = regions.length;
  const cols = regions[0].length;

  // Initialize a grid to store canonical IDs, filled with nulls (unvisited).
  const normalizedGrid: (number | null)[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => null)
  );

  let nextCanonicalId = 0; // The next ID to assign to a new region.

  // Directions for BFS (up, down, left, right).
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  // Iterate through each cell of the grid.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // If the cell hasn't been visited (i.e., not assigned a canonical ID yet).
      if (normalizedGrid[r][c] === null) {
        const originalChar = regions[r][c]; // Get the character of the current region.
        const queue: [number, number][] = [[r, c]]; // Initialize BFS queue.
        normalizedGrid[r][c] = nextCanonicalId; // Assign the current canonical ID.

        let head = 0;
        // Perform BFS to find all connected cells of the same region.
        while (head < queue.length) {
          const [currR, currC] = queue[head++];

          for (const [dr, dc] of directions) {
            const newR = currR + dr;
            const newC = currC + dc;

            // Check if the new coordinates are within bounds,
            // if the character matches the original region's character,
            // and if the cell hasn't been visited yet.
            if (
              newR >= 0 &&
              newR < rows &&
              newC >= 0 &&
              newC < cols &&
              regions[newR][newC] === originalChar &&
              normalizedGrid[newR][newC] === null
            ) {
              normalizedGrid[newR][newC] = nextCanonicalId; // Assign the same ID.
              queue.push([newR, newC]); // Add to queue for further exploration.
            }
          }
        }
        nextCanonicalId++; // Increment ID for the next distinct region found.
      }
    }
  }

  // Convert the numerical normalized grid to a string grid for consistent JSON.stringify output.
  // This makes the string representation suitable for use as a Map key.
  return normalizedGrid.map((row) => row.map((cell) => cell!.toString()));
}

/**
 * Main function to find and report duplicate color regions across multiple directories.
 *
 * @param directories An array of directory paths to scan for TypeScript files.
 */
async function findDuplicateColorRegions(directories: string[]) {
  // Map to store normalized region shapes as keys and an array of file paths as values.
  const normalizedRegionsMap = new Map<string, string[]>();

  console.log("Starting scan for duplicate color regions...");

  // Iterate through each specified directory.
  for (const dir of directories) {
    console.log(`Scanning directory: ${dir}`);
    try {
      // Read all files in the current directory.
      const files = await fs.promises.readdir(dir);

      // Process each file.
      for (const file of files) {
        // Only process TypeScript files.
        if (file.endsWith(".ts")) {
          const filePath = path.join(dir, file);
          const colorRegions = extractColorRegions(filePath);

          if (colorRegions) {
            // Normalize the extracted color regions.
            const normalized = normalizeColorRegions(colorRegions);
            // Convert the normalized 2D array to a JSON string to use as a unique key.
            const normalizedString = JSON.stringify(normalized);

            // Add the file path to the map.
            if (!normalizedRegionsMap.has(normalizedString)) {
              normalizedRegionsMap.set(normalizedString, []);
            }
            normalizedRegionsMap.get(normalizedString)!.push(filePath);
          }
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error);
    }
  }

  console.log("\n--- Duplicate Color Regions Found ---");
  let foundDuplicates = false;

  // Iterate through the map to find entries with more than one file path (duplicates).
  for (const [normalizedString, filePaths] of normalizedRegionsMap.entries()) {
    if (filePaths.length > 1) {
      foundDuplicates = true;
      console.log(`\nNormalized Region Shape:\n${normalizedString}`);
      console.log("Found in files:");
      filePaths.forEach((p) => console.log(`  - ${p}`));
    }
  }

  if (!foundDuplicates) {
    console.log("No duplicate color regions found.");
  }
  console.log("-----------------------------------");
}

// --- Configuration ---
// Define the directories where your level files are located.
// IMPORTANT: Replace these paths with the actual paths on your system.
const targetDirectories = [
  "../src/utils/community-levels",
  // Add more directories as needed, e.g., 'path/to/another/levels/folder'
];

// Run the main function.
findDuplicateColorRegions(targetDirectories).catch(console.error);
