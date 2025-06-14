import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/52",
  size: 6,
  colorRegions: [
    ["C", "F", "F", "B", "A", "A"],
    ["C", "C", "F", "B", "A", "F"],
    ["D", "C", "F", "F", "F", "F"],
    ["D", "C", "F", "F", "F", "F"],
    ["D", "D", "F", "F", "F", "F"],
    ["D", "D", "E", "E", "F", "F"],
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
  createdBy: "egill8000",
  creatorLink: "https://github.com/egill8000",
};

export default level;
