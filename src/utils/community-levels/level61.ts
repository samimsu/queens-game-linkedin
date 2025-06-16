import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/61",
  size: 8,
  colorRegions: [
    ["A", "C", "C", "E", "E", "E", "E", "E"],
    ["A", "A", "C", "E", "F", "F", "F", "F"],
    ["A", "A", "C", "E", "F", "F", "F", "F"],
    ["A", "A", "C", "E", "G", "G", "H", "H"],
    ["D", "D", "C", "C", "C", "G", "G", "H"],
    ["D", "B", "B", "B", "C", "G", "H", "H"],
    ["D", "B", "B", "B", "C", "H", "H", "H"],
    ["D", "D", "D", "D", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
  solutionsCount: 257,
  createdBy: "7arms",
  creatorLink: "",
};

export default level;
