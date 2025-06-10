import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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
  colorNames,
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
import LevelBuilderSelector from "./components/LevelBuilderSelector";
import useImageGridProcessing from "../../hooks/useImageGridProcessing";
import PasteImage from "./components/PasteImage";
import { Switch } from "@/components/ui/switch";
import PreviewImage from "./PreviewImage";
import generateLevelJSCode from "@/utils/generateCode";
import Note from "./components/CommunityLevel/Note";
import CreatedByInput from "./components/CommunityLevel/CreatedByInput";
import PersonalLinkInput from "./components/CommunityLevel/PersonalLinkInput";
import SubmitViaSection from "./components/CommunityLevel/SubmitViaSection";
import SubmitButton from "./components/CommunityLevel/SubmitButton";
import TestLevelDialog from "./components/TestLevelDialog";

const LevelBuilder = () => {
  const [levelType, setLevelType] = useState("community");
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

  const [formData, setFormData] = useState({
    levelType: "community",
    createdBy: "",
    personalLink: "",
    level: "",
    submitVia: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const refs = {
    createdBy: useRef(null),
    personalLink: useRef(null),
    level: useRef(null),
  };

  const { t } = useTranslation();

  const isLinkedInLevel = levelType === "linkedin";
  const isCommunityLevel = levelType === "community";

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
    []
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
      regionKeys.split("").map((key) => [key, initialRegionColors[key]])
    )
  );
  const [jsCode, setJsCode] = useState("");
  const [copied, setCopied] = useState("");
  const [copiedEmailDetails, setCopiedEmailDetails] = useState("");
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
    if (newSize > 11 || newSize < 6) return;
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
    if (errors.level) {
      setErrors({
        ...errors,
        level: null,
      });
    }
    const currentValue = board[row][col];
    const newDragValue = currentValue ? undefined : selectedRegion; // Toggle value
    setDragValue(newDragValue);

    const newBoard = board.map((r, rIdx) =>
      r.map((square, cIdx) => {
        if (rIdx === row && cIdx === col) {
          return newDragValue;
        }
        return square;
      })
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
      })
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

  const validateCommunityForm = () => {
    const newErrors = {};
    let firstErrorField = null;

    // Validate required fields
    if (!formData.createdBy.trim()) {
      newErrors.createdBy = "Creator name is required";
      if (!firstErrorField) firstErrorField = "createdBy";
    }

    formData.level = generateLevelJSCode(
      null,
      board,
      regionColors,
      formData.createdBy,
      formData.personalLink
    );

    // Validate board for emptiness, completeness, and color usage
    if (!formData.level.trim()) {
      newErrors.level = "Level content is required";
      if (!firstErrorField) firstErrorField = "level";
    } else {
      // Check if board is empty (all cells are null)
      const isEmpty = board.every((row) =>
        row.every((cell) => {
          return !cell;
        })
      );
      if (isEmpty) {
        newErrors.level = "Board cannot be empty";
        if (!firstErrorField) firstErrorField = "level";
      } else {
        // Check if board is incomplete (contains any null cells)
        const isIncomplete = board.some((row) => row.some((cell) => !cell));
        if (isIncomplete) {
          newErrors.level = "Board must be completely filled with colors";
          if (!firstErrorField) firstErrorField = "level";
        } else {
          // Check if board uses all colors (number of unique regions should equal board size)
          const uniqueRegions = new Set(
            board.flat().filter((cell) => cell !== null)
          );
          const boardSize = board.length; // Assuming rectangular board
          if (uniqueRegions.size !== boardSize) {
            newErrors.level = "Board must use all available colors";
            if (!firstErrorField) firstErrorField = "level";
          }
        }
      }
    }

    // Personal link is optional, but if provided, validate it's a URL
    if (
      formData.personalLink.trim() &&
      !formData.personalLink.startsWith("http")
    ) {
      newErrors.personalLink =
        "Please enter a valid URL (starting with http:// or https://)";
      if (!firstErrorField) firstErrorField = "personalLink";
    }

    setErrors(newErrors);

    // Focus on the first field with an error
    if (firstErrorField && refs[firstErrorField]?.current) {
      setTimeout(() => {
        refs[firstErrorField].current.focus();
        refs[firstErrorField].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleCommunityFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for this field when the user makes changes
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const createEmailEncodedContent = () => {
    const subject = encodeURIComponent(
      `Level Submission: ${formData.levelType} by ${formData.createdBy}`
    );

    let body = encodeURIComponent(
      `Level Type: ${formData.levelType}\n` +
        `Created By: ${formData.createdBy}\n` +
        `Personal Link: ${formData.personalLink}\n\n` +
        `Board:\n${board
          .map((row) => `    [${row.map((cell) => `${cell}`).join(", ")}],`)
          .join("\n")}\n\n` +
        `Colors:\n${Object.entries(regionColors)
          .map(([region, color]) => `${region}: ${colorNames[color]}`)
          .join(", ")}\n\n` +
        `Submitted via: Form Email Submission`
    );

    return `mailto:mohammadsamimsu@gmail.com?subject=${subject}&body=${body}`;
  };

  const createEmailContent = () => {
    const subject = `Level Submission: ${formData.levelType} by ${formData.createdBy}`;

    let body =
      `Level Type: ${formData.levelType}\n` +
      `Created By: ${formData.createdBy}\n` +
      `Personal Link: ${formData.personalLink}\n\n` +
      `Board:\n${board
        .map((row) => `    [${row.map((cell) => `${cell}`).join(", ")}],`)
        .join("\n")}\n\n` +
      `Colors:\n${Object.entries(regionColors)
        .map(([region, color]) => `${region}: ${colorNames[color]}`)
        .join(", ")}\n\n` +
      `Submitted via: Form Email Submission (Copied)`;

    return `To: mohammadsamimsu@gmail.com\n\nSubject: ${subject}\n\nContent:\n\n${body}`;
  };

  const submitToGitHub = async () => {
    const GITHUB_REPO = "samimsu/queens-game-linkedin";

    try {
      setIsSubmitting(true);

      // Create the issue body content
      const issueBody =
        `## Level Submission\n\n` +
        `**Level Type:** ${formData.levelType}\n` +
        `**Created By:** ${formData.createdBy}\n` +
        `**Personal Link:** ${formData.personalLink}\n` +
        `### Level\n\`\`\`\n${formData.level}\n\`\`\``;

      // This would typically use authentication
      // For demonstration purposes, users would need to open the GitHub issue manually
      const issueURL = `https://github.com/${GITHUB_REPO}/discussions/new?category=levels&title=${encodeURIComponent(
        `Level Submission: ${formData.levelType} by ${formData.createdBy}`
      )}&body=${encodeURIComponent(issueBody)}`;

      // Open GitHub issue creation page in a new tab
      window.open(issueURL, "_blank");

      setIsSubmitting(false);
    } catch (error) {
      console.error("Error creating GitHub issue:", error);
      alert(
        "Could not create GitHub issue. Please try again or contact support."
      );
      setIsSubmitting(false);
    }
  };

  const handleCommunityFormSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateCommunityForm()) {
      return; // Don't proceed if validation fails
    }

    if (formData.submitVia === "email") {
      // Create and open mailto link
      window.location.href = createEmailEncodedContent();
    } else if (formData.submitVia === "github") {
      submitToGitHub();
    }
  };

  const handleCopyCommunityLevelEmailDetails = () => {
    // Validate the form
    if (!validateCommunityForm()) {
      return; // Don't proceed if validation fails
    }

    const emailContent = createEmailContent();
    navigator.clipboard.writeText(emailContent).then(
      () => {
        setCopiedEmailDetails(true);
        setTimeout(() => setCopiedEmailDetails(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
        alert("Failed to copy email details. Please try again.");
      }
    );
  };

  // Handle ctrl+v to paste image from clipboard
  useEffect(() => {
    window.addEventListener("keydown", handlePasteByShortcut);
    return () => window.removeEventListener("keydown", handlePasteByShortcut);
  }, []);

  return (
    <div className="mt-2 mx-2 sm:mx-8">
      <h1 className="text-4xl mb-6">{t("LEVEL_BUILDER")}</h1>

      <div className="flex flex-col space-y-2">
        <LevelBuilderSelector
          levelType={levelType}
          setLevelType={setLevelType}
        />

        {isCommunityLevel && <Note />}

        {isLinkedInLevel && (
          <LevelNameInput levelName={levelName} setLevelName={setLevelName} />
        )}

        {isCommunityLevel && (
          <>
            <CreatedByInput
              ref={refs.createdBy}
              value={formData.createdBy}
              onChange={handleCommunityFormInputChange}
              error={errors.createdBy}
            />

            <PersonalLinkInput
              ref={refs.personalLink}
              value={formData.personalLink}
              onChange={handleCommunityFormInputChange}
              error={errors.personalLink}
            />
          </>
        )}

        <div ref={refs.level}>
          <div className="flex flex-col sm:flex-row sm:space-x-8 w-full">
            <div
              className={`flex flex-col-reverse sm:space-y-0 sm:flex-row sm:space-x-8 ${
                isCommunityLevel ? "mt-2" : ""
              }`}
            >
              {/* REGION SELECT */}
              <div className="flex flex-col space-y-2 mb-6 sm:mb-0">
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
                <div className="flex flex-col sm:flex-row sm:space-x-4 justify-between sm:items-center">
                  <BoardSizeInput
                    boardSize={boardSize}
                    handleBoardSizeChange={handleBoardSizeChange}
                  />

                  <div className="flex justify-between space-x-4">
                    <div className="mb-3">
                      <TestLevelDialog
                        disabled={board.some((row) =>
                          row.some((cell) => !cell)
                        )}
                        level={{
                          size: boardSize,
                          colorRegions: board,
                          regionColors: regionColors,
                        }}
                      />
                    </div>
                    <button
                      onClick={() => {
                        setBoard(createInitialBoardForBuilder(boardSize));
                      }}
                      className="border border-slate-500 rounded-full py-1 px-3 mb-3 whitespace-nowrap w-fit self-end"
                    >
                      {t("CLEAR_BOARD")}
                    </button>
                  </div>
                </div>
                {/* BOARD */}
                {errors.level && (
                  <p className="text-red-500 text-xs mb-1">{errors.level}</p>
                )}
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
                      onCheckedChange={() =>
                        setHideRegionValues((prev) => !prev)
                      }
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

            {isLinkedInLevel && (
              <SectionJSCode
                jsCode={jsCode}
                setJsCode={setJsCode}
                copied={copied}
                setCopied={setCopied}
                levelName={levelName}
                board={board}
                regionColors={regionColors}
              />
            )}
          </div>
        </div>

        {/* Submit Via */}
        {isCommunityLevel && (
          <SubmitViaSection
            via={formData.submitVia}
            handleInputChange={handleCommunityFormInputChange}
          />
        )}

        {/* Submit Button */}
        {isCommunityLevel && (
          <SubmitButton
            handleSubmit={handleCommunityFormSubmit}
            isSubmitting={isSubmitting}
            via={formData.submitVia}
            handleCopy={handleCopyCommunityLevelEmailDetails}
            copied={copiedEmailDetails}
          />
        )}
      </div>
    </div>
  );
};

export default LevelBuilder;
