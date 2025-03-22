import React from "react";

type CollapseIconProps = {
  isCollapsed: boolean;
};

const CollapseIcon: React.FC<CollapseIconProps> = ({ isCollapsed }) => {
  return (
    <svg
      role="none"
      aria-hidden="true"
      class="artdeco-button__icon "
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      data-test-icon="chevron-down-small"
    >
      {isCollapsed ? (
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          id="chevron-down-small"
          aria-hidden="true"
          role="none"
          data-supported-dps="16x16"
          fill="currentColor"
        >
          <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          id="chevron-up-small"
          aria-hidden="true"
          role="none"
          data-supported-dps="16x16"
          fill="currentColor"
        >
          <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
        </svg>
      )}
    </svg>
  );
};

export default CollapseIcon;
