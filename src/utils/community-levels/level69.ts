import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/",
  size: 6,
  colorRegions: [
    ["D", "D", "D", "D", "D", "D"],
    ["A", "A", "A", "B", "D", "B"],
    ["A", "C", "C", "B", "D", "B"],
    ["A", "A", "A", "B", "B", "B"],
    ["E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "leurosa",
  creatorLink: "https://github.com/leurosa",
};

export default level;
