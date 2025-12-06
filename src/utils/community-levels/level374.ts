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
  path: "/community-level/374",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["G", "B", "C", "D", "E", "F", "A"],
    ["F", "A", "A", "A", "A", "G", "A"],
    ["E", "A", "F", "B", "A", "B", "A"],
    ["D", "A", "G", "E", "D", "C", "A"],
    ["C", "A", "A", "A", "A", "A", "A"],
    ["B", "G", "F", "E", "D", "C", "B"],
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
  createdBy: "tcjazwei",
  creatorLink: "",
};

export default level;
