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
  path: "/community-level/309",
  size: 7,
  colorRegions: [
    ["A", "B", "B", "C", "C", "C", "C"],
    ["A", "A", "B", "D", "D", "D", "D"],
    ["A", "A", "B", "B", "D", "D", "D"],
    ["G", "G", "G", "G", "G", "D", "D"],
    ["G", "G", "G", "G", "G", "D", "D"],
    ["G", "E", "F", "G", "G", "G", "D"],
    ["E", "E", "F", "G", "G", "G", "G"],
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
  createdBy: "Yoyo",
  creatorLink: "",
};

export default level;
