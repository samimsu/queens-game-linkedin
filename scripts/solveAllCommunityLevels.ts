import { communityLevels } from "../src/utils/communityLevels";
import { getSolutions } from "../src/utils/solveQueens";
import * as fs from "fs/promises";

async function solveAllCommunityLevels() {
  // Get skip level from command line argument, default to 180 if not provided
  const skipLevel = parseInt(process.argv[2]) || 1;

  // Iterate through all community levels
  for (const [levelName, level] of Object.entries(communityLevels)) {
    console.log(`Processing ${levelName} (Size: ${level.size})`);
    const levelNumber = parseInt(levelName.replace("level", ""));
    console.log(levelNumber, typeof levelNumber);
    if (levelNumber < skipLevel) {
      console.log(`Skipping ${levelName} (Level number < 30)`);
      continue;
    }
    try {
      // Get the board from the level's colorRegions
      const board = level.colorRegions;

      let count = 0;
      const solutionsArr = [];
      // Run the solver and collect solutions
      const solutions = await getSolutions(board, async (solution) => {
        count++;
        solutionsArr.push(solution);
        process.stdout.write(`${count} `);
        return false;
      });

      // Write solutions to a file
      try {
        await fs.writeFile(
          "solutions.json",
          JSON.stringify(solutions, null, 2)
        );
        console.log("\nSolutions written to solutions.json");
      } catch (err) {
        console.error("\nError writing to file:", err);
      }

      // Log the total number of solutions found for this level
      console.log(
        `\nTotal solutions for ${levelName}: ${solutions.length} (${
          solutions.length === 1 ? "Unique solution" : "Multiple solutions"
        })`
      );
      // console.log("Solutions:", solutions);
      console.log("---");
    } catch (error) {
      console.error(`Error processing ${levelName}:`, error);
    }
  }
}

// Execute the solver for all levels
solveAllCommunityLevels().catch((error) => {
  console.error("Error in solveAllCommunityLevels:", error);
});
