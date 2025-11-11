import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/329",
  size: 6,
  colorRegions: [
    ["D", "D", "D", "D", "D", "D"],
    ["B", "B", "B", "B", "B", "B"],
    ["B", "B", "C", "C", "A", "A"],
    ["B", "B", "A", "A", "A", "E"],
    ["B", "F", "F", "E", "E", "E"],
    ["F", "F", "F", "F", "F", "E"],
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
  createdBy: "eleanor",
  creatorLink: "https://github.com/emaureen",
};

export default level;
