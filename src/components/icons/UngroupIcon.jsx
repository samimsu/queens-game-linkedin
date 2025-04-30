import React from "react";

const UngroupIcon = ({ size = "24" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2H20C21.1 2 22 2.9 22 4V12C22 13.1 21.1 14 20 14H12C10.9 14 10 13.1 10 12V4C10 2.9 10.9 2 12 2ZM12 12H20V4H12V12Z"
      />
      <path d="M4 10H8V12H4V20H12V16H14V20C14 21.1 13.1 22 12 22H4C2.9 22 2 21.1 2 20V12C2 10.9 2.9 10 4 10Z" />
    </svg>
  );
};

export default UngroupIcon;
