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
  path: "/community-level/71",
  size: 8,
  colorRegions: [
    ["A", "E", "E", "E", "E", "E", "E", "E"],
    ["A", "H", "H", "H", "H", "H", "H", "E"],
    ["A", "C", "C", "C", "H", "H", "H", "E"],
    ["A", "C", "F", "F", "B", "H", "H", "E"],
    ["A", "C", "F", "F", "F", "F", "G", "E"],
    ["A", "C", "C", "C", "G", "G", "G", "E"],
    ["A", "D", "D", "D", "G", "G", "G", "E"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
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
  solutionsCount: 1,
  createdBy: "RachD",
  creatorLink: "",
};

export default level;
