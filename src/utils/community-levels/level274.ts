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
  path: "/community-level/274",
  size: 8,
  colorRegions: [
    ["F", "G", "H", "C", "C", "C", "B", "B"],
    ["F", "G", "H", "D", "D", "C", "B", "B"],
    ["F", "G", "H", "E", "C", "C", "A", "B"],
    ["F", "G", "G", "E", "C", "C", "A", "B"],
    ["F", "G", "G", "E", "C", "C", "A", "B"],
    ["F", "G", "E", "E", "C", "C", "A", "B"],
    ["E", "E", "E", "A", "A", "C", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "Linda",
  creatorLink: "",
};

export default level;
