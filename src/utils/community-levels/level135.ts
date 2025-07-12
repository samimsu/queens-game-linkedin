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
  path: "/community-level/135",
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "B", "B", "B"],
    ["G", "C", "E", "D", "D", "E", "F"],
    ["G", "C", "E", "E", "E", "E", "F"],
    ["G", "G", "F", "E", "F", "F", "F"],
    ["G", "F", "F", "F", "F", "F", "F"],
    ["G", "G", "F", "F", "F", "F", "F"],
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
  solutionsCount: 4,
  createdBy: "PavelMG",
  creatorLink: "https://github.com/PavelMGs",
};

export default level;
