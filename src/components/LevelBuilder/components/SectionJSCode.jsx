import React from "react";
import { colorNames } from "../../../utils/colors";
import { queensGameRepoNewLevelFile } from "@/data/links";
import { useTranslation } from "react-i18next";
import JSCode from "./JSCode";
import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";

const SectionJSCode = ({
  jsCode,
  setJsCode,
  copied,
  setCopied,
  levelName,
  board,
  regionColors,
}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const generateLevelJSCode = (levelNumber, board, regionColors) => {
    // Get the unique regions used in the board
    const usedRegions = new Set(board.flat().filter(Boolean));

    // Filter the regionColors based on used regions
    const usedRegionColors = Object.entries(regionColors).filter(([region]) =>
      usedRegions.has(region),
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

const level${levelNumber} = {
  size: ${board.length},
  colorRegions: [
${colorRegionsFormatted}
  ],
  regionColors: {
${regionColorsEntries},
  },
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
          {t("GENERATE_CODE")}
        </button>

        <button
          onClick={() => setJsCode("")}
          className="border border-slate-500 rounded-full py-1 px-3"
        >
          {t("CLEAR_CODE")}
        </button>
      </div>

      <div className="h-full w-full">
        <div className="relative h-full w-full sm:w-fit">
          <JSCode code={jsCode || "\n\n\n\n\n\n\n\n\n\n\n\n\n\n"} />

          <div className="absolute top-2 right-2 flex flex-col items-center">
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(jsCode);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className={`absolute right-2 top-2 p-2 rounded-md transition-colors z-10 ${
                isDarkTheme
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              aria-label="Copy code"
              title="Copy code"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        <div>
          {t("ADD_THIS_CODE_TO")}{" "}
          <a
            href={queensGameRepoNewLevelFile}
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
