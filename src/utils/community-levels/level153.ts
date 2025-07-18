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
  path: "/community-level/153",
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C"],
    ["A", "D", "D", "B", "F", "F", "C"],
    ["A", "D", "E", "E", "F", "G", "G"],
    ["A", "D", "E", "E", "F", "G", "G"],
    ["D", "D", "E", "F", "F", "F", "G"],
    ["D", "D", "E", "F", "F", "F", "G"],
    ["D", "D", "E", "F", "F", "G", "G"],
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
  solutionsCount: 18,
  createdBy: "Pmgpires",
  creatorLink: "",
};

export default level;
