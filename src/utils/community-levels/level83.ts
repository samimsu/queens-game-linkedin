import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/83",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "D"],
    ["A", "B", "C", "D", "D", "D", "D", "D"],
    ["A", "B", "C", "F", "F", "F", "E", "E"],
    ["A", "B", "C", "F", "F", "G", "G", "G"],
    ["A", "B", "C", "C", "G", "G", "H", "H"],
    ["A", "B", "C", "C", "C", "H", "H", "H"],
    ["A", "B", "B", "C", "C", "C", "C", "H"],
    ["A", "C", "C", "C", "C", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "dumpemout",
  creatorLink: "",
};

export default level;
