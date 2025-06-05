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
  path: "/community-level/12",
  size: 7,
  colorRegions: [
    ["A", "C", "C", "C", "C", "G", "G"],
    ["A", "B", "B", "C", "D", "G", "G"],
    ["A", "A", "B", "D", "D", "D", "D"],
    ["B", "B", "B", "D", "F", "D", "D"],
    ["E", "D", "D", "D", "F", "F", "D"],
    ["E", "F", "F", "F", "F", "F", "F"],
    ["E", "E", "E", "E", "E", "F", "F"],
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
  solutionsCount: 4,
  createdBy: "Hewannnn",
  creatorLink: "https://github.com/SindhuLie",
};

export default level;
