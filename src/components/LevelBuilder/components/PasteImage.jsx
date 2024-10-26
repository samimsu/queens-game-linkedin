import React, { useEffect, useRef, useState } from "react";

const PasteImage = ({ handlePaste }) => {
  const [showHelperText, setShowHelperText] = useState(false);

  const helperButtonRef = useRef(null);
  const helperTextRef = useRef(null);

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
      <button onClick={handlePaste} title="helloworld">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
          </svg>
        </button>
        {showHelperText && (
          <span
            ref={helperTextRef}
            className="absolute top-5 right-0 text-xs min-w-40 bg-white p-2 border-2 rounded border-slate-300"
          >
            Try pasting an image. The bigger and as specific the image, the
            better.
          </span>
        )}
      </div>
    </div>
  );
};

export default PasteImage;
