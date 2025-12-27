import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/402",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A"],
    ["A", "A", "F", "F", "F", "A"],
    ["A", "A", "C", "A", "A", "A"],
    ["A", "A", "C", "A", "A", "E"],
    ["A", "B", "B", "D", "D", "E"],
    ["A", "B", "B", "E", "E", "E"],
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
  createdBy: "kai411",
  creatorLink: "",
};

export default level;
