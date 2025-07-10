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
  path: "/community-level/125",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "D", "D", "D"],
    ["B", "B", "B", "A", "D", "D", "D"],
    ["E", "C", "B", "A", "D", "D", "D"],
    ["E", "C", "B", "F", "F", "F", "F"],
    ["E", "C", "B", "G", "G", "G", "F"],
    ["E", "C", "C", "C", "G", "G", "F"],
    ["E", "E", "E", "E", "E", "G", "F"],
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
  solutionsCount: 56,
  createdBy: "Sue",
  creatorLink: "",
};

export default level;
