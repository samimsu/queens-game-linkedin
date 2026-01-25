import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { createInitialBoardForBuilder } from "@/utils/board";
import generateLevelJSCode from "@/utils/generateCode";
import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  colorNames,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "@/utils/colors";
import useImageGridProcessing from "@/hooks/useImageGridProcessing";

const useLevelBuilderLogic = () => {
  const [levelType, setLevelType] = useState<"community">("community");
  const [boardSize, setBoardSize] = useState(7);
  const [board, setBoard] = useState(createInitialBoardForBuilder(boardSize));
  const [selectedRegion, setSelectedRegion] = useState("A");
  const [image, setImage] = useState<string | null>(null);
  const [showGridLines, setShowGridLines] = useState(false);
  const [verticalLines, setVerticalLines] = useState<number[]>([]);
  const [horizontalLines, setHorizontalLines] = useState<number[]>([]);
  const [tolerance, setTolerance] = useState(10);
  const [minLineHeight, setMinLineHeight] = useState(0.1);
  const [minLineWidth, setMinLineWidth] = useState(0.1);
  const [dragValue, setDragValue] = useState<string | undefined>();
  const [isTestDialogOpen, setIsTestDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    levelType: "community",
    createdBy: "",
    personalLink: "",
    level: "",
    submitVia: "email",
    singleSolution: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const refs = {
    createdBy: useRef<HTMLInputElement>(null),
    personalLink: useRef<HTMLInputElement>(null),
    level: useRef<HTMLDivElement>(null),
    singleSolution: useRef<HTMLInputElement>(null),
  };

  const { t } = useTranslation();

  const isCommunityLevel = levelType === "community";

  const colorOptions = useMemo(
    () => [
      { name: t("COLOR.ALTO"), value: altoMain },
      { name: t("COLOR.ANAKIWA"), value: anakiwa },
      { name: t("COLOR.BITTERSWEET"), value: bittersweet },
      { name: t("COLOR.CELADON"), value: celadon },
      { name: t("COLOR.CHARDONNAY"), value: chardonnay },
      { name: t("COLOR.HALF_BAKED"), value: halfBaked },
      { name: t("COLOR.LAVENDER_ROSE"), value: lavenderRose },
      { name: t("COLOR.LIGHT_ORCHID"), value: lightOrchid },
      { name: t("COLOR.LIGHT_WISTERIA"), value: lightWisteria },
      { name: t("COLOR.NOMAD"), value: nomad },
      { name: t("COLOR.SAHARA_SAND"), value: saharaSand },
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
  } as const;

  const [regionColors, setRegionColors] = useState<
    Record<string, keyof typeof colorNames>
  >(
    Object.fromEntries(
      regionKeys
        .split("")
        .map((key) => [
          key,
          initialRegionColors[key as keyof typeof initialRegionColors],
        ]),
    ),
  );
  const [copiedEmailDetails, setCopiedEmailDetails] = useState(false);
  const [hideRegionValues, setHideRegionValues] = useState(false);

  const handleColorChange = (
    region: string,
    color: keyof typeof colorNames,
  ) => {
    setRegionColors({ ...regionColors, [region]: color });
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  const handleBoardSizeChange = (newSize: number) => {
    if (newSize > 11 || newSize < 6) return;
    setBoardSize(newSize);
    setBoard(createInitialBoardForBuilder(newSize));

    // Update the regions when board size changes
    const updatedRegionKeys = "ABCDEFGHIJK".slice(0, newSize);
    setRegionColors(
      Object.fromEntries(
        updatedRegionKeys
          .split("")
          .map((key) => [
            key,
            initialRegionColors[key as keyof typeof initialRegionColors],
          ]),
      ),
    );
  };

  const handleSquareClick = (row: number, col: number) => {
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
      }),
    );
    setBoard(newBoard);
  };

  const handleSquareTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const target = document.elementFromPoint(
      touch.clientX,
      touch.clientY,
    ) as HTMLElement;

    if (target && target.dataset.row && target.dataset.col) {
      const rowIndex = parseInt(target.dataset.row, 10);
      const colIndex = parseInt(target.dataset.col, 10);

      handleDrag(rowIndex, colIndex);
    }
  };

  const handleDrag = (row: number, col: number) => {
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

  const handlePasteByShortcut = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "v") {
      handlePaste();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type === "image/png") {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const validateCommunityForm = async (submitVia?: "email" | "github") => {
    const newErrors: { [key: string]: string } = {};
    let firstErrorField: keyof typeof refs | null = null;

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
      formData.personalLink,
      undefined,
      submitVia,
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
        }),
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
            board.flat().filter((cell) => cell !== null),
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

    // Validate single solution checkbox
    if (!formData.singleSolution) {
      newErrors.singleSolution =
        "You must confirm that the level has a single solution";
      if (!firstErrorField) firstErrorField = "singleSolution";
    }

    setErrors(newErrors);

    if (firstErrorField) {
      // Now TS knows firstErrorField is definitely a string key here
      const targetElement = refs[firstErrorField].current;

      if (targetElement) {
        setTimeout(() => {
          targetElement.focus();
          targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleCommunityFormInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, type, checked, value } = e.target;

    const finalValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: finalValue,
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
      `Level Submission: ${formData.levelType} by ${formData.createdBy}`,
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
        `Submitted via: Form Email Submission`,
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
    const GITHUB_REPO = "samimsu/queens-game";

    try {
      setIsSubmitting(true);

      // Create the issue body content
      const discussionBody =
        `## Level Submission\n\n` +
        `**Level Type:** ${formData.levelType}\n` +
        `**Created By:** ${formData.createdBy}\n` +
        `**Personal Link:** ${formData.personalLink}\n` +
        `### Level\n\`\`\`\n${formData.level}\n\`\`\``;

      const discussionURL = `https://github.com/${GITHUB_REPO}/discussions/new?category=levels&title=${encodeURIComponent(
        `Level Submission: ${formData.levelType} by ${formData.createdBy}`,
      )}&body=${encodeURIComponent(discussionBody)}`;

      // Open GitHub discussion creation page in a new tab
      window.open(discussionURL, "_blank");

      setIsSubmitting(false);
    } catch (error) {
      console.error("Error creating GitHub issue:", error);
      alert(
        "Could not create GitHub issue. Please try again or contact support.",
      );
      setIsSubmitting(false);
    }
  };

  const handleCommunityFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isViaEmail = formData.submitVia === "email";
    const isViaGitHub = formData.submitVia === "github";
    const submitVia = isViaEmail ? "email" : isViaGitHub ? "github" : undefined;

    const validateForm = await validateCommunityForm(submitVia);

    // Validate the form
    // if (!validateCommunityForm(submitVia)) {
    if (!validateForm) {
      return; // Don't proceed if validation fails
    }

    if (isViaEmail) {
      // Create and open mailto link
      window.location.href = createEmailEncodedContent();
    } else if (isViaGitHub) {
      submitToGitHub();
    }
  };

  const handleCopyCommunityLevelEmailDetails = async () => {
    const validateForm = await validateCommunityForm();

    // Validate the form
    if (!validateForm) {
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
      },
    );
  };

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

  // Handle ctrl+v to paste image from clipboard
  useEffect(() => {
    window.addEventListener("keydown", handlePasteByShortcut);
    return () => window.removeEventListener("keydown", handlePasteByShortcut);
  }, []);

  return {
    state: {
      board,
      boardSize,
      regionColors,
      formData,
      errors,
      isSubmitting,
      levelType,
      selectedRegion,
      image,
      tolerance,
      minLineHeight,
      minLineWidth,
      isCommunityLevel,
      colorOptions,
      isTestDialogOpen,
      hideRegionValues,
      verticalLines,
      horizontalLines,
      showGridLines,
      copiedEmailDetails,
      initialRegionColors,
    },
    actions: {
      handleSquareClick,
      handleBoardSizeChange,
      handleCommunityFormSubmit,
      handlePaste,
      setLevelType,
      setBoard,
      setBoardSize,
      setSelectedRegion,
      setImage,
      setFormData,
      setRegionColors,
      setVerticalLines,
      setHorizontalLines,
      handleCommunityFormInputChange,
      handleColorChange,
      handleRegionSelect,
      setIsTestDialogOpen,
      handleDrag,
      handleSquareTouchMove,
      setHideRegionValues,
      handleFileUpload,
      setShowGridLines,
      setTolerance,
      setMinLineHeight,
      setMinLineWidth,
      handleCopyCommunityLevelEmailDetails,
    },
    refs,
  };
};

export default useLevelBuilderLogic;
