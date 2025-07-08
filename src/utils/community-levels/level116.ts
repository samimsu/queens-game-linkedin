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
  path: "/community-level/116",
  size: 8,
  colorRegions: [
    ["H", "G", "G", "G", "G", "A", "A", "A"],
    ["H", "H", "H", "H", "G", "A", "G", "A"],
    ["H", "H", "H", "B", "G", "G", "G", "A"],
    ["H", "H", "H", "B", "E", "G", "G", "A"],
    ["D", "D", "B", "B", "E", "F", "F", "A"],
    ["D", "D", "B", "C", "E", "F", "A", "A"],
    ["D", "D", "A", "C", "E", "F", "A", "A"],
    ["D", "A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "bartleby",
  creatorLink: "",
};

export default level;
