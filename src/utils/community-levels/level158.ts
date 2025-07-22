import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/158",
  size: 7,
  colorRegions: [
    ["E", "D", "C", "G", "A", "F", "B"],
    ["C", "F", "E", "B", "D", "G", "A"],
    ["D", "G", "A", "E", "C", "B", "E"],
    ["C", "B", "C", "D", "F", "A", "G"],
    ["G", "A", "F", "E", "B", "C", "D"],
    ["B", "C", "D", "A", "F", "E", "F"],
    ["A", "E", "B", "F", "G", "D", "C"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "ITShchen",
  creatorLink: "https://www.linkedin.com/in/itshchen",
};

export default level;
