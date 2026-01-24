import { useTranslation } from "react-i18next";
import useLevelBuilderLogic from "@/hooks/useLevelBuilderLogic";
import RegionSelect from "./components/RegionSelect";
import BoardSizeInput from "./components/BoardSizeInput";
import TestLevelDialog from "./components/TestLevelDialog";
import { createInitialBoardForBuilder } from "@/utils/board";
import Board from "./components/Board";
import { Switch } from "@/components/ui/switch";
import PasteImage from "./components/PasteImage";
import PreviewImage from "./components/PreviewImage";

interface BoardSectionProps {
  state: ReturnType<typeof useLevelBuilderLogic>["state"];
  actions: ReturnType<typeof useLevelBuilderLogic>["actions"];
  refs: ReturnType<typeof useLevelBuilderLogic>["refs"];
}

const BoardSection = ({ state, actions, refs }: BoardSectionProps) => {
  const { t } = useTranslation();

  return (
    <div ref={refs.level}>
      <div className="flex flex-col sm:flex-row sm:space-x-8 w-full">
        <div
          className={`flex flex-col-reverse sm:space-y-0 sm:flex-row sm:space-x-8 ${
            state.isCommunityLevel ? "mt-2" : ""
          }`}
        >
          {/* REGION SELECT */}
          <div className="flex flex-col space-y-2 mb-6 sm:mb-0">
            <RegionSelect
              regionColors={state.regionColors}
              selectedRegion={state.selectedRegion}
              colorOptions={state.colorOptions}
              handleColorChange={actions.handleColorChange}
              handleRegionSelect={actions.handleRegionSelect}
            />
          </div>

          {/* BOARD SECTION */}
          <div className="mb-2 sm:mb-0">
            <div className="flex flex-col sm:flex-row sm:space-x-4 justify-between sm:items-center">
              <BoardSizeInput
                boardSize={state.boardSize}
                handleBoardSizeChange={actions.handleBoardSizeChange}
              />

              <div className="flex justify-between space-x-4">
                <div className="mb-3">
                  <TestLevelDialog
                    open={state.isTestDialogOpen}
                    onOpenChange={actions.setIsTestDialogOpen}
                    disabled={state.board.some((row) =>
                      row.some((cell) => !cell),
                    )}
                    level={{
                      size: state.boardSize,
                      colorRegions: state.board,
                      regionColors: state.regionColors,
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    actions.setBoard(
                      createInitialBoardForBuilder(state.boardSize),
                    );
                  }}
                  className="border border-slate-500 rounded-full py-1 px-3 mb-3 whitespace-nowrap w-fit self-end"
                >
                  {t("CLEAR_BOARD")}
                </button>
              </div>
            </div>
            {/* BOARD */}
            {state.errors.level && (
              <p className="text-red-500 text-xs mb-1">{state.errors.level}</p>
            )}
            <Board
              size={state.boardSize}
              board={state.board}
              regionColors={state.regionColors}
              handleSquareClick={actions.handleSquareClick}
              handleSquareMouseEnter={actions.handleDrag}
              handleSquareTouchMove={actions.handleSquareTouchMove}
              hideRegionValues={state.hideRegionValues}
            />

            <div className="flex space-x-3 justify-between mb-2">
              <div className="flex items-center">
                <Switch
                  checked={state.hideRegionValues}
                  onCheckedChange={() =>
                    actions.setHideRegionValues((prev) => !prev)
                  }
                />
                <label
                  className="whitespace-nowrap pl-2"
                  onClick={() => actions.setHideRegionValues((prev) => !prev)}
                >
                  {t("HIDE_LETTERS")}
                </label>
              </div>
              <PasteImage handlePaste={actions.handlePaste} />
            </div>

            {/* Hidden file input */}
            <input
              id="screenshot-upload"
              type="file"
              accept="image/png"
              onChange={actions.handleFileUpload}
              style={{ display: "none" }}
            />

            {state.image && (
              <PreviewImage
                image={state.image}
                verticalLines={state.verticalLines}
                horizontalLines={state.horizontalLines}
                showGridLines={state.showGridLines}
                setShowGridLines={actions.setShowGridLines}
                tolerance={state.tolerance}
                setTolerance={actions.setTolerance}
                minLineHeight={state.minLineHeight}
                setMinLineHeight={actions.setMinLineHeight}
                minLineWidth={state.minLineWidth}
                setMinLineWidth={actions.setMinLineWidth}
                className="w-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardSection;
