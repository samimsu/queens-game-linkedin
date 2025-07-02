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
  path: "/community-level/104",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "B", "B", "B", "D", "D"],
    ["A", "A", "D", "D", "D", "D", "D"],
    ["E", "E", "D", "D", "D", "D", "D"],
    ["F", "E", "E", "E", "G", "G", "G"],
    ["F", "E", "E", "E", "G", "G", "G"],
    ["F", "F", "G", "G", "G", "G", "G"],
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
  solutionsCount: 26,
  createdBy: "arun",
  creatorLink: "https://github.com/ravishankardatalogy",
};

export default level;
