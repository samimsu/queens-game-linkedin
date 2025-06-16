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
  path: "/community-level/60",
  size: 7,
  colorRegions: [
    ["C", "C", "A", "B", "B", "B", "B"],
    ["C", "C", "A", "E", "B", "B", "B"],
    ["C", "C", "A", "E", "E", "B", "B"],
    ["C", "D", "A", "E", "E", "E", "B"],
    ["C", "D", "A", "A", "A", "A", "A"],
    ["D", "D", "A", "F", "F", "F", "G"],
    ["D", "D", "A", "G", "G", "G", "G"],
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
  solutionsCount: 29,
  createdBy: "Speed_Solver",
  creatorLink: "",
};

export default level;
