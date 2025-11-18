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
  path: "/community-level/346",
  size: 8,
  colorRegions: [
    ["G", "G", "C", "C", "C", "C", "C", "C"],
    ["G", "C", "C", "E", "C", "F", "A", "F"],
    ["C", "C", "E", "E", "E", "A", "F", "A"],
    ["C", "C", "C", "C", "C", "F", "A", "F"],
    ["D", "D", "D", "C", "C", "C", "B", "C"],
    ["D", "H", "D", "D", "D", "C", "B", "C"],
    ["D", "H", "H", "H", "D", "D", "D", "C"],
    ["H", "H", "H", "H", "H", "H", "D", "D"],
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
