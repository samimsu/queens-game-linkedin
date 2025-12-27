import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  lavenderRose,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/405",
  size: 7,
  colorRegions: [
    ["A", "G", "G", "G", "G", "G", "G"],
    ["A", "A", "G", "G", "G", "G", "G"],
    ["A", "A", "C", "C", "C", "G", "G"],
    ["B", "B", "B", "F", "D", "D", "D"],
    ["G", "G", "F", "F", "D", "E", "E"],
    ["G", "G", "G", "F", "D", "E", "E"],
    ["G", "G", "G", "G", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lavenderRose,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "Pav",
  creatorLink: "https://github.com/mrdavidrees",
};

export default level;
