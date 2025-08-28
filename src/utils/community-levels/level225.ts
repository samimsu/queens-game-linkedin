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
  path: "/community-level/225",
  size: 8,
  colorRegions: [
    ["A", "A", "A", "E", "E", "E", "E", "B"],
    ["A", "E", "E", "E", "H", "H", "E", "B"],
    ["E", "E", "E", "E", "H", "H", "E", "B"],
    ["H", "H", "H", "H", "H", "H", "E", "F"],
    ["C", "C", "H", "H", "H", "H", "F", "F"],
    ["D", "C", "H", "H", "H", "H", "F", "F"],
    ["D", "C", "G", "G", "H", "G", "G", "F"],
    ["D", "C", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "Alexallos",
  creatorLink: "",
};

export default level;
