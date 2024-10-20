import React from "react";
import { colorNames } from "../../../utils/colors";

const SectionJSCode = ({
  jsCode,
  setJsCode,
  copied,
  setCopied,
  levelName,
  board,
  regionColors,
}) => {
  const generateLevelJSCode = (levelNumber, board, regionColors) => {
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
    const importStatement = `import { ${uniqueColorVariables
      .sort()
      .join(", ")} } from "../colors";`;

    // Create the regionColors content dynamically with the color variable names
    const regionColorsEntries = usedRegionColors
      .map(([region, color]) => `    ${region}: ${colorNames[color]}`)
      .join(",\n");

    // Generate the JS file content
    const jsContent = `
${importStatement}

const level${levelNumber} = {
  size: ${board.length},
  colorRegions: ${JSON.stringify(board, null, 2)},
  regionColors: {
${regionColorsEntries}
  }
};

export default level${levelNumber};
`;

    setJsCode(jsContent);
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between space-x-2 w-full mb-3">
        <button
          onClick={() => generateLevelJSCode(levelName, board, regionColors)}
          className="border border-slate-500 rounded-full py-1 px-3"
        >
          Generate js code
        </button>

        <button
          onClick={() => setJsCode("")}
          className="border border-slate-500 rounded-full py-1 px-3"
        >
          Clear code
        </button>
      </div>

      <div className="h-full w-full">
        <div className="relative h-full w-full sm:w-fit">
          <textarea
            value={jsCode}
            className="border rounded border-slate-500 px-2 py-0.5 h-96 sm:h-full w-full sm:w-96 overflow-y-scroll"
            disabled
          />

          <div className="absolute top-2 right-5 flex flex-col items-center">
            <button
              onClick={async (e) => {
                navigator.clipboard.writeText(jsCode);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 1500);
              }}
              className="bg-white border border-slate-500 rounded-xl py-0.5 px-1.5 text-sm hover:bg-slate-200 disabled:bg-slate-100 opacity-75 hover:opacity-100"
              disabled={!jsCode}
            >
              Copy code
            </button>
            {copied && <div className="text-sm bg-white">Copied!</div>}
          </div>
        </div>

        <div>
          Add this code to{" "}
          <a
            href="https://github.com/samimsu/queens-game-linkedin/new/samimsu-new-levels/src/utils/levels"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code className="bg-[#1f1f1f] text-[#cccccc]">
              src/utils/levels/
              <span className="text-[#50b8fe]">level{levelName}.js</span>
            </code>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionJSCode;
