import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/139",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "D", "F", "F"],
    ["B", "A", "A", "D", "F", "F"],
    ["B", "B", "A", "D", "D", "F"],
    ["E", "B", "B", "B", "D", "F"],
    ["E", "E", "E", "E", "D", "E"],
    ["C", "C", "C", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: -1,
  createdBy: "MScarcia88",
  creatorLink: "https://github.com/x",
};

export default level;
