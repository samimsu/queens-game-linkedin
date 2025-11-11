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
  path: "/community-level/338",
  size: 7,
  colorRegions: [
    ["A", "A", "F", "F", "F", "F", "F"],
    ["A", "A", "B", "F", "F", "F", "F"],
    ["E", "B", "B", "C", "F", "F", "F"],
    ["E", "B", "C", "C", "E", "G", "F"],
    ["E", "E", "C", "E", "E", "G", "F"],
    ["E", "E", "E", "E", "E", "G", "F"],
    ["D", "D", "D", "D", "E", "G", "G"],
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
  createdBy: "Djoule",
  creatorLink: "",
};

export default level;
