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
  path: "/community-level/47",
  size: 7,
  colorRegions: [
    ["A", "B", "B", "E", "E", "F", "F"],
    ["A", "A", "B", "B", "E", "F", "F"],
    ["A", "A", "B", "G", "E", "F", "F"],
    ["C", "C", "B", "G", "E", "F", "F"],
    ["C", "D", "D", "G", "E", "F", "F"],
    ["C", "D", "D", "G", "E", "E", "E"],
    ["C", "C", "D", "G", "G", "G", "E"],
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
  solutionsCount: 3,
  createdBy: "Lekan",
  creatorLink: "",
};

export default level;
