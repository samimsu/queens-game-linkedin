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
  path: "/community-level/56",
  size: 8,
  colorRegions: [
    ["A", "A", "H", "G", "G", "G", "G", "G"],
    ["A", "A", "H", "H", "H", "G", "F", "F"],
    ["B", "A", "A", "A", "A", "A", "A", "F"],
    ["B", "B", "B", "B", "D", "D", "A", "F"],
    ["C", "B", "A", "A", "A", "D", "A", "F"],
    ["C", "B", "A", "E", "A", "D", "A", "F"],
    ["B", "B", "A", "E", "A", "A", "A", "F"],
    ["A", "A", "A", "E", "E", "E", "E", "F"],
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
  solutionsCount: 18,
  createdBy: "RMHII",
  creatorLink: "",
};

export default level;
