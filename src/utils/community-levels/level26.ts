import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/26",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "A", "A", "C"],
    ["A", "A", "A", "A", "A", "A", "C"],
    ["A", "A", "D", "D", "D", "D", "D"],
    ["A", "A", "G", "D", "D", "E", "D"],
    ["A", "F", "G", "G", "D", "E", "D"],
    ["A", "F", "F", "F", "F", "E", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  createdBy: "Brenda LL",
  creatorLink: "https://github.com/ampyroteuthis-infernalis",
};

export default level;
