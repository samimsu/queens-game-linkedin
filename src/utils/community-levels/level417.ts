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
  path: "/community-level/417",
  size: 7,
  colorRegions: [
    ["A", "C", "E", "E", "E", "E", "E"],
    ["A", "C", "E", "E", "E", "F", "E"],
    ["A", "C", "B", "B", "E", "F", "F"],
    ["A", "C", "B", "B", "G", "F", "F"],
    ["A", "C", "C", "C", "G", "F", "F"],
    ["A", "D", "D", "D", "D", "F", "F"],
    ["A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "Synchrotron",
  creatorLink: "",
};

export default level;
