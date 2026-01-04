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
  path: "/community-level/415",
  size: 8,
  colorRegions: [
    ["D", "D", "H", "H", "H", "H", "H", "H"],
    ["D", "A", "A", "A", "A", "H", "H", "H"],
    ["E", "A", "A", "B", "A", "A", "H", "H"],
    ["E", "A", "A", "B", "B", "A", "A", "H"],
    ["E", "A", "A", "C", "C", "A", "A", "H"],
    ["F", "A", "A", "C", "A", "A", "H", "H"],
    ["F", "A", "A", "A", "A", "G", "G", "H"],
    ["F", "F", "F", "G", "G", "G", "G", "G"],
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
  createdBy: "PaletaRocks",
  creatorLink: "",
};

export default level;
