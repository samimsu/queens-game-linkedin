import { useEffect, useState } from "react";

const useGridSize = (boardSize: number, variant?: "large" | "small") => {
  let gridSizes = {
    extraSmallScreen: {
      8: "45px",
      9: "40px",
      10: "35px",
      11: "33px",
      12: "30px",
    },
    smallScreen: {
      8: "47px",
      9: "43px",
      10: "37px",
      11: "35px",
      12: "33px",
    },
    largeScreen: "50px",
  };

  if (variant === "small") {
    gridSizes = {
      extraSmallScreen: {
        8: "43px",
        9: "38px",
        10: "33px",
        11: "30px",
        12: "27px",
      },
      smallScreen: {
        8: "47px",
        9: "43px",
        10: "37px",
        11: "35px",
        12: "32px",
      },
      largeScreen: "50px",
    };
  }

  const extraSmallScreenGridSize =
    boardSize < 8
      ? gridSizes.extraSmallScreen[8]
      : boardSize < 9
      ? gridSizes.extraSmallScreen[9]
      : boardSize < 10
      ? gridSizes.extraSmallScreen[10]
      : boardSize < 11
      ? gridSizes.extraSmallScreen[11]
      : gridSizes.extraSmallScreen[12];
  const smallScreenGridSize =
    boardSize < 8
      ? gridSizes.smallScreen[8]
      : boardSize < 9
      ? gridSizes.smallScreen[9]
      : boardSize < 10
      ? gridSizes.smallScreen[10]
      : boardSize < 11
      ? gridSizes.smallScreen[11]
      : gridSizes.smallScreen[12];

  const largeScreenGridSize = gridSizes.largeScreen;

  const getInitialGridSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 480) {
      return largeScreenGridSize; // For larger screens (>= 480px)
    } else if (windowWidth >= 345) {
      return smallScreenGridSize; // For smaller screens (>= 345px but < 480px)
    } else {
      return extraSmallScreenGridSize; // For extra small screens (< 345px)
    }
  };

  const [gridSize, setGridSize] = useState(getInitialGridSize);

  useEffect(() => {
    // Media query lists for different screen widths
    const largeScreenQuery = window.matchMedia("(min-width: 480px)");
    const smallScreenQuery = window.matchMedia(
      "(min-width: 345px) and (max-width: 479px)"
    );
    const extraSmallScreenQuery = window.matchMedia("(max-width: 344px)");

    // Function to handle screen width changes
    const handleResize = () => {
      if (largeScreenQuery.matches) {
        setGridSize(largeScreenGridSize);
      } else if (smallScreenQuery.matches) {
        setGridSize(smallScreenGridSize);
      } else if (extraSmallScreenQuery.matches) {
        setGridSize(extraSmallScreenGridSize);
      }
    };

    // Add listeners to handle screen width changes
    largeScreenQuery.addEventListener("change", handleResize);
    smallScreenQuery.addEventListener("change", handleResize);
    extraSmallScreenQuery.addEventListener("change", handleResize);

    // Also trigger on initial mount and when boardSize changes
    handleResize();

    // Cleanup event listeners on component unmount
    return () => {
      largeScreenQuery.removeEventListener("change", handleResize);
      smallScreenQuery.removeEventListener("change", handleResize);
      extraSmallScreenQuery.removeEventListener("change", handleResize);
    };
  }, [boardSize]);

  return { gridSize };
};

export default useGridSize;
