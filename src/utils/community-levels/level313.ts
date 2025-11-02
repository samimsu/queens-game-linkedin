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
  path: "/community-level/313",
  size: 7,
  colorRegions: [
    ["C", "C", "C", "C", "F", "F", "F"],
    ["C", "C", "C", "F", "F", "F", "F"],
    ["G", "G", "G", "G", "F", "F", "F"],
    ["G", "A", "A", "A", "F", "F", "F"],
    ["G", "A", "A", "D", "E", "E", "E"],
    ["G", "A", "A", "D", "D", "B", "E"],
    ["G", "A", "A", "D", "D", "B", "E"],
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
  createdBy: "alfafely",
  creatorLink: "",
};

export default level;
