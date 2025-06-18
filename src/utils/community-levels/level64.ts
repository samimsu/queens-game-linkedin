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
  path: "/community-level/64",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "G"],
    ["A", "F", "D", "D", "D", "D", "G"],
    ["A", "F", "D", "F", "E", "E", "G"],
    ["A", "F", "F", "F", "E", "E", "G"],
    ["A", "C", "C", "B", "B", "B", "G"],
    ["A", "C", "C", "C", "B", "B", "G"],
    ["A", "G", "G", "G", "G", "G", "G"],
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
  solutionsCount: 10,
  createdBy: "qween22",
  creatorLink: "",
};

export default level;
