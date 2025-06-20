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
  path: "/community-level/77",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F"],
    ["B", "A", "G", "G", "G", "G", "F"],
    ["B", "A", "A", "G", "G", "G", "F"],
    ["B", "C", "A", "A", "G", "G", "F"],
    ["B", "C", "D", "A", "A", "F", "F"],
    ["B", "C", "D", "E", "A", "A", "A"],
    ["B", "C", "D", "E", "E", "E", "A"],
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
  createdBy: "PeroN",
  creatorLink: "https://github.com/peroellanoesr",
};

export default level;
