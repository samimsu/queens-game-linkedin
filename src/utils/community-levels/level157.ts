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
  path: "/community-level/157",
  size: 8,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E", "E"],
    ["H", "A", "G", "G", "G", "B", "B", "E"],
    ["H", "A", "A", "G", "G", "G", "B", "E"],
    ["H", "H", "G", "G", "E", "E", "E", "E"],
    ["H", "H", "G", "E", "E", "E", "E", "E"],
    ["H", "C", "G", "G", "G", "D", "E", "E"],
    ["F", "C", "C", "G", "G", "D", "D", "E"],
    ["F", "F", "F", "F", "F", "F", "F", "E"],
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
  createdBy: "LaGlotte",
  creatorLink: "",
};

export default level;
