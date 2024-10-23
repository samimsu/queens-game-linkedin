import React, { useState } from "react";
import RootLayout from "../../layouts/RootLayout";
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

const colorOptions = [
  { name: "Alto", value: alto },
  { name: "Alto Main", value: altoMain },
  { name: "Anakiwa", value: anakiwa },
  { name: "Bittersweet", value: bittersweet },
  { name: "Can Can", value: canCan },
  { name: "Carnation", value: carnation },
  { name: "Celadon", value: celadon },
  { name: "Chardonnay", value: chardonnay },
  { name: "Cold Purple", value: coldPurple },
  { name: "Feijoa", value: feijoa },
  { name: "Half Baked", value: halfBaked },
  { name: "Light Orchid", value: lightOrchid },
  { name: "Light Wisteria", value: lightWisteria },
  { name: "Mac n Cheese", value: macNCheese },
  { name: "Malibu", value: malibu },
  { name: "Manz", value: manz },
  { name: "Nomad", value: nomad },
  { name: "Sahara Sand", value: saharaSand },
  { name: "Tallow", value: tallow },
  { name: "Turquoise Blue", value: turquoiseBlue },
];

const LevelBuilder = () => {
  const [boardSize, setBoardSize] = useState(7);
  const [levelName, setLevelName] = useState(1);
  const [board, setBoard] = useState(createInitialBoardForBuilder(boardSize));
  const [selectedRegion, setSelectedRegion] = useState("A");

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
      regionKeys.split("").map((key) => [key, initialRegionColors[key]])
    )
  );
  const [jsCode, setJsCode] = useState("");
  const [copied, setCopied] = useState("");
  const [hideRegionValues, setHideRegionValues] = useState(false);

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
          .map((key) => [key, initialRegionColors[key]])
      )
    );
  };

  const handleSquareClick = (row, col) => {
    const currentValue = board[row][col];

    const newBoard = board.map((r, rIdx) =>
      r.map((square, cIdx) => {
        if (rIdx === row && cIdx === col) {
          if (currentValue) {
            return undefined;
          }
          return selectedRegion;
        }
        return square;
      })
    );
    setBoard(newBoard);
  };

  return (
    <RootLayout className="!overflow-auto">
      <div className="mt-2 mx-2 sm:mx-8">
        <h1 className="text-4xl mb-8">Level Builder</h1>

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
                    Clear board
                  </button>
                </div>
                {/* BOARD */}
                <Board
                  size={boardSize}
                  board={board}
                  regionColors={regionColors}
                  handleSquareClick={handleSquareClick}
                  hideRegionValues={hideRegionValues}
                />

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={hideRegionValues}
                    onChange={() => setHideRegionValues((prev) => !prev)}
                  />
                  <label>Hide letters</label>
                </div>
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
    </RootLayout>
  );
};

export default LevelBuilder;
