import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/312",
  size: 6,
  colorRegions: [
    ["F", "F", "F", "A", "A", "A"],
    ["F", "F", "F", "B", "B", "A"],
    ["F", "F", "F", "F", "C", "A"],
    ["F", "F", "C", "C", "C", "C"],
    ["E", "E", "E", "E", "C", "C"],
    ["E", "E", "E", "D", "D", "D"],
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
  createdBy: "Wampri",
  creatorLink: "",
};

export default level;
