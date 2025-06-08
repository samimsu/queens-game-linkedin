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
  path: "/community-level/37",
  size: 8,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B", "B"],
    ["D", "E", "E", "E", "C", "C", "C", "B"],
    ["D", "E", "E", "E", "A", "A", "C", "B"],
    ["D", "E", "E", "E", "A", "H", "C", "B"],
    ["F", "E", "F", "H", "H", "H", "H", "B"],
    ["F", "F", "F", "F", "H", "H", "H", "B"],
    ["G", "G", "G", "G", "G", "G", "H", "B"],
    ["G", "G", "G", "G", "G", "G", "H", "B"],
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
  createdBy: "kopri",
};

export default level;
