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
  path: "/community-level/175",
  size: 7,
  colorRegions: [
    ["A", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "D", "D", "G", "G", "G"],
    ["A", "A", "A", "D", "G", "G", "G"],
    ["A", "A", "A", "D", "E", "G", "G"],
    ["A", "A", "A", "D", "F", "F", "F"],
    ["A", "A", "D", "D", "F", "B", "F"],
    ["A", "B", "B", "B", "B", "B", "B"],
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
  createdBy: "Dr78",
  creatorLink: "",
};

export default level;
