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
  path: "/community-level/308",
  size: 7,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B"],
    ["B", "A", "A", "A", "A", "G", "G"],
    ["A", "A", "A", "A", "A", "D", "G"],
    ["A", "A", "A", "D", "A", "D", "G"],
    ["E", "A", "A", "D", "D", "D", "D"],
    ["E", "E", "E", "C", "D", "D", "F"],
    ["E", "E", "E", "C", "C", "F", "F"],
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
  createdBy: "adrienlan",
  creatorLink: "",
};

export default level;
