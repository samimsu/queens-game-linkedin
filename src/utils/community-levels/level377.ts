import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/377",
  size: 6,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C"],
    ["A", "A", "B", "B", "C", "C"],
    ["D", "D", "D", "B", "B", "C"],
    ["F", "F", "F", "F", "F", "C"],
    ["F", "F", "E", "F", "F", "F"],
    ["F", "F", "E", "E", "E", "F"],
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
  createdBy: "WRSTKPP",
  creatorLink: "",
};

export default level;
