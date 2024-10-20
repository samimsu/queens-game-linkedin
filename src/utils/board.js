// Helper function to create an empty board
export const createEmptyBoard = (size) => {
  return Array(size)
    .fill(null)
    .map(() => Array(size).fill(null)); // Create an empty board based on the size parameter
};

export const createInitialBoardForBuilder = (size, fill) => {
  return Array(size)
    .fill(fill)
    .map(() => Array(size).fill(fill)); // Create an empty board based on the size parameter
};
