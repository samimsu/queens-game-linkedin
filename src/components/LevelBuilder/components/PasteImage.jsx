import React, { useEffect, useRef, useState } from "react";
import QuestionIcon from "@/components/icons/QuestionIcon";
import { useTranslation } from "react-i18next";

const PasteImage = ({ handlePaste }) => {
  const [showHelperText, setShowHelperText] = useState(false);

  const helperButtonRef = useRef(null);
  const helperTextRef = useRef(null);

  const { t } = useTranslation();

  const handleClickOutside = (event) => {
    if (
      helperTextRef.current &&
      !helperTextRef.current.contains(event.target) &&
      helperButtonRef.current &&
      !helperButtonRef.current.contains(event.target)
    ) {
      setShowHelperText(false);
    }
  };

  useEffect(() => {
    if (showHelperText) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHelperText]);
  return (
    <div className="flex items-center space-x-2">
      <button onClick={handlePaste}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
        </svg>
      </button>
      <div className="relative flex">
        <button
          ref={helperButtonRef}
          onClick={() => setShowHelperText((prev) => !prev)}
        >
          <QuestionIcon />
        </button>
        {showHelperText && (
          <span
            ref={helperTextRef}
            className="absolute top-5 right-0 text-xs min-w-40 bg-white p-2 border-2 rounded border-slate-300"
          >
            {t("PAST_IMAGE_MSG")}
          </span>
        )}
      </div>
    </div>
  );
};

export default PasteImage;
