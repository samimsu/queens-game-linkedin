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
  path: "/community-level/285",
  size: 7,
  colorRegions: [
    ["G", "C", "C", "C", "C", "C", "A"],
    ["G", "C", "G", "G", "C", "C", "A"],
    ["G", "C", "G", "A", "A", "A", "A"],
    ["G", "G", "G", "A", "D", "D", "B"],
    ["G", "E", "E", "A", "D", "D", "B"],
    ["G", "F", "E", "A", "B", "B", "B"],
    ["G", "E", "E", "E", "E", "E", "E"],
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
  createdBy: "Sol",
  creatorLink: "",
};

export default level;
