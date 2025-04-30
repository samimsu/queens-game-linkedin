import { useEffect, useState } from "react";

const useGridSize = (boardSize: number) => {
  const extraSmallScreenGridSize =
    boardSize < 8
      ? "45px"
      : boardSize < 9
      ? "40px"
      : boardSize < 10
      ? "35px"
      : boardSize < 11
      ? "33px"
      : "30px";
  const smallScreenGridSize =
    boardSize < 8
      ? "47px"
      : boardSize < 9
      ? "43px"
      : boardSize < 10
      ? "37px"
      : boardSize < 11
      ? "35px"
      : "33px";

  const largeScreenGridSize = "50px";

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
