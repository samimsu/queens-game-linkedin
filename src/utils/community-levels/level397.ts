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
  path: "/community-level/397",
  size: 8,
  colorRegions: [
    ["G", "H", "H", "H", "H", "H", "H", "H"],
    ["G", "G", "G", "G", "G", "H", "H", "H"],
    ["E", "E", "E", "E", "G", "H", "H", "H"],
    ["C", "C", "A", "E", "E", "E", "E", "E"],
    ["C", "A", "A", "A", "E", "E", "E", "E"],
    ["A", "A", "B", "A", "A", "A", "A", "D"],
    ["F", "B", "B", "B", "B", "B", "B", "D"],
    ["F", "F", "F", "D", "D", "D", "D", "D"],
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
  createdBy: "Alin Roman",
  creatorLink: "https://github.com/aromanio",
};

export default level;
