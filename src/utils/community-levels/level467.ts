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
  path: "/community-level/467",
  size: 8,
  colorRegions: [
    ["G", "G", "F", "F", "F", "F", "G", "H"],
    ["G", "D", "D", "D", "D", "D", "F", "H"],
    ["F", "D", "B", "C", "C", "B", "D", "H"],
    ["E", "D", "C", "A", "B", "C", "D", "H"],
    ["E", "D", "C", "B", "A", "C", "D", "H"],
    ["G", "D", "F", "C", "C", "B", "D", "H"],
    ["H", "F", "D", "D", "D", "D", "D", "H"],
    ["H", "H", "H", "H", "H", "H", "H", "H"],
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
  createdBy: "joabs",
  creatorLink: "https://www.instagram.com/pedro.joab_",
};

export default level;
