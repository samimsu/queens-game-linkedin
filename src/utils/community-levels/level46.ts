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
  path: "/community-level/46",
  size: 7,
  colorRegions: [
    ["E", "A", "E", "E", "E", "C", "E"],
    ["A", "A", "E", "F", "E", "C", "C"],
    ["E", "E", "B", "F", "B", "E", "E"],
    ["E", "F", "F", "B", "F", "F", "E"],
    ["E", "E", "F", "E", "F", "E", "E"],
    ["G", "G", "E", "F", "D", "D", "D"],
    ["E", "G", "E", "E", "D", "D", "D"],
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
  solutionsCount: 0,
  createdBy: "Barna",
  creatorLink: "https://github.com/bbenyak",
};

export default level;
