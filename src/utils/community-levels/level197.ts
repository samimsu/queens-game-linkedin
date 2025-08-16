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
  path: "/community-level/197",
  size: 8,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "A", "G", "G", "B", "E", "E"],
    ["F", "A", "A", "A", "B", "B", "B", "E"],
    ["F", "F", "H", "H", "H", "H", "G", "E"],
    ["F", "F", "H", "H", "H", "H", "G", "E"],
    ["F", "C", "C", "C", "D", "D", "D", "E"],
    ["E", "E", "C", "G", "G", "D", "E", "E"],
    ["E", "E", "E", "G", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: saharaSand,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: chardonnay,
    H: nomad,
  },
  solutionsCount: 1,
  createdBy: "AleG91",
  creatorLink: "",
};

export default level;
