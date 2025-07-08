import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/118",
  size: 6,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B"],
    ["A", "C", "E", "D", "D", "B"],
    ["A", "C", "E", "E", "D", "B"],
    ["A", "C", "F", "F", "D", "B"],
    ["A", "C", "C", "F", "D", "B"],
    ["A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 2,
  createdBy: "EyadTak",
  creatorLink: "https://github.com/eyad81",
};

export default level;
