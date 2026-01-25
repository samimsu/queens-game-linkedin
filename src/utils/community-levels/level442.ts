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
  path: "/community-level/442",
  size: 8,
  colorRegions: [
    ["C", "C", "E", "E", "E", "G", "F", "F"],
    ["C", "C", "E", "E", "E", "F", "G", "E"],
    ["A", "C", "C", "E", "G", "G", "F", "F"],
    ["C", "C", "E", "E", "E", "E", "E", "E"],
    ["C", "C", "D", "E", "E", "E", "E", "E"],
    ["A", "C", "D", "D", "D", "E", "F", "H"],
    ["A", "A", "C", "H", "H", "H", "H", "H"],
    ["B", "B", "H", "H", "H", "H", "B", "H"],
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
  createdBy: "Zonk",
  creatorLink: "",
};

export default level;
