import React from "react";
import { useTheme } from "next-themes";
import { Check, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { queensGameRepoNewLevelFile } from "@/data/links";
import JSCode from "./JSCode";
import generateLevelJSCode from "@/utils/generateCode";

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

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between space-x-2 w-full mb-3">
        <button
          onClick={() => {
            const code = generateLevelJSCode(
              levelName,
              board,
              regionColors,
              null,
              null,
              true
            );
            setJsCode(code);
          }}
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
              <span className="text-[#50b8fe]">level{levelName}.ts</span>
            </code>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionJSCode;
