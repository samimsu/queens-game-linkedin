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
  path: "/community-level/362",
  size: 7,
  colorRegions: [
    ["E", "D", "D", "F", "F", "F", "F"],
    ["E", "E", "D", "G", "G", "G", "G"],
    ["E", "E", "G", "G", "G", "G", "G"],
    ["E", "E", "G", "G", "A", "G", "G"],
    ["E", "E", "G", "G", "G", "G", "G"],
    ["B", "B", "B", "B", "B", "C", "G"],
    ["B", "B", "C", "C", "C", "C", "G"],
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
  createdBy: "Wigner_nc",
  creatorLink: "",
};

export default level;
