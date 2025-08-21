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
  path: "/community-level/207",
  size: 8,
  colorRegions: [
    ["A", "H", "H", "H", "H", "A", "B", "A"],
    ["A", "A", "A", "G", "H", "A", "B", "A"],
    ["F", "F", "A", "G", "H", "A", "B", "A"],
    ["F", "F", "A", "G", "G", "A", "A", "A"],
    ["F", "F", "A", "A", "A", "A", "C", "A"],
    ["F", "F", "E", "E", "A", "C", "C", "A"],
    ["F", "F", "A", "A", "A", "C", "C", "A"],
    ["F", "F", "A", "D", "D", "C", "C", "A"],
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
  solutionsCount: 0,
  createdBy: "Abdulaziz",
  creatorLink: "",
};

export default level;
