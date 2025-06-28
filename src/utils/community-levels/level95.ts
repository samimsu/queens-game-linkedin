import {
  alto,
  altoMain,
  bittersweet,
  carnation,
  celadon,
  feijoa,
  nomad,
  tallow,
} from "../colors";

const level = {
  path: "/community-level/95",
  size: 8,
  colorRegions: [
    ["A", "A", "D", "D", "D", "D", "D", "D"],
    ["C", "A", "B", "B", "B", "B", "D", "D"],
    ["C", "A", "A", "E", "B", "E", "F", "D"],
    ["C", "C", "E", "E", "B", "F", "F", "D"],
    ["C", "C", "E", "B", "B", "F", "E", "D"],
    ["C", "G", "G", "B", "H", "G", "G", "G"],
    ["G", "G", "G", "B", "H", "H", "H", "G"],
    ["H", "G", "B", "B", "B", "B", "H", "G"],
  ],
  regionColors: {
    A: alto,
    B: altoMain,
    C: bittersweet,
    D: carnation,
    E: celadon,
    F: feijoa,
    G: nomad,
    H: tallow,
  },
  solutionsCount: 45,
  createdBy: "jsikali",
  creatorLink: "https://github.com/jsikali",
};

export default level;
