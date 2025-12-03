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
  path: "/community-level/372",
  size: 7,
  colorRegions: [
    ["E", "F", "F", "F", "B", "B", "B"],
    ["E", "E", "E", "F", "B", "F", "B"],
    ["E", "C", "E", "F", "B", "F", "B"],
    ["E", "C", "E", "F", "F", "F", "D"],
    ["A", "A", "A", "F", "D", "D", "D"],
    ["A", "F", "F", "F", "D", "G", "D"],
    ["A", "F", "F", "D", "D", "G", "G"],
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
  createdBy: "IR=",
  creatorLink: "",
};

export default level;
