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
  path: "/community-level/451",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "E", "G", "G"],
    ["E", "A", "E", "F", "G", "G", "G"],
    ["E", "E", "E", "F", "G", "G", "C"],
    ["D", "F", "E", "F", "F", "G", "C"],
    ["D", "F", "F", "F", "F", "G", "C"],
    ["D", "D", "D", "D", "C", "C", "C"],
    ["D", "D", "D", "D", "C", "B", "C"],
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
  createdBy: "juli",
  creatorLink: "",
};

export default level;
