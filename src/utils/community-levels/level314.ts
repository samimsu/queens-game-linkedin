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
  path: "/community-level/314",
  size: 8,
  colorRegions: [
    ["G", "G", "G", "A", "C", "C", "C", "C"],
    ["G", "G", "G", "A", "C", "C", "D", "C"],
    ["G", "F", "F", "A", "C", "C", "D", "C"],
    ["G", "G", "G", "A", "A", "E", "C", "C"],
    ["H", "H", "H", "H", "A", "E", "E", "E"],
    ["H", "H", "B", "B", "A", "E", "E", "E"],
    ["H", "H", "H", "H", "E", "E", "E", "E"],
    ["H", "H", "H", "H", "E", "E", "E", "E"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
