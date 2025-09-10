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
  path: "/community-level/257",
  size: 7,
  colorRegions: [
    ["F", "B", "B", "A", "F", "A", "G"],
    ["B", "G", "G", "G", "G", "G", "G"],
    ["B", "G", "C", "C", "F", "F", "F"],
    ["E", "G", "E", "E", "F", "F", "F"],
    ["D", "G", "E", "E", "F", "E", "F"],
    ["D", "G", "C", "C", "G", "E", "G"],
    ["E", "D", "D", "D", "C", "C", "G"],
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
  createdBy: "EliaL",
  creatorLink: "",
};

export default level;
