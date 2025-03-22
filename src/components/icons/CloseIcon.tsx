import React from "react";

type CloseIconProps = {};

const CloseIcon: React.FC<CloseIconProps> = () => {
  return (
    <svg
      role="none"
      aria-hidden="true"
      className="artdeco-button__icon "
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      data-test-icon="chevron-down-small"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="close-medium"
        aria-hidden="true"
        role="none"
        data-supported-dps="24x24"
        fill="currentColor"
      >
        <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
      </svg>
    </svg>
  );
};

export default CloseIcon;
