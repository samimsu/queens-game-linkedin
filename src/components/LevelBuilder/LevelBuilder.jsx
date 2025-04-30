import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { createInitialBoardForBuilder } from "../../utils/board";
import {
  alto,
  altoMain,
  anakiwa,
  bittersweet,
  canCan,
  carnation,
  celadon,
  chardonnay,
  coldPurple,
  feijoa,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  macNCheese,
  malibu,
  manz,
  nomad,
  saharaSand,
  tallow,
  turquoiseBlue,
} from "../../utils/colors";
import LevelNameInput from "./components/LevelNameInput";
import RegionSelect from "./components/RegionSelect";
import Board from "./components/Board";
import BoardSizeInput from "./components/BoardSizeInput";
import SectionJSCode from "./components/SectionJSCode";
import useImageGridProcessing from "../../hooks/useImageGridProcessing";
import PasteImage from "./components/PasteImage";
import { Switch } from "@/components/ui/switch";
import PreviewImage from "./PreviewImage";
import { useTranslation } from "react-i18next";

const LevelBuilder = () => {
  const [boardSize, setBoardSize] = useState(7);
  const [levelName, setLevelName] = useState(1);
  const [board, setBoard] = useState(createInitialBoardForBuilder(boardSize));
  const [selectedRegion, setSelectedRegion] = useState("A");
  const [image, setImage] = useState(null);
  const [showGridLines, setShowGridLines] = useState(false);
  const [verticalLines, setVerticalLines] = useState([]);
  const [horizontalLines, setHorizontalLines] = useState([]);
  const [tolerance, setTolerance] = useState(10);
  const [minLineHeight, setMinLineHeight] = useState(0.1);
  const [minLineWidth, setMinLineWidth] = useState(0.1);
  const [dragValue, setDragValue] = useState();
  const { t } = useTranslation();

  const colorOptions = useMemo(
    () => [
      { name: t("COLOR.ALTO"), value: alto },
      { name: t("COLOR.ALTO_MAIN"), value: altoMain },
      { name: t("COLOR.ANAKIWA"), value: anakiwa },
      { name: t("COLOR.BITTERSWEET"), value: bittersweet },
      { name: t("COLOR.CAN_CAN"), value: canCan },
      { name: t("COLOR.CARNATION"), value: carnation },
      { name: t("COLOR.CELADON"), value: celadon },
      { name: t("COLOR.CHARDONNAY"), value: chardonnay },
      { name: t("COLOR.COLD_PURPLE"), value: coldPurple },
      { name: t("COLOR.FEIJOA"), value: feijoa },
      { name: t("COLOR.HALF_BAKED"), value: halfBaked },
      { name: t("COLOR.LAVENDER_ROSE"), value: lavenderRose },
      { name: t("COLOR.LIGHT_ORCHID"), value: lightOrchid },
      { name: t("COLOR.LIGHT_WISTERIA"), value: lightWisteria },
      { name: t("COLOR.MAC_N_CHEESE"), value: macNCheese },
      { name: t("COLOR.MALIBU"), value: malibu },
      { name: t("COLOR.MANZ"), value: manz },
      { name: t("COLOR.NOMAD"), value: nomad },
      { name: t("COLOR.SAHARA_SAND"), value: saharaSand },
      { name: t("COLOR.TALLOW"), value: tallow },
      { name: t("COLOR.TURQUOISE_BLUE"), value: turquoiseBlue },
    ],
    [],
  );

  const regionKeys = "ABCDEFGHIJK".slice(0, boardSize);
  const initialRegionColors = {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: turquoiseBlue,
  };

  const [regionColors, setRegionColors] = useState(
    Object.fromEntries(
      regionKeys.split("").map((key) => [key, initialRegionColors[key]]),
    ),
  );
  const [jsCode, setJsCode] = useState("");
  const [copied, setCopied] = useState("");
  const [hideRegionValues, setHideRegionValues] = useState(false);

  useImageGridProcessing({
    setBoardSize,
    setBoard,
    setRegionColors,
    levelImg: image,
    setVerticalLines,
    setHorizontalLines,
    tolerance,
    minLineHeight,
    minLineWidth,
  });

  const handleColorChange = (region, color) => {
    setRegionColors({ ...regionColors, [region]: color });
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleBoardSizeChange = (newSize) => {
    if (newSize > 11 || newSize < 1) return;
    setBoardSize(newSize);
    setBoard(createInitialBoardForBuilder(newSize));

    // Update the regions when board size changes
    const updatedRegionKeys = "ABCDEFGHIJK".slice(0, newSize);
    setRegionColors(
      Object.fromEntries(
        updatedRegionKeys
          .split("")
          .map((key) => [key, initialRegionColors[key]]),
      ),
    );
  };

  const handleSquareClick = (row, col) => {
    const currentValue = board[row][col];
    const newDragValue = currentValue ? undefined : selectedRegion; // Toggle value
    setDragValue(newDragValue);

    const newBoard = board.map((r, rIdx) =>
      r.map((square, cIdx) => {
        if (rIdx === row && cIdx === col) {
          return newDragValue;
        }
        return square;
      }),
    );
    setBoard(newBoard);
  };

  const handleSquareTouchMove = (e) => {
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);

    if (target && target.dataset.row && target.dataset.col) {
      const rowIndex = parseInt(target.dataset.row, 10);
      const colIndex = parseInt(target.dataset.col, 10);

      handleDrag(rowIndex, colIndex);
    }
  };

  const handleDrag = (row, col) => {
    const newBoard = board.map((r, rIdx) =>
      r.map((square, cIdx) => {
        if (rIdx === row && cIdx === col) {
          return dragValue;
        }
        return square;
      }),
    );
    setBoard(newBoard);
  };

  const handlePaste = () => {
    navigator.clipboard.read().then((items) => {
      items.forEach((item) => {
        if (item.types.includes("image/png")) {
          item.getType("image/png").then((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            setImage(imageUrl);
          });
        }
      });
    });
  };

  const handlePasteByShortcut = (event) => {
    if (event.ctrlKey && event.key === "v") {
      handlePaste();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/png") {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Handle ctrl+v to paste image from clipboard
  useEffect(() => {
    window.addEventListener("keydown", handlePasteByShortcut);
    return () => window.removeEventListener("keydown", handlePasteByShortcut);
  }, []);

  return (
    <div className="mt-2 mx-2 sm:mx-8">
      {/* BREADCRUMBS */}
      <div className="text-sm mb-4">
        <Link to="/" className="text-blue-500">
          Home
        </Link>{" "}
        / {t("LEVEL_BUILDER")}
      </div>

      <h1 className="text-4xl mb-6">{t("LEVEL_BUILDER")}</h1>

      <div className="flex flex-col space-y-2">
        <LevelNameInput levelName={levelName} setLevelName={setLevelName} />

        <div className="flex flex-col sm:flex-row sm:space-x-8 w-full">
          <div className="flex flex-col-reverse sm:space-y-0 sm:flex-row sm:space-x-8">
            {/* REGION SELECT */}
            <div className="mb-6 sm:mb-0">
              <RegionSelect
                regionColors={regionColors}
                selectedRegion={selectedRegion}
                colorOptions={colorOptions}
                handleColorChange={handleColorChange}
                handleRegionSelect={handleRegionSelect}
              />
            </div>

            {/* BOARD SECTION */}
            <div className="mb-2 sm:mb-0">
              <div className="flex space-x-4 justify-between items-center">
                <BoardSizeInput
                  boardSize={boardSize}
                  handleBoardSizeChange={handleBoardSizeChange}
                />

                <button
                  onClick={() => {
                    setBoard(createInitialBoardForBuilder(boardSize));
                  }}
                  className="border border-slate-500 rounded-full py-1 px-3 mb-3 whitespace-nowrap"
                >
                  {t("CLEAR_BOARD")}
                </button>
              </div>
              {/* BOARD */}
              <Board
                size={boardSize}
                board={board}
                regionColors={regionColors}
                handleSquareClick={handleSquareClick}
                handleSquareMouseEnter={handleDrag}
                handleSquareTouchMove={handleSquareTouchMove}
                hideRegionValues={hideRegionValues}
              />

              <div className="flex space-x-3 justify-between mb-2">
                <div className="flex items-center">
                  <Switch
                    checked={hideRegionValues}
                    onCheckedChange={() => setHideRegionValues((prev) => !prev)}
                  />
                  <label
                    className="whitespace-nowrap pl-2"
                    onClick={() => setHideRegionValues((prev) => !prev)}
                  >
                    {t("HIDE_LETTERS")}
                  </label>
                </div>
                <PasteImage handlePaste={handlePaste} />
              </div>

              {/* Hidden file input */}
              <input
                id="screenshot-upload"
                type="file"
                accept="image/png"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />

              {image && (
                <PreviewImage
                  image={image}
                  verticalLines={verticalLines}
                  horizontalLines={horizontalLines}
                  showGridLines={showGridLines}
                  setShowGridLines={setShowGridLines}
                  tolerance={tolerance}
                  setTolerance={setTolerance}
                  minLineHeight={minLineHeight}
                  setMinLineHeight={setMinLineHeight}
                  minLineWidth={minLineWidth}
                  setMinLineWidth={setMinLineWidth}
                  className="w-full"
                />
              )}
            </div>
          </div>

          <SectionJSCode
            jsCode={jsCode}
            setJsCode={setJsCode}
            copied={copied}
            setCopied={setCopied}
            levelName={levelName}
            board={board}
            regionColors={regionColors}
          />
        </div>
      </div>
    </div>
  );
};

export default LevelBuilder;
