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
  path: "/community-level/433",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "D", "D", "D", "D"],
    ["E", "F", "F", "F", "F", "D", "D"],
    ["F", "F", "F", "F", "D", "D", "D"],
    ["F", "F", "F", "F", "F", "D", "G"],
    ["F", "F", "C", "F", "F", "B", "G"],
    ["A", "A", "A", "F", "F", "B", "G"],
    ["A", "A", "A", "A", "A", "B", "G"],
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
  solutionsCount: 1,
  createdBy: "Radagast",
  creatorLink: "https://github.com/EmanueleLanzani",
};

export default level;
