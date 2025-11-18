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
  path: "/community-level/353",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "G", "G", "C", "C"],
    ["G", "F", "G", "G", "C", "C", "C"],
    ["F", "F", "G", "F", "C", "D", "C"],
    ["F", "F", "F", "F", "F", "D", "D"],
    ["F", "A", "A", "A", "A", "D", "D"],
    ["A", "A", "A", "B", "B", "B", "D"],
    ["A", "B", "B", "B", "E", "E", "D"],
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
  createdBy: "Snipe",
  creatorLink: "https://github.com/pdidevich",
};

export default level;
