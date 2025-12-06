import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/363",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A"],
    ["A", "F", "F", "F", "F", "F"],
    ["A", "B", "B", "B", "B", "B"],
    ["A", "B", "E", "E", "E", "E"],
    ["A", "B", "C", "C", "C", "C"],
    ["A", "B", "C", "D", "D", "C"],
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
  createdBy: "Sunny Panda",
  creatorLink: "",
};

export default level;
