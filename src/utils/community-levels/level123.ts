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
  path: "/community-level/123",
  size: 7,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "B", "B", "A"],
    ["C", "E", "E", "B", "B", "A", "A"],
    ["C", "E", "E", "D", "B", "B", "A"],
    ["E", "E", "D", "D", "D", "F", "F"],
    ["E", "E", "D", "D", "F", "F", "F"],
    ["G", "G", "G", "G", "F", "F", "F"],
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
  solutionsCount: 26,
  createdBy: "Luntz",
  creatorLink: "",
};

export default level;
