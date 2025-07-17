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
  path: "/community-level/147",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "C"],
    ["A", "C", "C", "C", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "B", "B"],
    ["A", "D", "D", "D", "D", "D", "E"],
    ["A", "F", "F", "F", "F", "F", "E"],
    ["A", "F", "F", "G", "G", "G", "E"],
    ["A", "G", "G", "G", "G", "G", "E"],
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
  solutionsCount: 26,
  createdBy: "Sahithi",
  creatorLink: "",
};

export default level;
