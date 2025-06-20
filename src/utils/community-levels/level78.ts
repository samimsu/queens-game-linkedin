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
  path: "/community-level/78",
  size: 7,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "A", "G", "G", "C"],
    ["D", "A", "A", "G", "B", "G", "C"],
    ["D", "D", "A", "G", "G", "G", "C"],
    ["D", "D", "D", "D", "G", "G", "C"],
    ["D", "E", "E", "E", "E", "E", "C"],
    ["D", "F", "E", "E", "E", "E", "C"],
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
  createdBy: "PradIsBad",
  creatorLink: "",
};

export default level;
