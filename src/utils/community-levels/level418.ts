import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/418",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "D", "D", "D"],
    ["A", "A", "B", "A", "C", "D", "D"],
    ["C", "C", "C", "C", "C", "D", "D"],
    ["E", "E", "E", "E", "E", "E", "D"],
    ["E", "E", "E", "E", "E", "D", "D"],
    ["E", "E", "E", "F", "F", "F", "F"],
    ["G", "G", "G", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "nivveyy",
  creatorLink: "",
};

export default level;
