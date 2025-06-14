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
  path: "/community-level/51",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "D", "D", "D"],
    ["A", "A", "E", "E", "E", "D", "D"],
    ["A", "A", "A", "D", "D", "D", "D"],
    ["A", "B", "A", "D", "D", "D", "D"],
    ["A", "B", "A", "F", "D", "D", "G"],
    ["C", "C", "C", "F", "D", "D", "G"],
    ["C", "C", "C", "F", "F", "D", "G"],
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
  createdBy: "Quickpoison",
  creatorLink: "https://github.com/Quickpoisons",
};

export default level;
