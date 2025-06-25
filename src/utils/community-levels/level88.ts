import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/88",
  size: 6,
  colorRegions: [
    ["B", "B", "E", "E", "F", "F"],
    ["B", "A", "A", "A", "F", "A"],
    ["B", "A", "D", "A", "F", "A"],
    ["B", "A", "D", "A", "F", "A"],
    ["C", "A", "D", "A", "A", "A"],
    ["C", "C", "D", "D", "F", "F"],
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
  createdBy: "Nadia DN",
  creatorLink: "",
};

export default level;
