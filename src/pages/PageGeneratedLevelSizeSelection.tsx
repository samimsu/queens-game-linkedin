import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import PageTitle from "@/components/PageTitle.tsx";
import GenerateButton from "@/components/GeneratedLevel/components/GenerateButton.tsx";
import { RefreshCw } from "lucide-react";
import {
  encodeLevelRegions,
  EncodingMode,
  getHashForLevelId,
} from "@/utils/generated/levelEncoder.ts";
import {
  getCompletedLevels,
  getInProgressLevels,
  groupGeneratedLevelsBySize,
  hasInProgressLevels,
} from "@/utils/localStorage.ts";
import RandomLevelButton from "@/components/GeneratedLevel/components/RandomLevelButton.tsx";
import { PersistedGeneratedLevel } from "@/utils/types.ts";
import formatDuration from "@/utils/formatDuration.ts";

const PageGeneratedLevelSizeSelection = () => {
  const { t } = useTranslation();

  const [generatingLevel, setGeneratingLevel] = useState(false);
  const [foundValidLevel, setFoundValidLevel] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [generatingSize, setGeneratingSize] = useState(1);
  const workerRef = useRef<Worker | null>(null);
  const createGeneratedBoard = (size: number) => {
    setGeneratingLevel(true);
    setTimedOut(false);
    setGeneratingSize(size);
    const worker = new Worker(
      new URL("@/workers/generateBoardWorker.ts", import.meta.url),
    );
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }
    workerRef.current = worker;
    worker.onmessage = (e) => {
      console.log(e.data);
      if (e.data.type === "generatedBoard") {
        const solution = e.data.data;
        // redirect to a path with encoded level in it
        const encodedLevel = encodeLevelRegions(solution, EncodingMode.RLE);
        window.history.pushState(null, "", `/random-level/${encodedLevel}`);
        window.location.reload();
      } else if (e.data.type === "done") {
        if (workerRef.current) {
          workerRef.current.terminate();
          workerRef.current = null;
        }
        if (e.data.data === null) {
          // show a message that the level generation failed
          console.log("Failed to generate level");
          setTimedOut(true);
          setGeneratingLevel(false);
          setFoundValidLevel(false);
        }
      } else if (e.data.type === "savingCandidate") {
        setFoundValidLevel(true);
      }
    };

    worker.postMessage({ size: size, difficulty: "easy" });
  };

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has("size")) {
      const size = Number(searchParams.get("size"));
      createGeneratedBoard(size);
    }
  }, []);

  // 6 - 13
  const sizes = Array.from(Array(15).keys())
    .map((i) => i + 6)
    .filter((i) => i >= 6)
    .filter((i) => i <= 13);
  const formatHover = (level: PersistedGeneratedLevel) => {
    if (!level) return "";
    if (level.completed && level.timeInSeconds) {
      return `Completed in ${formatDuration(level.timeInSeconds)}`;
    }
    return "";
  };
  const completedLevelsBySize =
    groupGeneratedLevelsBySize(getCompletedLevels());
  console.log(completedLevelsBySize);

  return (
    <RootLayout>
      <PageTitle title={t("LEVEL_GENERATOR")} />
      <div className="text-gray-600 dark:text-gray-400 mb-2 px-1 sm:px-0 max-w-[348px] sm:max-w-[436px] text-sm w-full mx-auto">
        {t("GENERATE_LEVELS")}
      </div>

      <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 p-1 text-sm w-fit mx-auto">
        <div className="flex justify-center mb-1 col-span-8 sm:col-span-10">
          {t("BOARD_SIZE")}
        </div>
        <div className="col-span-7 sm:col-span-10 grid grid-cols-4 sm:grid-cols-4 gap-1">
          {sizes.map((size) => {
            return (
              <GenerateButton
                boardSize={size}
                key={"key" + size}
                title={
                  size > 12
                    ? t("GENERATE_MAY_REQUIRE_MULTIPLE_ATTEMPTS")
                    : undefined
                }
                onClick={() => {
                  createGeneratedBoard(size);
                }}
              />
            );
          })}
        </div>
      </div>

      <div
        className={
          generatingLevel
            ? "visible" +
              " col-span-8 sm:col-span-10  justify-center items-center mt-2 space-x-2 text-sm text-gray-500"
            : "invisible" +
              " col-span-8 sm:col-span-10  justify-center items-center mt-2 space-x-2 text-sm text-gray-500"
        }
      >
        {" "}
        {t("GENERATING_LEVEL", { size: generatingSize })}{" "}
        <RefreshCw
          className={"animate-spin inline-block space-x-5"}
          strokeWidth={2}
          size={16}
        />{" "}
      </div>
      <div
        className={
          foundValidLevel
            ? "visible" +
              " col-span-8 sm:col-span-10  justify-left items-center mt-2 space-x-2 text-sm text-gray-500"
            : "invisible" +
              " col-span-8 sm:col-span-10  justify-left items-center mt-2 space-x-2 text-sm text-gray-500"
        }
      >
        {" "}
        {t("FOUND_VALID_LEVEL")}{" "}
      </div>
      <div
        className={
          timedOut
            ? "visible" +
              " col-span-8 sm:col-span-10  justify-left items-center mt-2 space-x-2 text-sm text-gray-500"
            : "invisible" +
              " col-span-8 sm:col-span-10  justify-left items-center mt-2 space-x-2 text-sm text-gray-500"
        }
      >
        {" "}
        {t("TIMED_OUT", { size: generatingSize })}{" "}
      </div>

      <br />

      <div
        className="grid grid-cols-8 sm:grid-cols-10 gap-1 p-1 text-sm w-fit mx-auto"
        hidden={!hasInProgressLevels()}
      >
        <div className="flex justify-center mb-1 col-span-8 sm:col-span-10">
          {hasInProgressLevels() ? t("In-progress levels") : ""}
        </div>
        <div className="col-span-7 sm:col-span-10 grid grid-cols-4 sm:grid-cols-4 gap-1">
          {getInProgressLevels().map((level) => {
            return (
              <RandomLevelButton
                level={level.id}
                isNew={false}
                key={getHashForLevelId(level.id)}
              />
            );
          })}
        </div>

        <br />
        <div className="flex justify-center mb-1 col-span-8 sm:col-span-10">
          {t("Completed levels")}
        </div>
        {Object.entries(completedLevelsBySize).map(([size, levels]) => {
          return (
            <div className="col-span-7 sm:col-span-10 grid grid-cols-4 sm:grid-cols-4 gap-1">
              <div key={`completed-${size}`} className="mb-1 p-1">
                <h3 className="font-medium mb-1 text-center text-sm">
                  {size}x{size}
                </h3>
              </div>
              <div className="col-span-7 sm:col-span-10 grid grid-cols-4 sm:grid-cols-4 gap-1 text-center">
                {levels.map((level) => {
                  return (
                    <RandomLevelButton
                      isNew={false}
                      level={level.id}
                      title={formatHover(level)}
                      key={getHashForLevelId(level.id)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </RootLayout>
  );
};

export default PageGeneratedLevelSizeSelection;
